<template>
  <div class="sticky top-0 z-50 border-b-2 border-gray-200 bg-gray-50 navbar">
    <div class="navbar-start">
      <div class="flex-1">
        <a href="#">
          <img
            class="h-8 w-auto sm:h-8"
            src="~/assets/img/logo.svg"
            alt="Obboco logo"
          />
        </a>
      </div>
    </div>

    <div class="navbar-center hidden md:flex">
      <ul class="menu menu-horizontal p-0">
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
          <div
            tabindex="0"
            class="mt-3 card card-compact dropdown-content w-52 shadow bg-gray-50 border-gray-200"
          >
            <div class="card-body">
              <div class="flex items-center">
                <ColorSwatchIcon class="h-7 w-7 mr-1 text-gray-500" />
                <span class="text-base font-medium text-gray-500">
                  Features
                </span>
              </div>
              <div class="flex items-center">
                <ViewBoardsIcon class="h-7 w-7 mr-1 text-gray-500" />
                <span class="text-base font-medium text-gray-500">
                  Pricing
                </span>
              </div>
              <a :href="loginUrl" class="flex items-center text-gray-500">
                <UserCircleIcon class="h-7 w-7 mr-1" />
                <span class="text-base font-bold"> Sign In </span>
              </a>
              <div class="card-actions">
                <a
                  :href="registerUrl"
                  class="btn btn-primary btn-block text-white"
                >
                  Sign Up
                </a>
              </div>
            </div>
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
  ViewBoardsIcon
} from '@heroicons/vue/outline';

const loginUrl = process.env.NUXT_LOGIN_URL;
const registerUrl = process.env.NUXT_REGISTER_URL;
</script>
