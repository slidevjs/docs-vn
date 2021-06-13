# Cấu hình Mermaid

<Environment type="client" />

Tạo `./setup/mermaid.ts` với nội dung sau:

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'forest',
  }
})
```

Trong quá trình thiết lập, bạn có thể cung cấp cài đặt mặc định tùy chỉnh cho [Mermaid](https://mermaid-js.github.io/). Tham khảo định nghĩa loại và tài liệu của chúng để biết thêm chi tiết.
