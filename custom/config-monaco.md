# Cấu hình Monaco

<Environment type="client" />

<<<<<<< HEAD
> Theo mặc định, Monaco chỉ được bật trên chế độ dev. Để nó hoạt động trên bản dựng SPA, hãy thêm `monaco: true` vào cấu hình frontmatter của bạn.

Tạo `./setup/monaco.ts` với nội dung sau:
=======
Create `./setup/monaco.ts` with the following content:
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c

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

<<<<<<< HEAD
Theo mặc định, Monaco sẽ CHỈ hoạt động ở chế độ `dev`. Nếu bạn cũng muốn có nó trong SPA đã xuất, bạn có thể định cấu hình nó trong frontmatter của mình:
=======
By default, Monaco will ONLY work on `dev` mode. If you would like to have it available in the exported SPA, configure it in your frontmatter:
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c

```yaml
---
monaco: true # default "dev"
---
```

## Các loại cài đặt tự động

<<<<<<< HEAD
Khi bạn sử dụng TypeScript với Monaco, các kiểu dependencie sẽ được cài đặt tự động cho phía client.
=======
When use TypeScript with Monaco, types for dependencies will be installed to the client-side automatically.
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c

~~~ts
//```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
//```
~~~

<<<<<<< HEAD
Trong ví dụ trên, chỉ cần đảm bảo rằng `vue` và `@vueuse/core` được cài đặt cục bộ dưới dạng dependencies / devDependencies, Slidev sẽ xử lý phần còn lại và trình soạn thảo của bạn sẽ hoạt động!
=======
In the example above, make sure `vue` and `@vueuse/core` are installed locally as dependencies / devDependencies, Slidev will handle the rest to get the types working for the editor automatically!

## Configure Themes

The theme is controlled by Slidev based on the light/dark theme. If you want to customize it, you can pass the theme id to the setup function:

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    theme: {
      dark: 'vs-dark',
      light: 'vs',
    },
  }
})
```

If you want to load custom themes:

```ts
import { defineMonacoSetup } from '@slidev/types'

// change to your themes
import dark from 'theme-vitesse/themes/vitesse-dark.json'
import light from 'theme-vitesse/themes/vitesse-light.json'

export default defineMonacoSetup((monaco) => {
  monaco.editor.defineTheme('vitesse-light', light as any)
  monaco.editor.defineTheme('vitesse-dark', dark as any)

  return {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  }
})
```

> If you are creating a theme for Slidev, use dynamic `import()` inside the setup function to get better tree-shaking and code-splitting results.
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c
