import { Plan, Addon } from "../types";

export const calculateTotal = (
  plan: Plan,
  addons: Addon[],
  isYearly: boolean
) => {
  const planPrice = isYearly ? plan.price.yearly : plan.price.monthly;
  const addonsTotal = addons.reduce(
    (sum, addon) => sum + (isYearly ? addon.price.yearly : addon.price.monthly),
    0
  );
  return planPrice + addonsTotal;
};
