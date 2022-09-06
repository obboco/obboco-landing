<template>
  <div class="min-h-screen bg-gray-100 flex justify-center mx-2">
    <div
      class="flex flex-col justify-center items-center"
      style="width: 1200px"
    >
      <div class="flex flex-col text-center py-24 lg:w-2/3">
        <div class="text-gray-600 text-4xl lg:text-5xl font-bold">
          An experience you'd expect from a professional tool.
        </div>
        <div>Opinionated and designed for daily use.</div>
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
              class="h-10 w-10 mr-2 mb-3"
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
import { ArrowRightIcon } from '@heroicons/vue/outline';
const featuresBox = [
  {
    icon: ArrowRightIcon,
    title: 'Built for speed',
    description:
      'Synchronized in real-time across all users. No spinners or waiting.',
    class: '#2a6879'
  },
  {
    icon: ArrowRightIcon,
    title: 'Built for speed',
    description:
      'Synchronized in real-time across all users. No spinners or waiting.',
    class: '#c89d58'
  },
  {
    icon: ArrowRightIcon,
    title: 'Built for speed',
    description:
      'Synchronized in real-time across all users. No spinners or waiting.',
    class: '#2a6879'
  },
  {
    icon: ArrowRightIcon,
    title: 'Built for speed',
    description:
      'Synchronized in real-time across all users. No spinners or waiting.',
    class: '#cb7c7a'
  },
  {
    icon: ArrowRightIcon,
    title: 'Built for speed',
    description:
      'Synchronized in real-time across all users. No spinners or waiting.',
    class: '#2a6879'
  },
  {
    icon: ArrowRightIcon,
    title: 'Built for speed',
    description:
      'Synchronized in real-time across all users. No spinners or waiting.',
    class: '#cb7c7a'
  }
];
</script>

<style scoped></style>
