# Viết Theme

Để bắt đầu, chúng tôi khuyên bạn sử dụng trình tạo mã của chúng tôi để dựng khung cho theme đầu tiên của bạn

```bash
$ npm init slidev-theme
```

Sau đó bạn có thể sửa đổi và thử nghiệm với nó. Bạn cũng có thể tham khảo các [theme chính thức](/themes/gallery) làm ví dụ.

## Khả năng

Một theme có thể đóng góp vào các điểm sau:

- Các style toàn cục
- Cung cấp cấu hình mặc định (phông chữ, bảng màu, trình tô màu cú pháp, v.v.)
- Cung cấp layout tùy chỉnh hoặc ghi đè layout hiện có
- Cung cấp các component tùy chỉnh hoặc ghi đè component hiện có
- Mở rộng cấu hình UnoCSS
- Cấu hình các công cụ như Shiki và Monaco

## Quy ước

Theme được xuất bản lên registry npm, và phải tuân theo các quy ước sau:

- Tên package phải bắt đầu bằng `slidev-theme-`, ví dụ: `slidev-theme-awesome`
- Thêm `slidev-theme` và `slidev` vào trường `keywords` trong `package.json` của bạn

## Cài đặt

Để thiết lập môi trường thử nghiệm cho theme của bạn, bạn có thể tạo `example.md` với phần frontmatter sau, để cho Slidev biết bạn đang sử dụng thư mục hiện tại làm theme.

```md
---
theme: ./
---
```

Ngoài ra, bạn cũng có thể thêm một số script vào `package.json` của bạn.

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

Để phát hành theme của bạn, chỉ cần chạy `npm publish` và bạn có thể bắt đầu sử dụng. Không cần quy trình build (nghĩa là bạn có thể trực tiếp phát hành các file `.vue` và `.ts`, Slidev đủ thông minh để hiểu chúng).

Các điểm đóng góp theme tuân theo cùng quy ước với tùy chỉnh cục bộ, vui lòng tham khảo [tài liệu về quy ước đặt tên](/custom/).

## Cấu hình Mặc định

> Có từ phiên bản v0.19

Một theme có thể cung cấp [cấu hình](/custom/#frontmatter-configures) mặc định thông qua `package.json`.

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

Phông chữ sẽ được tự động nhập từ [Google Fonts](https://fonts.google.com/).

Tìm hiểu thêm về [phông chữ](/custom/fonts) và [cấu hình frontmatter](/custom/#frontmatter-configures).

## Metadata của Theme

### Bảng màu

Theo mặc định, Slidev giả định các theme hỗ trợ cả chế độ sáng và chế độ tối. Nếu bạn chỉ muốn theme của mình hiển thị theo một bảng màu được thiết kế riêng, bạn cần phải chỉ rõ điều này trong `package.json`.

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

Để truy cập chế độ tối khi tạo kiểu cho theme của bạn, bạn có thể bao bọc các CSS dành riêng cho chế độ tối bên trong lớp `dark`:

```css
/* general css here */

html:not(.dark) {
  /* light mode css here */
}

html.dark {
  /* dark mode css here */
}
```

Slidev sẽ bật tắt lớp `dark` trên phần tử `html` của trang để chuyển đổi giữa các sơ đồ màu.

### Trình tô sáng (Highlighter)

Màu sắc của cú pháp được tô sáng cũng được cung cấp trong theme. Ví dụ như [`./setup/shiki.ts`](https://github.com/slidevjs/slidev/blob/main/packages/create-theme/template/setup/shiki.ts). Tham khảo thêm ở [tài liệu về tô sáng cú pháp](/custom/highlighters) để biết thêm chi tiết.

### Phiên bản Slidev

Nếu theme của bạn dựa vào một tính năng cụ thể mới được giới thiệu của Slidev, bạn có thể đặt phiên bản Slidev tối thiểu yêu cầu để theme hoạt động đúng:

```json
// package.json
{
  "engines": {
    "slidev": ">=0.19.3"
  }
}
```

Nếu người dùng sử dụng phiên bản Slidev cũ hơn, một lỗi sẽ được báo ra.
