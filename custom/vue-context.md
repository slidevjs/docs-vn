# Vue Global Context

Slidev đã đưa vào [global Vue context](https://v3.vuejs.org/api/application-config.html#globalproperties) `$slidev` cho các điều kiện nâng cao hoặc điều khiển navigation.

## Sử dụng

Bạn có thể truy cập nó ở bất kỳ đâu trong markdown và Vue template của mình, với [cú pháp "Mustache"](https://v3.vuejs.org/guide/template-syntax.html#interpolations).

```md
<!-- slides.md -->

# Trang 1

Trang hiện tại là: {{ $slidev.nav.currentPage }}
```

```html
<!-- Foo.vue -->

<template>
  <div>Title: {{ $slidev.configs.title }}</div>
  <button @click="$slidev.nav.next">Next Page</button>
</template>
```

## Thuộc tính

### `$slidev.nav`

Một đối tượng phản ứng giữ các thuộc tính và điều khiển của điều hướng trang trình bày. Ví dụ như:

```js
$slidev.nav.next() // go next step

$slidev.nav.nextSlide() // go next slide (skip v-clicks)

$slidev.nav.go(10) // go slide #10
```

```js
$slidev.nav.currentPage // current slide number

$slidev.nav.currentLayout // current layout id

$slidev.nav.clicks // current clicks count
```

Để biết thêm các thuộc tính khả dụng, hãy tham khảo [nav.ts](https://github.com/slidevjs/slidev/blob/main/packages/client/logic/nav.ts).

### `$slidev.configs`

Một đối tượng phản ứng giữ [các cấu hình đã được phân tích cú pháp](/custom/#frontmatter-configures) trong frontmatter đầu tiên của `slides.md`. Ví dụ

```yaml
---
title: My First Slidev!
---
```

```
{{ $slidev.configs.title }} // 'My First Slidev!'
```

### `$slidev.themeConfigs`

Một đối tượng phản ứng giữ các cấu hình chủ đề đã được phân tích cú pháp.

```yaml
---
title: My First Slidev!
themeConfig:
  primary: #213435
---
```

```
{{ $slidev.themeConfigs.primary }} // '#213435'
```
