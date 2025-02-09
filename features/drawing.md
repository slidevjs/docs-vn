---
depends:
  - guide/ui#navigation-bar
relates:
  - drauu: https://github.com/antfu/drauu
tags: [drawing]
description: |
  Draw and annotate your slides with ease.
---

# Vẽ và chú thích

Slidev tích hợp sẵn tính năng vẽ và chú thích được cung cấp bởi [drauu](https://github.com/antfu/drauu). Tính năng này cho phép bạn vẽ và chú thích trên slide của mình một cách dễ dàng.

Để bắt đầu, nhấn vào biểu tượng <carbon-pen class="inline-icon-btn"/> trong [thanh điều hướng](../guide/ui#navigation-bar) để mở thanh công cụ vẽ. Tính năng này cũng khả dụng trong [Chế độ trình bày](/guide/ui#presenter-mode). Các bản vẽ và chú thích bạn tạo sẽ được **đồng bộ** tự động trên tất cả các phiên bản theo thời gian thực.

<TheTweet id="1424027510342250499" />

## Sử dụng với bút Stylus

Khi sử dụng bút stylus trên máy tính bảng (ví dụ: iPad với Apple Pencil), Slidev sẽ tự động nhận diện loại đầu vào. Bạn có thể trực tiếp vẽ trên slide của mình bằng bút mà không cần bật chế độ vẽ, trong khi ngón tay hoặc chuột sẽ kiểm soát việc điều hướng.

## Lưu trữ bản vẽ

Cấu hình frontmatter sau cho phép bạn lưu trữ bản vẽ dưới dạng SVG trong thư mục `.slidev/drawings` và bao gồm chúng trong file PDF đã export hoặc trang web được host.

```md
---
drawings:
  persist: true
---
```

## Disable tính năng vẽ

Hoàn toàn:

```md
---
drawings:
  enabled: false
---
```

Chỉ trong chế độ phát triển:

```md
---
drawings:
  enabled: dev
---
```

Chỉ trong chế độ trình bày:

```md
---
drawings:
  presenterOnly: true
---
```

## Đồng bộ hóa bản vẽ

Theo mặc định, Slidev đồng bộ hóa bản vẽ của bạn trên tất cả các phiên bản. Nếu bạn đang chia sẻ slide của mình với người khác, bạn có thể muốn tắt tính năng đồng bộ hóa bằng cách:

```md
---
drawings:
  syncAll: false
---
```

Với cấu hình này, chỉ bản vẽ từ phiên bản trình bày mới có thể đồng bộ với những người khác.
