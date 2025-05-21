# Sử dụng Theme

Việc thay đổi theme trong Slidev thật dễ dàng. Tất cả những gì bạn cần làm là thêm trường `theme:` trong frontmatter của bạn.

```yaml
---
theme: seriph
---
```

> **Lưu ý**
> Để cài đặt một theme từ package có scoped, bạn sẽ phải cung cấp đầy đủ namespace, ví dụ `@organization/slidev-theme-name`

Bạn có thể khởi động server, nó sẽ tự động nhắc bạn cài đặt theme.

<div class="language-md">
<pre>
<span class="token keyword">?</span> The theme <span class="token string">"@slidev/theme-seriph"</span> was not found in your project, do you want to install it now? › (Y/n)
</pre>
</div>

hoặc cài đặt theme thủ công qua

```bash
$ npm install @slidev/theme-seriph
```

Và thế là xong, chúc bạn tận hưởng theme mới! Để biết thêm chi tiết về cách sử dụng, bạn có thể tham khảo README của theme.

Muốn chia sẻ theme của bạn? Tìm hiểu về [cách viết theme](/themes/write-a-theme).

## Eject Theme

Nếu bạn muốn kiểm soát hoàn toàn theme hiện tại, bạn có thể **eject** nó ra hệ thống tập tin cục bộ và chỉnh sửa theo ý muốn. Bằng cách chạy lệnh sau

```bash
$ slidev theme eject
```

Nó sẽ eject theme bạn đang sử dụng hiện tại vào thư mục `./theme`, và thay đổi phần frontmatter của bạn thành

```yaml
---
theme: ./theme
---
```

Điều này cũng có thể hữu ích nếu bạn muốn tạo một theme dựa trên một theme hiện có. Nếu bạn làm vậy, hãy nhớ đề cập đến theme gốc và tác giả :)

## Theme cục bộ

Như bạn có thể đã nhận ra từ phần trước, bạn có thể có một theme cục bộ cho dự án của mình bằng cách sử dụng **đường dẫn tương đối** trong trường theme.

```yaml
---
theme: ./path/to/theme
---
```

Tham khảo [cách viết một theme](/themes/write-a-theme) để biết thêm chi tiết.
