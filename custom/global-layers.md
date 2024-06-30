# Global Layers

<<<<<<< HEAD
> Có hiệu lực từ v0.17

Các Global layers cho phép bạn có các component tùy chỉnh **liên tục** trên các trang trình bày. Điều này có thể hữu ích để có chân trang, animation trang trình bày chéo, hiệu ứng toàn bộ, v.v...

Slidev cung cấp hai layer cho cách sử dụng này, tạo `global-top.vue` hoặc `global-bottom.vue` trong dự án gốc của bạn và nó sẽ tự động nhận.

Mối quan hệ layer:
=======
Global layers allow you to have custom components that **persist** across slides. This could be useful for having footers, cross-slide animations, global effects, etc.

Slidev provides three layers for this usage, create `global-top.vue`, `global-bottom.vue` or `custom-nav-controls.vue` under your project root and it will pick up automatically.

There are also layers for **each** slide: `layouts/slide-top.vue` and `layouts/slide-bottom.vue`. The usage is similar to the global layers, but they are applied to every slide, so there may be more than one instance of them.

::: tip
When exporting, the `--per-slide` option should be used to ensure the global layers are applied to each slide correctly.
:::
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

## Layers relationship

At z-axis, from top to bottom:

- NavControls
  - Customized Navigation Controls (`custom-nav-controls.vue`)
- Global Top (`global-top.vue`) - single instance
- Slide Top (`slide-top.vue`) - instance per slide
- Slide Content
- Slide Bottom (`slide-bottom.vue`) - instance per slide
- Global Bottom (`global-bottom.vue`) - single instance

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
  <button class="icon-btn" title="Next" @click="$nav.next">
    <carbon:arrow-right />
  </button>
</template>
```

The button `Next` will appear in NavControls.

To enable it conditionally, you can apply it with the [Vue Global Context](/custom/vue-context).
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```html
<!-- hide the footer from Page 4 -->
<template>
  <footer
    v-if="$nav.currentPage !== 4"
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
    v-if="$nav.currentLayout !== 'cover'"
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
    v-if="$nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $nav.currentPage }} / {{ $nav.total }}
  </footer>
</template>
```

```html
<!-- custom-nav-controls -->
<!-- hide the button in Presenter model -->
<template>
  <button v-if="!$nav.isPresenter" class="icon-btn" title="Next" @click="$nav.next">
    <carbon:arrow-right />
  </button>
</template>
```
