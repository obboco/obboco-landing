<template>
  <div class="hero min-h-screen border-t-2 border-gray-200">
    <div class="hero-content text-center flex flex-col">
      <div class="max-w-4xl">
        <div class="flex justify-center">
          <img
            class="image-hero"
            src="~/assets/img/logo.svg"
            alt="Obboco activity page"
          />
        </div>
        <h1 class="lg:text-7xl text-5xl font-bold py-2 text-gray-600">
          Get started with Obboco today.
        </h1>
        <p class="text-xl lg:text-3xl py-7 text-gray-900">
          Obboco helps you to manage your activities, bookings, customers and
          revenue with no effort.
        </p>
        <a :href="registerUrl" class="singup-button">
          Sign up for free
          <ArrowRightIcon class="h-5 w-5 ml-2" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline';

const runtimeConfig = useRuntimeConfig();
const registerUrl = runtimeConfig.registerUrl;
</script>

<style scoped>
.title {
  background: -webkit-linear-gradient(#48ac98, #2a6879);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.image-hero {
  @apply w-80 mt-10 lg:mt-32 lg:max-w-5xl mb-6;
}

.singup-button {
  @apply btn btn-primary text-lg px-6  py-[10px] text-white bg-gradient-to-r from-teal-500 to-teal-600 border-0;
}
</style>
