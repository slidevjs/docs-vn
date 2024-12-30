---
outline: deep
---

# Câu hỏi thường gặp

## Xử lý assets {#assets-handling}

Bạn có thể sử dụng các static assets như hình ảnh và video trong các slide của mình. Vì Slidev dựa trên Vite, bạn có thể import chúng trực tiếp vào các file markdown.

Các URL có thể được phân tích static như assets có thể sử dụng đường dẫn tương đối:

```md
![alt](./image.png)
<img src="./image.png" />
```

Trong trường hợp trên, các URL sẽ được resolve thành `/BASE_URL/assets/image.png` sau khi build.

Tuy nhiên, các đường dẫn tương đối trong frontmatter và các component khác sẽ bị hỏng sau khi build:

```md
---
background: ./image.png  # Broken after build
---

<Comp src="./image.png" />
```

Trong trường hợp trên, các URL không thể phân tích static và sẽ được giữ nguyên như vậy, dẫn đến lỗi 404 sau khi build.

Để giải quyết điều này, bạn có thể đặt các assets này vào [thư mục public](../custom/directory-structure#public) và sử dụng đường dẫn tuyệt đối để nhập chúng:

```md
---
background: /image.png
---

<Comp src="/image.png" />
```

Để biết thêm chi tiết, tham khảo [tài liệu của Vite](https://vitejs.dev/guide/assets.html).

## Định vị {#positioning}

Vì Slidev là ứng dụng web, CSS là cách chính để định vị các element. Dưới đây là một số mẹo hữu ích để định vị các element:

### Grid và Flexbox

Bạn có thể sử dụng CSS Grids để tạo các layout phức tạp:

::: code-group

```md [Two columns]
<div class="grid grid-cols-2 gap-4">
  <div>
    Cột đầu tiên
  </div>
  <div>
    Cột thứ hai
  </div>
</div>
```

```md [Complex case]
<div class="grid grid-cols-[200px_1fr_10%] gap-4">
  <div>
    Cột đầu tiên (200px)
  </div>
  <div>
    Cột thứ hai (auto fit)
  </div>
  <div>
    Cột thứ ba (Chiều rộng 10% phần tử cha)
  </div>
</div>
```

:::

Sử dụng Flexbox để tạo layout responsive tốt hơn:

::: code-group

```md [Horizontal]
<div class="flex items-center">
  <div>
    Khối đầu tiên
  </div>
  <div>
    Khối thứ hai
  </div>
</div>
```

```md [Vertical]
<div class="flex flex-col items-center">
  <div>
    Nội dung được căn giữa
  </div>
</div>
```

:::

Tìm hiểu thêm: [CSS Grids](https://css-tricks.com/snippets/css/complete-guide-grid/), [flexboxes](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), hoặc thậm chí [Masonry](https://css-tricks.com/native-css-masonry-layout-in-css-grid/).

### Vị trí tuyệt đối

Bạn có thể sử dụng UnoCSS để định vị các element theo vị trí tuyệt đối:

```md
<div class="absolute left-30px bottom-30px">
  Đây là một footer căn ở góc dưới bên trái
</div>
```

Hoặc sử dụng tính năng kéo thả các element:

<LinkCard link="features/draggable" />

## Điều chỉnh kích thước {#adjust-size}

- Điều chỉnh kích thước của tất cả slide:

<LinkCard link="features/canvas-size" />

- Điều chỉnh kích thước của nhiều slide:

<LinkCard link="features/zoom-slide" />

- Điều chỉnh kích thước của một số element:

<LinkCard link="features/transform-component" />
