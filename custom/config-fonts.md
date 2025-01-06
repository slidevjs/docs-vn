# Cấu hình phông chữ

Mặc dù bạn có thể sử dụng HTML và CSS để tùy chỉnh phông chữ và style cho các slide theo ý muốn, Slidev cũng cung cấp một cách tiện lợi để sử dụng chúng một cách dễ dàng.

Trong phần frontmatter, cấu hình như sau:

```yaml
---
fonts:
  # cơ bản là văn bản
  sans: Robot
  # sử dụng với class css `font-serif` từ UnoCSS
  serif: Robot Slab
  # cho khối code, inline code, v.v.
  mono: Fira Code
---
```

Vậy là xong.

Phông chữ sẽ được **tự động import từ [Google Fonts](https://fonts.google.com/)**. Điều này có nghĩa là bạn có thể sử dụng bất kỳ phông chữ nào có sẵn trên Google Fonts trực tiếp.

## Phông chữ cục bộ

Theo mặc định, Slidev giả định tất cả các phông chữ được chỉ định thông qua cấu hình `fonts` đến từ Google Fonts. Nếu bạn muốn sử dụng phông chữ cục bộ, hãy chỉ định `fonts.local` để không tự động import phông chữ.

```yaml
---
fonts:
  # giống như font-family trong css, bạn có thể dùng `,` để phân tách nhiều phông chữ dự phòng
  sans: 'Helvetica Neue,Robot'
  # đánh dấu 'Helvetica Neue' là phông chữ cục bộ
  local: Helvetica Neue
---
```

## Độ dày & chữ nghiêng

Theo mặc định, Slidev import ba độ dày (weight) `200`,`400`,`600` cho mỗi phông chữ. Bạn có thể cấu hình chúng như sau:

```yaml
---
fonts:
  sans: Robot
  # mặc định
  weights: '200,400,600'
  # import phông chữ nghiêng, mặc định là `false`
  italic: false
---
```

Cấu hình này áp dụng cho tất cả phông chữ web. Để kiểm soát chi tiết hơn độ dày của từng phông chữ, bạn cần nhập thủ công bằng [HTML](/custom/directory-structure.html#index-html) và CSS.

## Phông chữ dự phòng

Trong hầu hết các trường hợp, bạn chỉ cần chỉ định "phông chữ đặc biệt" và Slidev sẽ thêm các phông chữ dự phòng cho bạn, ví dụ:

```yaml
---
fonts:
  sans: Robot
  serif: Robot Slab
  mono: Fira Code
---
```

sẽ cho kết quả:

<!-- eslint-skip -->

```css
.font-sans {
  font-family: "Robot",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
.font-serif {
  font-family: "Robot Slab",ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;
}
.font-mono {
  font-family: "Fira Code",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
```

Nếu bạn muốn disable phông chữ dự phòng, hãy cấu hình như sau:

```yaml
---
fonts:
  mono: 'Fira Code, monospace'
  fallbacks: false
---
```

## Nhà cung cấp

- Các option: `google` | `none`
- Mặc định: `google`

Hiện tại, chỉ có Google Fonts được hỗ trợ, chúng tôi đang có kế hoạch bổ sung thêm nhiều nhà cung cấp trong tương lai. Chỉ định `none` sẽ disable hoàn toàn tính năng tự động import và coi tất cả các phông chữ là cục bộ.

```yaml
---
fonts:
  provider: none
---
```
