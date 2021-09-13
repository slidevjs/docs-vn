# Bắt đầu

## Tổng quan

Slidev <sup>(slide + dev, `/slʌɪdɪv/`)</sup> là một trình tạo và trình chiếu slide dựa trên web. Nó được thiết kế để các nhà lập trình tập trung vào việc viết nội dung trong Markdown đồng thời có sự hỗ trợ của các component HTML và Vue để cung cấp layout và thiết kế hoàn hảo trên từng pixel trong bản trình bày của bạn.

Nó sử dụng file markdown giàu tính năng để tạo các slide đẹp với trải nghiệm tải lại tức thì, cùng với nhiều tích hợp tích hợp như code trực tiếp, xuất PDF, ghi bản trình bày, v.v... Vì nó được cung cấp bởi web, bạn có thể làm bất cứ điều gì với Slidev - khả năng là vô tận.

Bạn có thể tìm hiểu thêm về cơ sở lý luận đằng sau dự án trong phần [Tại sao chọn Slidev](/guide/why).

### Tính năng

<<<<<<< HEAD
- 📝 [**Dựa trên Markdown**](/guide/syntax.html) - sử dụng trình soạn thảo và quy trình làm việc yêu thích của bạn
- 🧑‍💻 [**Thân thiện với nhà lập trình**](/guide/syntax.html#code-blocks) - đánh dấu cú pháp tích hợp, code trực tiếp, v.v...
- 🎨 [**Themable**](/themes/gallery.html) - chủ đề có thể được chia sẻ và sử dụng với package npm
- 🌈 [**Stylish**](/guide/syntax.html#embedded-styles) - [Windi CSS](https://windicss.org/) tiện ích theo yêu cầu, stylesheet được nhúng dễ sử dụng
- 🤹 [**Tương tác**](/custom/directory-structure.html#components) - nhúng các component Vue một cách liền mạch
- 🎙 [**Chế độ trình bày**](/guide/presenter-mode.html) - sử dụng cửa sổ khác hoặc thậm chí điện thoại của bạn để điều khiển các slide của bạn
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - tích hợp LaTeX hỗ trợ phương trình toán học
- 📰 [**Diagrams**](/guide/syntax.html#diagrams) - tạo sơ đồ với mô tả bằng văn bản
- 🌟 [**Icons**](/guide/syntax.html#icons) - truy cập trực tiếp vào các icon từ bất kỳ bộ icon nào
- 💻 [**Trình soạn thảo**](/guide/editors.html) - trình soạn thảo tích hợp, hoặc [extension cho VS Code](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**Recording**](/guide/recording.html) - tích hợp recording and xem camera
- 📤 [**Portable**](/guide/exporting.html) - xuất sang PDF, PNGs, hoặc thậm chí là một SPA có thể lưu trữ
- ⚡️ [**Nhanh**](https://vitejs.dev) - tải lại tức thì được cung cấp bởi [Vite](https://vitejs.dev)
- 🛠 [**Hackable**](/custom/config-vite.html) - sử dụng plugin Vite, component Vue hoặc bất kỳ package npm nào
=======
- 📝 [**Markdown-based**](/guide/syntax.html) - use your favorite editors and workflow
- 🧑‍💻 [**Developer Friendly**](/guide/syntax.html#code-blocks) - built-in syntax highlighting, live coding, etc.
- 🎨 [**Themable**](/themes/gallery.html) - theme can be shared and used with npm packages
- 🌈 [**Stylish**](/guide/syntax.html#embedded-styles) - [Windi CSS](https://windicss.org/) on-demand utilities, easy-to-use embedded stylesheets
- 🤹 [**Interactive**](/custom/directory-structure.html#components) - embedding Vue components seamlessly
- 🎙 [**Presenter Mode**](/guide/presenter-mode.html) - use another window, or even your phone to control your slides
- 🎨 [**Drawing**](/guide/drawing.html) - draw and annotate on your slides
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - built-in LaTeX math equations support
- 📰 [**Diagrams**](/guide/syntax.html#diagrams) - creates diagrams with textual descriptions 
- 🌟 [**Icons**](/guide/syntax.html#icons) - Access to icons from any iconset directly
- 💻 [**Editors**](/guide/editors.html) - integrated editor, or [extension for VS Code](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**Recording**](/guide/recording.html) - built-in recording and camera view
- 📤 [**Portable**](/guide/exporting.html) - export into PDF, PNGs, or even a hostable SPA
- ⚡️ [**Fast**](https://vitejs.dev) - instant reloading powered by [Vite](https://vitejs.dev)
- 🛠 [**Hackable**](/custom/config-vite.html) - using Vite plugins, Vue components, or any npm packages
>>>>>>> 565eb6709aa69ec36842f22c104f90ef741d9440

### Tech Stack

Slidev có thể thực hiện được bằng cách kết hợp các công cụ và công nghệ này.

<<<<<<< HEAD
- [Vite](https://vitejs.dev) - một công cụ frontend cực kỳ nhanh chóng
- [Vue 3](https://v3.vuejs.org/) cung cấp [Markdown](https://daringfireball.net/projects/markdown/syntax) - tập trung vào nội dung khi có sự hỗ trợ của các component HTML và Vue bất cứ khi nào cần thiết
- [Windi CSS](https://github.com/windicss/windicss) - khung CSS ưu tiên tiện ích theo yêu cầu, tạo style cho các slide của bạn một cách dễ dàng
- [Prism](https://github.com/PrismJS/prism), [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - hỗ trợ các đoạn code first-class với khả năng code trực tiếp
- [RecordRTC](https://recordrtc.org) - tích hợp recording và chế độ xem camera
- [VueUse](https://vueuse.org) -  [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), v.v...
- [Iconify](https://iconify.design/) - bộ sưu tập icon.
- [KaTeX](https://katex.org/) - render toán học LaTeX.
- [Mermaid](https://mermaid-js.github.io/mermaid) - Sơ đồ văn bản.
=======
- [Vite](https://vitejs.dev) - An extremely fast frontend tooling
- [Vue 3](https://v3.vuejs.org/) powered [Markdown](https://daringfireball.net/projects/markdown/syntax) - Focus on the content while having the power of HTML and Vue components whenever needed
- [Windi CSS](https://github.com/windicss/windicss) - On-demand utility-first CSS framework, style your slides at ease
- [Prism](https://github.com/PrismJS/prism), [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - First-class code snippets support with live coding capability
- [RecordRTC](https://recordrtc.org) - Built-in recording and camera view
- [VueUse](https://vueuse.org) family -  [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), etc.
- [Iconify](https://iconify.design/) - Iconsets collection.
- [Drauu](https://github.com/antfu/drauu) - Drawing and annotations support
- [KaTeX](https://katex.org/) - LaTeX math rendering.
- [Mermaid](https://mermaid-js.github.io/mermaid) - Textual Diagrams.
>>>>>>> 565eb6709aa69ec36842f22c104f90ef741d9440

### Dàn dựng bài thuyết trình đầu tiên của bạn

Với NPM:

```bash
$ npm init slidev
```

Với Yarn:

```bash
$ yarn create slidev
```

Làm theo lời nhắc và bắt đầu tạo slide của bạn ngay bây giờ! Để biết thêm chi tiết về cú pháp markdown, hãy đọc qua [hướng dẫn cú pháp](/guide/syntax).

### Giao diện Command Line

Trong một dự án có cài đặt Slidev, bạn có thể sử dụng hệ nhị phân `slidev` trong các tập lệnh npm của mình.

```json
{
  "scripts": {
    "dev": "slidev", // start dev server
    "build": "slidev build", // build for production SPA
    "export": "slidev export" // export slides to pdf
  }
}
```

Nếu không, bạn có thể sử dụng nó với [`npx`](https://www.npmjs.com/package/npx)

```bash
$ npx slidev
```

Chạy `slidev --help` để có thêm tùy chọn.

### Cú pháp Markdown

Slidev đọc file `slides.md` trong dự án gốc của bạn và chuyển đổi chúng thành các slide. Bất cứ khi nào bạn thực hiện thay đổi với nó, nội dung của các slide sẽ được cập nhật ngay lập tức. Ví dụ:

~~~md
# Slidev

Hello World

---

# Page 2

Directly use code blocks for highlighting

//```ts
console.log('Hello, World!')
//```

---

# Page 3
~~~

Đọc thêm về cú pháp Slidev Markdown trong [hướng dẫn cú pháp](/guide/syntax).
