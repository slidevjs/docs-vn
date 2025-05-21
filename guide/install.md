# Cài đặt

## Template khởi đầu

> Slidev yêu cầu [**Node.js >=18.0**](https://nodejs.org/)

Cách tốt nhất để bắt đầu là sử dụng template khởi đầu chính thức của chúng tôi:

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

Làm theo các hướng dẫn và slideshow sẽ tự động mở tại `http://localhost:3030/` cho bạn.

Nó cũng bao gồm một thiết lập cơ bản cùng với một bản demo ngắn kèm theo hướng dẫn cách bắt đầu với Slidev.

## Cài đặt thủ công

Nếu bạn muốn cài Slidev thủ công hoặc tích hợp vào dự án hiện có, bạn có thể làm như sau:

```bash
npm install @slidev/cli @slidev/theme-default
```

```bash
touch slides.md
```

```bash
npx slidev
```

## Cài đặt toàn cục

> Có từ phiên bản v0.14

Bạn có thể cài đặt Slidev toàn cục bằng lệnh sau

```bash
npm i -g @slidev/cli
```

Sau đó, bạn có thể sử dụng `slidev` ở bất cứ đâu mà không cần tạo dự án mới mỗi lần.

```bash
npx slidev
```

Lệnh này cũng sẽ cố gắng sử dụng `@slidev/cli` cục bộ nếu tìm thấy trong `node_modules`.

## Cài đặt trên Docker

Nếu bạn cần một cách nhanh chóng để chạy slide bằng container, bạn có thể sử dụng image [docker](https://hub.docker.com/r/tangramor/slidev) đã được build sẵn và duy trì bởi [tangramor](https://github.com/tangramor), hoặc tự build riêng.

Chỉ cần chạy lệnh sau trong thư mục làm việc của bạn:

```bash
docker run --name slidev --rm -it \
    --user node \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    -e NPM_MIRROR="https://registry.npmmirror.com" \
    tangramor/slidev:latest
```

**_Lưu ý_**: Bạn có thể sử dụng `NPM_MIRROR` để chỉ định mirror npm nhằm tăng tốc quá trình cài đặt.

Nếu thư mục làm việc của bạn trống, nó sẽ tạo ra một template `slides.md` và các file liên quan khác trong thư mục làm việc, đồng thời khởi chạy server trên port `3030`.

Bạn có thể truy cập slide tại `http://localhost:3030/`

### Xây dựng image có thể deploy

Bạn có thể tạo dự án slidev của riêng mình dưới dạng image docker với Dockerfile:

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev
```

Tạo image docker: `docker build -t myppt .`

Và chạy container: `docker run --name myslides --rm --user node -p 3030:3030 myppt`

Bạn có thể truy cập slide tại `http://localhost:3030/`

### Xây dựng SPA có thể host (Single Page Application)

Chạy `docker exec -i slidev npx slidev build` trên container đang chạy `slidev`. Nó sẽ tạo ra các file HTML tĩnh trong thư mục `dist`.

#### Host trên GitHub Pages

Bạn có thể host thư mục `dist` dưới dạng trang web tĩnh thông qua các dịch vụ như [GitHub Pages](https://tangramor.github.io/slidev_docker/) hoặc GitLab Pages.

Vì URL trên GitHub Pages có thể chứa thư mục con, bạn có thể sử dụng tùy chọn `--base=/<subfolder>/` khi build, ví dụ `docker exec -i slidev npx slidev build --base=/slidev_docker/`.

Để tránh quá trình build Jekyll, bạn cần thêm file trống `.nojekyll`.

#### Host qua docker

Bạn cũng có thể tự host Slidev bằng docker:

```bash
docker run --name myslides --rm -p 80:80 -v ${PWD}/dist:/usr/share/nginx/html nginx:alpine
```

Hoặc tạo một image tĩnh với Dockerfile sau:

```Dockerfile
FROM nginx:alpine

COPY dist /usr/share/nginx/html
```

Tạo image docker: `docker build -t mystaticppt .`

Và chạy container: `docker run --name myslides --rm -p 80:80 mystaticppt`

Bạn có thể truy cập vào slides của mình tại http://localhost/

Tham khảo thêm tại [tangramor/slidev_docker](https://github.com/tangramor/slidev_docker).

## Giao diện dòng lệnh (CLI)

`@slidev/cli` cung cấp một số lệnh bạn có thể sử dụng với `npx slidev ...` hoặc thêm vào scripts trong `package.json` của bạn:

```json
{
  "script": {
    "dev": "slidev"
  }
}
```

Trong trường hợp đó bạn sẽ có thể chạy `npm run dev`.

Bạn có thể truyền tùy chọn vào bất kỳ lệnh nào:

- Tùy chọn type boolean là `true` nếu có mặt, ngược lại là false (ví dụ: `slidev --open`)
- Một số tùy chọn có thể có giá trị, bạn có thể thêm ngay sau tùy chọn hoặc dùng dấu `=` (ví dụ: `slidev --port 8080` hoặc `slidev --port=8080`)

Nếu bạn dùng npm scripts, đừng quên thêm `--` sau lệnh npm:

```bash
npm run slidev -- --open
```

### `slidev [entry]`

Khởi động server local cho Slidev.

- `[entry]` (`string`, mặc định: `slides.md`): đường dẫn tới file markdown chứa slide của bạn.

Tùy chọn:

- `--port`, `-p` (`number`, mặc định: `3030`): số port.
- `--open`, `-o` (`boolean`, mặc định: `false`): tự động mở trình duyệt.
- `--remote [password]` (`string`): lắng nghe host công khai và bật điều khiển từ xa; nếu có giá trị thì chế độ presenter sẽ riêng tư và chỉ truy cập được bằng cách truyền mật khẩu trong tham số query `password` trên URL.
- `--bind` (`string`, mặc định: `0.0.0.0`): chỉ định IP mà server sẽ lắng nghe khi ở chế độ remote.
- `--log` (`'error', 'warn', 'info', 'silent'`, mặc định: `'warn'`): mức độ log.
- `--force`, `-f` (`boolean`, mặc định: `false`): buộc optimizer bỏ qua cache và đóng gói lại.
- `--theme`, `-t` (`string`): ghi đè theme.

### `slidev build [entry]`

Xây dựng SPA có thể host được.

- `[entry]` (`string`, mặc định: `slides.md`): đường dẫn file markdown slide.

Tùy chọn:

- `--out`, `-o` (`string`, mặc định: `dist`): thư mục đầu ra.
- `--base` (`string`, mặc định: `/`): base URL (xem https://cli.vuejs.org/config/#publicpath)
- `--download` (`boolean`, mặc định: `false`): cho phép tải slide dưới dạng PDF trong SPA.
- `--theme`, `-t` (`string`): ghi đè theme.

### `slidev export [entry]`

Xuất slide ra PDF (hoặc định dạng khác). Xem chi tiết tại [Exporting](/guide/exporting.html).

- `[entry]` (`string`, mặc định: `slides.md`): đường dẫn file markdown slide.

Tùy chọn:

- `--output` (`string`, mặc định: dùng `exportFilename` (xem https://sli.dev/custom/#frontmatter-configures) hoặc `[entry]-export`): đường dẫn đầu ra.
- `--format` (`'pdf', 'png', 'pptx', 'md'`, mặc định: `'pdf'`): định dạng xuất.
- `--timeout` (`number`, mặc định: `30000`): thời gian chờ để render trang in (xem https://playwright.dev/docs/api/class-page#page-goto).
- `--range` (`string`): phạm vi trang xuất (ví dụ: `'1,4-5,6'`).
- `--dark` (`boolean`, mặc định: `false`): xuất theo theme tối.
- `--with-clicks`, `-c` (`boolean`, mặc định: `false`): xuất mỗi trang cho từng lần click (xem https://sli.dev/guide/animations.html#click-animations).
- `--theme`, `-t` (`string`): ghi đè theme.

### `slidev format [entry]`

Định dạng file markdown.

- `[entry]` (`string`, mặc định: `slides.md`): đường dẫn file markdown slide.

### `slidev theme [subcommand]`

Các thao tác liên quan đến theme.

Các subcommand:

- `eject [entry]`: xuất theme hiện tại ra hệ thống file local
  - `[entry]` (`string`, mặc định: `slides.md`): đường dẫn file markdown slide.
  - Tùy chọn:
    - `--dir` (`string`, mặc định: `theme`): thư mục đầu ra.
    - `--theme`, `-t` (`string`): ghi đè theme.
