<template>
  <div>
    <div class="mb-8 text-center">
      <h2 class="text-2xl font-bold mb-2">欢迎使用然医门户</h2>
      <p class="text-gray-600">医疗信息管理的桌面客户端解决方案</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300"
      >
        <div class="text-blue-500 text-2xl mb-3 flex justify-center">
          <i :class="feature.icon"></i>
        </div>
        <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
        <p class="text-gray-600">{{ feature.description }}</p>
      </div>
    </div>

    <div class="mt-8 mb-8">
      <Todo />
    </div>

    <div class="mt-8 flex justify-center">
      <router-link
        to="/about"
        class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition duration-300"
      >
        了解更多
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";
import Todo from "../components/Todo.vue";

const userStore = useUserStore();

const features = ref([
  {
    title: "医疗数据管理",
    description: "轻松管理医疗数据，随时随地访问病历信息",
    icon: "i-carbon-data-table",
  },
  {
    title: "跨平台体验",
    description: "在Windows、macOS和Linux上提供一致的使用体验",
    icon: "i-carbon-tablet-landscape",
  },
  {
    title: "安全可靠",
    description: "采用先进的数据加密技术，保障医疗数据安全",
    icon: "i-carbon-security",
  },
  {
    title: "数据可视化",
    description: "通过图表和统计报告直观呈现医疗数据",
    icon: "i-carbon-chart-line",
  },
  {
    title: "自动同步",
    description: "自动将数据同步到云端，防止数据丢失",
    icon: "i-carbon-cloud-sync",
  },
  {
    title: "实时通知",
    description: "实时接收重要通知和提醒",
    icon: "i-carbon-notification",
  },
]);
</script>
