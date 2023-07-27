# Global Layers

> Có hiệu lực từ v0.17

Các Global layers cho phép bạn có các component tùy chỉnh **liên tục** trên các trang trình bày. Điều này có thể hữu ích để có chân trang, animation trang trình bày chéo, hiệu ứng toàn bộ, v.v...

<<<<<<< HEAD
Slidev cung cấp hai layer cho cách sử dụng này, tạo `global-top.vue` hoặc `global-bottom.vue` trong dự án gốc của bạn và nó sẽ tự động nhận.
=======
Slidev provides three layers for this usage, create `global-top.vue`, `global-bottom.vue` or `custom-nav-controls.vue` under your project root and it will pick up automatically.
>>>>>>> cd758d99f59b0813a49eb6fe4bb3f07e1b2b4887

Mối quan hệ layer:

- Global Top (`global-top.vue`)
- Slides
- Global Bottom (`global-bottom.vue`)
- NavControls
  - Customized Navigation Controls (`custom-nav-controls.vue`)

## Ví dụ

```html
<!-- global-bottom.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Your Name</footer>
</template>
```

Dòng chữ `Your Name` sẽ xuất hiện trên tất cả các slide của bạn.

<<<<<<< HEAD
Để bật nó có điều kiện, bạn có thể áp dụng nó với [Vue Global Context](/custom/vue-context).
=======
```html
<!-- custom-nav-controls -->
<template>
  <button class="icon-btn" title="Next" @click="$slidev.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```

The button `Next` will appear in NavControls.

To enable it conditionally, you can apply it with the [Vue Global Context](/custom/vue-context).
>>>>>>> cd758d99f59b0813a49eb6fe4bb3f07e1b2b4887

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

```html
<!-- custom-nav-controls -->
<!-- hide the button in Presenter model -->
<template>
  <button v-if="!$slidev.nav.isPresenter" class="icon-btn" title="Next" @click="$slidev.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```
