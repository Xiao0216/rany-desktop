<template>
  <div>
    <div class="mb-8 text-center">
      <h2 class="text-2xl font-bold mb-2">关于然医门户</h2>
      <p class="text-gray-600">我们致力于提供最佳的医疗信息管理解决方案</p>
    </div>

    <div class="bg-white rounded-lg shadow p-6 mb-6">
      <h3 class="text-xl font-semibold mb-4 border-b pb-2">我们的使命</h3>
      <p class="mb-4">
        然医门户致力于通过创新科技，提升医疗信息管理的效率和便捷性，为医疗工作者提供强大的桌面工具，
        促进医疗健康行业的数字化转型。
      </p>
      <p>
        我们的目标是创建一个功能完善、操作简便、安全可靠的医疗信息管理平台，帮助医疗机构更好地
        管理患者数据，提高医疗服务质量。
      </p>
    </div>

    <div class="bg-white rounded-lg shadow p-6 mb-6">
      <h3 class="text-xl font-semibold mb-4 border-b pb-2">技术栈</h3>
      <ul class="space-y-2 pl-5 list-disc">
        <li>Electron - 跨平台桌面应用开发框架</li>
        <li>Vue.js - 前端开发框架</li>
        <li>Pinia - 状态管理库</li>
        <li>UnoCSS - 原子化CSS引擎</li>
        <li>Vite - 现代前端构建工具</li>
      </ul>
    </div>

    <div class="bg-white rounded-lg shadow p-6">
      <h3 class="text-xl font-semibold mb-4 border-b pb-2">联系我们</h3>
      <p class="mb-2">如果您有任何问题或建议，请随时与我们联系：</p>
      <p class="flex items-center mt-4">
        <span class="i-carbon-email text-blue-500 mr-2 text-xl"></span>
        <span>contact@ranyiportal.com</span>
      </p>
      <p class="flex items-center mt-2">
        <span class="i-carbon-phone text-blue-500 mr-2 text-xl"></span>
        <span>+86 123 4567 8901</span>
      </p>
    </div>

    <div class="mt-8 flex justify-center">
      <router-link
        to="/"
        class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition duration-300"
      >
        返回首页
      </router-link>
    </div>
  </div>
</template>

<script setup>
// 没有需要特别处理的逻辑
</script>
