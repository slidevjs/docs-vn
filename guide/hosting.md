---
outline: deep
---

# Build và host

Slidev được thiết kế để chạy dưới dạng máy chủ web khi bạn chỉnh sửa hoặc trình bày slide của mình. Tuy nhiên, sau buổi thuyết trình, bạn có thể muốn chia sẻ slide **tương tác** với người khác. Hướng dẫn này sẽ chỉ bạn cách build và host slide.

## Build thành SPA {#spa}

Bạn có thể build slide thành một [Single-page application (SPA)](https://developer.mozilla.org/en-US/docs/Glossary/SPA) tĩnh bằng lệnh sau:

```bash
$ slidev build
```

Theo mặc định, các file được tạo ra sẽ nằm trong thư mục `dist`. You can test the built version of you slides by running: `npx vite preview` or any other static server.

### Đường dẫn gốc {#base}

Để deploy slide dưới các sub-route, bạn cần sử dụng option `--base` option. Đường dẫn `--base` **phải bắt đầu và kết thúc bằng dấu gạch chéo `/`**. Ví dụ:

```bash
$ slidev build --base /talks/my-cool-talk/
```

Tham khảo [tài liệu của Vite](https://vitejs.dev/guide/build.html#public-base-path) để biết thêm chi tiết.

### Thư mục đầu ra {#output-directory}

Bạn có thể thay đổi thư mục đầu ra bằng `--out`.

```bash
$ slidev build --out my-build-folder
```

### Build nhiều file {#multiple-builds}

Bạn có thể build nhiều bộ slide cùng lúc bằng cách đưa nhiều file markdown làm tham số:

```bash
$ slidev build slides1.md slides2.md
```

Hoặc nếu shell của bạn hỗ trợ, bạn có thể sử dụng glob pattern:

```bash
$ slidev build *.md
```

Trong trường hợp này, mỗi file đầu vào sẽ tạo ra một thư mục chứa bản build trong thư mục đầu ra.

### Ví dụ {#examples}

Dưới đây là một số ví dụ về SPA đã export:

- [Demo Slides](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) bởi [Anthony Fu](https://github.com/antfu)
- Nhiều hơn trong [Showcases](../resources/showcases)

### Các option {#options}

<LinkCard link="features/build-with-pdf" />
<LinkCard link="features/bundle-remote-assets" />

## Host {#hosting}

Chúng tôi khuyến nghị sử dụng `npm init slidev@latest` để khởi tạo dự án của bạn, nó bao gồm các file cấu hình cần thiết để lưu trữ dễ dàng.

### GitHub Pages {#github-pages}

Để deploy slide trên [GitHub Pages](https://pages.github.com/) bằng GitHub Actions, thực hiện các bước sau:

1. Trong repository của bạn, vào `Settings` > `Pages`. Dưới `Build and deployment`, chọn `GitHub Actions`. (Không chọn `Deploy from a branch` và upload thư mục `dist`, việc này không được khuyến nghị.)
2. Tạo `.github/workflows/deploy.yml` với nội dung sau để deploy slide qua GitHub Actions.

::: details deploy.yml

```yaml
name: Deploy pages

on:
  workflow_dispatch:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 'lts/*'

      - name: Setup @antfu/ni
        run: npm i -g @antfu/ni

      - name: Install dependencies
        run: nci

      - name: Build
        run: nr build --base /${{github.event.repository.name}}/

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

:::

3. Commit và push thay đổi vào repository của bạn. Workflow GitHub Actions sẽ tự động deploy slide mỗi khi bạn đẩy lên nhánh `main`.
4. Bạn có thể truy cập slide tại `https://<username>.github.io/<repository-name>/`.

### Netlify

Tạo file `netlify.toml` trong thư mục root dự án với nội dung sau:

::: details netlify.toml

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

:::

Sau đó, vào [Netlify dashboard](https://netlify.com/) và tạo một trang web mới từ repository.

### Vercel

Tạo file `vercel.json` trong thư mục root dự án với nội dung sau:

::: details vercel.json

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

:::

Sau đó, vào [Vercel dashboard](https://vercel.com/) và tạo một trang web mới từ repository.

### Host với Docker {#docker}

Nếu bạn cần cách nhanh chóng để chạy bài thuyết trình với container, bạn có thể sử dụng [docker image](https://hub.docker.com/r/tangramor/slidev) do [tangramor](https://github.com/tangramor) duy trì, hoặc tự build.

::: details Sử dụng Docker Image

Chỉ cần chạy lệnh sau trong thư mục đang làm việc:

```bash
docker run --name slidev --rm -it \
    --user node \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    -e NPM_MIRROR="https://registry.npmmirror.com" \
    tangramor/slidev:latest
```

**_Lưu ý_**: Bạn có thể sử dụng `NPM_MIRROR`để chỉ định một npm mirror nhằm tăng tốc quá trình cài đặt.

Nếu thư mục đang làm việc trống, nó sẽ tạo file template `slides.md` và các file liên quan khác trong thư mục đang làm việc, sau đó khởi chạy máy chủ trên port `3030`.

Bạn có thể truy cập slide từ `http://localhost:3030/`

Để tạo một Docker Image cho slide của bạn, bạn có thể sử dụng Dockerfile sau:

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev
```

Tạo docker image: `docker build -t myslides .`

Và chạy container: `docker run --name myslides --rm --user node -p 3030:3030 myslides`

Bạn có thể truy cập slide tại `http://localhost:3030/`

:::
