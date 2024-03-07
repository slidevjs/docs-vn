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

````md
```js {monaco} // [!code ++]
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
<<<<<<< HEAD
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
=======
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2
```
````

<<<<<<< HEAD
## Các loại cài đặt tự động
=======
## TypeScript Types
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2

<<<<<<< HEAD
Khi bạn sử dụng TypeScript với Monaco, các kiểu dependencie sẽ được cài đặt tự động cho phía client.
=======
When use TypeScript with Monaco, types for dependencies will be installed to the client-side automatically.
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c

````md
```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
```
````

<<<<<<< HEAD
<<<<<<< HEAD
Trong ví dụ trên, chỉ cần đảm bảo rằng `vue` và `@vueuse/core` được cài đặt cục bộ dưới dạng dependencies / devDependencies, Slidev sẽ xử lý phần còn lại và trình soạn thảo của bạn sẽ hoạt động!
=======
In the example above, make sure `vue` and `@vueuse/core` are installed locally as dependencies / devDependencies, Slidev will handle the rest to get the types working for the editor automatically!
=======
In the example above, make sure `vue` and `@vueuse/core` are installed locally as dependencies / devDependencies, Slidev will handle the rest to get the types working for the editor automatically. When deploy as SPA, those types will also be bundled for static hosting.

### Additional Types

Slidev will scan all the monaco codeblocks in your slides and import the types for those used libraries for you. In case it missed some, you can explicitly specify extra packages to import the types for:

```md
---
monacoTypesAdditionalPackages:
  - lodash-es
  - foo
---
```

### Auto Type Acquisition

You can optionally switch to load types from CDN by setting the following headmatter:

```md
---
monacoTypesSource: ata
---
```

This feature is powered by [`@typescript/ata`](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ata) and runs completely on the client-side.
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2

## Configure Themes

Since v0.48.0, Monaco will reuse the Shiki theme you configured in [Shiki's setup file](/custom/highlighters#configure-shiki), powered by [`@shikijs/monaco`](https://shiki.style/packages/monaco). You don't need to worry about it anymore and it will have a consistent style with the rest of your code blocks.

## Configure the Editor

> Available since v0.43.0

If you would like to customize the Monaco editor you may pass an `editorOptions` object that matches the [Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html) definition.

````md
```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('HelloWorld')
```
````

Alternatively if you would like these options to be applied to every Monaco instance, you can return them in the `defineMonacoSetup` function

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

## Disabling

Since v0.48.0, Monaco editor is enabled by default and only be bundled when you use it. If you want to disable it, you can set `monaco` to `false` in the frontmatter of your slide:

```yaml
---
monaco: false # can also be `dev` or `build` tp conditionally enable it
---
```
<<<<<<< HEAD

> If you are creating a theme for Slidev, use dynamic `import()` inside the setup function to get better tree-shaking and code-splitting results.
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c
=======
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2
