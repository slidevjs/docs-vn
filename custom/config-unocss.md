# Cấu hình UnoCSS

<Environment type="node" />

[UnoCSS](https://unocss.dev) hiện là framework CSS mặc định cho Slidev kể từ phiên bản v0.42.0. UnoCSS là một công cụ CSS dạng nguyên tử (atomic CSS) nhanh, linh hoạt và dễ mở rộng.

Theo mặc định, Slidev kích hoạt sẵn các preset sau:

- [@unocss/preset-uno](https://unocss.dev/presets/uno) - Các tiện ích tương thích với Tailwind / Windi CSS
- [@unocss/preset-attributify](https://unocss.dev/presets/attributify) - Chế độ Attributify
- [@unocss/preset-icons](https://unocss.dev/presets/icons) - Sử dụng bất kỳ biểu tượng nào như class
- [@unocss/preset-web-fonts](https://unocss.dev/presets/web-fonts) - Dễ dàng sử dụng font chữ từ web
- [@unocss/transformer-directives](https://unocss.dev/transformers/directives) - Sử dụng `@apply` trong CSS

Slidev cũng bổ sung các phím tắt (shortcuts) như bạn có thể thấy trong [mã nguồn](https://github.com/slidevjs/slidev/blob/main/packages/client/uno.config.ts).

Do đó, bạn có thể tự do style nội dung theo cách bạn muốn. Ví dụ:

```html
<div class="grid pt-4 gap-4 grid-cols-[100px,1fr]">

### Name

- Item 1
- Item 2

</div>
```

## Cấu hình

Bạn có thể tạo file `uno.config.ts` tại thư mục gốc của dự án để mở rộng các cấu hình có sẵn.

```ts
import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  // ...
})
```

Tìm hiểu thêm về [cấu hình UnoCSS](https://unocss.dev/guide/config-file)
