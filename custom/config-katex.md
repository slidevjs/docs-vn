# Cấu hình KaTeX

<Environment type="node" />

Tạo `./setup/katex.ts` với nội dung sau:

```ts
import { defineKatexSetup } from '@slidev/types'

export default defineKatexSetup(() => {
  return {
    /* ... */
  }
})
```

Trong quá trình thiết lập, bạn có thể cung cấp cài đặt tùy chỉnh cho [Các lựa chọn KaTex](https://katex.org/docs/options.html). Tham khảo định nghĩa loại và tài liệu của chúng để biết thêm chi tiết.
