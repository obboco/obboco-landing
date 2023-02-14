<template>
  <div class="hero min-h-screen border-t-2 border-gray-200">
    <div class="hero-content text-center flex flex-col">
      <div class="max-w-4xl">
        <h1 class="title">Run your day to day business in 10 minutes.</h1>
        <p class="text-xl lg:text-3xl py-7 text-gray-600">
          <strong>Obboco</strong> helps you to manage your activities, bookings,
          customers and revenue with no effort.
          <strong>Free for individuals and open source</strong>
        </p>
        <a :href="registerUrl" class="singup-button">
          Get started
          <ArrowRightIcon class="h-5 w-5 ml-2" />
        </a>
      </div>
      <div>
        <img
          class="image-hero"
          src="~/assets/img/hero-photo.webp"
          alt="Obboco activity page"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/outline';

const registerUrl = process.env.NUXT_REGISTER_URL;
</script>

<style scoped>
.title {
  @apply lg:text-7xl text-5xl font-bold py-16;
  background: -webkit-linear-gradient(#48ac98, #2a6879);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.image-hero {
  @apply w-auto mt-10 lg:mt-32 lg:max-w-5xl;
}

.singup-button {
  @apply btn btn-primary text-lg px-6  py-[10px] text-white bg-gradient-to-r from-teal-500 to-teal-600 border-0;
}
</style>
