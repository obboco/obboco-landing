export interface PricingPlan {
  plan: string;
  price: string;
  description: string;
  features: Array<PlanFeature>;
}

export interface PlanFeature {
  feature: string;
}
