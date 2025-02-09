---
outline: deep
---

# Bắt đầu

Slidev <sup>(slide + dev, **/slaɪdɪv/**)</sup> là một công cụ tạo và trình bày slide trên web. Được thiết kế cho các nhà phát triển, Slidev tập trung vào việc viết nội dung bằng Markdown. Với sức mạnh của các công nghệ web như Vue, bạn có thể tạo ra các thiết kế chính xác đến từng pixel và các bản trình bày tương tác.

::: tip

Bạn có thể tìm hiểu thêm về lý do đằng sau dự án này tại <LinkInline link="guide/why" />.

:::

<!--
- 📝 [**Markdown-based**](/guide/syntax) - focus on content and use your favorite editor
- 🧑‍💻 [**Developer Friendly**](/guide/syntax#code-blocks) - built-in code highlighting, live coding, etc.
- 🎨 [**Themable**](/resources/theme-gallery) - theme can be shared and used with npm packages
- 🌈 [**Stylish**](/guide/syntax#embedded-styles) - on-demand utilities via [UnoCSS](https://github.com/unocss/unocss).
- 🤹 [**Interactive**](/custom/directory-structure#components) - embedding Vue components seamlessly
- 🎙 [**Presenter Mode**](/guide/ui#presenter-mode) - use another window, or even your phone to control your slides
- 🎨 [**Drawing**](/features/drawing) - draw and annotate on your slides
- 🧮 [**LaTeX**](/guide/syntax#latex) - built-in LaTeX math equations support
- 📰 [**Diagrams**](/guide/syntax#diagrams) - creates diagrams using textual descriptions with [Mermaid.js](https://mermaid.js.org/)
- 🌟 [**Icons**](/guide/syntax#icons) - access to icons from any icon set directly
- 💻 [**Editor**](/guide/index#editor) - integrated editor, or the [VSCode extension](/features/vscode-extension)
- 🎥 [**Recording**](/features/recording) - built-in recording and camera view
- 📤 [**Portable**](/guide/exporting) - export into PDF, PNGs, or PPTX
- ⚡️ [**Fast**](https://vitejs.dev) - instant reloading powered by [Vite](https://vitejs.dev)
- 🛠 [**Hackable**](/custom/) - using Vite plugins, Vue components, or any npm packages
-->

<!-- <FeaturesAnimation /> -->

## Tạo slide

### Dùng thử trực tuyến

Bắt đầu Slidev ngay trong trình duyệt với StackBlitz: [sli.dev/new](https://sli.dev/new)

### Tạo tại máy cục bộ

> Yêu cầu cài đặt [Node.js](https://nodejs.org) >= 18.0.

Chạy lệnh sau để tạo dự án Slidev mới tại máy cục bộ:

::: code-group

```bash [pnpm]
# Nếu bạn chưa cài đặt pnpm
npm i -g pnpm

pnpm create slidev
```

```bash [npm]
# Không khuyến khích -
# NPM sẽ download các package mỗi lần bạn tạo một dự án mới,
# điều này sẽ chậm và chiếm nhiều không gian lưu trữ.

npm init slidev@latest
```

```bash [yarn]
yarn create slidev
```

:::

Làm theo các hướng dẫn để bắt đầu dự án slide của bạn. Nội dung slide nằm trong file `slides.md`, ban đầu chứa các ví dụ về hầu hết các tính năng của Slidev. Để biết thêm thông tin về cú pháp Markdown, vui lòng tham khảo <LinkInline link="guide/syntax" />.

:::: details Sử dụng file đơn (không khuyến nghị)

Nếu bạn thích sử dụng một file Markdown duy nhất làm slide, bạn có thể cài đặt CLI của Slidev global:

::: code-group

```bash [pnpm]
pnpm i -g @slidev/cli
```

```bash [npm]
npm i -g @slidev/cli
```

```bash [yarn]
yarn global add @slidev/cli
```

:::

Sau đó, bạn có thể tạo và bắt đầu một file slide đơn bằng:

```bash
slidev slides.md
```

::::

## Các lệnh cơ bản

Slidev cung cấp một tập lệnh trong CLI của nó. Dưới đây là một số lệnh phổ biến:

- `slidev` - Start server dev. Xem [lệnh dev](../builtin/cli#dev).
- `slidev export` - Export slide thành PDF, PPTX hoặc PNG. Xem <LinkInline link="guide/exporting" />.
- `slidev build` - Build slide thành một ứng dụng web tĩnh. Xem <LinkInline link="guide/hosting" />.
- `slidev format` - Format slide. Xem [lệnh format](../builtin/cli#format).
- `slidev --help` - Hiển thị thông báo trợ giúp.

Để chạy các lệnh này, bạn có thể thêm chúng vào các script trong `package.json` (điều này đã được thiết lập sẵn nếu dự án được tạo bằng `npm init slidev`):

```json
{
  "scripts": {
    "dev": "slidev --open",
    "build": "slidev build",
    "export": "slidev export"
  }
}
```

Sau đó, bạn chỉ cần chạy `npm run dev`, `npm run build`, và `npm run export`.

Để biết thêm thông tin về CLI, vui lòng xem [hướng dẫn CLI](../builtin/cli).

## Thiết lập trình soạn thảo {#editor}

Vì Slidev sử dụng Markdown làm nguồn nhập liệu, bạn có thể sử dụng bất kỳ trình soạn thảo nào mà bạn thích để tạo slide. Chúng tôi cũng cung cấp các công cụ giúp bạn chỉnh sửa slide thuận tiện hơn:

<LinkCard link="features/vscode-extension" />
<LinkCard link="features/side-editor" />
<LinkCard link="features/prettier-plugin" />

## Tham gia cộng đồng

Chúng tôi khuyến khích bạn tham gia [Discord Server](https://chat.sli.dev/) chính thức để nhận hỗ trợ, chia sẻ slide hoặc thảo luận về bất kỳ vấn đề nào liên quan đến Slidev.

Nếu bạn gặp lỗi, hãy thoải mái tạo một issue trên [GitHub](https://github.com/slidevjs/slidev/issues/new/choose).

## Tech stack

Slidev được tạo ra nhờ sự kết hợp của các công cụ và công nghệ sau:

- [Vite](https://vitejs.dev) - Công cụ frontend cực kỳ nhanh.
- [Vue 3](https://v3.vuejs.org/) kết hợp với [Markdown](https://daringfireball.net/projects/markdown/syntax) - Tập trung vào nội dung nhưng vẫn có sức mạnh của HTML và các component Vue khi cần.
- [UnoCSS](https://github.com/unocss/unocss) - Framework CSS utility-first theo yêu cầu, dễ dàng style cho slide.
- [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - Hỗ trợ code tuyệt vời với khả năng code trực tiếp.
- [RecordRTC](https://recordrtc.org) - Ghi âm và chế độ xem camera tích hợp.
- Dòng công cụ [VueUse](https://vueuse.org) - [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), v.v.
- [Iconify](https://iconify.design/) - Bộ sưu tập các icon.
- [Drauu](https://github.com/antfu/drauu) - Hỗ trợ vẽ và chú thích.
- [KaTeX](https://katex.org/) - Hiển thị toán học LaTeX.
- [Mermaid](https://mermaid-js.github.io/mermaid) - Sơ đồ dạng văn bản.
