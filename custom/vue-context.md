# Ngữ cảnh Toàn cục của Vue (Vue Global Context)

Slidev cung cấp một [ngữ cảnh Vue toàn cục](https://v3.vuejs.org/api/application-config.html#globalproperties) có tên là `$slidev` để hỗ trợ các điều kiện nâng cao hoặc điều khiển điều hướng.

## Cách sử dụng

Bạn có thể truy cập `$slidev` ở bất kỳ đâu trong Markdown hoặc trong template Vue, bằng [cú pháp "Mustache"](https://v3.vuejs.org/guide/template-syntax.html#interpolations).

```md
<!-- slides.md -->

# Page 1

Current page is: {{ $slidev.nav.currentPage }}
```

```html
<!-- Foo.vue -->

<template>
  <div>Title: {{ $slidev.configs.title }}</div>
  <button @click="$slidev.nav.next">Next Page</button>
</template>
```

## Thuộc tính

### `$clicks`

`$clicks` chứa số lần click trên slide hiện tại. Có thể được sử dụng để hiển thị nội dung khác nhau tùy theo số lần click.

```html
<div v-if="$clicks > 3">Content</div>
```

### `$page`

`$page` chứa số của trang hiện tại, bắt đầu từ 1.

```md
Page: {{ $page }}

Is current page active: {{ $page === $slidev.nav.currentPage }}
```

### `$renderContext`

`$renderContext` chứa ngữ cảnh hiển thị hiện tại, có thể là `slide`, `overview`, `presenter` hoặc `previewNext`

```md
<div v-if="$renderContext === 'slide'">
  This content will only be rendered in slides view
</div>
```

### `$slidev.nav`

Một đối tượng reactive chứa các thuộc tính và điều khiển cho việc điều hướng slide. Ví dụ:

```js
$slidev.nav.next() // go next step

$slidev.nav.nextSlide() // go next slide (skip v-clicks)

$slidev.nav.go(10) // go slide #10
```

```js
$slidev.nav.currentPage // current slide number

$slidev.nav.currentLayout // current layout id
```

Để biết thêm các thuộc tính có sẵn, hãy tham khảo các export trong [nav.ts](https://github.com/slidevjs/slidev/blob/main/packages/client/logic/nav.ts).

> Ghi chú: `$slidev.nav.clicks` là một trạng thái toàn cục, trong khi `$clicks` là cục bộ cho từng slide. Khuyến khích **sử dụng `$clicks` thay vì `$slidev.nav.clicks`** để tránh việc thay đổi số lần click bị kích hoạt khi chuyển trang.

### `$slidev.configs`

Một đối tượng reactive chứa các [cấu hình được phân tích từ frontmatter đầu tiên](/custom/#frontmatter-configures) trong file `slides.md`. Ví dụ:

```yaml
---
title: My First Slidev!
---
```

```
{{ $slidev.configs.title }} // 'My First Slidev!'
```

### `$slidev.themeConfigs`

Một đối tượng reactive chứa các cấu hình chủ đề đã được phân tích.

```yaml
---
title: My First Slidev!
themeConfig:
  primary: # 213435
---
```

```
{{ $slidev.themeConfigs.primary }} // '#213435'
```

### `$nav`

> Có sẵn từ phiên bản v0.43.0

Một cách viết tắt của `$slidev.nav`.

## Sử dụng Composable

> Có sẵn từ phiên bản v0.48.0

### Ngữ cảnh (Context)

Nếu bạn muốn lấy ngữ cảnh bằng lập trình (và cũng đảm bảo an toàn type), bạn có thể import các composable từ `@slidev/client`:

```vue
<script setup>
import { onSlideEnter, onSlideLeave, useDarkMode, useIsSlideActive, useNav, useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()
const { currentPage, currentLayout, currentSlideRoute } = useNav()
const { isDark } = useDarkMode()
const isActive = useIsSlideActive()
onSlideEnter(() => { /* ... */ })
onSlideLeave(() => { /* ... */ })
// ...
</script>
```

> [!NOTE]
> Trước đây, bạn có thể đã thấy cách sử dụng import các module lồng nhau như `import { isDark } from '@slidev/client/logic/dark.ts'`. Đây là cách **KHÔNG ĐƯỢC KHUYẾN CÁO** vì chúng là các chi tiết triển khai nội bộ và có thể thay đổi trong tương lai. Hãy luôn cố gắng sử dụng API công khai từ `@slidev/client` khi có thể.

### Type

Nếu bạn muốn lấy type bằng lập trình, bạn có thể import các type như `TocItem` từ `@slidev/types`:

```vue
<script setup>
import type { TocItem } from '@slidev/types'

function tocFunc(tree: TocItem[]): TocItem[] {
  // ...
}
</script>
```
