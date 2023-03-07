<template>
  <div class="flex flex-wrap justify-around mx-12 mb-4">
    <PlansUnit v-for="plan in plans" :key="plan.name" :plan="plan" />
  </div>
</template>
<script setup lang="ts">
import { Plan } from '~~/types/Plan';

const plans = ref<Plan[]>([
  {
    name: 'Free',
    price: '0€ per user/month',
    description: 'Everything you need, forever free.',
    buttonText: 'Start now',
    buttonColor: '#2a6879',
    features: [
      {
        feature: 'Unlimited bookings, activities, events and guests'
      },
      {
        feature: 'Check and download your revenue reports'
      },
      {
        feature: 'Sell and manage passes'
      },
      {
        feature: '1 Account'
      },
      {
        feature: 'Community support'
      },
      {
        feature: 'Google Calendar integration'
      }
    ]
  },
  {
    name: 'Teams',
    price: '15€ per user/month',
    description: 'For personal or non-commercial use.',
    buttonText: 'Start a free trial',
    buttonColor: '#c89d58',
    features: [
      {
        feature: 'Everything included in Free, plus... '
      },
      {
        feature: 'Multiple accounts.'
      },
      {
        feature: 'Email and Chat support.'
      }
    ]
  },
  {
    name: 'Enterprise',
    price: 'Contact us',
    description: 'For larger companies with compliance requirements.',
    buttonText: 'Contact Sales',
    buttonColor: '#cb7c7a',
    features: [
      {
        feature: 'Everything included in Team, plus... '
      },
      {
        feature: '99.99% Uptime SLA'
      },
      {
        feature: 'Dedicated support with SLA'
      },
      {
        feature: 'Dedicated onboarding and engineering support.'
      },
      {
        feature: 'On-prem, Hybrid and Cloud.'
      },
      {
        feature: 'Enterprise plugins.'
      }
    ]
  }
]);
</script>
