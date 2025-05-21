---
outline: deep
---

# Bắt đầu

Slidev <sup>(slide + dev, **/slaɪdɪv/**)</sup> là một công cụ tạo và trình chiếu slide dựa trên web. Nó được thiết kế cho các nhà phát triển tập trung vào việc viết nội dung bằng Markdown đồng thời có khả năng sử dụng HTML và các component Vue để tạo ra các layout hoàn hảo với các demo tương tác được nhúng trong bài thuyết trình của bạn.

Nó sử dụng một file markdown đầy đủ tính năng để tạo ra các slide đẹp mắt với khả năng reload nhanh, cùng nhiều tích hợp sẵn như live coding, export PDF, record bài thuyết trình và nhiều hơn nữa. Vì được xây dựng trên nền web, bạn có thể làm bất cứ điều gì với Slidev — khả năng là vô tận.

Bạn có thể tìm hiểu thêm lý do tạo ra dự án trong phần [Tại sao chọn Slidev](/guide/why).

## Tính năng

- 📝 [**Dựa trên Markdown**](/guide/syntax.html) - sử dụng trình soạn thảo và quy trình làm việc bạn yêu thích
- 🧑‍💻 [**Thân thiện với lập trình viên**](/guide/syntax.html#code-blocks) - tô màu cú pháp, live coding, v.v.
- 🎨 [**Có thể thay đổi giao diện**](/themes/gallery.html) - giao diện có thể chia sẻ và dùng qua npm packages
- 🌈 [**Bắt mắt**](/guide/syntax.html#embedded-styles) - tiện ích theo yêu cầu qua [UnoCSS](https://github.com/unocss/unocss)
- 🤹 [**Tương tác**](/custom/directory-structure.html#components) - nhúng các component Vue một cách liền mạch
- 🎙 [**Chế độ trình chiếu**](/guide/presenter-mode.html) - dùng cửa sổ khác hoặc điện thoại để điều khiển slide
- 🎨 [**Vẽ & chú thích**](/guide/drawing.html) - vẽ và chú thích trên slide
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - hỗ trợ công thức toán học LaTeX tích hợp sẵn
- 📰 [**Sơ đồ**](/guide/syntax.html#diagrams) - tạo sơ đồ bằng mô tả văn bản
- 🌟 [**Biểu tượng**](/guide/syntax.html#icons) - truy cập biểu tượng từ mọi bộ icon
- 💻 [**Trình soạn thảo**](/guide/editors.html) - trình soạn thảo tích hợp, hoặc [extension cho VS Code](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**Ghi hình**](/guide/recording.html) - ghi hình tích hợp và xem camera
- 📤 [**Di động**](/guide/exporting.html) - export ra PDF, PNG hoặc SPA có thể host
- ⚡️ [**Nhanh**](https://vitejs.dev) - reload ngay lập tức nhờ [Vite](https://vitejs.dev)
- 🛠 [**Dễ tuỳ chỉnh**](/custom/config-vite.html) - dùng plugin Vite, component Vue hoặc bất kỳ npm packages nào

## Khởi tạo bài thuyết trình đầu tiên

### Thử trên trình duyệt

Chạy Slidev ngay trên trình duyệt của bạn: [sli.dev/new](https://sli.dev/new)

[![](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://sli.dev/new)

### Tạo trên máy local

::: code-group

```bash [npm]
npm init slidev@latest
```

```bash [yarn]
yarn create slidev
```

```bash [pnpm]
pnpm create slidev
```

:::

Hãy làm theo hướng dẫn và bắt đầu tạo slide của bạn ngay bây giờ! Để biết thêm chi tiết về cú pháp markdown, hãy đọc qua [hướng dẫn cú pháp](/guide/syntax).

## Giao diện dòng lệnh

Trong dự án đã cài Slidev, bạn có thể sử dụng lệnh `slidev` trong các script npm của mình.

```json
{
  "scripts": {
    "dev": "slidev", // start dev server
    "build": "slidev build", // build for production SPA
    "export": "slidev export" // export slides to pdf
  }
}
```

Nếu không, bạn có thể sử dụng nó với [`npx`](https://github.com/npm/cli/blob/latest/bin/npx)

```bash
$ npx slidev
```

Chạy `slidev --help` để xem thêm các tùy chọn có sẵn.

## Cú pháp Markdown

Slidev đọc file `slides.md` trong thư mục gốc dự án của bạn và chuyển đổi chúng thành các slide. Mỗi khi bạn thay đổi file này, nội dung các slide sẽ được cập nhật ngay lập tức. Ví dụ:

````md
# Slidev

Hello World

---

# Page 2

Directly use code blocks for highlighting

```ts
console.log('Hello, World!')
```

---

# Page 3
````

Tìm hiểu thêm về cú pháp Markdown của Slidev trong [hướng dẫn cú pháp](/guide/syntax).

## Công nghệ sử dụng

Slidev được tạo nên nhờ sự kết hợp của các công cụ và công nghệ sau:

- [Vite](https://vitejs.dev) - Công cụ frontend cực nhanh
- [Vue 3](https://v3.vuejs.org/) kết hợp với [Markdown](https://daringfireball.net/projects/markdown/syntax) - Tập trung vào nội dung đồng thời tận dụng sức mạnh của HTML và các component Vue khi cần
- [UnoCSS](https://github.com/unocss/unocss) - Framework CSS tiện ích theo yêu cầu, giúp bạn dễ dàng tạo kiểu cho slide
- [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - Hỗ trợ đoạn mã với tính năng live coding hàng đầu
- [RecordRTC](https://recordrtc.org) - Tích hợp ghi hình và xem camera
- Gia đình [VueUse](https://vueuse.org) - [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), v.v.
- [Iconify](https://iconify.design/) - Bộ sưu tập iconsets
- [Drauu](https://github.com/antfu/drauu) - Hỗ trợ vẽ và chú thích
- [KaTeX](https://katex.org/) - Hiển thị công thức toán LaTeX
- [Mermaid](https://mermaid-js.github.io/mermaid) - Tạo sơ đồ bằng văn bản
