# Cấu hình Vite

<Environment type="node" />

Slidev được xây dựng dựa trên [Vite](https://vitejs.dev/). Điều này có nghĩa là bạn có thể tận dụng hệ thống plugin mạnh mẽ của Vite để tùy chỉnh các slide của mình một cách linh hoạt hơn.

file `vite.config.ts` sẽ được Slidev tự động nhận diện nếu bạn tạo nó.

Slidev đã cấu hình sẵn các plugin sau:

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [unplugin-icons](https://github.com/antfu/unplugin-icons)
- [vite-plugin-vue-markdown](https://github.com/antfu/vite-plugin-vue-markdown)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)
- [unocss/vite](https://github.com/unocss/unocss/tree/main/packages/vite)

Tìm hiểu thêm về [các cấu hình sẵn tại đây](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/plugins/preset.ts).

## Cấu hình Plugin Nội bộ

> Có sẵn từ phiên bản v0.21

Để cấu hình các plugin tích hợp sẵn ở trên, hãy tạo file `vite.config.ts` với nội dung như sau.  
Lưu ý rằng Slidev đã có sẵn một số tùy chọn được cấu hình trước cho các plugin này — việc ghi đè có thể gây ra lỗi hoặc làm ứng dụng không hoạt động như mong đợi.  
Vì vậy, hãy coi đây là một **tính năng nâng cao** và đảm bảo bạn hiểu rõ trước khi thực hiện.

```ts
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
        md.use(/* ... */)
      },
    },
    /* options for other plugins */
  },
})
```

Xem [khai báo kiểu dữ liệu](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/options.ts#L50) để biết thêm các tùy chọn khác.
