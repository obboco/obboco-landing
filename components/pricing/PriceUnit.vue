<template>
  <div
    class="flex flex-col justify-between border-2 border-gray-300 rounded-md m-2 shadow-gray-300 shadow-lg"
  >
    <div class="text-left border-gray-300 border-b-2 p-6">
      <div class="text-3xl font-bold">{{ pricingPlan.plan }}</div>
      <div class="text-lg">{{ pricingPlan.price }}</div>
      <div class="text-lg text-gray-500">
        {{ pricingPlan.description }}
      </div>
    </div>
    <div class="px-6 py-8">
      <div
        class="flex items-center"
        v-for="feature in pricingPlan.features"
        :key="feature.feature"
      >
        <CheckCircleIcon class="h-7 w-7 mr-1 text-primary" />
        {{ feature.feature }}
      </div>
    </div>
    <div class="self-center p-6">
      <a :href="registerUrl">
        <button
          class="btn btn-primary btn-wide text-white flex justify-between px-6"
        >
          Get Started
          <ArrowRightIcon class="h-7 w-7 mr-1 text-white" />
        </button>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/vue/24/outline';
import { PricingPlan } from '~~/types/PrincingPlan';

const props = defineProps({
  pricingPlan: {
    type: Object as PropType<PricingPlan>
  }
});
const registerUrl = process.env.NUXT_REGISTER_URL;
</script>
