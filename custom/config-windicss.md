# Cấu hình Windi CSS

<Environment type="node" />

<<<<<<< HEAD
Markdown hỗ trợ các thẻ HTML được nhúng một cách tự nhiên. Do đó, bạn có thể tạo nội dung của mình theo cách bạn muốn. Để mang lại sự tiện lợi, chúng tôi đã tích hợp sẵn [Windi CSS](https://github.com/windicss/windicss) built-in, vì vậy bạn có thể tạo thẻ HTML trực tiếp bằng các class.
=======
::: warning
Since Slidev v0.47.0, we no longer support Windi CSS. Please migrate to [UnoCSS](/custom/config-unocss).
:::

Markdown naturally supports embedded HTML markups. You can therefore style your content the way you want.
>>>>>>> 15820b064d1f419ed06cd798ae4b6dfe0c230e94

Ví dụ:

```html
<div class="grid pt-4 gap-4 grid-cols-[100px,1fr]">

### Name

- Item 1
- Item 2

</div>
```

[Attributify Mode](https://windicss.org/posts/v30.html#attributify-mode) trong [Windi CSS v3.0](https://windicss.org/posts/v30.html) mặc định được bật.

## Cấu hình

Để định cấu hình CSS Windi, hãy tạo `setup/windicss.ts` ới nội dung sau để mở rộng cấu hình tích hợp

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

Tìm hiểu thêm về: [Cấu hình Windi CSS](https://windicss.org/guide/configuration.html)
