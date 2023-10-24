# Layout

## Tích hợp Layout

<<<<<<< HEAD
> Các tài liệu của phần này vẫn đang được hoàn thiện. Trước đó, bạn có thể xem trực tiếp tại [source code](https://github.com/slidevjs/slidev/blob/main/packages/client/layouts).
=======
> As themes may override layouts behaviour, the best way to know exactly the usage, parameters and examples is referring their documentation.


### `center`

Displays the content in the middle of the screen.

### `cover`

Used to display the cover page for the presentation, may contain the presentation title, contextualization, etc.

### `default`

The most basic layout, to display any kind of content.

### `end`

The final page for the presentation.

### `fact`

To show some fact or data with a lot of prominence on the screen.

### `full`

Use all the space of the screen to display the content.

### `image-left`

Shows an image on the left side of the screen, the content will be placed on the right side.

#### Usage

```yaml
---
layout: image-left

# the image source
image: ./path/to/the/image

# a custom class name to the content
class: my-cool-content-on-the-right
---
```

### `image-right`

Shows an image on the right side of the screen, the content will be placed on the left side.

#### Usage

```yaml
---
layout: image-right

# the image source
image: ./path/to/the/image

# a custom class name to the content
class: my-cool-content-on-the-left
---
```

### `image`

Shows an image as the main content of the page.

#### Usage

```yaml
---
layout: image

# the image source
image: ./path/to/the/image
---
```


### `iframe-left`

Shows a web page on the left side of the screen, the content will be placed on the right side.

#### Usage

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

Shows a web page on the right side of the screen, the content will be placed on the left side.

#### Usage

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

Shows a web page as the main content of the page.

#### Usage

```yaml
---
layout: iframe

# the web page source
url: https://github.com/slidevjs/slidev
---
```


### `intro`

To introduce the presentation, usually with the presentation title, a short description, the author, etc.

### `none`

A layout without any existent styling.

### `quote`

To display a quotation with prominience.

### `section`

Used to mark the beginning of a new presentation section.

### `statement`

Make an affirmation/statement as the main page content.

### `two-cols`

Separates the page content in two columns.

#### Usage


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
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c

<<<<<<< HEAD
## Tùy chỉnh Layout
=======
### `two-cols-header`

Separates the upper and lower lines of the page content, and the second line separates the left and right columns.

#### Usage


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

## Custom Layouts
>>>>>>> 285da456fee4e267e3d19c2fb5b19ebef4d1f909

Tạo một thư mục `layouts/` trong dự án gốc của bạn và chỉ cần đặt các component layout Vue tùy chỉnh của bạn bên trong nó.

Đọc thêm trong phần [Các tùy chỉnh](/custom/directory-structure#layouts).

## Layout do Chủ đề cung cấp

Chủ đề có thể cung cấp các layout hoặc ghi đè các layout hiện có. Vui lòng đọc tài liệu về nó để biết những gì nó cung cấp.
