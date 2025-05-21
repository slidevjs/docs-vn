# Các layout

## Các layout tích hợp sẵn

> Vì các theme có thể ghi đè hành vi của layout, cách tốt nhất để biết chính xác cách sử dụng, các tham số và ví dụ là tham khảo tài liệu của theme đó.

### `center`

Hiển thị nội dung ở giữa màn hình.

### `cover`

Dùng để hiển thị trang bìa cho bài thuyết trình, có thể chứa tiêu đề bài thuyết trình, bối cảnh, v.v.

### `default`

Layout cơ bản nhất, dùng để hiển thị mọi loại nội dung.

### `end`

Trang cuối cùng của bài thuyết trình.

### `fact`

Dùng để hiển thị một số dữ kiện hoặc dữ liệu nổi bật trên màn hình.

### `full`

Sử dụng toàn bộ không gian màn hình để hiển thị nội dung.

### `image-left`

Hiển thị hình ảnh ở bên trái màn hình, nội dung sẽ được đặt bên phải.

#### Cách sử dụng

```yaml
---
layout: image-left

# the image source
image: /path/to/the/image

# a custom class name to the content
class: my-cool-content-on-the-right
---
```

### `image-right`

Hiển thị hình ảnh ở bên phải màn hình, nội dung sẽ được đặt bên trái.

#### Cách sử dụng

```yaml
---
layout: image-right

# the image source
image: /path/to/the/image

# a custom class name to the content
class: my-cool-content-on-the-left
---
```

### `image`

Hiển thị hình ảnh như nội dung chính của trang.

#### Cách sử dụng

```yaml
---
layout: image

# the image source
image: /path/to/the/image
---
```

Bạn có thể thay đổi kích thước nền mặc định (`cover`) bằng cách thêm thuộc tính `backgroundSize`:

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

### `iframe-left`

Hiển thị một trang web ở phía bên trái màn hình, nội dung sẽ được đặt ở phía bên phải.

#### Cách sử dụng

```yaml
---
layout: iframe-left

# the web page source
url: https://github.com/slidevjs/slidev

# a custom class name to the content
class: my-cool-content-on-the-right
---
```

### `iframe-right`

Hiển thị một trang web ở phía bên phải màn hình, nội dung sẽ được đặt ở phía bên trái.

#### Cách sử dụng

```yaml
---
layout: iframe-right

# the web page source
url: https://github.com/slidevjs/slidev

# a custom class name to the content
class: my-cool-content-on-the-left
---
```

### `iframe`

Hiển thị một trang web làm nội dung chính của trang.

#### Cách sử dụng

```yaml
---
layout: iframe

# the web page source
url: https://github.com/slidevjs/slidev
---
```

### `intro`

Dùng để giới thiệu bài thuyết trình, thường bao gồm tiêu đề bài thuyết trình, mô tả ngắn, tác giả, v.v.

### `none`

Một layout không có bất kỳ style nào.

### `quote`

Dùng để hiển thị một trích dẫn với sự nổi bật.

### `section`

Dùng để đánh dấu bắt đầu một phần mới của bài thuyết trình.

### `statement`

Đưa ra một khẳng định/lời tuyên bố làm nội dung chính của trang.

### `two-cols`

Chia nội dung trang thành hai cột.

#### Cách sử dụng

```md
---
layout: two-cols
---

# Left

This shows on the left

::right::

# Right

This shows on the right
```

### `two-cols-header`

Phân tách nội dung trang thành hai dòng trên và dưới, dòng thứ hai chia thành hai cột trái và phải.

#### Cách sử dụng

```md
---
layout: two-cols-header
---

This spans both

::left::

# Left

This shows on the left

::right::

# Right

This shows on the right
```

## Layout tùy chỉnh

Tạo một thư mục `layouts/` dưới thư mục gốc của dự án, và đơn giản đặt các component layout Vue tùy chỉnh của bạn vào đó.

Xem thêm trong phần [Tùy chỉnh](/custom/directory-structure#layout).

## Layout do theme cung cấp

Các theme có thể cung cấp layout hoặc ghi đè các layout hiện có. Vui lòng đọc tài liệu của chúng để biết những gì chúng cung cấp.
