<template>
  <div class="header">
    <div class="toolbar">
      <div class="navbar-start">
        <a href="/">
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
              href="/#features"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <font-awesome-icon icon="fa-solid fa-bolt" size="lg" />
              Features
            </a>
          </li>
          <li>
            <a
              href="/plans"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <font-awesome-icon icon="fa-solid fa-layer-group" size="lg" />
              Plans
            </a>
          </li>
          <li>
            <a
              href="https://github.com/orgs/obboco/projects/1/views/3"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
              target="_blank"
            >
              <font-awesome-icon icon="fa-solid fa-route" size="lg" />
              Roadmap
            </a>
          </li>
          <li>
            <a
              href="https://github.com/orgs/obboco/discussions"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
              target="_blank"
            >
              <font-awesome-icon icon="fa-regular fa-comment" size="lg" />
              Changelog
            </a>
          </li>
          <li>
            <a
              href="https://github.com/obboco"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
              target="_blank"
            >
              <font-awesome-icon icon="fa-brands fa-github" size="lg" />
              Github
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
                <a href="#features"
                  ><font-awesome-icon icon="fa-solid fa-bolt" size="lg" />
                  <span class="text-base font-medium">Features </span></a
                >
              </li>
              <li>
                <a href="/plans">
                  <font-awesome-icon icon="fa-solid fa-layer-group" size="lg" />
                  <span class="text-base font-medium">Pricing </span></a
                >
              </li>
              <li>
                <a
                  href="https://github.com/orgs/obboco/projects/1/views/3"
                  target="_blank"
                >
                  <font-awesome-icon icon="fa-solid fa-route" size="lg" />
                  <span class="text-base font-medium">Roadmap </span></a
                >
              </li>
              <li>
                <a
                  href="https://github.com/orgs/obboco/discussions"
                  target="_blank"
                >
                  <font-awesome-icon icon="fa-regular fa-comment" size="lg" />
                  <span class="text-base font-medium">Changelog </span></a
                >
              </li>
              <li>
                <a
                  href="https://github.com/obboco"
                  class="text-base font-medium"
                  target="_blank"
                >
                  <font-awesome-icon
                    class="h-7 w-7 mr-1"
                    icon="fa-brands fa-github"
                    size="lg"
                  />
                  Github
                </a>
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
import { UserCircleIcon } from '@heroicons/vue/24/outline';

const runtimeConfig = useRuntimeConfig();
const loginUrl = runtimeConfig.loginUrl;
const registerUrl = runtimeConfig.registerUrl;
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
