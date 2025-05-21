# Cấu trúc Thư mục

Slidev sử dụng một số quy ước về cấu trúc thư mục nhằm giảm thiểu nhu cầu cấu hình và giúp việc mở rộng tính năng trở nên linh hoạt và trực quan hơn.

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

Tất cả các thư mục này đều là tùy chọn.

## Components

Quy ước: `./components/*.{vue,js,ts,jsx,tsx,md}`

Các component trong thư mục này có thể được sử dụng trực tiếp trong file Markdown của slide, với tên component trùng với tên file.

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

# My Slide

<MyComponent :count="4"/>

<!-- both namings work -->

<hello-world foo="bar">
  Slot
</hello-world>
```

Tính năng này được cung cấp bởi [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components), bạn có thể tìm hiểu thêm tại đó.

Slidev cũng cung cấp một số [component tích hợp sẵn](/builtin/components) để bạn sử dụng.

## Layouts

Quy ước: `./layouts/*.{vue,js,ts,jsx,tsx}`

```
your-slidev/
  ├── ...
  └── layouts/
      ├── cover.vue
      └── my-cool-theme.vue
```

Bạn có thể sử dụng bất kỳ tên file nào cho layout của mình. Sau đó, bạn tham chiếu đến layout đó trong phần đầu YAML bằng tên file.

```yaml
---
layout: my-cool-theme
---
```

Nếu layout bạn cung cấp có cùng tên với một layout tích hợp sẵn hoặc layout từ theme, thì layout tùy chỉnh của bạn sẽ được ưu tiên sử dụng. Thứ tự ưu tiên là: `local > theme > built-in`.

Trong component layout, hãy sử dụng `<slot/>` để hiển thị nội dung của slide. Ví dụ:

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

Các tài nguyên trong thư mục này sẽ được phục vụ tại đường dẫn gốc `/` trong quá trình phát triển, và được sao chép y nguyên vào thư mục dist khi build. Đọc thêm về [thư mục `public` của Vite](https://vitejs.dev/guide/assets.html#the-public-directory).

## Style

Quy ước: `./style.css` | `./styles/index.{css,js,ts}`

Các file tuân theo quy ước này sẽ được tự động chèn vào gốc của ứng dụng.  
Nếu bạn cần import nhiều file CSS, bạn có thể tạo cấu trúc thư mục như sau và tự quản lý thứ tự import.

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

Các style sẽ được xử lý bởi [UnoCSS](https://unocss.dev/) và [PostCSS](https://postcss.org/), vì vậy bạn có thể sử dụng tính năng lồng CSS (css nesting) và các [at-directives](https://unocss.dev/transformers/directives#apply) mà không cần cấu hình thêm. Ví dụ:

<!-- eslint-skip -->

```less
.slidev-layout {
  --uno: px-14 py-10 text-[1.1rem];

  h1, h2, h3, h4, p, div {
    --uno: select-none;
  }

  pre, code {
    --uno: select-text;
  }

  a {
    color: theme('colors.primary');
  }
}
```

[Tìm hiểu thêm về cú pháp](https://unocss.dev/transformers/directives#apply).

## `index.html`

Quy ước: `index.html`

File `index.html` cho phép bạn chèn các thẻ meta và/hoặc script vào `index.html` chính của ứng dụng.

Ví dụ, với file `index.html` tùy chỉnh sau:

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

File `index.html` sau khi được build và triển khai cuối cùng sẽ là:

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

## Lớp Toàn Cục (Global Layers)

Quy ước: `global-top.vue` | `global-bottom.vue`

Tìm hiểu thêm: [Lớp Toàn Cục](/custom/global-layers)
