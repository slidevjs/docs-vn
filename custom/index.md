# Tùy chỉnh

Slidev hoàn toàn có thể tùy chỉnh, từ style đến cấu hình công cụ. Nó cho phép bạn cấu hình các công cụ bên dưới ([Vite](/custom/config-vite), [UnoCSS](/custom/config-unocss), [Monaco](/custom/config-monaco), v.v.).

## Cấu hình bộ Slide {#headmatter}

Bạn có thể cấu hình toàn bộ dự án slide trong phần frontmatter của slide **đầu tiên** (tức là headmatter). Dưới đây là các giá trị mặc định cho từng option:

```yaml
---
# theme id, package name, hoặc local path
# Tìm hiểu thêm: https://sli.dev/guide/theme-addon.html#use-theme
theme: default
# addons, có thể là danh sách package name hoặc local path
# Tìm hiểu thêm: https://sli.dev/guide/theme-addon.html#use-addon
addons: []
# title của slide, sẽ được suy ra từ title đầu tiên nếu không được chỉ định
title: Slidev
# titleTemplate cho trang web, `%s` sẽ được thay thế bằng title của bộ slide
titleTemplate: '%s - Slidev'
# thông tin về slide của bạn, có thể là một string Markdown
info: false
# field tác giả cho file PDF hoặc PPTX export
author: Your Name Here
# field từ khóa cho file PDF export, cách nhau bởi dấu phẩy
keywords: keyword1,keyword2

# enable chế độ thuyết trình, có thể là boolean, 'dev' hoặc 'build'
presenter: true
# enable trình export trình duyệt, có thể là boolean, 'dev' hoặc 'build'
browserExporter: dev
# enable download pdf trong bản build SPA, cũng có thể là một URL tùy chỉnh
download: false
# tên file export
exportFilename: slidev-exported
# các option export
# sử dụng option CLI export với định dạng camelCase
# Tìm hiểu thêm: https://sli.dev/guide/exporting.html
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
  withToc: false
# enable twoslash, có thể là boolean, 'dev' hoặc 'build'
twoslash: true
# hiển thị số dòng trong các khối code
lineNumbers: false
# enable trình chỉnh sửa monaco, có thể là boolean, 'dev' hoặc 'build'
monaco: true
# Nguồn load các kiểu dữ liệu monaco, có thể là 'cdn', 'local' hoặc 'none'
monacoTypesSource: local
# chỉ định rõ các package local bổ sung để import các kiểu dữ liệu monaco
monacoTypesAdditionalPackages: []
# chỉ định rõ các module local bổ sung làm dependencies của monaco có thể chạy
monacoRunAdditionalDeps: []
# download các tài sản remote vào local bằng vite-plugin-remote-assets, có thể là boolean, 'dev' hoặc 'build'
remoteAssets: false
# điều khiển liệu văn bản trong slide có thể được bôi đen không
selectable: true
# enable record slide, có thể là boolean, 'dev' hoặc 'build'
record: dev
# enable menu ngữ cảnh của Slidev, có thể là boolean, 'dev' hoặc 'build'
contextMenu: true
# enable wake lock, có thể là boolean, 'dev' hoặc 'build'
wakeLock: true
# chụp ảnh cho từng slide trong phần tổng quan
overviewSnapshots: false

# bắt buộc sử dụng bảng màu cho slide, có thể là 'auto', 'light', hoặc 'dark'
colorSchema: auto
# chế độ router cho vue-router, có thể là "history" hoặc "hash"
routerMode: history
# tỷ lệ khung hình cho slide
aspectRatio: 16/9
# chiều rộng thực của canvas, đơn vị px
canvasWidth: 980
# được sử dụng để tùy chỉnh theme, sẽ inject các style gốc dưới dạng `--slidev-theme-x` cho thuộc tính `x`
themeConfig:
  primary: '#5d8392'

# favicon, có thể là path file local hoặc URL
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# URL của server PlantUML được sử dụng để render các sơ đồ
# Tìm hiểu thêm: https://sli.dev/features/plantuml.html
plantUmlServer: https://www.plantuml.com/plantuml
# phông chữ sẽ được tự động import từ Google fonts
# Tìm hiểu thêm: https://sli.dev/custom/config-fonts.html
fonts:
  sans: Roboto
  serif: Roboto Slab
  mono: Fira Code

# frontmatter mặc định áp dụng cho tất cả slide
defaults:
  layout: default
  # ...

# options vẽ
# Tìm hiểu thêm: https://sli.dev/guide/drawing.html
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true

# thuộc tính thẻ HTML
htmlAttrs:
  dir: ltr
  lang: en
---
```

Xem thêm [định nghĩa kiểu dữ liệu](https://github.com/slidevjs/slidev/blob/main/packages/types/src/config.ts) để biết thêm chi tiết.

## Cấu hình theo slide {#frontmatter}

Mỗi slide cũng có thể nhận cấu hình trong khối frontmatter của nó. Dưới đây là các giá trị mặc định cho từng option:

```yaml
---
# tùy chỉnh số lượng click
# Tìm hiểu thêm: https://sli.dev/guide/animations.html#custom-total-clicks-count
clicks: 0
# tùy chỉnh số lượng click ban đầu
clicksStart: 0
# hoàn toàn disable và hide slide
disabled: false
# giống như `disabled`
hide: false
# hide slide trong các component <Toc>
hideInToc: false
# xác định component layout được áp dụng cho slide
layout: <"cover" if the slide is the first slide, otherwise "default">
# ghi đè cấp độ title cho các component <TitleRenderer> và <Toc>
# chỉ khi `title` cũng được khai báo
level: 1
# mount slide này trước khi vào
preload: true
# tạo một route alias có thể sử dụng trong URL hoặc với component <Link>
routeAlias: undefined # hoặc string
# bao gồm một file markdown
# Tìm hiểu thêm: https://sli.dev/guide/syntax.html#importing-slides
src: undefined # hoặc string
# ghi đè title cho các component <TitleRenderer> và <Toc>
# chỉ khi `title` cũng được khai báo
title: undefined # hoặc string
# định nghĩa transition giữa slide này và slide tiếp theo
# Tìm hiểu thêm: https://sli.dev/guide/animations.html#slide-transitions
transition: undefined # hoặc string | TransitionProps
# tùy chỉnh tỷ lệ zoom
# hữu ích cho các slide có nhiều nội dung
zoom: 1
# sử dụng làm vị trí của các element drag được
# Tìm hiểu thêm: https://sli.dev/features/draggable.html
dragPos: {} # type: Record<string,string>
---
```

## Cấu trúc thư mục

Slidev sử dụng các quy ước cấu trúc thư mục để giảm thiểu cấu hình và làm cho việc mở rộng chức năng trở nên linh hoạt và trực quan.

Tham khảo phần [Cấu trúc thư mục](/custom/directory-structure).

## Công cụ cấu hình

<script setup>
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import customizations from '../.vitepress/customizations'
</script>

<li v-for="c of customizations.slice(2)" :key="c.text">
  <VPLink :href="c.link">
    {{ c.text }}
  </VPLink>
</li>
