# Đánh dấu

<<<<<<< HEAD
Slidev đi kèm với hai công cụ đánh dấu cú pháp để bạn lựa chọn:

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

**Prism** là một trong những công cụ đánh dấu cú pháp phổ biến nhất. Việc đánh dấu được thực hiện bằng cách thêm các lớp token vào code và nó được đánh dấu bằng cách sử dụng CSS. Bạn có thể duyệt qua [chủ đề chính thức](https://github.com/PrismJS/prism-themes), hoặc tự tạo/tùy chỉnh một chủ đề rất dễ dàng bằng cách sử dụng [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars).

Mặt khác, **Shiki**, à một công cụ đánh dấu cú pháp hỗ trợ ngữ pháp TextMate. Nó tạo ra các token có màu, vì vậy không cần thêm CSS. Vì nó có hỗ trợ ngữ pháp tuyệt vời, màu sắc được tạo ra rất chính xác, giống như những gì bạn sẽ thấy trong VS Code. Shiki cũng đi kèm với [một loạt các chủ đề cài sẵn](https://github.com/shikijs/shiki/blob/master/docs/themes.md). Nhược điểm của Shiki là nó cũng yêu cầu các chủ đề TextMate (tương thích với chủ đề VS Code) để làm nổi bật, có thể khó tùy chỉnh hơn một chút.

Chủ đề slidev thường hỗ trợ cả Prism và Shiki, nhưng tùy thuộc vào chủ đề bạn đang sử dụng, nó có thể chỉ hỗ trợ một trong số chúng.

Khi bạn có sự lựa chọn, sự cân bằng về cơ bản là:

- **Prism** để tùy chỉnh dễ dàng hơn
- **Shiki** để đánh dấu chính xác hơn

Theo mặc định, Slidev sử dụng Prism. Bạn có thể thay đổi nó bằng cách sửa đổi frontmatter của mình:

```yaml
---
highlighter: shiki
---
```

## Cấu hình Prism

Để định cấu hình Prism, bạn chỉ có thể nhập css chủ đề hoặc sử dụng [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) để định cấu hình chủ đề cho cả chế độ sáng và tối. Tham khảo tài liệu của nó để biết thêm chi tiết.
=======
Slidev uses [Shiki](https://github.com/shikijs/shiki) as the code highlighter. It's a TextMate grammar-powered syntax highlighter that generates colored tokens, so there is no additional CSS needed. Since it has great grammar support, the generated colors are very accurate, just like what you will see in VS Code. Shiki also comes with [a bunch of built-in themes](https://shiki.style/themes). In Slidev, we also provided the [TwoSlash](#twoslash-integration) support is also built-in.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

## Cấu hình Shiki

<Environment type="both" />

<<<<<<< HEAD
Tạo file `./setup/shiki.ts` với nội dung sau
=======
Create `./setup/shiki.ts` file with the following content:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'min-dark',
      light: 'min-light',
    },
    transformers: [
      // ...
    ],
  }
})
```

<<<<<<< HEAD
Tham khảo [tài liệu của Shiki](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes) để biết các tên chủ đề có sẵn.

Hoặc nếu bạn muốn sử dụng chủ đề của riêng mình:
=======
If you want to add custom theme or language (TextMate grammar/themes in JSON), you can import them in the setup file:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'
import customTheme from './customTheme.tmTheme.json'
import customLanguage from './customLanguage.tmLanguage.json'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: customTheme,
      light: 'min-light',
    },
    langs: [
      'js',
      'typescript',
      'cpp',
      customLanguage,
      // ...
    ],
    transformers: [
      // ...
    ],
  }
})
```

Check [Built-in languages](https://shiki.style/languages) and [Built-in themes](https://shiki.style/themes), and refer to [Shiki's docs](https://shiki.style) for more details.

:::info
For now, Shiki Magic Move does not support transformers.
:::

## Configure Prism

:::warning
Prism support is deprecated and will be removed in the future. Please consider using Shiki instead.
:::

To configure your Prism, you can just import the theme CSS or use [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) to configure themes for both light and dark mode. Refer to its docs for more details.
