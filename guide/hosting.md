# Hosting tĩnh

## Xây dựng Ứng dụng một trang (SPA)

Bạn có thể xây dựng các slide thành một SPA có thể tự host:

```bash
$ slidev build
```

Ứng dụng được tạo sẽ có sẵn trong thư mục `dist/`.

Bạn có thể kiểm tra bản build đã tạo bằng cách sử dụng một server web (Apache, NGINX, Caddy... v.v.) hoặc trong dự án bạn có thể chạy trực tiếp: `npx vite preview`.

Sau đó bạn có thể host nó trên [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), hoặc bất kỳ server web hay dịch vụ nào bạn muốn. Giờ đây bạn có thể chia sẻ slide của mình với cả thế giới chỉ bằng một liên kết duy nhất.

### Đường dẫn cơ sở

Để deploy slide dưới các đường dẫn phụ, bạn sẽ cần truyền tùy chọn `--base`. Đường dẫn `--base` **phải bắt đầu và kết thúc** bằng dấu gạch chéo `/`; ví dụ:

```bash
$ slidev build --base /talks/my-cool-talk/
```

Tham khảo [tài liệu của Vite](https://vitejs.dev/guide/build.html#public-base-path) để biết thêm chi tiết.

### Cung cấp PDF có thể tải xuống

Bạn có thể cung cấp một file PDF có thể tải xuống cho người xem SPA của bạn bằng cách cấu hình như sau:

```md
---
download: true
---
```

Slidev sẽ tạo một file PDF cùng với bản build, và một button tải xuống sẽ được hiển thị trong SPA.

Bạn cũng có thể cung cấp một URL tùy chỉnh cho file PDF. Trong trường hợp đó, quá trình tạo file sẽ được bỏ qua.

```md
---
download: 'https://myside.com/my-talk.pdf'
---
```

Điều này cũng có thể thực hiện bằng tùy chọn CLI `--download` (chỉ nhận giá trị type `boolean`).

```bash
$ slidev build --download
```

Khi sử dụng tùy chọn download, bạn cũng có thể cung cấp các tùy chọn export:

- Bằng cách sử dụng [các tùy chọn export CLI](/guide/exporting.html)
- Hoặc [các tùy chọn export frontmatter](/custom/#frontmatter-configures)

### Thư mục export

Bạn có thể thay đổi thư mục export bằng cách dùng `--out`.

```bash
$ slidev build --out my-build-folder
```

### Chế độ theo dõi

Bằng cách truyền tùy chọn `--watch`, quá trình build sẽ chạy ở chế độ theo dõi và sẽ tự động build lại mỗi khi source thay đổi.

```bash
$ slidev build --watch
```

### Nhiều mục nhập

Bạn có thể xây dựng nhiều bộ slide cùng lúc.

```bash
$ slidev build slides1.md slides2.md
```

Hoặc

```bash
$ slidev build *.md
```

Trong trường hợp này, mỗi file đầu vào sẽ tạo ra một thư mục chứa bản build trong thư mục xuất.

## Ví dụ

Dưới đây là một số ví dụ về SPA được export:

- [Starter Template](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) của [Anthony Fu](https://github.com/antfu)

Để xem thêm, tham khảo [Showcases](/showcases).

## Hosting

Chúng tôi khuyến nghị sử dụng `npm init slidev@latest` để tạo dự án, bao gồm các file cấu hình cần thiết cho các dịch vụ hosting sẵn sàng sử dụng.

### Netlify

- [Netlify](https://netlify.com/)

Tạo file `netlify.toml` trong thư mục gốc dự án với nội dung sau:

```toml
[build]
publish = 'dist'
command = 'npm run build'

[build.environment]
NODE_VERSION = '20'

[[redirects]]
from = '/*'
to = '/index.html'
status = 200
```

Sau đó truy cập vào dashboard Netlify của bạn và tạo một site mới với repository.

### Vercel

- [Vercel](https://vercel.com/)

Tạo file `vercel.json` trong thư mục gốc dự án với nội dung sau:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Sau đó truy cập vào dashboard Vercel của bạn và tạo một site mới với repository.

### GitHub Pages

- [GitHub Pages](https://pages.github.com/)

Để deploy slides của bạn trên GitHub Pages:

- tải lên tất cả các file của dự án vào repository của bạn (ví dụ đặt tên `name_of_repo`)
- tạo file `.github/workflows/deploy.yml` với nội dung sau để deploy slides lên GitHub Pages qua GitHub Actions.

```yaml
name: Deploy pages

on:
  workflow_dispatch: {}
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    permissions:
      contents: read
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 'lts/*'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build -- --base /${{github.event.repository.name}}/

      - uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

- Trong repository của bạn, vào mục Settings > Pages. Ở phần "Build and deployment", chọn "GitHub Actions".
- Cuối cùng, sau khi tất cả workflows được thực thi, một liên kết đến slides sẽ export hiện ở dưới Settings > Pages.
