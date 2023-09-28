import ArcadeIcon from "@/components/svg/ArcadeIcon.vue";
import AdvanceIcon from "@/components/svg/AdvanceIcon.vue";
import ProIcon from "@/components/svg/ProIcon.vue";

export const steps = [
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

export const month = [
  {
    id: 1,
    title: "Arcade",
    subtitle: "$9/mo",
    icon: ArcadeIcon,
    selected: true,
    type: "month",
  },
  {
    id: 2,
    title: "Advanced",
    subtitle: "$12/mo",
    icon: AdvanceIcon,
    selected: false,
    type: "month",
  },
  {
    id: 3,
    title: "Pro",
    subtitle: "$15/mo",
    icon: ProIcon,
    selected: false,
    type: "month",
  },
];

export const year = [
  {
    id: 1,
    title: "Arcade",
    subtitle: "$90/yr",
    icon: ArcadeIcon,
    selected: true,
    type: "year",
  },
  {
    id: 2,
    title: "Advanced",
    subtitle: "$120/yr",
    icon: AdvanceIcon,
    selected: false,
    type: "year",
  },
  {
    id: 3,
    title: "Pro",
    subtitle: "$150/yr",
    icon: ProIcon,
    selected: false,
    type: "year",
  },
];
