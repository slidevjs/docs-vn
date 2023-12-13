# Đánh dấu

Slidev đi kèm với hai công cụ đánh dấu cú pháp để bạn lựa chọn:

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)
- [Shikiji](https://github.com/antfu/shikiji)

**Prism** là một trong những công cụ đánh dấu cú pháp phổ biến nhất. Việc đánh dấu được thực hiện bằng cách thêm các lớp token vào code và nó được đánh dấu bằng cách sử dụng CSS. Bạn có thể duyệt qua [chủ đề chính thức](https://github.com/PrismJS/prism-themes), hoặc tự tạo/tùy chỉnh một chủ đề rất dễ dàng bằng cách sử dụng [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars).

Mặt khác, **Shiki**, à một công cụ đánh dấu cú pháp hỗ trợ ngữ pháp TextMate. Nó tạo ra các token có màu, vì vậy không cần thêm CSS. Vì nó có hỗ trợ ngữ pháp tuyệt vời, màu sắc được tạo ra rất chính xác, giống như những gì bạn sẽ thấy trong VS Code. Shiki cũng đi kèm với [một loạt các chủ đề cài sẵn](https://github.com/shikijs/shiki/blob/master/docs/themes.md). Nhược điểm của Shiki là nó cũng yêu cầu các chủ đề TextMate (tương thích với chủ đề VS Code) để làm nổi bật, có thể khó tùy chỉnh hơn một chút.

<<<<<<< HEAD
Chủ đề slidev thường hỗ trợ cả Prism và Shiki, nhưng tùy thuộc vào chủ đề bạn đang sử dụng, nó có thể chỉ hỗ trợ một trong số chúng.
=======
**Shikiji** is a ESM rewrite of Shiki bringing many improvements and new features. You could have [AST-based transformers](https://github.com/antfu/shikiji#hast-transformers) to customize how the code is rendered. And the [TwoSlash](#twoslash) support is also built-in.

Slidev themes usually support both Prism and Shiki, but depending on the theme you are using, it might only support one of them.
>>>>>>> a6529b60e6a2f963398d169ce543df66469f74df

Khi bạn có sự lựa chọn, sự cân bằng về cơ bản là:

<<<<<<< HEAD
- **Prism** để tùy chỉnh dễ dàng hơn
- **Shiki** để đánh dấu chính xác hơn

Theo mặc định, Slidev sử dụng Prism. Bạn có thể thay đổi nó bằng cách sửa đổi frontmatter của mình:
=======
- **Prism** for easier customization
- **Shiki** for more accurate highlighting
- **Shikiji** on top of Shiki, it also enables [TwoSlash](#twoslash) support and custom transformers addons. 

Slidev uses Prism by default for compatibility. We recommend using Shikiji for more accurate and feature-rich highlighting, you can switch to it by adding the following to your `slides.md`:
>>>>>>> a6529b60e6a2f963398d169ce543df66469f74df

```yaml
---
highlighter: shikiji
---
```

<<<<<<< HEAD
## Cấu hình Prism
=======
## TwoSlash Integration

This feature is only available when you set `highlighter` to `shikiji`.

[TwoSlash](https://www.typescriptlang.org/dev/twoslash/) is a powerful tool for rendering TypeScript code blocks with type informations on hover or inlined. It's quite useful for preapring slides for JavaScript/TypeScript related topics.

To use it, you can add `twoslash` to the code block's language identifier:

~~~md
```ts twoslash
console.log('hello')
```
~~~

And example of TwoSlash enabled code snippet [can be found here](https://antfu.me/posts/shikiji-twoslash).

## Configure Prism
>>>>>>> a6529b60e6a2f963398d169ce543df66469f74df

Để định cấu hình Prism, bạn chỉ có thể nhập css chủ đề hoặc sử dụng [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) để định cấu hình chủ đề cho cả chế độ sáng và tối. Tham khảo tài liệu của nó để biết thêm chi tiết.

## Cấu hình Shiki

<Environment type="node" />

Tạo file `./setup/shiki.ts` với nội dung sau

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    theme: {
      dark: 'min-dark',
      light: 'min-light',
    },
  }
})
```

Tham khảo [tài liệu của Shiki](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes) để biết các tên chủ đề có sẵn.

Hoặc nếu bạn muốn sử dụng chủ đề của riêng mình:

```ts
/* ./setup/shiki.ts */

import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme('path/to/theme.json'),
      light: await loadTheme('path/to/theme.json'),
    },
  }
})
```

## Configure Shikiji

<Environment type="node" />

Create `./setup/shikiji.ts` file with the following content:

```ts
/* ./setup/shikiji.ts */
import { defineShikijiSetup } from '@slidev/types'

export default defineShikijiSetup(() => {
  return {
    themes: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
    },
    transformers: [
      ...
    ]
  }
})
```

Refer to [Shikiji's docs](https://github.com/antfu/shikji) for all available options.

> It make it easier for the community to adapt, when no `shikiji.ts` it presented, we will look for `shiki.ts` and try to convert it to Shikiji options.
