# Sử dụng chủ đề

Thay đổi chủ đề trong Slidev dễ dàng một cách đáng ngạc nhiên. Tất cả những gì bạn cần làm là thêm trường `theme:` vào frontmatter của bạn.

```yaml
---
theme: seriph
---
```

Bạn có thể khởi động máy chủ, máy chủ sẽ nhắc bạn cài đặt chủ đề tự động

<div class="language-md">
<pre>
<span class="token keyword">?</span> The theme <span class="token string">"@slidev/theme-seriph"</span> was not found in your project, do you want to install it now? › (Y/n)
</pre>
</div>

hoặc cài đặt chủ đề theo cách thủ công qua

```bash
$ npm install @slidev/theme-seriph
```

Và đó là tất cả, hãy tận hưởng chủ đề mới! Để biết thêm chi tiết về cách sử dụng, bạn có thể tham khảo file README của chủ đề.

Muốn chia sẻ chủ đề của bạn? Tìm hiểu về [cách viết chủ đề](/themes/write-a-theme).

## Eject chủ đề

Nếu bạn muốn có toàn quyền kiểm soát chủ đề hiện tại, bạn có thể **eject** nó vào hệ thống file cục bộ của bạn và sửa đổi nó theo ý muốn. Bằng cách chạy lệnh sau

```bash
$ slidev theme eject
```

Nó sẽ đẩy chủ đề bạn đang sử dụng hiện tại vào `./theme`, và thay đổi frontmatter của bạn thành 

```yaml
---
theme: ./theme
---
```

Điều này cũng có thể hữu ích nếu bạn muốn tạo chủ đề dựa trên chủ đề hiện có. Nếu bạn làm vậy, hãy nhớ đề cập đến chủ đề gốc và tác giả :)

## Chủ đề cục bộ

Như bạn có thể đã tìm hiểu từ phần trước, bạn có thể có một chủ đề cục bộ cho dự án của mình. Bằng cách có **đường dẫn tương đối** trong trường chủ đề của bạn.

```yaml
---
theme: ./path/to/theme
---
```

Tham khảo [cách viết chủ đề](/themes/write-a-theme) để biết thêm chi tiết.
