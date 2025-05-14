<template>
  <div class="bg-white rounded-lg shadow p-6">
    <h3 class="text-xl font-semibold mb-4 border-b pb-2">待办事项</h3>

    <div class="mb-4 flex gap-2">
      <input
        v-model="newTask"
        type="text"
        placeholder="添加新任务..."
        class="border rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        @keyup.enter="addTask"
      />
      <button
        @click="addTask"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300"
      >
        添加
      </button>
    </div>

    <ul v-if="tasks.length > 0" class="space-y-2">
      <li
        v-for="(task, index) in tasks"
        :key="index"
        class="flex items-center justify-between p-3 border-b"
      >
        <div class="flex items-center">
          <input
            type="checkbox"
            :checked="task.completed"
            @change="toggleTask(index)"
            class="mr-3 h-5 w-5 text-blue-500"
          />
          <span :class="{ 'line-through text-gray-400': task.completed }">
            {{ task.text }}
          </span>
        </div>
        <button
          @click="removeTask(index)"
          class="text-red-500 hover:text-red-700 transition duration-300"
        >
          <span class="i-carbon-trash-can"></span>
        </button>
      </li>
    </ul>

    <div v-else class="text-center text-gray-500 py-4">暂无待办事项</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const newTask = ref("");
const tasks = ref([
  { text: "完善应用功能", completed: false },
  { text: "设计用户界面", completed: true },
  { text: "实现数据同步", completed: false },
]);

const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push({
      text: newTask.value.trim(),
      completed: false,
    });
    newTask.value = "";
  }
};

const toggleTask = (index) => {
  tasks.value[index].completed = !tasks.value[index].completed;
};

const removeTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>
