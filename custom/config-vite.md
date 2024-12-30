# Cấu hình Vite và các plugin

<Environment type="node" />

Slidev được hỗ trợ bởi [Vite](https://vitejs.dev/) bên dưới. Điều này có nghĩa là bạn có thể tận dụng hệ thống plugin mạnh mẽ của Vite để tùy chỉnh slide của mình hơn nữa.

Nếu bạn có file `vite.config.ts`, nó sẽ được sử dụng và merge với cấu hình Vite được cung cấp bởi Slidev, theme và các addon.

## Cấu hình các plugin nội bộ

Slidev tích hợp sẵn các plugin sau vào Vite:

- [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue)
- [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)
- [unplugin-icons](https://github.com/unplugin/unplugin-icons)
- [vite-plugin-vue-markdown](https://github.com/unplugin/unplugin-vue-markdown)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)
- [unocss/vite](https://github.com/unocss/unocss/tree/main/packages/vite)

Để cấu hình các plugin tích hợp sẵn như trên, hãy tạo một file `vite.config.ts` với nội dung sau. Lưu ý rằng Slidev đã có [các cấu hình mặc định](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/vite/index.ts) cho các plugin này, việc sử dụng này sẽ ghi đè một số cấu hình, điều này có thể gây lỗi ứng dụng. Vui lòng xem đây là một **tính năng nâng cao** và đảm bảo bạn hiểu rõ trước khi tiếp tục.

<!-- eslint-disable import/first -->

```ts twoslash
/// <reference types="@slidev/types" />
import type MarkdownIt from 'markdown-it'
declare const MyPlugin: (md: any) => void
// ---cut---
import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      /* vue options */
    },
    markdown: {
      /* markdown-it options */
      markdownItSetup(md) {
        /* custom markdown-it plugins */
        md.use(MyPlugin)
      },
    },
    /* options for other plugins */
  },
})
```

Xem [khai báo type](https://github.com/slidevjs/slidev/blob/main/packages/types/src/vite.ts#L11) để biết thêm các option.

::: warning
Không được phép thêm lại các plugin đã được Slidev sử dụng nội bộ. Ví dụ, thay vì:

```ts twoslash
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Vue({
      /* vue options */
    })
  ],
})
```

Vui lòng chuyển các option Vue vào field `slidev.vue` như đã mô tả ở trên.
:::
