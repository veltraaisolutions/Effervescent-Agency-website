"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Upload, X } from "lucide-react";
import { SuccessScreen } from "./apply/SuccessScreen";
import {
  FieldLabel,
  FieldError,
  TextInput,
  TextareaInput,
  SelectInput,
  YesNoToggle,
  RadioGroup,
  StyledCheckbox,
} from "./apply/FormPrimitives";
import {
  UK_CITIES,
  HEARD_ABOUT_OPTIONS,
  GENDER_OPTIONS,
  WEBHOOK_URL,
  MAX_FILE_SIZE,
  ALLOWED_PHOTO_TYPES,
  ALLOWED_ID_TYPES,
  SLIDE_LABELS,
  SLIDE_TITLES,
  normalizePhone,
  toBase64,
} from "@/lib/apply-utils";
import { FormState, SCHEMAS } from "@/types/apply";
import { supabase } from "@/lib/supabase";

const INITIAL: FormState = {
  fullName: "",
  dob: "",
  gender: "",
  email: "",
  phone: "",
  instagram: "",
  primaryCity: "",
  secondCity: "",
  manualCity: "",
  isStudent: "",
  homeCity: "",
  doesDrive: "",
  photos: [],
  passportId: null,
  nonUkPassport: false,
  shareCode: "",
  priorExp: "",
  prevCompany: "",
  yearsExp: "",
  understandRole: "",
  whyFit: "",
  salesExp: "",
  startDate: "",
  selfEmployed: false,
  weekendWork: false,
  heardAbout: "",
};

export default function ApplyForm() {
  const [slide, setSlide] = useState(1);
  const [visible, setVisible] = useState(true);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [photoUploadError, setPhotoUploadError] = useState("");
  const [idUploadError, setIdUploadError] = useState("");

  const photosRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);

  const upd = (patch: Partial<FormState>) =>
    setForm((f) => ({ ...f, ...patch }));

  function goToSlide(next: number) {
    setVisible(false);
    setTimeout(() => {
      setSlide(next);
      setErrors({});
      setVisible(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 180);
  }

  function validateCurrentSlide(): Record<string, string> {
    const schema = SCHEMAS[slide];
    if (!schema) return {};

    const result = schema.safeParse(form);
    if (result.success) return {};

    const e: Record<string, string> = {};
    result.error.issues.forEach((err) => {
      const path = err.path[0] as string;
      if (!e[path]) e[path] = err.message;
    });
    return e;
  }

  function handleNext() {
    const e = validateCurrentSlide();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    if (slide < 5) goToSlide(slide + 1);
    else handleSubmit();
  }

  async function handlePhotoUpload(files: FileList | null) {
    if (!files) return;
    setPhotoUploadError("");
    const current = [...form.photos];
    for (const file of Array.from(files)) {
      if (current.length >= 5) {
        setPhotoUploadError("Maximum 5 photos allowed");
        break;
      }
      if (!ALLOWED_PHOTO_TYPES.includes(file.type)) {
        setPhotoUploadError(`"${file.name}" is not allowed.`);
        continue;
      }
      if (file.size > MAX_FILE_SIZE) {
        setPhotoUploadError(`"${file.name}" exceeds 10MB.`);
        continue;
      }
      current.push({
        name: file.name,
        base64: await toBase64(file),
        size: file.size,
        type: file.type,
      });
    }
    upd({ photos: current });
    if (photosRef.current) photosRef.current.value = "";
  }

  async function handleIdUpload(files: FileList | null) {
    if (!files || files.length === 0) return;
    setIdUploadError("");
    const file = files[0];
    if (!ALLOWED_ID_TYPES.includes(file.type)) {
      setIdUploadError("Only JPG or PNG accepted for photo ID.");
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setIdUploadError("File must be under 10MB.");
      return;
    }
    upd({
      passportId: {
        name: file.name,
        base64: await toBase64(file),
        size: file.size,
        type: file.type,
      },
    });
    if (idRef.current) idRef.current.value = "";
  }

  async function handleSubmit() {
    setSubmitting(true);
    setSubmitError("");

    try {
      const payload = {
        personalInfo: {
          fullName: form.fullName,
          dateOfBirth: form.dob,
          gender: form.gender,
          email: form.email,
          phone: form.phone,
          instagram: form.instagram,
        },
        location: {
          primaryLocation: form.primaryCity,
          secondLocation: form.secondCity,
          manualLocation: form.manualCity,
          isStudent: form.isStudent,
          homeCity: form.homeCity,
          doesDrive: form.doesDrive,
        },
        photos: {
          selfPhotos: form.photos.map((p) => ({
            name: p.name,
            base64: p.base64,
            type: p.type,
          })),
          passportId: form.passportId
            ? {
              name: form.passportId.name,
              base64: form.passportId.base64,
              type: form.passportId.type,
            }
            : null,
          hasNonUkPassport: form.nonUkPassport,
          shareCode: form.shareCode,
        },
        experience: {
          hasPriorExperience: form.priorExp,
          previousCompany: form.prevCompany,
          yearsOfExperience: form.yearsExp,
          understandRole: form.understandRole,
          whyGoodFit: form.whyFit,
          salesExperience: form.salesExp,
          availableFrom: form.startDate,
        },
        declarations: {
          selfEmployed: form.selfEmployed,
          weekendWork: form.weekendWork,
          heardAbout: form.heardAbout,
        },
      };

      // Insert into Supabase (milli_candidates table for sync with dashboard)
      const { error: supabaseError } = await supabase
        .from("milli_candidates")
        .insert([
          {
            full_name: form.fullName,
            email: form.email,
            phone: form.phone,
            instagram: form.instagram,
            dob: form.dob,
            gender: form.gender,
            primary_location: form.primaryCity,
            second_location: form.secondCity,
            manual_location: form.manualCity,
            is_student: form.isStudent === "yes",
            home_city: form.homeCity,
            does_drive: form.doesDrive === "yes",
            has_prior_experience: form.priorExp === "yes",
            previous_company: form.prevCompany,
            years_experience: Number(form.yearsExp) || 0,
            understand_role: form.understandRole,
            why_good_fit: form.whyFit,
            sales_experience: form.salesExp,
            available_from: form.startDate,
            self_employed: form.selfEmployed,
            weekend_work: form.weekendWork,
            heard_about: form.heardAbout,
            has_non_uk_passport: form.nonUkPassport,
            share_code: form.shareCode,
            status: "pending",
          },
        ]);

      if (supabaseError) throw new Error("Database save failed");

      // Send to n8n Webhook
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
    } catch (err: any) {
      setSubmitError(err.message || "Submission failed");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) return <SuccessScreen />;

  return (
    <div className={`bg-white py-8 md:py-16 relative overflow-hidden rounded-[2rem] md:rounded-[3rem] w-full shadow-2xl border border-slate-100 transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"}`}>
      <div className="absolute top-0 right-0 w-80 h-80 opacity-[0.03] -mr-20 -mt-20 rotate-12 pointer-events-none">
        <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
      </div>

      <div className="px-4 md:px-10 relative z-10">
        <div className="mb-12 md:mb-16">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-5 md:top-6 left-0 right-0 h-px bg-slate-100 -z-0"></div>
            {Array.from({ length: 5 }, (_, i) => i + 1).map((s) => (
              <div key={s} className="flex flex-col items-center gap-2 md:gap-3 relative z-10 flex-1">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm md:text-lg font-bold transition-all ${s === slide ? "bg-[#FDb8D7] text-white shadow-lg" : "bg-slate-50 text-slate-300 border border-slate-100"}`}>
                  {s}
                </div>
                <span className={`hidden sm:block text-[10px] font-black uppercase tracking-widest text-center ${s === slide ? "text-slate-900" : "text-slate-400"}`}>
                  {SLIDE_LABELS[s - 1]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs md:text-sm font-black uppercase tracking-[0.4em] mb-4 text-primary">Step {slide} of 5</p>
        <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-10 md:mb-16 text-balance leading-[1.1]">{SLIDE_TITLES[slide - 1]}</h2>

        <motion.div
          key={slide}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-8 md:space-y-10"
        >
          {slide === 1 && (
            <>
              <div>
                <FieldLabel required>Full Name</FieldLabel>
                <TextInput value={form.fullName} onChange={(v: string) => upd({ fullName: v })} placeholder="Jane Smith" />
                <FieldError message={errors.fullName} />
              </div>
              <div>
                <FieldLabel required>Date of Birth</FieldLabel>
                <TextInput type="date" value={form.dob} onChange={(v: string) => upd({ dob: v })} />
                <FieldError message={errors.dob} />
              </div>
              <div>
                <FieldLabel required>What do you identify as?</FieldLabel>
                <RadioGroup options={GENDER_OPTIONS} value={form.gender} onChange={(v: string) => upd({ gender: v })} />
                <FieldError message={errors.gender} />
              </div>
              <div>
                <FieldLabel required>Email Address</FieldLabel>
                <TextInput type="email" value={form.email} onChange={(v: string) => upd({ email: v })} />
                <FieldError message={errors.email} />
              </div>
              <div>
                <FieldLabel required>Mobile Phone / WhatsApp</FieldLabel>
                <TextInput value={form.phone} onChange={(v: string) => upd({ phone: v })} onBlur={() => upd({ phone: normalizePhone(form.phone) })} />
                <FieldError message={errors.phone} />
              </div>
              <div>
                <FieldLabel required>Instagram Username</FieldLabel>
                <TextInput value={form.instagram} onChange={(v: string) => upd({ instagram: v })} />
                <FieldError message={errors.instagram} />
              </div>
            </>
          )}

          {slide === 2 && (
            <>
              <div>
                <FieldLabel required>Primary Location</FieldLabel>
                <SelectInput value={form.primaryCity} onChange={(v: string) => upd({ primaryCity: v })} options={UK_CITIES} />
                <FieldError message={errors.primaryCity} />
              </div>
              <div>
                <FieldLabel required>Are you a student?</FieldLabel>
                <YesNoToggle value={form.isStudent} onChange={(v: string) => upd({ isStudent: v })} />
                <FieldError message={errors.isStudent} />
                {form.isStudent === "yes" && (
                  <div className="mt-6">
                    <FieldLabel required>Home City</FieldLabel>
                    <TextInput value={form.homeCity} onChange={(v: string) => upd({ homeCity: v })} />
                    <FieldError message={errors.homeCity} />
                  </div>
                )}
              </div>
              <div>
                <FieldLabel required>Do you drive?</FieldLabel>
                <YesNoToggle value={form.doesDrive} onChange={(v: string) => upd({ doesDrive: v })} />
                <FieldError message={errors.doesDrive} />
              </div>
            </>
          )}

          {slide === 3 && (
            <>
              <div>
                <FieldLabel required>Photos of Yourself (Min 2)</FieldLabel>
                <div onClick={() => photosRef.current?.click()} className="border-2 border-dashed border-slate-200 rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 text-center bg-slate-50 cursor-pointer hover:border-[#FDb8D7]/50 transition-all">
                  <Upload className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-[#FDb8D7]" />
                  <p className="font-bold text-slate-900 text-sm md:text-base">Click to add photos ({form.photos.length}/5)</p>
                </div>
                {photoUploadError && <FieldError message={photoUploadError} />}
                <input ref={photosRef} type="file" multiple hidden accept="image/*" onChange={(e) => handlePhotoUpload(e.target.files)} />
                <FieldError message={errors.photos} />
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                  {form.photos.map((p, i) => (
                    <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-sm border border-slate-100">
                      <img src={p.base64} alt="" className="w-full h-full object-cover" />
                      <button onClick={() => upd({ photos: form.photos.filter((_, idx) => idx !== i) })} className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 shadow-md active:scale-90 transition-transform"><X size={12} /></button>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <FieldLabel required>Upload Photo ID (Passport)</FieldLabel>
                {!form.passportId ? (
                  <div onClick={() => idRef.current?.click()} className="border-2 border-dashed border-slate-200 rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 text-center bg-slate-50 cursor-pointer hover:border-[#FDb8D7]/50 transition-all">
                    <Upload className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-[#FDb8D7]" />
                    <p className="font-bold text-slate-900 text-sm md:text-base">Upload Passport</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <img src={form.passportId.base64} className="w-12 h-12 object-cover rounded-lg" />
                    <span className="flex-1 text-sm font-bold truncate">{form.passportId.name}</span>
                    <button onClick={() => upd({ passportId: null })} className="p-1 hover:bg-slate-200 rounded-full transition-colors"><X size={16} /></button>
                  </div>
                )}
                <input ref={idRef} type="file" hidden accept="image/*" onChange={(e) => handleIdUpload(e.target.files)} />
                <FieldError message={errors.passportId} />
              </div>
              <StyledCheckbox id="nonuk" checked={form.nonUkPassport} onCheckedChange={(v: boolean) => upd({ nonUkPassport: v })} label="I have a non-UK passport" />
              {form.nonUkPassport && (
                <div>
                  <FieldLabel required>Share Code</FieldLabel>
                  <TextInput value={form.shareCode} onChange={(v: string) => upd({ shareCode: v })} placeholder="e.g. W12 3AB 4CD" />
                  <FieldError message={errors.shareCode} />
                </div>
              )}
            </>
          )}

          {slide === 4 && (
            <>
              <div>
                <FieldLabel required>Have you been a shot-seller before?</FieldLabel>
                <YesNoToggle value={form.priorExp} onChange={(v: string) => upd({ priorExp: v })} />
                <FieldError message={errors.priorExp} />
                {form.priorExp === "yes" && (
                  <div className="mt-6 space-y-6">
                    <div>
                      <FieldLabel required>Previous Company</FieldLabel>
                      <TextInput value={form.prevCompany} onChange={(v: string) => upd({ prevCompany: v })} />
                      <FieldError message={errors.prevCompany} />
                    </div>
                    <div>
                      <FieldLabel required>Years of Experience</FieldLabel>
                      <TextInput type="number" value={form.yearsExp} onChange={(v: string) => upd({ yearsExp: v })} />
                      <FieldError message={errors.yearsExp} />
                    </div>
                  </div>
                )}
              </div>
              <div>
                <FieldLabel required>Understanding of the role?</FieldLabel>
                <TextareaInput value={form.understandRole} onChange={(v: string) => upd({ understandRole: v })} />
                <FieldError message={errors.understandRole} />
              </div>
              <div>
                <FieldLabel required>Why a good fit?</FieldLabel>
                <TextareaInput value={form.whyFit} onChange={(v: string) => upd({ whyFit: v })} />
                <FieldError message={errors.whyFit} />
              </div>
              <div>
                <FieldLabel required>Sales Experience?</FieldLabel>
                <TextareaInput value={form.salesExp} onChange={(v: string) => upd({ salesExp: v })} />
                <FieldError message={errors.salesExp} />
              </div>
              <div>
                <FieldLabel required>Start Date</FieldLabel>
                <TextInput type="date" value={form.startDate} onChange={(v: string) => upd({ startDate: v })} />
                <FieldError message={errors.startDate} />
              </div>
            </>
          )}

          {slide === 5 && (
            <>
              <div className="bg-slate-50 rounded-3xl p-8 space-y-6 border border-slate-100">
                <StyledCheckbox id="self" checked={form.selfEmployed} onCheckedChange={(v: boolean) => upd({ selfEmployed: v })} label="This is self-employed work" />
                <FieldError message={errors.selfEmployed} />
                <StyledCheckbox id="weekend" checked={form.weekendWork} onCheckedChange={(v: boolean) => upd({ weekendWork: v })} label="Predominantly weekend/night work" />
                <FieldError message={errors.weekendWork} />
              </div>
              <div>
                <FieldLabel required>How did you hear about us?</FieldLabel>
                <SelectInput value={form.heardAbout} onChange={(v: string) => upd({ heardAbout: v })} options={HEARD_ABOUT_OPTIONS} />
                <FieldError message={errors.heardAbout} />
              </div>
            </>
          )}
        </motion.div>

        <div className="mt-12 md:mt-16 flex flex-col gap-6">
          {submitError && <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-sm border border-red-100">{submitError}</div>}
          <div className="flex justify-between items-center">
            <button onClick={() => slide > 1 && goToSlide(slide - 1)} disabled={slide === 1 || submitting} className="text-slate-400 font-black uppercase tracking-widest text-xs md:text-sm hover:text-slate-900 transition-colors disabled:opacity-0">Back</button>
            <button onClick={handleNext} disabled={submitting} className="bg-primary text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50">
              {submitting ? "SENDING…" : slide === 5 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
        <p className="text-center text-[10px] text-slate-400 font-black uppercase tracking-[0.5em] mt-12 pb-8">Effervescent Agency • Global Operations</p>
      </div>
    </div>
  );
}
