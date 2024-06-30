<script setup lang="ts">
defineProps<{ type: 'node' | 'client' | 'both' }>()
</script>

<template>
<<<<<<< HEAD
  <details class="px-4 py-3 mt-4 rounded bg-gray-400 bg-opacity-10">
    <summary class="outline-none">
      Môi trường:
      <span class="capitalize" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
    </summary>

    <div class="mt-2 opacity-75">
      <span v-if="type === 'node'">
        Hàm cài đặt này sẽ chỉ chạy trên môi trường Node.js, bạn có thể có quyền truy cập vào API của Node.
=======
  <details class="p4 mt-4 rounded-lg bg-gray-400 bg-opacity-10">
    <summary class="outline-none !m0 select-none">
      Environment:
      <span class="capitalize font-bold" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
    </summary>

    <div class="pt2 opacity-75">
      <span v-if="type === 'both'">
        This setup function will run on <b>both</b> Node.js and client side. Avoid using either Node's or DOM API to avoid runtime errors.
      </span>
      <span v-else-if="type === 'node'">
        This setup function will only run on Node.js environment, you can have access to Node's API.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
      </span>
      <span v-else>
        Hàm cài đặt này sẽ chỉ chạy ở phía client. Đảm bảo tính tương thích của trình duyệt khi nhập các gói. Đảm bảo tính tương thích của trình duyệt khi thêm các package.
      </span>
    </div>
  </details>
</template>
