# Cấu hình Monaco

<Environment type="client" />

Tạo file `./setup/monaco.ts` với nội dung sau:

```ts twoslash
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // sử dụng `monaco` để cấu hình
})
```

Tim hiểu thêm về [cấu hình Monaco](https://github.com/Microsoft/monaco-editor).

## Các kiểu dữ liệu TypeScript

Khi sử dụng TypeScript với Monaco, các kiểu dữ liệu của các phụ thuộc sẽ được cài đặt tự động ở phía máy khách.

````md
```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
```
````

Trong ví dụ trên, hãy đảm bảo rằng `vue` và `@vueuse/core` được cài đặt là các phụ thuộc (dependencies / devDependencies) trong dự án của bạn. Slidev sẽ xử lý phần còn lại để tự động làm việc với các kiểu dữ liệu cho trình soạn thảo. Khi được triển khai dưới dạng SPA, các kiểu dữ liệu này cũng sẽ được đóng gói cho việc static host.

### Các kiểu dữ liệu bổ sung

Slidev sẽ quét tất cả các khối code Monaco trong các slide của bạn và tự động import các kiểu dữ liệu cho những thư viện mà bạn đã sử dụng. Trong trường hợp Slidev bỏ sót một số kiểu dữ liệu, bạn có thể chỉ định rõ ràng các package bổ sung để import các kiểu dữ liệu cho chúng:

```md
---
monacoTypesAdditionalPackages:
  - lodash-es
  - foo
---
```

### Tự động nhận kiểu dữ liệu

Bạn có thể tùy chọn chuyển sang load các kiểu dữ liệu từ CDN bằng cách thiết lập headmatter sau:

```md
---
monacoTypesSource: ata
---
```

Tính năng này được hỗ trợ bởi [`@typescript/ata`](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ata) và hoạt động hoàn toàn ở phía máy khách.

## Cấu hình theme

Kể từ v0.48.0, Monaco sẽ tái sử dụng theme Shiki mà bạn đã cấu hình trong [file cấu hình của Shiki](/custom/config-highlighter#configure-shiki), được hỗ trợ bởi [`@shikijs/monaco`](https://shiki.style/packages/monaco). Bạn không cần phải lo lắng về điều này nữa, và nó sẽ có một style nhất quán với phần còn lại của các khối code trong Slidev.

## Cấu hình trình soạn thảo

> Có sẵn từ phiên bản v0.43.0

Nếu bạn muốn tùy chỉnh trình soạn thảo Monaco, bạn có thể truyền một object `editorOptions` tương thích với định nghĩa [Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html).

````md
```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('HelloWorld')
```
````

Ngoài ra, nếu bạn muốn những option này được áp dụng cho mọi thực thể Monaco, bạn có thể return chúng trong hàm `defineMonacoSetup`.

```ts twoslash
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    editorOptions: {
      wordWrap: 'on'
    }
  }
})
```

## Disable

Từ v0.48.0, trình chỉnh sửa Monaco được enable mặc định và chỉ được đóng gói khi bạn sử dụng nó. Nếu bạn muốn disable nó, bạn có thể đặt `monaco` thành `false` trong frontmatter của slide:

```yaml
---
monaco: false # cũng có thể là `dev` hoặc `build` để enable có điều kiện
---
```

## Cấu hình Code Runners

Để cấu hình cách Monaco Runner chạy code hoặc thêm hỗ trợ cho các ngôn ngữ tùy chỉnh, vui lòng tham khảo [Cấu hình Code Runners](/custom/config-code-runners).
