# Lớp Toàn Cục (Global Layers)

Global layers cho phép bạn sử dụng các component tùy chỉnh mà **duy trì liên tục** giữa các slide.  
Điều này rất hữu ích cho việc tạo footer, hiệu ứng hoạt ảnh xuyên slide, hiệu ứng toàn cục, v.v.

Slidev cung cấp ba lớp cho mục đích này. Hãy tạo các file `global-top.vue`, `global-bottom.vue` hoặc `custom-nav-controls.vue` trong thư mục gốc dự án của bạn và Slidev sẽ tự động nhận diện chúng.

Ngoài ra còn có các lớp cho **mỗi** slide: `layouts/slide-top.vue` và `layouts/slide-bottom.vue`.  
Cách sử dụng tương tự như global layers, nhưng chúng được áp dụng cho từng slide, vì vậy sẽ có nhiều instance hơn.

::: tip
Khi export slide, bạn nên sử dụng tùy chọn `--per-slide` để đảm bảo các global layer được áp dụng chính xác cho từng slide.
:::

## Mối quan hệ giữa các lớp

Theo trục z (z-axis), từ trên xuống dưới:

- NavControls
  - Điều khiển điều hướng tùy chỉnh (`custom-nav-controls.vue`)
- Global Top (`global-top.vue`) – chỉ một instance
- Slide Top (`slide-top.vue`) – một instance cho mỗi slide
- Nội dung Slide
- Slide Bottom (`slide-bottom.vue`) – một instance cho mỗi slide
- Global Bottom (`global-bottom.vue`) – chỉ một instance

## Ví dụ

```html
<!-- global-bottom.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Your Name</footer>
</template>
```

Dòng chữ `Your Name` sẽ xuất hiện trên tất cả các slide của bạn.

```html
<!-- custom-nav-controls -->
<template>
  <button class="icon-btn" title="Next" @click="$nav.next">
    <carbon:arrow-right />
  </button>
</template>
```

Button `Next` sẽ xuất hiện trong NavControls.

Để hiển thị nó theo điều kiện, bạn có thể sử dụng [Ngữ cảnh Toàn cục của Vue (Vue Global Context)](/custom/vue-context).

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
