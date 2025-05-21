# Record

Slidev có tính năng record tích hợp sẵn, cùng với chế độ xem camera. Bạn có thể sử dụng chúng để ghi lại bài thuyết trình một cách dễ dàng trong cùng một công cụ đơn giản, thay vì phải dùng nhiều phần mềm record khác nhau trong khi đang thuyết trình.

## Chế độ xem Camera

Click button <carbon-user-avatar class="inline-icon-btn"/> trong thanh điều hướng để hiển thị chế độ xem camera trong bài thuyết trình. Bạn có thể kéo để di chuyển, và dùng tay cầm ở góc dưới bên phải để thay đổi kích thước. Kích thước và vị trí sẽ được lưu trong `localStorage`, vì vậy sẽ giữ nguyên sau khi tải lại trang, không cần phải lo lắng.

<TheTweet id="1395006771027120133" />

## Record

Click button <carbon-video class="inline-icon-btn"/> trong thanh điều hướng sẽ mở ra một hộp thoại. Ở đây bạn có thể chọn ghi lại video camera nhúng trong slide hoặc tách ra thành hai file video riêng biệt.

Tính năng này sử dụng [RecordRTC](https://github.com/muaz-khan/RecordRTC) và [API WebRTC](https://webrtc.org/).

![](/screenshots/recording.png)
