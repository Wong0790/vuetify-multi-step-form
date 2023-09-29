import ArcadeIcon from "@/components/svg/ArcadeIcon.vue";
import AdvanceIcon from "@/components/svg/AdvanceIcon.vue";
import ProIcon from "@/components/svg/ProIcon.vue";
import { Plan, Addon, Step } from "@/types/steps";

export const steps: Step[] = [
  {
    id: 1,
    title: "Your info",
  },
  {
    id: 2,
    title: "Select plan",
  },
  {
    id: 3,
    title: "Add-ons",
  },
  {
    id: 4,
    title: "Summary",
  },
];

export const plans: Plan[] = [
  {
    id: 1,
    title: "Arcade",
    priceMonth: 9,
    priceYear: 90,
    icon: ArcadeIcon,
  },
  {
    id: 2,
    title: "Advanced",
    priceMonth: 12,
    priceYear: 120,
    icon: AdvanceIcon,
  },
  {
    id: 3,
    title: "Pro",
    priceMonth: 15,
    priceYear: 150,
    icon: ProIcon,
  },
];

export const addons: Addon[] = [
  {
    id: 1,
    title: "Online service",
    subtitle: "Access to multiplayer games",
    priceMonth: 1,
    priceYear: 10,
  },
  {
    id: 2,
    title: "Larger storage",
    subtitle: "Extra 1TB of cloud save",
    priceMonth: 2,
    priceYear: 20,
  },
  {
    id: 3,
    title: "Customizable profile",
    subtitle: "Custom theme on your profile",
    priceMonth: 2,
    priceYear: 20,
  },
];
