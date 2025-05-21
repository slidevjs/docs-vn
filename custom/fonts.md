# Font

> Có sẵn từ phiên bản v0.20

Mặc dù bạn có thể sử dụng HTML và CSS để tùy chỉnh font và style cho slide theo ý muốn, Slidev cũng cung cấp một cách tiện lợi để sử dụng font một cách dễ dàng.

Trong phần frontmatter, hãy cấu hình như sau:

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

Font sẽ được **tự động import từ [Google Fonts](https://fonts.google.com/)**. Điều này có nghĩa là bạn có thể sử dụng bất kỳ font nào có sẵn trên Google Fonts một cách trực tiếp.

## Font cục bộ

Theo mặc định, Slidev giả định rằng tất cả font được chỉ định thông qua cấu hình `fonts` đều đến từ Google Fonts.  
Nếu bạn muốn sử dụng font cục bộ, hãy chỉ định `fonts.local` để tắt chức năng tự động import.

```yaml
---
fonts:
  # like font-family in css, you can use `,` to separate multiple fonts for fallback
  sans: 'Helvetica Neue,Robot'
  # mark 'Helvetica Neue' as local font
  local: Helvetica Neue
---
```

## Độ đậm & Chữ nghiêng (Weights & Italic)

Theo mặc định, Slidev sẽ import ba độ đậm `200`, `400`, `600` cho mỗi font. Bạn có thể tùy chỉnh các giá trị này bằng cách sau:

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

Cấu hình này được áp dụng cho tất cả các font web. Nếu bạn muốn kiểm soát chi tiết hơn về các độ đậm riêng của từng font, bạn sẽ cần import chúng thủ công bằng [HTML](/custom/directory-structure.html#index-html) và CSS.

## Font dự phòng (Fallback Fonts)

Trong hầu hết các trường hợp, bạn chỉ cần chỉ định "font đặc biệt", và Slidev sẽ tự động thêm các font dự phòng cho bạn. Ví dụ:

```yaml
---
fonts:
  sans: Robot
  serif: Robot Slab
  mono: Fira Code
---
```

sẽ cho ra kết quả là:

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

Nếu bạn muốn disable font dự phòng, hãy cấu hình như sau:

```yaml
---
fonts:
  mono: 'Fira Code, monospace'
  fallbacks: false
---
```

## Nhà cung cấp font (Providers)

- Tùy chọn: `google` | `none`
- Mặc định: `google`

Hiện tại, chỉ hỗ trợ Google Fonts, nhưng chúng tôi có kế hoạch bổ sung thêm các nhà cung cấp khác trong tương lai. Thiết lập giá trị là `none` sẽ tắt hoàn toàn tính năng tự động import và xem tất cả các font là cục bộ.

```yaml
---
fonts:
  provider: none
---
```
