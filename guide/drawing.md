# Vẽ & Ghi Chú

> Có sẵn từ phiên bản v0.23

[drauu](https://github.com/antfu/drauu) được tích hợp sẵn để vẽ và ghi chú, giúp cải thiện bài thuyết trình của bạn hơn nữa.

Để bắt đầu, nhấp vào biểu tượng <carbon-pen class="inline-icon-btn"/> trên thanh công cụ và bắt đầu vẽ. Tính năng này cũng có trong [Chế Độ Người Thuyết Trình](/guide/presenter-mode). Các bản vẽ và ghi chú bạn tạo sẽ được **đồng bộ** tự động trên tất cả các phiên bản trong thời gian thực.

<TheTweet id="1424027510342250499" />

## Sử Dụng Với Bút Stylus

Khi sử dụng bút stylus trên máy tính bảng (ví dụ iPad với Apple Pencil), Slidev sẽ tự động nhận diện loại đầu vào. Bạn có thể vẽ trực tiếp trên trang chiếu bằng bút mà không cần bật chế độ vẽ, trong khi vẫn dùng ngón tay hoặc chuột để điều khiển chuyển trang.

## Lưu Trữ Bản Vẽ

Cấu hình frontmatter dưới đây cho phép bạn lưu trữ các bản vẽ dưới dạng SVG trong thư mục `.slidev/drawings` và tích hợp chúng trong file pdf xuất ra hoặc trang web được lưu trữ.

```md
---
drawings:
  persist: true
---
```

## Disable Vẽ

Toàn bộ:

```md
---
drawings:
  enabled: false
---
```

Chỉ trong Môi trường Phát triển:

```md
---
drawings:
  enabled: dev
---
```

Chỉ trong Chế Độ Người Thuyết Trình:

```md
---
drawings:
  presenterOnly: true
---
```

## Đồng Bộ Vẽ

Theo mặc định, Slidev đồng bộ các bản vẽ của bạn trên tất cả các phiên bản. Nếu bạn chia sẻ trang chiếu với người khác, bạn có thể muốn tắt tính năng đồng bộ bằng cách:

```md
---
drawings:
  syncAll: false
---
```

Với cấu hình này, chỉ các bản vẽ từ phiên bản người thuyết trình mới có thể đồng bộ với các phiên bản khác.
