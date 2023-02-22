<template>
  <div class="flex flex-wrap justify-around mx-12 mb-4">
    <PlansUnit v-for="plan in plans" :key="plan.name" :plan="plan" />
  </div>
</template>
<script setup lang="ts">
import { Plan } from '~~/types/Plan';

const plans = ref<Plan[]>([
  {
    name: 'Start Up',
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
]);
</script>
