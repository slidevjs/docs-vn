# Viết một Addon

> Có từ phiên bản v0.32.1

## Khả năng

Một addon có thể đóng góp vào các điểm sau:

- Style toàn cục (sử dụng cẩn thận vì đây thường là vai trò của [themes](/themes/use))
- Cung cấp layout tùy chỉnh hoặc ghi đè layout hiện có
- Cung cấp component tùy chỉnh hoặc ghi đè component hiện có
- Mở rộng configuration UnoCSS/Windi CSS
- Configure các công cụ như Monaco và Prism

## Quy ước

Addons được phát hành lên npm registry, và cần tuân theo các quy ước dưới đây:

- Tên package nên bắt đầu bằng `slidev-addon-`, ví dụ: `slidev-addon-awesome`
- Thêm `slidev-addon` và `slidev` vào trường `keywords` trong `package.json` của bạn

## Thiết lập

### Khởi tạo

Để tạo addon của bạn, bắt đầu bằng cách tạo một thư mục và một file `package.json` (bạn có thể dùng `npm init`).

Sau đó, cài đặt các dependencies của slidev:

```bash
$ npm install -D @slidev/cli
```

### Kiểm thử

Để thiết lập môi trường kiểm thử cho addon của bạn, bạn có thể tạo một file `example.md` với một số nội dung.

Và tùy chọn, bạn cũng có thể thêm một vài script vào `package.json` của mình

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

Để phát hành addon của bạn, chỉ cần chạy `npm publish` và bạn có thể bắt đầu sử dụng. Không cần quá trình build (nghĩa là bạn có thể trực tiếp phát hành các file `.vue` và `.ts`, Slidev đủ thông minh để hiểu chúng).

Các điểm đóng góp của addon tuân theo cùng quy ước như tùy chỉnh cục bộ, vui lòng tham khảo [tài liệu về quy ước đặt tên](/custom/).

## Metadata của Addon

### Phiên bản Slidev

Nếu addon của bạn dựa trên một tính năng cụ thể mới được giới thiệu trong Slidev, bạn có thể đặt phiên bản tối thiểu của Slidev cần thiết để addon hoạt động đúng:

```json
// package.json
{
  "engines": {
    "slidev": ">=0.32.1"
  }
}
```

Nếu người dùng đang sử dụng các phiên bản Slidev cũ hơn, một lỗi sẽ được báo ra.
