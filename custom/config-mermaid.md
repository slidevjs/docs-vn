# Cấu hình Mermaid

<Environment type="client" />

Tạo file `./setup/mermaid.ts` với nội dung sau:

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'forest',
  }
})
```

Với cấu hình này, bạn có thể cung cấp các thiết lập mặc định tùy chỉnh cho [Mermaid](https://mermaid-js.github.io/). Tham khảo các định nghĩa kiểu và tài liệu của nó để biết thêm chi tiết.

## Theme / style tùy chỉnh

Trong trường hợp bạn muốn tạo theme hoặc style Mermaid tùy chỉnh, bạn có thể làm điều này bằng cách định nghĩa `themeVariables` như trong ví dụ sau:

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      // General theme variables
      noteBkgColor: '#181d29',
      noteTextColor: '#F3EFF5cc',
      noteBorderColor: '#404551',

      // Sequence diagram variables
      actorBkg: '#0E131F',
      actorBorder: '#44FFD2',
      actorTextColor: '#F3EFF5',
      actorLineColor: '#F3EFF5',
      signalColor: '#F3EFF5',
      signalTextColor: '#F3EFF5',
    }
  }
})
```

Bạn có thể tìm tất cả các biến chủ đề trên trang [Cấu hình Theme Mermaid](https://mermaid.js.org/config/theming.html).
