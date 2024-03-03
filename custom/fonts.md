# Fonts

> Có hiệu lực từ v0.20

Mặc dù bạn có thể sử dụng HTML và CSS để tùy chỉnh phông chữ và kiểu cho các trang trình bày của mình theo ý muốn, nhưng Slidev cũng cung cấp một cách để sử dụng chúng dễ dàng.

<<<<<<< HEAD
Trong phông chữ của bạn, hãy định cấu hình như sau
=======
In your frontmatter, configure as following
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c

```yaml
---
fonts:
  # basically the text
  sans: Robot
  # use with `font-serif` css class from UnoCSS
  serif: Robot Slab
  # for code blocks, inline code, etc.
  mono: Fira Code
---
```

Và đó là tất cả.

Phông chữ sẽ được **nhập tự động từ [Google Fonts](https://fonts.google.com/)**. Điều đó có nghĩa là bạn có thể sử dụng trực tiếp bất kỳ phông chữ nào có sẵn trên Google Fonts.

## Local Fonts

<<<<<<< HEAD
Theo mặc định, Slidev giả định tất cả các phông chữ được chỉ định thông qua cấu hình `fonts` đến từ Google Fonts. Nếu bạn muốn sử dụng font cục bộ, hãy chỉ định `fonts.local` để chọn không tự động nhập.
=======
By default, Slidev assumes all the fonts specified via `fonts` configurations come from Google Fonts. If you want to use local fonts, specify the `fonts.local` to opt-out the auto-importing.
>>>>>>> ee683ae81a2021c44b278d720a418ee0c6ddb537

```yaml
---
fonts:
  # like font-family in css, you can use `,` to separate multiple fonts for fallback
  sans: 'Helvetica Neue,Robot'
  # mark 'Helvetica Neue' as local font
  local: Helvetica Neue
---
```

## In đậm & In nghiêng

Theo mặc định, Slidev nhập ba trọng số `200`, `400`, `600` cho mỗi font. Bạn có thể cấu hình chúng bằng cách:

```yaml
---
fonts:
  sans: Robot
  # default
  weights: '200,400,600'
  # import italic fonts, default `false`
  italic: false
---
```

Cấu hình này áp dụng cho tất cả các font web. Để có thể chi tiết hơn về trọng số của từng font, bạn cần nhập chúng theo cách thủ công bằng [HTML](/custom/directory-structure.html#index-html) và CSS.

## Font dự phòng

Đối với hầu hết các tình huống, bạn chỉ cần chỉ định "special font" và Slidev sẽ thêm các font dự phòng cho bạn, ví dụ:

```yaml
---
fonts:
  sans: Robot
  serif: Robot Slab
  mono: Fira Code
---
```

<<<<<<< HEAD
sẽ cho kết quả
=======
will result in
>>>>>>> ee683ae81a2021c44b278d720a418ee0c6ddb537

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

Nếu bạn muốn tắt font dự phòng, hãy định cấu hình như sau

```yaml
---
fonts:
  mono: 'Fira Code, monospace'
  fallbacks: false
---
```

## Providers

- Tùy chọn: `google` | `none`
- Mặc định: `google`

Hiện tại, chỉ Google Fonts được hỗ trợ, chúng tôi dự kiến sẽ bổ sung thêm nhiều nhà cung cấp khác trong tương lai. Chỉ định thành `none` sẽ vô hiệu hóa hoàn toàn tính năng tự động nhập và xử lý tất cả các font cục bộ.

```yaml
---
fonts:
  provider: none
---
```
