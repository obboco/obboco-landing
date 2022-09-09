<template>
  <div class="bg-gray-100 flex justify-center mx-2 py-24">
    <div
      class="flex flex-col justify-center items-center"
      style="width: 1200px"
    >
      <div class="flex flex-col text-center pb-24 lg:w-2/3">
        <div class="text-gray-600 text-4xl lg:text-5xl font-bold">
          An experience you'd expect from a professional tool.
        </div>
        <div class="text-2xl mt-4">Opinionated and designed for daily use.</div>
      </div>
      <div class="grid lg:grid-cols-3 gap-6">
        <div
          v-for="feature in featuresBox"
          :key="feature.title"
          class="card p-10 bg-gray-100 shadow-lg rounded-2xl w-auto border-2"
          v-bind:style="{ 'border-color': feature.class }"
        >
          <div>
            <component
              :is="feature.icon"
              class="h-7 w-7 mr-2 mb-3"
              v-bind:style="{ color: feature.class }"
            />
          </div>
          <div class="text-gray-900 text-xl mb-3">{{ feature.title }}</div>
          <div class="text-gray-500 text-md">{{ feature.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowRightIcon,
  ArrowSmUpIcon,
  ChartBarIcon,
  ChevronDoubleRightIcon,
  CubeIcon,
  CubeTransparentIcon,
  DeviceMobileIcon,
  GlobeIcon,
  PresentationChartLineIcon,
  TemplateIcon,
  TrendingUpIcon,
  UserIcon
} from '@heroicons/vue/outline';
const featuresBox = [
  {
    icon: ChevronDoubleRightIcon,
    title: 'Built for speed',
    description:
      'Synchronized in real-time across all users. No spinners or waiting.',
    class: '#2a6879'
  },
  {
    icon: UserIcon,
    title: 'For entrepreneurs',
    description: 'Created by software engineers for entrepreneus.',
    class: '#c89d58'
  },
  {
    icon: DeviceMobileIcon,
    title: 'Designed for desktop and mobile',
    description: 'Use your phone or your laptop, it works!',
    class: '#2a6879'
  },
  {
    icon: TrendingUpIcon,
    title: 'Free as you grow',
    description: 'No cost to help you to grow your business.',
    class: '#cb7c7a'
  },
  {
    icon: TemplateIcon,
    title: 'Curated design',
    description:
      'Designed carefully to make it simple and easy to use it with a few clicks.',
    class: '#2a6879'
  },
  {
    icon: GlobeIcon,
    title: 'Use it everywhere',
    description: 'Access and make changes quickly whenever you are.',
    class: '#cb7c7a'
  }
];
</script>

<style scoped></style>
