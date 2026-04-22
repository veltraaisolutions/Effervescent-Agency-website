import { z } from "zod";

export interface FileData {
  name: string;
  base64: string;
  size: number;
  type: string;
}

export interface FormState {
  fullName: string;
  dob: string;
  gender: string;
  email: string;
  phone: string;
  instagram: string;
  primaryCity: string;
  secondCity: string;
  manualCity: string;
  isStudent: string;
  homeCity: string;
  doesDrive: string;
  photos: FileData[];
  passportId: FileData | null;
  nonUkPassport: boolean;
  shareCode: string;
  priorExp: string;
  prevCompany: string;
  yearsExp: string;
  understandRole: string;
  whyFit: string;
  salesExp: string;
  startDate: string;
  selfEmployed: boolean;
  weekendWork: boolean;
  heardAbout: string;
}

// ─── Validation Helpers ────────────────────────────────────────────────────────

const isAtLeast18 = (dobString: string) => {
  const dob = new Date(dobString);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  return age >= 18;
};

const isValidPhone = (val: string) => {
  const digits = val.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
};

// ─── Slide Schemas ─────────────────────────────────────────────────────────────

export const personalSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  dob: z
    .string()
    .min(1, "Date of birth is required")
    .refine(isAtLeast18, "You must be at least 18 years old"),
  gender: z.string().min(1, "Please select an option"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine(isValidPhone, "Please enter a valid phone number"),
  instagram: z.string().min(1, "Instagram username is required"),
});

export const locationSchema = z.object({
  primaryCity: z.string().min(1, "Primary location is required"),
  isStudent: z.string().min(1, "Please select an option"),
  homeCity: z.string().optional(),
  doesDrive: z.string().min(1, "Please select an option"),
}).refine(
  (data) => (data.isStudent === "yes" ? !!data.homeCity : true),
  { message: "Home city is required for students", path: ["homeCity"] }
);

export const photoSchema = z.object({
  photos: z
    .array(z.any())
    .min(2, "Please upload at least 2 photos of yourself")
    .max(5, "Maximum 5 photos allowed"),
  passportId: z.any().refine((val) => !!val, "Photo ID is required"),
  nonUkPassport: z.boolean(),
  shareCode: z.string().optional(),
}).refine(
  (data) => (data.nonUkPassport ? (data.shareCode?.length ?? 0) > 0 : true),
  { message: "Share code is required for non-UK passports", path: ["shareCode"] }
);

export const experienceSchema = z.object({
  priorExp: z.string().min(1, "Please select an option"),
  prevCompany: z.string().optional(),
  yearsExp: z.string().optional(),
  understandRole: z.string().min(10, "Please provide more detail (min 10 chars)"),
  whyFit: z.string().min(10, "Please provide more detail (min 10 chars)"),
  salesExp: z.string().min(10, "Please provide more detail (min 10 chars)"),
  startDate: z.string().min(1, "Start date is required"),
}).refine(
  (data) => (data.priorExp === "yes" ? !!data.prevCompany : true),
  { message: "Please specify your previous company", path: ["prevCompany"] }
).refine(
  (data) => (data.priorExp === "yes" ? !!data.yearsExp : true),
  { message: "Please specify years of experience", path: ["yearsExp"] }
);

export const declarationSchema = z.object({
  selfEmployed: z.literal(true, {
    errorMap: () => ({ message: "You must acknowledge this is self-employed work" }),
  }),
  weekendWork: z.literal(true, {
    errorMap: () => ({ message: "You must acknowledge weekend/night work" }),
  }),
  heardAbout: z.string().min(1, "Please select an option"),
});

export const SCHEMAS: Record<number, z.ZodSchema> = {
  1: personalSchema,
  2: locationSchema,
  3: photoSchema,
  4: experienceSchema,
  5: declarationSchema,
};
