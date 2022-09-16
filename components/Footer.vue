<template>
  <footer class="footer">
    <div class="footer-content">
      <p>Copyright © 2022 - All right reserved</p>
      <div class="made">
        Made with <HeartIcon class="h-7 w-7 m-1 text-red-400" /> from Barcelona.
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { HeartIcon } from '@heroicons/vue/solid';
</script>

<style scoped>
.footer {
  @apply flex justify-center border-t-2 border-gray-200;
}
.footer-content {
  max-width: 1200px;
  @apply w-full py-4 px-8 flex justify-between flex-wrap items-center;
}
.made {
  @apply flex flex-row items-center;
}
</style>
