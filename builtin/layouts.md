# Bố cục

Trang này liệt kê tất cả các bố cục tích hợp sẵn được cung cấp bởi Slidev. Các bố cục này có thể được sử dụng thông qua option `layout` trong phần frontmatter của các slide.

Lưu ý rằng <LinkInline link="guide/theme-addon" /> có thể cung cấp thêm bố cục hoặc ghi đè các bố cục hiện có. Để thêm bố cục của riêng bạn, xem <LinkInline link="guide/write-layout" />.

## `center`

Hiển thị nội dung ở giữa màn hình.

## `cover`

Được sử dụng để hiển thị trang bìa của bài thuyết trình, có thể chứa tiêu đề, ngữ cảnh hóa, v.v.

## `default`

Bố cục cơ bản nhất, dùng để hiển thị bất kỳ loại nội dung nào.

## `end`

Trang cuối cùng của bài thuyết trình.

## `fact`

Hiển thị một số dữ liệu hoặc thông tin với sự nổi bật lớn trên màn hình.

## `full`

Sử dụng toàn bộ không gian màn hình để hiển thị nội dung.

## `image-left`

Hiển thị một hình ảnh ở bên trái màn hình, nội dung sẽ được đặt ở bên phải.

### Cách sử dụng

```yaml
---
layout: image-left

# nguồn hình ảnh
image: /path/to/the/image

# tên class tùy chỉnh cho nội dung
class: my-cool-content-on-the-right
---
```

## `image-right`

Hiển thị một hình ảnh ở bên phải màn hình, nội dung sẽ được đặt ở bên trái.

### Cách sử dụng

```yaml
---
layout: image-right

# nguồn hình ảnh
image: /path/to/the/image

# tên class tùy chỉnh cho nội dung
class: my-cool-content-on-the-left
---
```

## `image`

Hiển thị một hình ảnh làm nội dung chính của trang.

### Cách sử dụng

```yaml
---
layout: image

# nguồn hình ảnh
image: /path/to/the/image
---
```

Bạn có thể thay đổi kích thước background mặc định (`cover`) bằng cách thêm thuộc tính `backgroundSize`:

```yaml
---
layout: image
image: /path/to/the/image
backgroundSize: contain
---
```

```yaml
---
layout: image-left
image: /path/to/the/image
backgroundSize: 20em 70%
---
```

## `iframe-left`

Hiển thị một trang web ở bên trái màn hình, nội dung sẽ được đặt ở bên phải.

### Cách sử dụng

```yaml
---
layout: iframe-left

# nguồn trang web
url: https://github.com/slidevjs/slidev

# tên class tùy chỉnh cho nội dung
class: my-cool-content-on-the-right
---
```

## `iframe-right`

Hiển thị một trang web ở bên phải màn hình, nội dung sẽ được đặt ở bên trái.

### Cách sử dụng

```yaml
---
layout: iframe-right

# nguồn trang web
url: https://github.com/slidevjs/slidev

# tên class tùy chỉnh cho nội dung
class: my-cool-content-on-the-left
---
```

## `iframe`

Hiển thị một trang web làm nội dung chính của trang.

### Usage

```yaml
---
layout: iframe

# nguồn trang web
url: https://github.com/slidevjs/slidev
---
```

## `intro`

Dùng để giới thiệu bài thuyết trình, thường gồm tiêu đề, mô tả ngắn gọn, tác giả, v.v.

## `none`

Bố cục không có bất kỳ kiểu dáng nào.

## `quote`

Hiển thị một câu trích dẫn với sự nổi bật.

## `section`

Được sử dụng để đánh dấu sự bắt đầu của một phần mới trong bài thuyết trình.

## `statement`

Làm nổi bật một khẳng định như nội dung chính của trang.

## `two-cols`

Phân chia nội dung trang thành hai cột.

### Cách sử dụng

```md
---
layout: two-cols
---

# Left

Hiển thị ở bên trái

::right::

# Right

Hiển thị ở bên phải
```

## `two-cols-header`

Phân chia dòng trên và dòng dưới của nội dung trang, dòng thứ hai phân chia cột trái và cột phải.

### Cách sử dụng

```md
---
layout: two-cols-header
---

Hiển thị cả hai

::left::

# Left

Hiển thị ở bên trái

::right::

# Right

Hiển thị ở bên phải
```
