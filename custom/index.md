# Các tùy chỉnh

Slidev hoàn toàn có thể tùy chỉnh, từ kiểu dáng đến cấu hình công cụ. Nó cho phép bạn định cấu hình các công cụ bên dưới ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), v.v...)

## Cấu hình Frontmatter

Bạn có thể định cấu hình Slidev trong frontmatter của trang trình bày đầu tiên của mình, phần sau hiển thị giá trị mặc định cho mỗi tùy chọn.

```yaml
---
# theme id or package name
# Learn more: https://sli.dev/themes/use.html
theme: 'default'
# title of your slide, will auto infer from the first header if not specified
title: 'Slidev'
# titleTemplate for the webpage, `%s` will be replaced by the page's title
titleTemplate: '%s - Slidev'
# information for your slides, can be a markdown string
info: false

# enable presenter mode, can be boolean, 'dev' or 'build'
presenter: true
# enabled pdf downloading in SPA build, can also be a custom url
download: false
# filename of the export file
exportFilename: 'slidev-exported'
# syntax highlighter, can be 'prism' or 'shiki'
highlighter: 'prism'
# show line numbers in code blocks
lineNumbers: false
# enable monaco editor, can be boolean, 'dev' or 'build'
monaco: 'dev'
# download remote assets in local using vite-plugin-remote-assets, can be boolean, 'dev' or 'build'
remoteAssets: false
# controls whether texts in slides are selectable
selectable: true
# enable slide recording, can be boolean, 'dev' or 'build'
record: 'dev'

# force color schema for the slides, can be 'auto', 'light', or 'dark'
colorSchema: 'auto'
# router mode for vue-router, can be "history" or "hash"
routerMode: 'history'
# aspect ratio for the slides
aspectRatio: '16/9'
# real width of the canvas, unit in px
canvasWidth: 980
# used for theme customization, will inject root styles as `--slidev-theme-x` for attribute `x`
themeConfig:
  primary: '#5d8392'

# favicon, can be a local file path or URL
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# URL of PlantUML server used to render diagrams
plantUmlServer: 'https://www.plantuml.com/plantuml'
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

<<<<<<< HEAD
# information for your slides, can be a markdown string
info: |
  ## Slidev
  Trang trình bày [Slidev](http://sli.dev/) đầu tiên của tôi!
=======
# drawing options
# Learn more: https://sli.dev/guide/drawing.html
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true
>>>>>>> 38e076f9a7c55cbd4d7b58579eecb54e77e9723a
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
