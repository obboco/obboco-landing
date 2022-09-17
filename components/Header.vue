<template>
  <div class="header">
    <div class="toolbar">
      <div class="navbar-start">
        <a href="#">
          <img
            class="h-8 w-auto sm:h-8"
            src="~/assets/img/logo.svg"
            alt="Obboco"
          />
        </a>
      </div>

      <div class="navbar-center w-max">
        <ul class="menu menu-horizontal p-0 hidden md:flex">
          <li>
            <a
              href="/"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="/pricing"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="https://obboco.canny.io/"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
              target="_blank"
            >
              Roadmap
            </a>
          </li>
          <li>
            <a
              href="https://obboco.canny.io/obboco"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
              target="_blank"
            >
              Feedback
            </a>
          </li>
          <li>
            <a
              href="https://obboco.canny.io/changelog"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
              target="_blank"
            >
              Changelog
            </a>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <div class="hidden md:flex">
          <a
            :href="loginUrl"
            class="whitespace-nowrap inline-flex items-center justify-center text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Sign in
          </a>
          <a
            :href="registerUrl"
            class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white btn btn-primary"
          >
            Sign up
          </a>
        </div>
        <div class="flex-none">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-5 h-5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 bg-gray-100 rounded-box w-52"
            >
              <li>
                <a
                  ><TicketIcon class="h-7 w-7" />
                  <span class="text-base font-medium">Features </span></a
                >
              </li>
              <li>
                <a href="/pricing">
                  <ColorSwatchIcon class="h-7 w-7 mr-1" />
                  <span class="text-base font-medium">Pricing </span></a
                >
              </li>
              <li>
                <a href="https://obboco.canny.io/" target="_blank">
                  <MapIcon class="h-7 w-7 mr-1" />
                  <span class="text-base font-medium">Roadmap </span></a
                >
              </li>
              <li>
                <a href="https://obboco.canny.io/obboco" target="_blank">
                  <SpeakerphoneIcon class="h-7 w-7 mr-1" />
                  <span class="text-base font-medium">Feedback </span></a
                >
              </li>
              <li>
                <a href="https://obboco.canny.io/changelog" target="_blank">
                  <RssIcon class="h-7 w-7 mr-1" />
                  <span class="text-base font-medium">Changelog </span></a
                >
              </li>
              <li>
                <a :href="loginUrl"
                  ><UserCircleIcon class="h-7 w-7 mr-1" />
                  <span class="text-base font-bold">Sign In</span></a
                >
              </li>
              <li>
                <a
                  :href="registerUrl"
                  class="btn btn-primary btn-block text-white"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  UserCircleIcon,
  ColorSwatchIcon,
  TicketIcon,
  SpeakerphoneIcon,
  RssIcon,
  MapIcon
} from '@heroicons/vue/outline';

const loginUrl = process.env.NUXT_LOGIN_URL;
const registerUrl = process.env.NUXT_REGISTER_URL;
</script>

<style scoped>
.header {
  @apply flex justify-center;
}
.toolbar {
  @apply sticky top-0 z-50 navbar;
  max-width: 1200px;
}

.navbar-end {
  justify-content: flex-end;
}
</style>
