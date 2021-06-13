# Global Layers

> Có hiệu lực từ v0.17

Các Global layers cho phép bạn có các component tùy chỉnh **liên tục** trên các trang trình bày. Điều này có thể hữu ích để có chân trang, animation trang trình bày chéo, hiệu ứng toàn bộ, v.v...

Slidev cung cấp hai layer cho cách sử dụng này, tạo `global-top.vue` hoặc `global-bottom.vue` trong dự án gốc của bạn và nó sẽ tự động nhận.

Mối quan hệ layer:

- Global Top (`global-top.vue`)
- Slides
- Global Bottom (`global-bottom.vue`)

## Ví dụ

```html
<!-- global-top.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Your Name</footer>
</template>
```

Dòng chữ `Your Name` sẽ xuất hiện trên tất cả các slide của bạn.

Để bật nó có điều kiện, bạn có thể áp dụng nó với [Vue Global Context](/custom/vue-context).

```html
<!-- hide the footer from Page 4 -->
<template>
  <footer
    v-if="$slidev.nav.currentPage !== 4"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Your Name
  </footer>
</template>
```

```html
<!-- hide the footer from "cover" layout -->
<template>
  <footer
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Your Name
  </footer>
</template>
```

```html
<!-- an example footer for pages -->
<template>
  <footer
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
  </footer>
</template>
```
