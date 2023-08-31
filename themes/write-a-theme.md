# Viết chủ đề mới

Để bắt đầu, chúng tôi khuyên bạn nên sử dụng trình tạo của chúng tôi để làm giàn giáo cho chủ đề đầu tiên của bạn

```bash
$ npm init slidev-theme
```

Sau đó, bạn có thể sửa đổi và thử với nó. Bạn cũng có thể tham khảo [chủ đề chính thức](/themes/gallery) làm ví dụ.

## Capability

Một chủ đề có thể đóng góp vào những điểm sau:

<<<<<<< HEAD
- Style toàn cầu
- Cung cấp cấu hình mặc định (font, lược đồ màu, đánh dấu, v.v...)
- Cung cấp layout tùy chỉnh hoặc ghi đè layout hiện có
- Cung cấp các component tùy chỉnh hoặc ghi đè component hiện có
- Mở rộng cấu hình CSS Windi
- Định cấu hình các công cụ như Monaco và Prism
=======
- Global styles
- Provide default configurations (fonts, color schema, highlighters, etc.)
- Provide custom layouts or override the existing one
- Provide custom components or override the existing one
- Extend UnoCSS/Windi CSS configurations
- Configure tools like Monaco and Prism
>>>>>>> 8024ec4e94d2cd81bc6d4a3efee822dde30d9054

## Quy ước

Chủ đề được publish lên npm registry và chúng phải tuân theo các quy ước dưới đây:

- Tên gói phải bắt đầu bằng `slidev-theme-`, ví dụ: `slidev-theme-awesome`
- Thêm `slidev-theme` và `slidev` trong trường `keywords` của `package.json`

## Cài đặt

Để thiết lập nơi thử nghiệm cho chủ đề của mình, bạn có thể tạo `example.md` với frontmatter sau để cho Slidev biết bạn đang sử dụng thư mục hiện tại làm chủ đề.

```md
---
theme: ./
---
```

Theo tùy chọn, bạn cũng có thể thêm một số tập lệnh vào `package.json` của mình

```json
// package.json
{
  "scripts": {
    "dev": "slidev example.md",
    "build": "slidev build example.md",
    "export": "slidev export example.md",
    "screenshot": "slidev export example.md --format png"
  }
}
```

Để xuất bản chủ đề của bạn, chỉ cần chạy `npm publish` và bạn đã sẵn sàng. Không yêu cầu quy trình xây dựng (có nghĩa là bạn có thể xuất bản trực tiếp các file `.vue` và `.ts`, Slidev đủ thông minh để hiểu chúng).

Điểm đóng góp của chủ đề tuân theo các quy ước giống như tùy chỉnh cục bộ, vui lòng tham khảo [tài liệu về quy ước đặt tên](/custom/). 

## Cấu hình mặc định

> Có hiệu lực từ v0.19

Chủ đề có thể cung cấp [cấu hình](/custom/#frontmatter-configures) mặc định thông qua `package.json`.

```json
// package.json
{
  "slidev": {
    "defaults": {
      "aspectRatio": "16/9",
      "canvasWidth": 980,
      "fonts": {
        "sans": "Robot",
        "mono": "Fira Code"
      }
    }
  }
}
```

Fonts sẽ được nhập tự động từ [Google Fonts](https://fonts.google.com/).

Tìm hiểu thêm về [fonts](/custom/fonts) và [cấu hình frontmatter](/custom/#frontmatter-configures).

## Chủ đề Metadata

### Bảng màu

Theo mặc định, Slidev giả định các chủ đề hỗ trợ cả chế độ sáng và chế độ tối. Nếu bạn chỉ muốn chủ đề của mình được trình bày trong một lược đồ màu được thiết kế, bạn sẽ cần chỉ định nó một cách rõ ràng trong `package.json`

```json
// package.json
{
  "name": "slidev-theme-my-cool-theme",
  "keywords": [
    "slidev-theme",
    "slidev"
  ],
  "slidev": {
    "colorSchema": "light" // or "dark" or "both"
  }
}
```

Để truy cập chế độ tối khi tạo kiểu chủ đề của bạn, bạn có thể wrap css dành riêng cho chế độ tối bên trong một class `dark`:

```css
/* general css here */

html:not(.dark) {
  /* light mode css here */
}

html.dark {
  /* dark mode css here */
}
```

Slidev chuyển đổi một class `dark` trên phần tử `html` của trang để chuyển đổi bảng màu.

### Đánh dấu

Các màu đánh dấu cú pháp cũng được cung cấp trong chủ đề. Chúng tôi hỗ trợ cả [Prism](https://prismjs.com/) và [Shiki](https://github.com/shikijs/shiki). Để biết thêm thông tin, vui lòng tham khảo [tài liệu đánh dấu cú pháp](/custom/highlighters).

<<<<<<< HEAD
Bạn có thể hỗ trợ một trong hai hoặc cả hai. Tham khảo chủ đề mặc định để biết các ví dụ về cấu hình [`./styles/prism.css`](https://github.com/slidevjs/slidev/blob/main/packages/theme-default/styles/prism.css) / [`./setup/shiki.ts`](https://github.com/slidevjs/slidev/blob/main/packages/theme-default/setup/shiki.ts).
=======
You can support either one of them, or both. Refer to the default theme for configurations examples [`./styles/code.css`](https://github.com/slidevjs/slidev/blob/main/packages/create-theme/template/styles/code.css) / [`./setup/shiki.ts`](https://github.com/slidevjs/slidev/blob/main/packages/create-theme/template/setup/shiki.ts).
>>>>>>> 8024ec4e94d2cd81bc6d4a3efee822dde30d9054

Ngoài ra, hãy nhớ chỉ định các điểm đánh dấu được hỗ trợ trong `package.json` của bạn

```json
// package.json
{
  "slidev": {
    "highlighter": "shiki" // or "prism" or "both"
  }
}
```

### Phiên bản Slidev

Nếu chủ đề dựa trên một tính năng cụ thể của Slidev mới được giới thiệu, bạn có thể đặt phiên bản Slidev cần thiết để chủ đề của bạn hoạt động bình thường:

```json
// package.json
{
  "engines": {
    "slidev": ">=0.19.3"
  }
}
```

Nếu người dùng đang sử dụng các phiên bản Slidev cũ hơn, lỗi sẽ xuất hiện.
