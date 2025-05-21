# Cấu hình Windi CSS

<Environment type="node" />

::: warning
Kể từ Slidev phiên bản v0.47.0, chúng tôi không còn hỗ trợ Windi CSS. Vui lòng chuyển sang sử dụng [UnoCSS](/custom/config-unocss).
:::

Markdown hỗ trợ tự nhiên các thẻ HTML được nhúng. Vì vậy, bạn có thể tự do định kiểu cho nội dung của mình theo cách bạn muốn.

Ví dụ:

```html
<div class="grid pt-4 gap-4 grid-cols-[100px,1fr]">

### Name

- Item 1
- Item 2

</div>
```

[Chế độ Attributify](https://windicss.org/posts/v30.html#attributify-mode) trong [Windi CSS v3.0](https://windicss.org/posts/v30.html) được bật theo mặc định.

## Cấu hình

Để cấu hình Windi CSS, hãy tạo tệp `setup/windicss.ts` với nội dung sau để mở rộng các cấu hình có sẵn.

```ts
// setup/windicss.ts

import { defineWindiSetup } from '@slidev/types'

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  theme: {
    extend: {
      // fonts can be replaced here, remember to update the web font links in `index.html`
      fontFamily: {
        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        mono: '"Fira Code", monospace',
      },
    },
  },
}))
```

Tìm hiểu thêm về [cấu hình Windi CSS](https://windicss.org/guide/configuration.html)
