# Export

## Slide

### PDF

> Việc export sang PDF, PPTX, hoặc PNG dựa trên [Playwright](https://playwright.dev) để render. Do đó, bạn sẽ cần cài đặt [`playwright-chromium`](https://npmjs.com/package/playwright-chromium) để sử dụng tính năng này.
> Nếu bạn export file trong môi trường CI, [hướng dẫn CI của Playwright](https://playwright.dev/docs/ci) sẽ rất hữu ích.

1. Cài đặt `playwright-chromium`:

```bash
$ npm i -D playwright-chromium
```

2. Bây giờ export slide của bạn ra PDF bằng cách sử dụng command sau:

```bash
$ slidev export
```

Sau vài giây, slide của bạn sẽ được tạo tại `./slides-export.pdf`.

### PNG và Markdown

Khi sử dụng tùy chọn `--format png`, Slidev sẽ export các ảnh PNG cho từng slide thay vì một file PDF:

```bash
$ slidev export --format png
```

Bạn cũng có thể biên dịch một file markdown gồm các ảnh PNG đã được biên dịch bằng cách sử dụng `--format md`:

```bash
$ slidev export --format md
```

### PPTX (Microsoft PowerPoint)

Slidev cũng có thể export slide của bạn dưới dạng file PPTX:

```bash
$ slidev export --format pptx
```

Lưu ý rằng tất cả các slide trong file PPTX sẽ được export dưới dạng hình ảnh, vì vậy văn bản sẽ không thể chọn được. Ghi chú của người thuyết trình sẽ được chuyển vào file PPTX theo từng slide.

Ở chế độ này, tùy chọn `--with-clicks` được enable mặc định. Để disable, sử dụng `--with-clicks false`.

### Chế độ tối

Nếu bạn muốn export slide với phiên bản giao diện tối của theme, sử dụng tùy chọn `--dark`:

```bash
$ slidev export --dark
```

### Export các bước click

> Có sẵn từ phiên bản v0.21

Theo mặc định, Slidev export một trang cho mỗi slide với hiệu ứng click bị disable. Nếu bạn muốn export slide có nhiều bước thành nhiều trang, hãy sử dụng tùy chọn `--with-clicks`:

```bash
$ slidev export --with-clicks
```

### Mục lục PDF

> Có sẵn từ phiên bản v0.36.10

Bạn có thể tạo mục lục PDF bằng cách sử dụng tùy chọn `--with-toc`:

```bash
$ slidev export --with-toc
```

### Tên file export ra

Bạn có thể chỉ định tên file export ra bằng tùy chọn `--output`:

```bash
$ slidev export --output my-pdf-export
```

Hoặc trong cấu hình frontmatter:

```yaml
---
exportFilename: my-pdf-export
---
```

### Export một phạm vi slide

Theo mặc định, tất cả các slide trong bài thuyết trình sẽ được export. Nếu bạn muốn export một slide cụ thể hoặc một phạm vi slide, bạn có thể sử dụng tùy chọn `--range` và chỉ định các slide bạn muốn export:

```bash
$ slidev export --range 1,6-8,10
```

Tùy chọn này chấp nhận cả số slide cụ thể và các phạm vi.

Ví dụ ở trên sẽ export các slide số 1, 6, 7, 8 và 10.

### Export nhiều mục cùng lúc

Bạn cũng có thể export nhiều slide cùng một lúc:

```bash
$ slidev export slides1.md slides2.md
```

Hoặc

```bash
$ slidev export *.md
```

Trong trường hợp này, mỗi file đầu vào sẽ tạo ra một file PDF riêng.

## Ghi chú Người Thuyết Trình

> Có sẵn từ phiên bản v0.36.8

Chỉ export ghi chú người thuyết trình (khối chú thích cuối cùng cho mỗi slide) vào một tài liệu văn bản định dạng PDF:

```bash
$ slidev export-notes
```

Lệnh này cũng chấp nhận nhiều mục nhập giống như command [export](#multiple-entries).

## Ứng Dụng Một Trang (SPA)

Xem thêm [Hosting Tĩnh](/guide/hosting).

## Docker Image Có Thể Export

Để hỗ trợ tính năng export, có một [docker image](/guide/install#install-on-docker) (do [@tangramor](https://github.com/tangramor) duy trì) với tag **playwright**. Chạy command sau trong thư mục làm việc của bạn:

```bash
docker run --name slidev --rm -it \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    -e NPM_MIRROR="https://registry.npmmirror.com" \
    tangramor/slidev:playwright
```

Sau đó bạn có thể sử dụng tính năng export như sau trong thư mục làm việc của bạn:

```bash
docker exec -i slidev npx slidev export --timeout 2m --output slides.pdf
```

## Khắc phục sự cố

### Hết thời gian chờ (Timeouts)

Đối với các bài thuyết trình lớn, bạn có thể muốn tăng thời gian chờ của Playwright bằng tùy chọn `--timeout`:

```bash
$ slidev export --timeout 60000
```

### Chờ

Một số phần của slide có thể cần nhiều thời gian hơn để render. Bạn có thể sử dụng tùy chọn `--wait` để thêm một khoảng trễ trước khi export:

```bash
$ slidev export --wait 10000
```

Cũng có tùy chọn `--wait-until` để chờ một trạng thái cụ thể trước khi export từng slide:

```bash
$ slidev export --wait-until none
```

Các giá trị có thể sử dụng:

- `'networkidle'` - (_mặc định_) coi thao tác hoàn tất khi không có kết nối mạng nào trong ít nhất `500` ms. Không nên sử dụng phương pháp này để kiểm thử, hãy dựa vào các xác nhận trên web để đánh giá trạng thái sẵn sàng.
- `'domcontentloaded'` - coi thao tác hoàn tất khi sự kiện `DOMContentLoaded` được kích hoạt.
- `'load'` - coi thao tác hoàn tất khi sự kiện `load` được kích hoạt.
- `'none'` - không chờ bất kỳ sự kiện nào.

::: warning
Khi chỉ định các giá trị khác `'networkidle'`, hãy đảm bảo rằng các slide được in ra là đầy đủ và chính xác. Nếu thiếu nội dung, bạn có thể cần sử dụng tùy chọn `--wait`.
:::

### Đường dẫn thực thi

Chromium có thể thiếu một số tính năng như codec cần thiết để giải mã một số video. Bạn có thể đặt đường dẫn trình duyệt thực thi cho Playwright tới Chrome hoặc Edge của bạn bằng cách sử dụng `--executable-path`:

```bash
$ slidev export --executable-path [path_to_chromium]
```
