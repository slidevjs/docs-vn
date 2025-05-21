# FAQ

## Grids

Vì Slidev được xây dựng dựa trên Web, bạn có thể áp dụng bất kỳ layout grid nào tùy thích. [CSS Grids](https://css-tricks.com/snippets/css/complete-guide-grid/), [flexboxes](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), hoặc thậm chí [Masonry](https://css-tricks.com/native-css-masonry-layout-in-css-grid/), bạn có toàn quyền kiểm soát.

Vì [UnoCSS](https://unocss.dev/) đã được tích hợp sẵn, đây là một cách bạn có thể tham khảo:

```html
<div class="grid grid-cols-2 gap-4">
<div>

The first column

</div>
<div>

The second column

</div>
</div>
```

Tiếp tục, bạn có thể tùy chỉnh kích thước của từng cột như sau:

```html
<div class="grid grid-cols-[200px_1fr_10%] gap-4">
<div>

The first column (200px)

</div>
<div>

The second column (auto fit)

</div>
<div>

The third column (10% width to parent container)

</div>
</div>
```

## Position

Các slide được xác định với kích thước cố định (mặc định là `980x552px`) và sẽ co giãn để phù hợp với màn hình người dùng. Bạn có thể sử dụngposition absolute một cách an toàn trong các slide vì chúng sẽ tỉ lệ theo màn hình.

Ví dụ:

```html
<div class="absolute left-30px bottom-30px">
This is a left-bottom aligned footer
</div>
```

Để thay đổi kích thước thực tế của canvas, bạn có thể truyền tùy chọn `canvasWidth` trong phần frontmatter đầu tiên:

```yaml
---
canvasWidth: 800
---
```

## Cỡ chữ

Nếu bạn cảm thấy cỡ chữ trong các slide quá nhỏ, bạn có thể điều chỉnh theo một vài cách:

### Ghi đè style cục bộ

Bạn có thể ghi đè các style cho từng slide bằng thẻ `<style>` được chèn trực tiếp.

```md
# Page 1

<style>
h1 {
  font-size: 10em;
}
</style>

---

# Page 2

This will not be affected.
```

Tìm hiểu thêm: [Style nhúng](/guide/syntax.html#embedded-styles)

### Ghi đè style toàn cục

Bạn có thể cung cấp các style tùy chỉnh toàn cục bằng cách tạo file `./style.css`, ví dụ:

```css
/* style.css */

h1 {
  font-size: 10em !important;
}
```

Tìm hiểu thêm: [Style Toàn Cục](/custom/directory-structure.html#style)

### Phóng To Canvas

Thay đổi kích thước thực tế của canvas sẽ phóng to toàn bộ nội dung của bạn (văn bản, hình ảnh, component, v.v.) và các slide.

```yaml
---
# default: 980
# since the canvas gets smaller, the visual size will become larger
canvasWidth: 800
---
```

### Sử dụng Transform

Chúng tôi cung cấp một component tích hợp sẵn `<Transform />`, là một lớp bao bọc nhẹ của thuộc tính CSS transform.

```md
<Transform :scale="1.4">

- Item 1
- Item 2

</Transform>
```
