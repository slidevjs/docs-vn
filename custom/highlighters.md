# Bộ tô sáng cú pháp (Highlighters)

Slidev sử dụng [Shiki](https://github.com/shikijs/shiki) làm công cụ tô sáng mã nguồn.  
Đây là một trình tô sáng cú pháp sử dụng ngữ pháp TextMate, tạo ra các token có màu sắc mà không cần thêm CSS nào khác. Với khả năng hỗ trợ ngữ pháp tuyệt vời, màu sắc được tạo ra rất chính xác – giống như bạn thấy trong VS Code. Shiki cũng đi kèm với [nhiều theme tích hợp sẵn](https://shiki.style/themes). Trong Slidev, chúng tôi cũng đã tích hợp sẵn hỗ trợ cho [TwoSlash](#twoslash-integration).

## Cấu hình Shiki

<Environment type="both" />

Tạo file `./setup/shiki.ts` với nội dung sau:

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'min-dark',
      light: 'min-light',
    },
    transformers: [
      // ...
    ],
  }
})
```

Nếu bạn muốn thêm theme hoặc ngôn ngữ tùy chỉnh (TextMate grammar/themes ở định dạng JSON), bạn có thể import chúng trong file cấu hình:

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'
import customTheme from './customTheme.tmTheme.json'
import customLanguage from './customLanguage.tmLanguage.json'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: customTheme,
      light: 'min-light',
    },
    langs: [
      'js',
      'typescript',
      'cpp',
      customLanguage,
      // ...
    ],
    transformers: [
      // ...
    ],
  }
})
```

Xem thêm danh sách [Ngôn ngữ tích hợp sẵn](https://shiki.style/languages) và [Chủ đề tích hợp sẵn](https://shiki.style/themes), cũng như tham khảo [tài liệu Shiki](https://shiki.style) để biết thêm chi tiết.

:::info
Hiện tại, Shiki Magic Move không hỗ trợ transformers.
:::

## Cấu hình Prism

:::warning
Hỗ trợ Prism đã bị khai tử và sẽ bị loại bỏ trong tương lai. Vui lòng cân nhắc sử dụng Shiki thay thế.
:::

Để cấu hình Prism, bạn chỉ cần import file CSS của theme hoặc sử dụng [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) để cấu hình theme cho cả chế độ sáng và tối. Tham khảo tài liệu của thư viện để biết thêm chi tiết.
