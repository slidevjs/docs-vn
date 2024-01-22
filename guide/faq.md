# FAQ

## Grids

Vì Slidev dựa trên Web nên bạn có thể áp dụng bất kỳ bố cục lưới nào tùy thích. [CSS Grids](https://css-tricks.com/snippets/css/complete-guide-grid/), [flexboxes](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), hoặc thậm chí [Masonry](https://css-tricks.com/native-css-masonry-layout-in-css-grid/), bạn có toàn quyền kiểm soát.

<<<<<<< HEAD
Vì chúng tôi đã tích hợp sẵn [Windi CSS](https://windicss.org/), đây là một cách đơn giản để bạn tham khảo:
=======
Since we have [UnoCSS](https://unocss.dev/) built-in, here is one simple way for you to reference:
>>>>>>> 9b64ca249c101e7e425d7ca81aebba12658b9b97

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

<<<<<<< HEAD
Hơn nữa, bạn có thể tùy chỉnh kích thước của từng cột như:
=======
Go further, you can customize the size of each column like:
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c

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

<<<<<<< HEAD
Tìm hiểu thêm về [Windi CSS Grids](https://windicss.org/utilities/grid.html).
=======
Learn more about [Windi CSS Grids](https://windicss.org/utilities/layout/grid.html).
>>>>>>> 9b64ca249c101e7e425d7ca81aebba12658b9b97

## Positioning

Slide được xác định theo kích thước cố định (mặc định `980x552px`) và chia tỷ lệ để vừa với màn hình người dùng. Bạn có thể an toàn sử dụng position absolute trong slide của mình vì chúng sẽ scale cùng với màn hình.

Ví dụ:

```html
<div class="absolute left-30px bottom-30px">
This is a left-bottom aligned footer
</div>
```

Để thay đổi kích thước thực của canvas, bạn có thể chuyển các tùy chọn `canvasWidth` trong frontmatter đầu tiên của mình:

```yaml
---
canvasWidth: 800
---
```

## Kích thước Font

Nếu bạn cảm thấy kích thước font trong các slide của mình quá nhỏ, bạn có thể điều chỉnh nó theo một số cách:

### Ghi đè Style cục bộ

Bạn có thể ghi đè style cho từng trang slide bằng thẻ `<style>`.

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

Tìm hiểu thêm về [Embedded Styles](/guide/syntax.html#embedded-styles)

### Ghi đè Style toạn cục

Bạn có thể cung cấp các style toàn cục tùy chỉnh bằng cách tạo `./style.css`, ví dụ

```css
/* style.css */ 

h1 {
  font-size: 10em !important;
}
```

Tìm hiểu thêm về: [Global Style](/custom/directory-structure.html#style)

### Scale Canvas

Thay đổi kích thước thực tế của canvas sẽ chia tỷ lệ tất cả nội dung của bạn (văn bản, hình ảnh, components, v.v.) và các slide

```yaml
---
# mặc định: 980
# vì canvas nhỏ hơn, kích thước hình ảnh sẽ trở nên lớn hơn
canvasWidth: 800
---
```

### Sử dụng Transform

Chúng tôi cung cấp một component tích hợp sẵn `<Transform />`, là một lớp wrapper của thuộc tính transform CSS.

```md
<Transform :scale="1.4">

- Item 1
- Item 2

</Transform>
```
