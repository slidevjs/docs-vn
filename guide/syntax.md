---
outline: deep
---

# Hướng dẫn cú pháp

Các slide của Slidev được viết dưới dạng các file Markdown, được gọi là **Slidev Markdown**. Một bài thuyết trình có một file Slidev Markdown làm mục nhập, mặc định là `./slides.md`, nhưng bạn có thể thay đổi nó bằng cách truyền đường dẫn file vào [các lệnh CLI](../builtin/cli).

Trong Slidev Markdown, bạn không chỉ có thể sử dụng [các tính năng cơ bản của Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) như thông thường, mà Slidev còn cung cấp thêm các tính năng để nâng cao các slide của bạn. Phần này sẽ đề cập đến cú pháp do Slidev giới thiệu. Vui lòng đảm bảo bạn đã nắm vững cú pháp Markdown cơ bản trước khi đọc hướng dẫn này.

## Dấu phân cách Slide {#slide-separators}

Sử dụng `---` được đệm với một dòng mới để phân tách các slide của bạn.

````md {5,15}
# Title

Xin chào, **Slidev**!

---

# Slide 2

Sử dụng khối code để làm nổi bật:

```ts
console.log('Hello, World!')
```

---

# Slide 3

Sử dụng các class UnoCSS và các Vue components để style và làm phong phú các slide của bạn:

<div class="p-3">
  <Tweet id="..." />
</div>
````

## Frontmatter & Headmatter {#frontmatter}

Ở đầu mỗi slide, bạn có thể thêm một [frontmatter](https://jekyllrb.com/docs/front-matter/) tùy chọn để cấu hình slide. Khối frontmatter đầu tiên được gọi là **headmatter** và có thể cấu hình toàn bộ bộ slide. Các phần còn lại là **frontmatters** cho từng slide riêng lẻ. Văn bản trong headmatter hoặc frontmatter nên là một object theo định dạng [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/). Ví dụ:

<!-- eslint-skip -->

```md {1-4,10-14,26-28}
---
theme: seriph
title: Chào mừng đến với Slidev
---

# Slide 1

Frontmatter của slide này cũng là headmatter

---
layout: center
background: /background-1.png
class: text-white
---

# Slide 2

Một trang với layout là `center` và background

---

# Slide 3

Một trang không có frontmatter

---
src: ./pages/4.md  # Trang này chỉ chứa một frontmatter
---

---

# Slide 5
```

Các cấu hình bạn có thể thiết lập được mô tả trong các phần [Cấu hình bộ slide](/custom/#headmatter) và [Cấu hình từng slide](/custom/#frontmatter).

Để làm cho headmatter dễ đọc hơn, bạn có thể cài đặt VSCode extension:

<LinkCard link="features/vscode-extension" />

Cũng có một format frontmatter khác có thể sử dụng:

<LinkCard link="features/block-frontmatter" />

## Ghi chú {#notes}

Bạn cũng có thể tạo ghi chú cho người thuyết trình cho mỗi slide. Chúng sẽ hiển thị trong <LinkInline link="guide/ui#presenter-mode" /> để bạn tham khảo trong suốt bài thuyết trình.

Các khối chú thích ở cuối mỗi slide sẽ được coi là ghi chú của slide đó:

```md {9,19-21}
---
layout: cover
---

# Slide 1

Đây là trang bìa.

<!-- Đây là một **ghi chú** -->

---

# Slide 2

<!-- Đây KHÔNG phải là ghi chú vì nó không ở cuối trang trình chiếu -->

Trang thứ hai

<!--
Đây là một ghi chú _khác_
-->
```

Cả Markdown cơ bản và HTML đều được hỗ trợ trong ghi chú và sẽ được hiển thị.

<SeeAlso :links="[
  'features/click-marker',
]" />

## Khối code {#code-block}

Một lý do lớn dẫn đến việc tạo ra Slidev là nhu cầu hiển thị code một cách hoàn hảo trong các trang slide. Do đó, bạn có thể sử dụng các khối code theo phong cách Markdown để làm nổi bật code của mình.

````md
```ts
console.log('Hello, World!')
```
````

Slidev tích hợp [Shiki](https://github.com/shikijs/shiki) như công cụ highlight cú pháp. Tham khảo [Cấu hình Shiki](/custom/config-highlighter) để biết thêm chi tiết.

Thông tin thêm về các khối code:

<LinkCard link="features/code-block-line-numbers" />
<LinkCard link="features/code-block-max-height" />
<LinkCard link="features/line-highlighting" />
<LinkCard link="features/monaco-editor" />
<LinkCard link="features/monaco-run" />
<LinkCard link="features/monaco-write" />
<LinkCard link="features/shiki-magic-move" />
<LinkCard link="features/twoslash" />
<LinkCard link="features/import-snippet" />

## Khối LaTeX {#latex-block}

Slidev hỗ trợ các khối LaTeX cho các công thức toán học và hóa học:

<LinkCard link="features/latex" />

## Diagrams {#diagrams}

Slidev hỗ trợ [Mermaid.js](http://mermaid.js.org/) và [PlantUML](https://plantuml.com/) để tạo diagrams từ văn bản:

<LinkCard link="features/mermaid" />
<LinkCard link="features/plantuml" />

## Cú pháp MDC {#mdc-syntax}

Cú pháp MDC là cách dễ nhất để áp dụng style và class cho các element:

<LinkCard link="features/mdc" />

## Scoped CSS {#scoped-css}

Bạn có thể sử dụng scoped CSS để style cho các slide của mình:

<LinkCard link="features/slide-scope-style" />

## Import Slides {#importing-slides}

<LinkCard link="features/importing-slides" />
