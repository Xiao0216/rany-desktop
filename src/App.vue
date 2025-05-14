<template>
  <div class="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
    <header class="bg-white shadow p-4">
      <h1 class="text-xl font-bold text-blue-600">然医门户</h1>
    </header>
    <main class="flex-1 p-4">
      <router-view />
    </main>
    <footer class="bg-white p-4 text-center text-gray-500 text-sm">
      &copy; 2023 然医门户. 版权所有.
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  console.log("应用已加载");
});
</script>
