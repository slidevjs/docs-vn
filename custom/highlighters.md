# Đánh dấu

<<<<<<< HEAD
Slidev đi kèm với hai công cụ đánh dấu cú pháp để bạn lựa chọn:
=======
Slidev comes with two syntax highlighters for you to choose from:
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

**Prism** là một trong những công cụ đánh dấu cú pháp phổ biến nhất. Việc đánh dấu được thực hiện bằng cách thêm các lớp token vào code và nó được đánh dấu bằng cách sử dụng CSS. Bạn có thể duyệt qua [chủ đề chính thức](https://github.com/PrismJS/prism-themes), hoặc tự tạo/tùy chỉnh một chủ đề rất dễ dàng bằng cách sử dụng [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars).

<<<<<<< HEAD
Mặt khác, **Shiki**, à một công cụ đánh dấu cú pháp hỗ trợ ngữ pháp TextMate. Nó tạo ra các token có màu, vì vậy không cần thêm CSS. Vì nó có hỗ trợ ngữ pháp tuyệt vời, màu sắc được tạo ra rất chính xác, giống như những gì bạn sẽ thấy trong VS Code. Shiki cũng đi kèm với [một loạt các chủ đề cài sẵn](https://github.com/shikijs/shiki/blob/master/docs/themes.md). Nhược điểm của Shiki là nó cũng yêu cầu các chủ đề TextMate (tương thích với chủ đề VS Code) để làm nổi bật, có thể khó tùy chỉnh hơn một chút.
=======
**Shiki** is a TextMate grammar-powered syntax highlighter. It generates colored tokens, so there is no additional CSS needed. Since it has great grammar support, the generated colors are very accurate, just like what you will see in VS Code. Shiki also comes with [a bunch of built-in themes](https://shiki.style/themes). In Slidev, we also provided the [TwoSlash](#twoslash-integration) support is also built-in.
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

Chủ đề slidev thường hỗ trợ cả Prism và Shiki, nhưng tùy thuộc vào chủ đề bạn đang sử dụng, nó có thể chỉ hỗ trợ một trong số chúng.

Khi bạn có sự lựa chọn, sự cân bằng về cơ bản là:

<<<<<<< HEAD
- **Prism** để tùy chỉnh dễ dàng hơn
- **Shiki** để đánh dấu chính xác hơn

Theo mặc định, Slidev sử dụng Prism. Bạn có thể thay đổi nó bằng cách sửa đổi frontmatter của mình:
=======
- **Prism** for easier customization
- **Shiki** for accurate highlighting

Slidev uses Shiki by default since v0.47. You can switch to it by adding the following to your `slides.md`:
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

```yaml
---
highlighter: Prism
---
```

<<<<<<< HEAD
## Cấu hình Prism

Để định cấu hình Prism, bạn chỉ có thể nhập css chủ đề hoặc sử dụng [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) để định cấu hình chủ đề cho cả chế độ sáng và tối. Tham khảo tài liệu của nó để biết thêm chi tiết.

## Cấu hình Shiki
=======
## Configure Shiki
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

<Environment type="node" />

Tạo file `./setup/shiki.ts` với nội dung sau

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
    ]
  }
})
```

<<<<<<< HEAD
Tham khảo [tài liệu của Shiki](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes) để biết các tên chủ đề có sẵn.

Hoặc nếu bạn muốn sử dụng chủ đề của riêng mình:
=======
Refer to [Shiki's docs](https://shiki.style) for available theme names.

## Configure Prism
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

To configure your Prism, you can just import the theme CSS or use [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) to configure themes for both light and dark mode. Refer to its docs for more details.
