# Các tùy chỉnh

Slidev hoàn toàn có thể tùy chỉnh, từ kiểu dáng đến cấu hình công cụ. Nó cho phép bạn định cấu hình các công cụ bên dưới ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), v.v...)

## Cấu hình Frontmatter

Bạn có thể định cấu hình Slidev trong frontmatter của trang trình bày đầu tiên của mình, phần sau hiển thị giá trị mặc định cho mỗi tùy chọn.

```yaml
---
# theme id or package name
theme: 'default'
# title of your slide, will auto infer from the first header if not specified
title: ''
# titleTemplate for the webpage, `%s` will be replaced by the page's title
titleTemplate: '%s - Slidev'

# enabled pdf downloading in SPA build, can also be a custom url
download: true
# syntax highlighter, can be 'prism' or 'shiki'
highlighter: 'prism'
# show line numbers in code blocks
lineNumbers: false
# enable monaco editor, default to dev only
monaco: 'dev'

# force color schema for the slides, could be 'auto', 'light', or 'dark'
colorSchema: 'auto'
# router mode for vue-router, could be "history" or "hash"
routerMode: 'history'
# aspect ratio for the slides
aspectRatio: '16/9'
# real width of the canvas, unit in px
canvasWidth: 980

# fonts will be auto imported from Google fonts
# Learn more: https://sli.dev/custom/fonts
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'

# default frontmatter applies to all slides
defaults:
  layout: 'default'
  # ...

# information for your slides, can be a markdown string
info: |
  ## Slidev
  Trang trình bày [Slidev](http://sli.dev/) đầu tiên của tôi!
---
```

<<<<<<< HEAD
Xem [định nghĩa loại](https://github.com/slidevjs/slidev/blob/main/packages/types/src/types.ts#L29) để có thêm tùy chọn.
=======
Check out the [type definitions](https://github.com/slidevjs/slidev/blob/main/packages/types/src/config.ts) for more options.
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c

## Cấu trúc thư mục

Slidev sử dụng các quy ước cấu trúc thư mục để thu nhỏ bề mặt cấu hình và làm cho các phần mở rộng trong chức năng trở nên linh hoạt và trực quan.

Tham khảo phần [Cấu trúc thư mục](/custom/directory-structure).

## Config Tools

- [Highlighters](/custom/highlighters)
- [Configure Vue](/custom/config-vue)
- [Configure Vite](/custom/config-vite)
- [Configure Windi CSS](/custom/config-windicss)
- [Configure Monaco](/custom/config-monaco)
- [Configure KaTeX](/custom/config-katex)
- [Configure Mermaid](/custom/config-mermaid)
