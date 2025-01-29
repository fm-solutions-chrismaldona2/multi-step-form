import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).trim(),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" })
    .trim(),
  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .regex(/^\+?\d{1,4}[\s-]?\d{1,5}[\s-]?\d{4,6}[\s-]?\d{0,6}$/, {
      message: "Invalid phone number format",
    })
    .trim(),
  plan: z.object(
    {
      id: z.string(),
      name: z.string(),
      price: z.object({
        monthly: z.number(),
        yearly: z.number(),
      }),
      yearlyFreeMonths: z.number().optional(),
    },
    { message: "Plan is required" }
  ),
  addons: z
    .object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
      price: z.object({
        monthly: z.number(),
        yearly: z.number(),
      }),
    })
    .array(),
  yearly: z.boolean(),
});
