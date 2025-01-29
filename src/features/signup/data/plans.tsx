import {
  ArcadeIcon,
  AdvancedIcon,
  ProIcon,
} from "@/shared/components/SvgIcons/SvgIcons";
import { Plan } from "../types";

export const plansList: Plan[] = [
  {
    icon: <ArcadeIcon />,
    id: "arcade",
    name: "Arcade",
    price: {
      monthly: 9,
      yearly: 90,
    },
    yearlyFreeMonths: 2,
  },
  {
    icon: <AdvancedIcon />,
    id: "advanced",
    name: "Advanced",
    price: {
      monthly: 12,
      yearly: 120,
    },
    yearlyFreeMonths: 2,
  },
  {
    icon: <ProIcon />,
    id: "pro",
    name: "Pro",
    price: {
      monthly: 15,
      yearly: 150,
    },
    yearlyFreeMonths: 2,
  },
];
