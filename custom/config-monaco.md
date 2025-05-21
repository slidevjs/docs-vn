# Cấu hình Monaco

<Environment type="client" />

Tạo file `./setup/monaco.ts` với nội dung sau:

```ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // use `monaco` to configure
})
```

Tìm hiểu thêm về [cách cấu hình Monaco](https://github.com/Microsoft/monaco-editor).

## Cách sử dụng

Để sử dụng Monaco trong các slide của bạn, chỉ cần thêm `{monaco}` vào cuối đoạn code của bạn:

````md
```js {monaco} // [!code ++]
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
```
````

## Type TypeScript

Khi sử dụng TypeScript với Monaco, các type cho các dependencies sẽ được cài đặt tự động ở phía client.

````md
```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
```
````

Trong ví dụ trên, hãy chắc chắn rằng `vue` và `@vueuse/core` đã được cài đặt cục bộ dưới dạng dependencies / devDependencies, Slidev sẽ tự động xử lý phần còn lại để các type hoạt động cho editor một cách tự động. Khi deploy dưới dạng SPA, các type này cũng sẽ được bundle để phục vụ cho việc static hosting.

### Type bổ sung

Slidev sẽ quét tất cả các đoạn code Monaco trong các slide của bạn và tự động import các type cho các thư viện đã sử dụng. Trong trường hợp nó bỏ sót một số thư viện, bạn có thể chỉ định rõ ràng các package bổ sung để import type như sau:

```md
---
monacoTypesAdditionalPackages:
  - lodash-es
  - foo
---
```

### Tự động nhận dạng type

Bạn có thể tùy chọn chuyển sang load các type từ CDN bằng cách thiết lập phần headmatter sau:

```md
---
monacoTypesSource: ata
---
```

Tính năng này được hỗ trợ bởi [`@typescript/ata`](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ata) và chạy hoàn toàn phía client.

## Cấu hình Theme

Kể từ phiên bản v0.48.0, Monaco sẽ tái sử dụng theme Shiki mà bạn đã cấu hình trong [file cài đặt Shiki](/custom/highlighters#configure-shiki), được hỗ trợ bởi [`@shikijs/monaco`](https://shiki.style/packages/monaco). Bạn không cần phải lo lắng nữa vì nó sẽ giữ cho style nhất quán với các khối code khác của bạn.

## Cấu hình Editor

> Có từ phiên bản v0.43.0 trở đi

Nếu bạn muốn tùy chỉnh editor Monaco, bạn có thể truyền một object `editorOptions` phù hợp với định nghĩa [Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html).

````md
```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('HelloWorld')
```
````

Ngoài ra, nếu bạn muốn các tuỳ chọn này được áp dụng cho mọi instance của Monaco, bạn có thể trả về chúng trong hàm `defineMonacoSetup`.

```ts
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

## Vô hiệu hóa

Kể từ phiên bản v0.48.0, editor Monaco được enable theo mặc định và chỉ được bundle khi bạn sử dụng nó. Nếu bạn muốn disable, bạn có thể đặt `monaco` thành `false` trong phần frontmatter của slide:

```yaml
---
monaco: false # can also be `dev` or `build` tp conditionally enable it
---
```
