<template>
  <div class="card">
    <div class="bg-white p-5">
      <div class="text-center">
        <div class="text-3xl font-bold">{{ plan.name }}</div>
        <div class="description">
          {{ plan.description }}
        </div>
      </div>
      <div class="text-center pb-6">
        <div class="text-2xl font-bold">{{ plan.price }}</div>
      </div>
      <div class="flex justify-center">
        <a :href="registerUrl">
          <button class="get-started-button">
            {{ plan?.buttonText }}
            <ArrowRightIcon class="h-7 w-7 mr-1 text-white" />
          </button>
        </a>
      </div>
    </div>
    <div class="px-6 py-8">
      <div
        class="flex items-center justify-start"
        v-for="feature in plan.features"
        :key="feature.feature"
      >
        <CheckCircleIcon class="h-7 w-7 mr-2 my-1 text-primary" />
        {{ feature.feature }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/vue/24/outline';
import { Plan } from '~~/types/Plan';

const props = defineProps({
  plan: {
    type: Object as PropType<Plan>
  }
});
const runtimeConfig = useRuntimeConfig();
const registerUrl = runtimeConfig.registerUrl;
</script>

<style scoped>
.card {
  width: 400px;
  @apply flex flex-col rounded-md m-2 shadow-xl bg-gray-100;
}

.description {
  height: 100px;
  @apply text-lg py-3 text-gray-500 flex items-center justify-center;
}

.get-started-button {
  background-color: v-bind(plan?.buttonColor) !important;
  @apply btn btn-wide text-white flex justify-between px-6 border-none;
}
</style>
