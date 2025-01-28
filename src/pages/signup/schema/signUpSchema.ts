import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email({ message: "Invalid email address" }),
  phone: z.string().min(1, "Phone number is required"),
  plan: z.object({
    id: z.string(),
    name: z.string(),
    price: z.object({
      monthly: z.number(),
      yearly: z.number(),
    }),
    yearlyFreeMonths: z.number().optional(),
  }),
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
