<script setup lang="ts">
defineProps<{ type: 'node' | 'client' }>()
</script>

<template>
<<<<<<< HEAD
  <details class="px-4 py-3 mt-4 rounded bg-gray-400 bg-opacity-10">
    <summary class="outline-none">
      Môi trường:
      <span class="capitalize" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
=======
  <details class="p4 mt-4 rounded-lg bg-gray-400 bg-opacity-10">
    <summary class="outline-none !m0 select-none">
      Environment:
      <span class="capitalize font-bold" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0
    </summary>

    <div class="pt2 opacity-75">
      <span v-if="type === 'node'">
        Hàm cài đặt này sẽ chỉ chạy trên môi trường Node.js, bạn có thể có quyền truy cập vào API của Node.
      </span>
      <span v-else>
        Hàm cài đặt này sẽ chỉ chạy ở phía client. Đảm bảo tính tương thích của trình duyệt khi nhập các gói. Đảm bảo tính tương thích của trình duyệt khi thêm các package.
      </span>
    </div>
  </details>
</template>
