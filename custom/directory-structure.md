# Cấu trúc thư mục

Slidev sử dụng một số quy ước cấu trúc thư mục để thu nhỏ bề mặt cấu hình và làm cho các phần mở rộng chức năng trở nên linh hoạt và trực quan.

Cấu trúc cơ bản như sau:

```bash
your-slidev/
  ├── components/       # custom components
  ├── layouts/          # custom layouts
  ├── public/           # static assets
  ├── setup/            # custom setup / hooks
  ├── styles/           # custom style
  ├── index.html        # injections to index.html
  ├── slides.md         # the main slides entry
  └── vite.config.ts    # extending vite config
```

Tất cả chúng đều là tùy chọn.

## Component

Quy ước: `./components/*.{vue,js,ts,jsx,tsx,md}`

Các component bên trong thư mục này có thể được sử dụng trực tiếp trong các slide Markdown với component cùng tên với tên file.

Ví dụ:

```bash
your-slidev/
  ├── ...
  └── components/
      ├── MyComponent.vue
      └── HelloWorld.ts
```

```md
<!-- slides.md -->

# Slide của tôi

<MyComponent :count="4"/>

<!-- both namings work -->

<hello-world foo="bar">
  Slot
</hello-world>
```

<<<<<<< HEAD
Tính năng này được cung cấp bởi [`vite-plugin-components`](https://github.com/antfu/vite-plugin-components), hãy tìm hiểu thêm tại đây.
=======
This feature is powered by [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components), learn more there.
>>>>>>> 9cb6406db9a1c6f2173bfecb05a29ede60989b99

Slidev cũng cung cấp một số [component tích hợp](/builtin/components) để bạn sử dụng.

## Layout

Quy ước: `./layouts/*.{vue,js,ts,jsx,tsx}`

```
your-slidev/
  ├── ...
  └── layouts/
      ├── cover.vue
      └── my-cool-theme.vue
```

Bạn có thể sử dụng bất kỳ tên file nào cho layout của mình. Sau đó, bạn tham chiếu layout của mình trong tiêu đề YAML bằng tên file.

```yaml
---
layout: my-cool-theme
---
```

Nếu layout bạn cung cấp có cùng tên với layout cài sẵn hoặc layout chủ đề, layout tùy chỉnh của bạn sẽ được ưu tiên hơn layout tích hợp / layout chủ đề. Thứ tự ưu tiên là `cục bộ > chủ đề > tích hợp sẵn`.

Trong layout component, sử dụng `<slot/>` cho nội dung trang chiếu. Ví dụ:

```html
<!-- default.vue -->
<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>
```

## Public

Quy ước: `./public/*`

Các asset trong thư mục này sẽ được dùng tại đường dẫn gốc `/` trong quá trình dev và được sao chép vào thư mục gốc của thư mục dist nguyên trạng. Đọc thêm về [Thư mục `public` của Vite](https://vitejs.dev/guide/assets.html#the-public-directory).

## Style

Quy ước: `./style.css` | `./styles/index.{css,js,ts}`

Các file theo quy ước này sẽ được đưa vào App. Nếu bạn cần import nhiều mục css, bạn có thể tạo cấu trúc sau và tự quản lý thứ tự import.

```bash
your-slidev/
  ├── ...
  └── styles/
      ├── index.ts
      ├── base.css
      ├── code.css
      └── layouts.css
```

```ts
// styles/index.ts

import './base.css'
import './code.css'
import './layouts.css'
```

<<<<<<< HEAD
Style sẽ được thực thi bởi [Windi CSS](http://windicss.org/) và [PostCSS](https://postcss.org/), vì vậy bạn có thể sử dụng lồng ghép css và [at-directives](https://windicss.org/features/directives.html). Ví dụ:
=======
Styles will be processed by [Windi CSS](https://windicss.org/) and [PostCSS](https://postcss.org/), so you can use css nesting and [at-directives](https://windicss.org/features/directives.html) out-of-box. For example:
>>>>>>> 9cb6406db9a1c6f2173bfecb05a29ede60989b99

```less
.slidev-layout {
  @apply px-14 py-10 text-[1.1rem];

  h1, h2, h3, h4, p, div {
    @apply select-none;
  }

  pre, code {
    @apply select-text;
  }

  a {
    color: theme('colors.primary');
  }
}
```

[Tìm hiểu thêm về cú pháp](https://windicss.org/features/directives.html).

## `index.html`

Quy ước: `index.html`

`index.html` cung cấp khả năng đưa thẻ meta và/hoặc tập lệnh vào `index.html` chính

Ví dụ: đối với `index.html` tùy chỉnh sau:

```html
<!-- ./index.html -->
<head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>

<body>
  <script src="./your-scripts"></script>
</body>
```

`index.html` cuối cùng sẽ là:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png">
  <!-- injected head -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="__ENTRY__"></script>
  <!-- injected body -->
  <script src="./your-scripts"></script>
</body>
</html>
```

## Global Layers

Quy ước: `global-top.vue` | `global-bottom.vue`

Tìm hiểu thêm về: [Global Layers](/custom/global-layers)
