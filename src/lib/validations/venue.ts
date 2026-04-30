import { z } from "zod";

const requiredText = (label: string, max: number) =>
  z
    .string()
    .trim()
    .min(1, `${label} is required`)
    .max(max, `${label} must be ${max} characters or fewer`);

export const venueInquirySchema = z.strictObject({
  name: requiredText("Name", 80),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(120, "Email must be 120 characters or fewer"),
  phone: z
    .string()
    .trim()
    .min(7, "Phone number is required")
    .max(25, "Phone must be 25 characters or fewer")
    .regex(/^\+?[0-9\s().-]+$/, "Please enter a valid phone number"),
  position: requiredText("Position", 80),
  venueName: requiredText("Venue or brand name", 120),
  message: requiredText("Enquiry info", 1500).min(
    10,
    "Please add a little more detail about your enquiry",
  ),
});

export type VenueInquiryInput = z.input<typeof venueInquirySchema>;
export type VenueInquiry = z.infer<typeof venueInquirySchema>;
