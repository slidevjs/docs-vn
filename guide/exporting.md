# Xuất slide

## PDF

> Xuất sang PDF hoặc PNG dựa vào [Playwright](https://playwright.dev) để hiển thị. Do đó, bạn sẽ cần cài đặt [`playwright-chromium`](https://playwright.dev/docs/installation#download-single-browser-binary) để sử dụng tính năng này.
> Nếu bạn đang xuất trong môi trường CI, [hướng dẫn về CI](https://playwright.dev/docs/ci) có thể hữu ích.

Cài đặt `playwright-chromium`

```bash
$ npm i -D playwright-chromium
```

Bây giờ xuất các slide của bạn sang PDF bằng lệnh sau

```bash
$ slidev export
```

Sau một vài giây, các slide của bạn sẽ có sẵn tại `./slides-exports.pdf`.

### Export Clicks Steps

> Available since v0.21

By default, Slidev exports one page per slide with clicks animations disabled. If you want export slides with multiple steps into multiple pages, pass the `--with-clicks` options.

```bash
$ slidev export --with-clicks
```

## PNGs

Khi chuyển vào tùy chọn `--format png`, Slidev sẽ xuất hình ảnh PNG cho từng trang chiếu thay vì PDF.

```bash
$ slidev export --format png
```

## Single-Page Application (SPA)

Bạn cũng có thể xây dựng các slide thành một SPA tự lưu trữ:

```bash
$ slidev build
```

Ứng dụng đã tạo sẽ có sẵn trong `dist/` và sau đó bạn có thể lưu trữ nó trên [GitHub](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), hoặc bất cứ thứ gì bạn muốn. Giờ đây, bạn có thể chia sẻ các slide của mình với mọi người bằng một liên kết duy nhất.

### Base Path

Để deploy các slide của bạn theo các sub-route, bạn cần phải chuyển tùy chọn `--base`. Ví dụ:

```bash
$ slidev build --base /talks/my-cool-talk/
```

Tham khảo [Vite's documentation](https://vitejs.dev/guide/build.html#public-base-path) để biết thêm chi tiết.

### Cung cấp file PDF cho phép tải xuống

<<<<<<< HEAD
Bạn có thể cung cấp một file PDF cho phép tải xuống cho người xem SPA của bạn. Bạn có thể kích hoạt nó bằng cách cấu hình sau:
=======
You can provide a downloadable PDF to the viewers of your SPA with the following config:
>>>>>>> fcc2f07502ee5a4c2865a8717b4ecd4bfafa05c8

```md
---
download: true
---
```

<<<<<<< HEAD
Bây giờ, Slidev sẽ tạo một file pdf cùng với bản dựng và một nút tải xuống sẽ xuất hiện trong SPA.
=======
Slidev will generate a pdf file along with the build and a download button will be displayed in the SPA.
>>>>>>> fcc2f07502ee5a4c2865a8717b4ecd4bfafa05c8

Bạn cũng có thể cung cấp một url tùy chỉnh cho PDF. Trong trường hợp đó, quá trình render sẽ bị bỏ qua.

```md
---
download: 'https://myside.com/my-talk.pdf'
---
```

### Ví dụ

Dưới đây là một số ví dụ về SPA đã xuất:

- [Starter Template](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) bởi [Anthony Fu](https://github.com/antfu)
