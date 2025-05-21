# Chế độ người thuyết trình

Click button <carbon-user-speaker class="inline-icon-btn"/> trong bảng điều khiển, hoặc truy cập `http://localhost:3030/presenter` thủ công để vào chế độ người thuyết trình. Để trình chiếu, bạn nên mở hai cửa sổ trình duyệt, một cho người thuyết trình và một cho khán giả. Thông thường, người ta sẽ phóng to cửa sổ trình chiếu trên màn hình máy chiếu, rồi điều khiển từ màn hình laptop.

Mỗi khi bạn thay đổi slide trong chế độ người thuyết trình, tất cả các cửa sổ khác sẽ tự động đồng bộ theo để cùng thay đổi.

![](/screenshots/presenter-mode.png)

## Disable

Chế độ người thuyết trình mặc định được enable.

Bạn có thể tắt tính năng này bằng cấu hình sau:

```md
---
presenter: false
---
```

Ngoài ra, bạn có thể chỉ enable nó cho chế độ `dev` hoặc `build` bằng cách đặt chế độ mong muốn trong cấu hình:

```md
---
presenter: dev
---
```

Trong trường hợp đó, chế độ presenter chỉ có sẵn khi chạy `slidev` nhưng không có khi chạy `slidev build`.

## Truy cập từ xa có giới hạn

Bạn có thể chạy bài thuyết trình với quyền truy cập từ xa bằng cách chạy `slidev --remote`.

Nếu bạn muốn chia sẻ slide với người khác nhưng không muốn họ truy cập vào chế độ presenter (có thể vì bạn ngại với ghi chú người trình bày, hoặc không muốn họ làm rối bài thuyết trình của bạn), bạn có thể đặt mật khẩu để bảo vệ server presenter bằng cách chạy `slidev --remote=your_password`.

Trong trường hợp đó, bạn sẽ cần cung cấp mật khẩu khi truy cập các route `/presenter/*`.
