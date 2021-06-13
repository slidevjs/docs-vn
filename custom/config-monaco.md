# Cấu hình Monaco

<Environment type="client" />

> Theo mặc định, Monaco chỉ được bật trên chế độ dev. Để nó hoạt động trên bản dựng SPA, hãy thêm `monaco: true` vào cấu hình frontmatter của bạn.

Tạo `./setup/monaco.ts` với nội dung sau:

```ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // use `monaco` to configure
})
```

Tìm hiểu nhiều hơn tại [Cấu hình Monaco](https://github.com/Microsoft/monaco-editor).

## Sử dụng

Để sử dụng Monaco trong các trang trình bày của bạn, chỉ cần thêm `{monaco}` vào các đoạn code của bạn:

~~~js
//```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

Và

~~~js
//```js {monaco}
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

## Xuất trang trình bày

Theo mặc định, Monaco sẽ CHỈ hoạt động ở chế độ `dev`. Nếu bạn cũng muốn có nó trong SPA đã xuất, bạn có thể định cấu hình nó trong frontmatter của mình:

```yaml
---
monaco: true # default "dev"
---
```

## Các loại cài đặt tự động

Khi bạn sử dụng TypeScript với Monaco, các kiểu dependencie sẽ được cài đặt tự động cho phía client.

~~~ts
//```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
//```
~~~

Trong ví dụ trên, chỉ cần đảm bảo rằng `vue` và `@vueuse/core` được cài đặt cục bộ dưới dạng dependencies / devDependencies, Slidev sẽ xử lý phần còn lại và trình soạn thảo của bạn sẽ hoạt động!
