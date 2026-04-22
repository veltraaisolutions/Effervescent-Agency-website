import { z } from "zod";
import { isAtLeast18, isValidPhone } from "../utils/apply";

const FileDataSchema = z.object({
  name: z.string(),
  base64: z.string(),
  size: z.number(),
  type: z.string(),
});

export const personalSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  dob: z.string().refine((val) => isAtLeast18(val), "You must be at least 18 years old to apply"),
  gender: z.string().min(1, "Please select your gender identity"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().refine((val) => isValidPhone(val), "Enter a valid number with country code and no spaces — e.g. +447700000000"),
  instagram: z.string().min(1, "Instagram username is required"),
});

export const locationSchema = z.object({
  primaryCity: z.string().min(1, "Please select your primary location"),
  isStudent: z.string().min(1, "Please select Yes or No"),
  homeCity: z.string().optional(),
  doesDrive: z.string().min(1, "Please select Yes or No"),
}).refine((data) => {
  if (data.isStudent === "yes" && !data.homeCity?.trim()) return false;
  return true;
}, { message: "Home city is required", path: ["homeCity"] });

export const photosSchema = z.object({
  photos: z.array(FileDataSchema).min(2, "Please upload at least 2 photos of yourself"),
  passportId: z.any().refine((val) => val !== null, "Please upload your passport as photo ID"),
  nonUkPassport: z.boolean(),
  shareCode: z.string().optional(),
}).refine((data) => {
  if (data.nonUkPassport && !data.shareCode?.trim()) return false;
  return true;
}, { message: "Share code is required for non-UK passport holders", path: ["shareCode"] });

export const experienceSchema = z.object({
  priorExp: z.string().min(1, "Please select Yes or No"),
  prevCompany: z.string().optional(),
  yearsExp: z.string().optional(),
  understandRole: z.string().min(1, "This field is required"),
  whyFit: z.string().min(1, "This field is required"),
  salesExp: z.string().min(1, "This field is required"),
  startDate: z.string().min(1, "Please select an available start date"),
}).refine((data) => {
  if (data.priorExp === "yes" && !data.prevCompany?.trim()) return false;
  return true;
}, { message: "Previous company / venue is required", path: ["prevCompany"] })
.refine((data) => {
  if (data.priorExp === "yes" && !data.yearsExp?.trim()) return false;
  return true;
}, { message: "Years of experience is required", path: ["yearsExp"] });

export const declarationSchema = z.object({
  selfEmployed: z.literal(true, { errorMap: () => ({ message: "You must acknowledge this to proceed" }) }),
  weekendWork: z.literal(true, { errorMap: () => ({ message: "You must acknowledge this to proceed" }) }),
  heardAbout: z.string().min(1, "Please tell us how you heard about us"),
});

export const APPLY_SCHEMAS: Record<number, z.ZodSchema> = {
  1: personalSchema,
  2: locationSchema,
  3: photosSchema,
  4: experienceSchema,
  5: declarationSchema,
};
