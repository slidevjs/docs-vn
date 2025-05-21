# Các Element có thể kéo thả

Các element có thể kéo thả cho phép bạn di chuyển, thay đổi kích thước và xoay các element bằng cách kéo chuột. Điều này hữu ích khi tạo các element nổi trong slide của bạn.

## Cách dùng Directive

### Dữ liệu từ frontmatter

```md
---
dragPos:
  square: Left,Top,Width,Height,Rotate
---

<img v-drag="'square'" src="https://sli.dev/logo.png">
```

### Dữ liệu từ giá trị của directive

::: warning
Slidev sử dụng biểu thức chính quy (regex) để cập nhật giá trị vị trí trong nội dung slide. Nếu bạn gặp sự cố, hãy sử dụng phần frontmatter để định nghĩa các giá trị thay thế.
:::

```md
<img v-drag="[Left,Top,Width,Height,Rotate]" src="https://sli.dev/logo.png">
```

## Sử dụng dưới dạng Component

### Dữ liệu từ frontmatter

```md
---
dragPos:
  foo: Left,Top,Width,Height,Rotate
---

<v-drag pos="foo" text-3xl>
  <carbon:arrow-up />
  Use the `v-drag` component to have a draggable container!
</v-drag>
```

### Dữ liệu từ props

```md
<v-drag pos="Left,Top,Width,Height,Rotate" text-3xl>
  <carbon:arrow-up />
  Use the `v-drag` component to have a draggable container!
</v-drag>
```

## Chiều cao tự động

Bạn có thể đặt `Height` là `NaN` (nếu bạn sử dụng directive) hoặc `_` (nếu bạn sử dụng component) để chiều cao của element có thể kéo được tự động điều chỉnh theo nội dung của nó.

## Tạo element có thể kéo thả

Khi bạn tạo một element có thể kéo thả lần đầu tiên, bạn không cần phải chỉ định giá trị vị trí (nhưng bạn cần chỉ định tên vị trí nếu bạn muốn sử dụng frontmatter). Slidev sẽ tự động tạo ra giá trị vị trí ban đầu cho bạn.

## Điều khiển

- Nhấp đúp chuột vào element có thể kéo để bắt đầu kéo.
- Bạn cũng có thể sử dụng các phím mũi tên để di chuyển element.
- Giữ `Shift` trong khi kéo để giữ nguyên tỉ lệ.
- Nhấp ra ngoài element có thể kéo để dừng kéo.

## Mũi tên có thể kéo thả

Component`<v-drag-arrow>` tạo ra một element mũi tên có thể kéo thả. Chỉ cần sử dụng nó như sau:

```md
<v-drag-arrow />
```

Và bạn sẽ nhận được một element mũi tên có thể kéo thả. Các thuộc tính khác giống như [component `Arrow`](/builtin/components#arrow).
