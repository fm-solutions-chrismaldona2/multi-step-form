import { Addon } from "../types";

export const AddonsList: Addon[] = [
  {
    id: "onlineService",
    name: "Online Service",
    description: "Access to multiplayer games",
    price: {
      yearly: 10,
      monthly: 1,
    },
  },
  {
    id: "largerStorage",
    name: "Larger Storage",
    description: "Extra 1TB of cloud save",
    price: {
      yearly: 20,
      monthly: 2,
    },
  },
  {
    id: "profileCustomization",
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    price: {
      yearly: 20,
      monthly: 2,
    },
  },
];
