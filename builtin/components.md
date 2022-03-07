# Component

## Tích hợp Component

> Các tài liệu của phần này vẫn đang được hoàn thiện. Trước đó, bạn có thể xem trực tiếp tại [source code](https://github.com/slidevjs/slidev/blob/main/packages/client/builtin).

<<<<<<< HEAD
## Tùy chỉnh Component
=======
### `TOC`

Insert a Table Of Content.

Titles and title levels get automatically retrieved from the first title element of each slides.

You can override this automatic behaviour for a slide by using the front matter syntax:
```yml
---
title: Amazing slide title
level: 2
---
```

Or if you prefer the slide to not appear in the TOC at all, you can use:
```yml
---
hideInToc: true
---
```

#### Usage
~~~md
<Toc />
~~~

Parameters:

* `columns` (`string | number`, default: `1`): The number of columns of the display
* `maxDepth` (`string | number`, default: `Infinity`): The maximum depth level of title to display
* `minDepth` (`string | number`, default: `1`): The minimum depth level of title to display
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, default: `'all'`):
  * `'all'`: Display all items
  * `'onlyCurrentTree'`: Display only items that are in current tree (active item, parents and children of active item)
  * `'onlySiblings'`: Display only items that are in current tree and their direct siblings

## Custom Components
>>>>>>> 61b06f20d904b70a8b14d4b69879ed25d0f08510

Tạo một thư mục `components/` trong dự án gốc của bạn và chỉ cần đặt các component Vue tùy chỉnh của bạn bên trong nó, sau đó bạn có thể sử dụng nó với cùng tên trong file markdown của mình!

Đọc thêm trong phần [Tùy chỉnh](/custom/directory-structure#components).

## Component do Chủ đề cung cấp

Chủ đề cũng có thể cung cấp các component. Vui lòng đọc tài liệu về nó để biết những gì nó cung cấp.

Kiểm tra thêm trong phần [Cấu trúc thư mục](/custom/directory-structure).
