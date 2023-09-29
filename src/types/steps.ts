export type Step = {
  id: number;
  title: string;
};

export type PersonalInfo = {
  name: string;
  email: string;
  phone: string;
};

export type Plan = {
  id: number;
  title: string;
  priceMonth: number;
  priceYear: number;
  icon: any;
};

export type Addon = {
  id: number;
  title: string;
  subtitle: string;
  priceMonth: number;
  priceYear: number;
};

export type PlanResult = {
  planName: string;
  planPrice: string;
};
