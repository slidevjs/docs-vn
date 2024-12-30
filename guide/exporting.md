---
outline: deep
---

# Export dữ liệu

Thông thường, các slide được hiển thị trong trình duyệt web, nhưng bạn cũng có thể export chúng sang các file PDF, PPTX, PNG hoặc Markdown để chia sẻ hoặc in ấn. Tính năng này có sẵn thông qua CLI command [`slidev export`](../builtin/cli#export).

Tuy nhiên, các tính năng tương tác trong slide của bạn có thể không khả dụng trong các file export. Bạn có thể build và host slide của mình như một ứng dụng web để giữ lại tính tương tác. Xem thêm [Build và Host](./hosting) để biết thêm thông tin.

## Trình export dữ liệu trên trình duyệt <Badge> đề xuất </Badge> {#browser}

> Có sẵn từ phiên bản v0.50.0-beta.11

Slidev cung cấp giao diện trên trình duyệt để export slide của bạn. Bạn có thể truy cập nó bằng cách click vào nút "Export" trong menu "More options" trên [thanh điều hướng](./ui#navigation-bar), hoặc truy cập trực tiếp vào `http://localhost:<port>/export`.

Trong giao diện này, bạn có thể export slide dưới dạng PDF, hoặc chụp slide dưới dạng hình ảnh và download về dưới dạng file PPTX hoặc zip.

Lưu ý rằng các trình duyệt không phải **trình duyệt hiện đại dựa trên Chromium** có thể không hoạt động tốt với giao diện export dữ liệu. Nếu gặp bất kỳ vấn đề nào, vui lòng thử sử dụng CLI thay thế.

> Nội dung sau đây của trang này chỉ dành cho CLI.

## CLI {#cli}

Export sang PDF, PPTX hoặc PNG yêu cầu [Playwright](https://playwright.dev) để render các slide. Do đó, bạn cần cài đặt [`playwright-chromium`](https://npmjs.com/package/playwright-chromium) trong dự án của mình:

::: code-group

```bash [npm]
$ npm i -D playwright-chromium
```

```bash [pnpm]
$ pnpm add -D playwright-chromium
```

```bash [yarn]
$ yarn add -D playwright-chromium
```

:::

## Định dạng

### PDF

Sau khi cài đặt `playwright-chromium` như mô tả ở trên, bạn có thể export slide sang PDF bằng command sau:

```bash
$ slidev export
```

Theo mặc định, file PDF sẽ được lưu tại `./slides-export.pdf`.

### PPTX

Slidev cũng có thể export slide của bạn sang file PPTX:

```bash
$ slidev export --format pptx
```

Lưu ý rằng tất cả các slide trong file PPTX sẽ được export dưới dạng hình ảnh, vì vậy văn bản sẽ không thể bôi đen được. Ghi chú của người thuyết trình sẽ được truyền vào file PPTX theo từng slide.

Trong chế độ này, option `--with-clicks` được enable theo mặc định. Để disable, hãy sử dụng `--with-clicks false`.

### PNG và Markdown

Khi sử dụng option `--format png`, Slidev sẽ export hình ảnh PNG cho mỗi slide thay vì PDF:

```bash
$ slidev export --format png
```

Bạn cũng có thể compile file markdown bao gồm các hình ảnh png đã compile bằng `--format md`:

```bash
$ slidev export --format md
```

## Các option

Dưới đây là một số option phổ biến bạn có thể sử dụng với command `slidev export`. Để xem danh sách đầy đủ các option, tham khảo [tài liệu CLI](../builtin/cli#export).

### Export các bước click

Mặc định, Slidev export một trang cho mỗi slide với animation khi click bị disable. Nếu bạn muốn export các slide với nhiều bước thành nhiều trang, hãy sử dụng option `--with-clicks`:

```bash
$ slidev export --with-clicks
```

### Tên file output

Bạn có thể chỉ định tên file output với option `--output`:

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

### Export nhiều file

Bạn cũng có thể export nhiều slide cùng một lúc:

```bash
$ slidev export slides1.md slides2.md
```

Hoặc (chỉ có sẵn trong một số shell nhất định):

```bash
$ slidev export *.md
```

Trong trường hợp này, mỗi file input sẽ tạo ra một file PDF riêng.

### Chế độ tối

Trong trường hợp bạn muốn export bài thuyết trình của mình bằng phiên bản giao diện tối, hãy sử dụng option `--dark`:

```bash
$ slidev export --dark
```

### Thời gian chờ

Đối với các bài thuyết trình lớn, bạn có thể muốn tăng thời gian chờ của Playwright bằng cách sử dụng `--timeout`:

```bash
$ slidev export --timeout 60000
```

### Chờ

Một số phần trong các slide của bạn có thể yêu cầu thời gian dài hơn để render. Bạn có thể sử dụng option `--wait` để thêm một khoảng thời gian trễ trước khi export:

```bash
$ slidev export --wait 10000
```

Cũng có một option `--wait-until` để chờ một trạng thái trước khi export mỗi slide. Nếu bạn gặp phải vấn đề timeout, bạn có thể thử cài đặt option này:

```bash
$ slidev export --wait-until none
```

Các giá trị có thể:

- `'networkidle'` - (_default_) coi thao tác hoàn thành khi không có kết nối mạng trong ít nhất `500` ms. Đây là phương pháp an toàn nhất, nhưng có thể gây ra timeout.
- `'domcontentloaded'` - coi thao tác hoàn thành khi sự kiện `DOMContentLoaded` được kích hoạt.
- `'load'` - coi thao tác hoàn thành khi sự kiện `load` được kích hoạt.
- `'none'` - không chờ bất kỳ sự kiện nào.

::: warning
Khi chỉ định các giá trị khác ngoài `'networkidle'`, hãy đảm bảo rằng các slide được export đầy đủ và chính xác. Nếu một số nội dung bị thiếu, bạn có thể cần sử dụng option `--wait`.
:::

### Đường dẫn thực thi

Chromium có thể thiếu một số tính năng như codec cần thiết để decode một số video. Bạn có thể đặt đường dẫn thực thi trình duyệt cho Playwright tới Chrome hoặc Edge của bạn bằng option `--executable-path`:

```bash
$ slidev export --executable-path [path_to_chromium]
```

### Mục lục PDF

> Có sẵn từ phiên bản v0.36.10

Bạn có thể tạo mục lục PDF bằng cách thêm option `--with-toc`:

```bash
$ slidev export --with-toc
```

### Loại bỏ background

Khi export sang PNG, bạn có thể loại bỏ background mặc định của trình duyệt bằng cách thêm option `--omit-background`:

```bash
$ slidev export --omit-background
```

Background mặc định của trình duyệt là background trắng hiển thị trên tất cả các cửa sổ trình duyệt và khác với các background khác được áp dụng trong toàn bộ ứng dụng bằng cách sử dụng CSS. [Xem tài liệu Playwright](https://playwright.dev/docs/api/class-page#page-screenshot-option-omit-background). Bạn sẽ cần áp dụng thêm CSS cho ứng dụng để hiển thị độ trong suốt.

Dưới đây là một ví dụ cơ bản để bao phủ tất cả các background trong ứng dụng:

```css
* {
  background: transparent !important;
}
```

## Xử lý sự cố

### Nội dung thiếu hoặc animation chưa hoàn thành

Nếu bạn thấy một số nội dung bị thiếu hoặc animation chưa hoàn thành trong PDF export, hãy thử thêm thời gian chờ trước khi export mỗi slide:

```bash
$ slidev export --wait 1000
```

### Emoji bị thiếu

Nếu file PDF hoặc PNG thiếu Emoji, có khả năng môi trường của bạn thiếu phông chữ cần thiết (chẳng hạn như [Google's _Noto Emoji_](https://fonts.google.com/noto/specimen/Noto+Emoji)).

Điều này có thể ảnh hưởng đến các môi trường Linux kiểu CI/CD chạy trong container. Bạn có thể fix, ví dụ như sau:

```bash
$ curl -L --output NotoColorEmoji.ttf https://github.com/googlefonts/noto-emoji/raw/main/fonts/NotoColorEmoji.ttf
$ sudo mv NotoColorEmoji.ttf /usr/local/share/fonts/
$ fc-cache -fv
```

### Sai ngữ cảnh trong Global Layers

Xem mẹo tại https://sli.dev/features/global-layers.
