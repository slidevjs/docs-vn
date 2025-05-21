# Cấu hình KaTeX

<Environment type="node" />

Tạo file `./setup/katex.ts` với nội dung sau:

```ts
import { defineKatexSetup } from '@slidev/types'

export default defineKatexSetup(() => {
  return {
    /* ... */
  }
})
```

Với cấu hình này, bạn có thể cung cấp các thiết lập tùy chỉnh cho [KaTex Options](https://katex.org/docs/options.html). Tham khảo định nghĩa type và tài liệu của họ để biết thêm chi tiết.
