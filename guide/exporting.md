---
outline: deep
---

# Export

Thông thường, các slide được hiển thị trong trình duyệt web, nhưng bạn cũng có thể export chúng thành các file PDF, PPTX, PNG hoặc Markdown để chia sẻ hoặc in ấn. Tính năng này có sẵn thông qua lệnh CLI [`slidev export`](../builtin/cli#export).

Tuy nhiên, các tính năng tương tác trong slide của bạn có thể không khả dụng trong các file export. Bạn có thể build và host slide của mình dưới dạng một ứng dụng web để giữ lại tính tương tác. Xem [Build và Host](./hosting) để biết thêm chi tiết.

## Trình export dành cho trình duyệt <Badge> được khuyến nghị </Badge> {#browser}

> Có sẵn từ phiên bản v0.50.0-beta.11

Slidev cung cấp giao diện người dùng trong trình duyệt để export các slide. Bạn có thể truy cập nó bằng cách click vào nút "Export" trong menu "More options" trên [thanh điều hướng](./ui#navigation-bar), hoặc truy cập trực tiếp vào `http://localhost:<port>/export`.

Trong giao diện này, bạn có thể export slide dưới dạng PDF, hoặc chụp ảnh các slide và tải xuống dưới dạng file PPTX hoặc zip.

Lưu ý rằng các trình duyệt không phải là **trình duyệt hiện đại dựa trên Chromium** có thể không hoạt động tốt với giao diện export. Nếu bạn gặp sự cố, hãy thử sử dụng CLI thay vào đó.

> Nội dung tiếp theo của trang này chỉ dành cho CLI.

## Lệnh CLI {#cli}

Việc export slide sang PDF, PPTX hoặc PNG dựa vào [Playwright](https://playwright.dev) để hiển thị các slide. Do đó, [`playwright-chromium`](https://npmjs.com/package/playwright-chromium) cần phải được cài đặt trong dự án của bạn:

::: code-group

```bash [pnpm]
$ pnpm add -D playwright-chromium
```

```bash [npm]
$ npm i -D playwright-chromium
```

```bash [yarn]
$ yarn add -D playwright-chromium
```

:::

## Định dạng

### PDF

Sau khi cài đặt `playwright-chromium` như hướng dẫn trên, bạn có thể export slide sang PDF bằng lệnh sau:

```bash
$ slidev export
```

Mặc định, file PDF sẽ được lưu tại `./slides-export.pdf`.

### PPTX

Slidev cũng có thể export slide thành file PPTX:

```bash
$ slidev export --format pptx
```

Lưu ý rằng tất cả các slide trong file PPTX sẽ được export dưới dạng hình ảnh, vì vậy văn bản sẽ không thể bôi đen được. Các ghi chú của người thuyết trình sẽ được chuyển vào file PPTX theo từng slide.

Trong chế độ này, option `--with-clicks` sẽ được enable theo mặc định. Để disable, bạn có thể thêm `--with-clicks false`.

### PNG và Markdown

Khi sử dụng option `--format png`, Slidev sẽ export hình ảnh PNG cho mỗi slide thay vì PDF:

```bash
$ slidev export --format png
```

Bạn cũng có thể compile file markdown bao gồm các hình ảnh PNG đã compile bằng `--format md`:

```bash
$ slidev export --format md
```

## Các option

Dưới đây là một số option phổ biến bạn có thể sử dụng với lệnh `slidev export`. Để biết danh sách đầy đủ các option, xem [tài liệu CLI](../builtin/cli#export).

### Export các bước click

Mặc định, Slidev export một trang cho mỗi slide với animation click bị disable. Nếu bạn muốn export các slide có nhiều bước thành nhiều trang, hãy sử dụng option `--with-clicks`:

```bash
$ slidev export --with-clicks
```

### Tên file export

Bạn có thể chỉ định tên file export bằng option `--output`:

```bash
$ slidev export --output my-pdf-export
```

Hoặc trong cấu hình headmatter:

```yaml
---
exportFilename: my-pdf-export
---
```

### Export theo phạm vi

Mặc định, tất cả các slide trong bài thuyết trình sẽ được export. Nếu bạn muốn export một slide cụ thể hoặc một phạm vi các slide, bạn có thể sử dụng option `--range` và chỉ định các slide bạn muốn export:

```bash
$ slidev export --range 1,6-8,10
```

Option này chấp nhận cả số slide cụ thể và phạm vi. Ví dụ trên sẽ export các slide 1, 6, 7, 8 và 10.

### Export nhiều slide

Bạn cũng có thể export nhiều slide cùng một lúc:

```bash
$ slidev export slides1.md slides2.md
```

Hoặc (chỉ có trong một số shell nhất định):

```bash
$ slidev export *.md
```

Trong trường hợp này, mỗi file input sẽ tạo ra một file PDF riêng.

### Chế độ tối

Trong trường hợp bạn muốn export slide của mình bằng phiên bản tối của giao diện, sử dụng option `--dark`:

```bash
$ slidev export --dark
```

### Thời gian chờ

Đối với các bài thuyết trình lớn, bạn có thể muốn tăng thời gian chờ của Playwright với `--timeout`:

```bash
$ slidev export --timeout 60000
```

### Chờ

Một số phần của slide có thể yêu cầu thêm thời gian để hiển thị. Bạn có thể sử dụng option `--wait` để tạo độ trễ trước khi export:

```bash
$ slidev export --wait 10000
```

Ngoài ra còn có option `--wait-until` để chờ một trạng thái trước khi export mỗi slide. Nếu bạn gặp phải vấn đề về thời gian chờ, bạn có thể thử thiết lập option này:

```bash
$ slidev export --wait-until none
```

Các giá trị có thể có:

- `'networkidle'` - (_mặc định_) coi thao tác đã hoàn thành khi không còn kết nối mạng trong ít nhất `500` ms. Đây là phương án an toàn nhất, nhưng có thể gây lỗi thời gian chờ.
- `'domcontentloaded'` - coi thao tác đã hoàn thành khi sự kiện `DOMContentLoaded` được kích hoạt.
- `'load'` - coi thao tác đã hoàn thành khi sự kiện `load` được kích hoạt.
- `'none'` - không chờ sự kiện nào.

::: warning
Khi chỉ định các giá trị khác ngoài `'networkidle'`, hãy đảm bảo rằng các slide in ra đầy đủ và chính xác. Nếu có một số nội dung bị thiếu, bạn có thể cần sử dụng option `--wait`.
:::

### Đường dẫn file thực thi

Chromium có thể thiếu một số tính năng như codec cần thiết để decode một số video. Bạn có thể chỉ định đường dẫn thực thi của trình duyệt cho Playwright, sử dụng Chrome hoặc Edge với `--executable-path`:

```bash
$ slidev export --executable-path [path_to_chromium]
```

### Mục lục PDF

> Có sẵn từ phiên bản v0.36.10

Bạn có thể tạo mục lục PDF bằng cách sử dụng option `--with-toc`:

```bash
$ slidev export --with-toc
```

### Loại bỏ background

Khi export sang PNG, bạn có thể loại bỏ background mặc định của trình duyệt bằng cách sử dụng `--omit-background`:

```bash
$ slidev export --omit-background
```

Background mặc định của trình duyệt là background trắng hiển thị trên tất cả cửa sổ trình duyệt và khác với các background khác được áp dụng trong toàn bộ ứng dụng bằng cách sử dụng CSS. [Xem tài liệu Playwright](https://playwright.dev/docs/api/class-page#page-screenshot-option-omit-background). Bạn sẽ cần áp dụng thêm CSS vào ứng dụng để hiển thị độ trong suốt.

Dưới đây là ví dụ cơ bản bao phủ tất cả background trong ứng dụng:

```css
* {
  background: transparent !important;
}
```

## Khắc phục sự cố

### Nội dung mất hoặc animation chưa hoàn thành

Nếu bạn nhận thấy một số nội dung bị mất hoặc animation chưa hoàn thành trong file PDF export ra, bạn có thể thử thêm thời gian chờ trước khi export mỗi slide:

```bash
$ slidev export --wait 1000
```

### Emoji bị thiếu

Nếu file PDF hoặc PNG thiếu Emoji, bạn có thể thiếu các phông chữ cần thiết (chẳng hạn như [Noto Emoji của Google](https://fonts.google.com/noto/specimen/Noto+Emoji)) trong môi trường của bạn.

Điều này có thể ảnh hưởng đến các môi trường CI/CD như môi trường Linux trong container. Bạn có thể sửa lỗi bằng cách:

```bash
$ curl -L --output NotoColorEmoji.ttf https://github.com/googlefonts/noto-emoji/raw/main/fonts/NotoColorEmoji.ttf
$ sudo mv NotoColorEmoji.ttf /usr/local/share/fonts/
$ fc-cache -fv
```

### Lỗi ngữ cảnh trong các Global Layer

Xem mẹo tại https://sli.dev/features/global-layers.
