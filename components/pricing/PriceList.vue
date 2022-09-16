<template>
  <div class="flex flex-wrap justify-around mx-12 mb-4">
    <PricingPriceUnit
      v-for="pricingPlan in pricingPlans"
      :key="pricingPlan.plan"
      :pricingPlan="pricingPlan"
    />
  </div>
</template>
<script setup lang="ts">
import { PricingPlan } from '~~/types/PrincingPlan';

const pricingPlans = ref<PricingPlan[]>([
  {
    plan: 'Start Up',
    price: 'Free',
    description: 'For personal or non-commercial use.',
    features: [
      {
        feature: 'Schedule activities, events and guests.'
      },
      {
        feature: 'Check and download your revenue reports.'
      },
      {
        feature: 'Sell and manage passes and book activites.'
      },
      {
        feature: 'Personal website.'
      }
    ]
  }
  /*{
    plan: 'Pro',
    price: '15€/month',
    description: 'For personal solid businesses.',
    features: [
      {
        feature: 'Add your custom domain'
      },
      {
        feature: ''
      },
      {
        feature: 'Personal website'
      },
      {
        feature: 'Online payments and customer subscriptions'
      }
    ]
  }*/
]);
</script>
