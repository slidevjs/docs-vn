# Tùy chỉnh (Customizations)

Slidev hoàn toàn có thể tùy chỉnh, từ kiểu dáng đến cấu hình công cụ. Bạn có thể cấu hình các công cụ bên dưới như ([Vite](/custom/config-vite), [UnoCSS](/custom/config-unocss), [Monaco](/custom/config-monaco), v.v.)

## Cấu hình trong Frontmatter

Bạn có thể cấu hình Slidev trong phần frontmatter của slide đầu tiên. Dưới đây là các giá trị mặc định cho từng tùy chọn.

```yaml
---
# theme id or package name
# Learn more: https://sli.dev/themes/use.html
theme: default
# title of your slide, will auto infer from the first header if not specified
title: Slidev
# titleTemplate for the webpage, `%s` will be replaced by the page's title
titleTemplate: '%s - Slidev'
# information for your slides, can be a markdown string.
info: false
# author field for exported PDF or PPTX
author: Your Name Here
# keywords field for exported PDF, comma-delimited.
keywords: keyword1,keyword2

# enable presenter mode, can be boolean, 'dev' or 'build'
presenter: true
# enabled pdf downloading in SPA build, can also be a custom url
download: false
# filename of the export file
exportFilename: slidev-exported
# export options
# use export CLI options in camelCase format
# Learn more: https://sli.dev/guide/exporting.html
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
  withToc: false
# syntax highlighter, can be 'prism', 'shiki'
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# enable monaco editor, can be boolean, 'dev' or 'build'
monaco: true
# Where to load monaco types from, can be 'cdn', 'local' or 'none'
monacoTypesSource: local
# explicitly specify extra local packages to import the types for
monacoTypesAdditionalPackages: []
# explicitly specify extra local modules as dependency of monaco runnable
monacoRunAdditionalDeps: []
# download remote assets in local using vite-plugin-remote-assets, can be boolean, 'dev' or 'build'
remoteAssets: false
# controls whether texts in slides are selectable
selectable: true
# enable slide recording, can be boolean, 'dev' or 'build'
record: dev
# enable Slidev's context menu, can be boolean, 'dev' or 'build'
contextMenu: true
# enable wake lock, can be boolean, 'dev' or 'build'
wakeLock: true

# force color schema for the slides, can be 'auto', 'light', or 'dark'
colorSchema: auto
# router mode for vue-router, can be "history" or "hash"
routerMode: history
# aspect ratio for the slides
aspectRatio: 16/9
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
  sans: Roboto
  serif: Roboto Slab
  mono: Fira Code

# default frontmatter applies to all slides
defaults:
  layout: default
  # ...

# drawing options
# Learn more: https://sli.dev/guide/drawing.html
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true

# HTML tag attributes
htmlAttrs:
  dir: ltr
  lang: en
---
```

Xem thêm [định nghĩa kiểu dữ liệu (type definitions)](https://github.com/slidevjs/slidev/blob/main/packages/types/src/config.ts) để biết thêm các tùy chọn khác.

## Cấu hình cho từng slide

Ngoài ra, mỗi slide đều có thể sử dụng các tùy chọn cấu hình sau trong khối Frontmatter:

- `clicks` (`number`): Tùy chỉnh số lần nhấp chuột (tìm hiểu thêm [tại đây](/guide/animations.html#custom-total-clicks-count)).
- `disabled` (`boolean`): Tắt hoàn toàn và ẩn slide này.
- `hide` (`boolean`): Tương tự như `disabled`.
- `hideInToc` (`boolean`): Ẩn slide khỏi thành phần `<Toc>` (tìm hiểu thêm [tại đây](/builtin/components.html#toc)).
- `layout` (`string`): Xác định bố cục (layout) được áp dụng cho slide (tìm hiểu thêm [tại đây](/guide/syntax.html#front-matter-layouts) và [tại đây](/builtin/layouts.html)).
- `level` (`number`): Ghi đè cấp độ tiêu đề cho các thành phần `<Title>` và `<Toc>` (chỉ áp dụng nếu đã khai báo `title`, tìm hiểu thêm [tại đây](/builtin/components.html#titles)).
- `preload` (`boolean`, mặc định `true`): Tải trước slide tiếp theo (tìm hiểu thêm [tại đây](/guide/animations.html#motion)).
- `routeAlias` (`string`): Tạo alias cho đường dẫn URL, có thể dùng với thẻ `<Link>` (tìm hiểu thêm [tại đây](/builtin/components.html#link)).
- `src` (`string`): Nhúng một tệp markdown (tìm hiểu thêm [tại đây](/guide/syntax.html#multiple-entries)).
- `title` (`string`): Ghi đè tiêu đề cho các thành phần `<Title>` và `<Toc>` (tìm hiểu thêm [tại đây](/builtin/components.html#titles)).
- `transition` (`string | TransitionProps`): Xác định hiệu ứng chuyển tiếp giữa slide hiện tại và slide tiếp theo (tìm hiểu thêm [tại đây](/guide/animations.html#slide-transitions)).
- `zoom` (`number`): Tùy chỉnh mức độ phóng to – hữu ích với slide chứa nhiều nội dung.
- `dragPos` (`Record<string,string>`): Xác định vị trí của các phần tử có thể kéo (tìm hiểu thêm [tại đây](/guide/draggable.html)).

## Cấu trúc thư mục

Slidev sử dụng quy ước về cấu trúc thư mục để tối thiểu hóa việc cấu hình và giúp mở rộng chức năng một cách linh hoạt, trực quan.

Tham khảo thêm tại mục [Cấu trúc Thư mục](/custom/directory-structure).

## Công cụ cấu hình (Config Tools)

- [Highlighters](/custom/highlighters)
- [Configure Vue](/custom/config-vue)
- [Configure Vite](/custom/config-vite)
- [Configure UnoCSS](/custom/config-unocss)
- [Configure Monaco](/custom/config-monaco)
- [Configure KaTeX](/custom/config-katex)
- [Configure Mermaid](/custom/config-mermaid)
