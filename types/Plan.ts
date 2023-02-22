export interface Plan {
  name: string;
  price: string;
  description: string;
  features: Array<PlanFeature>;
}

export interface PlanFeature {
  feature: string;
}
