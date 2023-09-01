# Xuất slide

## Slides

### PDF

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

<<<<<<< HEAD
Sau một vài giây, các slide của bạn sẽ có sẵn tại `./slides-exports.pdf`.

<<<<<<< HEAD
## PNGs

Khi chuyển vào tùy chọn `--format png`, Slidev sẽ xuất hình ảnh PNG cho từng trang chiếu thay vì PDF.

```bash
$ slidev export --format png
```
=======
### Export Clicks Steps
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c

> Available since v0.21

<<<<<<< HEAD
Bạn cũng có thể xây dựng các slide thành một SPA tự lưu trữ:
=======
By default, Slidev exports one page per slide with clicks animations disabled. If you want export slides with multiple steps into multiple pages, pass the `--with-clicks` options.
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c

```bash
$ slidev export --with-clicks
```

<<<<<<< HEAD
Ứng dụng đã tạo sẽ có sẵn trong `dist/` và sau đó bạn có thể lưu trữ nó trên [GitHub](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), hoặc bất cứ thứ gì bạn muốn. Giờ đây, bạn có thể chia sẻ các slide của mình với mọi người bằng một liên kết duy nhất.

### Base Path

Để deploy các slide của bạn theo các sub-route, bạn cần phải chuyển tùy chọn `--base`. Ví dụ:

```bash
$ slidev build --base /talks/my-cool-talk/
```

Tham khảo [Vite's documentation](https://vitejs.dev/guide/build.html#public-base-path) để biết thêm chi tiết.

### Cung cấp file PDF cho phép tải xuống

Bạn có thể cung cấp một file PDF cho phép tải xuống cho người xem SPA của bạn. Bạn có thể kích hoạt nó bằng cách cấu hình sau:

```md
---
download: true
---
```

Bây giờ, Slidev sẽ tạo một file pdf cùng với bản dựng và một nút tải xuống sẽ xuất hiện trong SPA.

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
=======
## PNGs
=======
After a few seconds, your slides will be ready at `./slides-export.pdf`.

### PNGs and Markdown
>>>>>>> 2fe32c406cbcd27bcfe2100a4d8c08d7cc42adc4

When passing in the `--format png` option, Slidev will export PNG images for each slide instead of a PDF.

```bash
$ slidev export --format png
```

You can also compile a markdown file composed of compiled png using `--format md`.

```bash
$ slidev export --format md
```

### Dark mode

In case you want to export your slides using the dark version of the theme, use the `--dark` option:

```bash
$ slidev export --dark
```

### Export Clicks Steps

> Available since v0.21

By default, Slidev exports one page per slide with clicks animations disabled. If you want export slides with multiple steps into multiple pages, pass the `--with-clicks` option.

```bash
$ slidev export --with-clicks
```

### Slide range

You can also specify a range of slides to export with the `--range` option.

```bash
$ slidev export --range 1,4-5,6
```

### PDF outline

> Available since v0.36.10

You can generate the PDF outline by passing the `--with-toc` option.

```bash
$ slidev export --with-toc
```

### Output filename

You can specify the output filename with the `--output` option.

```bash
$ slidev export --output my-pdf-export
```

Or in the frontmatter configuration:

```yaml
---
exportFilename: my-pdf-export
---
```

### Export a range of slides

By default, all slides in the presentation are exported. If you want to export a specific slide or a range of slides you can set the `--range` option and specify which slides you would like to export. 

```bash
$ slidev export --range 1,6-8,10
```

This option accepts both specific slide numbers and ranges.

The example above would export slides 1,6,7,8, and 10.


### Multiple entries

You can also export multiple slides at once.

```bash
$ slidev export slides1.md slides1.md
```

Or

```bash
$ slidev export *.md
```

In this case, each input file will generate its own PDf file.

## Presenter notes

> Available since v0.36.8

Export only the presenter notes (the last comment block for each slide) into a text document in PDF.

```bash
$ slidev export-notes
```

This command also accept multiple entries like for the [export command](#multiple-entries)

## Single-Page Application (SPA)

See [Static Hosting](/guide/hosting).
<<<<<<< HEAD
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c
=======

## Troubleshooting

### Timeout

For big presentation you might want to increase the playwrigth timeout with `--timeout`

```bash
$ slidev export --timeout 60000
```

### Executable path

You can set the browser executable path for playwright using `--executable-path`

```bash
$ slidev export --executable-path [path_to_chromium]
```
>>>>>>> 2fe32c406cbcd27bcfe2100a4d8c08d7cc42adc4
