<template>
  <footer
    class="py-4 px-8 flex justify-between items-center flex-wrap border-t-2 border-gray-200"
  >
    <p>Copyright © 2022 - All right reserved</p>
    <div class="made">
      Made with <HeartIcon class="h-7 w-7 m-1 text-red-400" /> from Barcelona.
    </div>
  </footer>
</template>
<script setup lang="ts">
import { HeartIcon } from '@heroicons/vue/solid';
</script>

<style scoped>
.made {
  @apply flex flex-row items-center;
}
</style>
