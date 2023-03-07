export interface Plan {
  name: string;
  price: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  features: Array<PlanFeature>;
}

export interface PlanFeature {
  feature: string;
}
