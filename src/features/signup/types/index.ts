import { ReactElement } from "react";
import { signUpSchema } from "@/features/signup/schemas/signUpSchema";
import { z } from "zod";

export interface Plan {
  icon?: ReactElement;
  id: string;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  yearlyFreeMonths?: number;
}

export type SignUpData = z.infer<typeof signUpSchema>;

export interface Addon {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
}
