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
  subtitle: string;
  icon: any;
  selected: boolean;
  type: string;
};
