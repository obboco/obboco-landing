<template>
  <div
    class="flex flex-col justify-between border-2 border-gray-300 rounded-md m-2 shadow-gray-300 shadow-lg"
  >
    <div class="text-left border-gray-300 border-b-2 p-6">
      <div class="text-3xl font-bold">Hobby</div>
      <div class="text-lg">Free</div>
      <div class="text-lg text-gray-500">
        For personal or non-commercial projects.
      </div>
    </div>
    <div class="px-6 py-8">
      <div class="flex items-center">
        <CheckCircleIcon class="h-7 w-7 mr-1 text-primary" />
        Deploy from CLI or personal
      </div>
      <div class="flex items-center">
        <CheckCircleIcon class="h-7 w-7 mr-1 text-primary" />
        Deploy from CLI or personal
      </div>
      <div class="flex items-center">
        <CheckCircleIcon class="h-7 w-7 mr-1 text-primary" />
        Deploy from CLI or personal
      </div>
    </div>
    <div class="self-center p-6">
      <button
        class="btn btn-primary btn-wide text-white flex justify-between px-6"
      >
        Get Started
        <ArrowRightIcon class="h-7 w-7 mr-1 text-white" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/vue/outline';
</script>
