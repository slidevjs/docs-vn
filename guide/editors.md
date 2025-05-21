# Hỗ Trợ Editor

Vì Slidev sử dụng Markdown làm source đầu vào, bạn có thể dùng bất kỳ editor nào mà bạn thích để tạo trang chiếu.

Nếu bạn muốn quản lý trang chiếu một cách nâng cao, chúng tôi đã cung cấp các tích hợp editor sau dành cho bạn!

## Editor Tích Hợp

Slidev đi kèm với một editor tích hợp, sẽ tự động reload và lưu các thay đổi trong file của bạn ngay lập tức.

Nhấn button <carbon-edit class="inline-icon-btn"/> để mở nó.

![](/screenshots/integrated-editor.png)

## VS Code Extension

<p align="center">
    <a href="https://github.com/slidevjs/slidev" target="_blank">
        <img src="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/logo-for-vscode.png" alt="Slidev" width="300"/>
    </a>
    <br>
    <a href="https://marketplace.visualstudio.com/items?itemName=antfu.slidev" target="__blank">
        <img src="https://img.shields.io/visual-studio-marketplace/v/antfu.slidev.svg?color=4EC5D4&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" />
    </a>
    &nbsp;
    <a href="https://marketplace.visualstudio.com/items?itemName=antfu.slidev" target="__blank">
        <img src="https://img.shields.io/visual-studio-marketplace/d/antfu.slidev.svg?color=2B90B6" alt="Visual Studio Marketplace Downloads" />
    </a>
</p>

VS Code extension cung cấp một số tính năng giúp bạn tổ chức trang chiếu tốt hơn và xem nhanh tổng quan chúng.

### Tính năng

- Xem trước trang chiếu trong bảng bên
- Cây thư mục trang chiếu
- Sắp xếp lại thứ tự trang chiếu
- Gấp các khối trang chiếu
- Hỗ trợ nhiều dự án trang chiếu
- Khởi động server phát triển chỉ với một cú nhấp

![](https://github.com/slidevjs/slidev/assets/63178754/2c9ba01a-d21f-4b33-b6b6-4e249873f865)

::: code-group

<TheTweet id="1395333405345148930" />

<TheTweet id="1789684139152810151" />

:::

### Cài đặt

Bạn có thể cài tiện ích mở rộng từ [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=antfu.slidev).

### Cách dùng

Nhấp vào biểu tượng `Slidev` trong thanh hoạt động để mở **bảng Slidev**. Trong bảng Slidev, bạn có thể thấy cây thư mục dự án, cây thư mục trang chiếu và cửa sổ xem trước.

Trong **cây thư mục dự án**, bạn thấy tất cả các dự án Slidev trong không gian làm việc. Bạn có thể nhấp vào mục để mở file tương ứng, và nhấp vào biểu tượng <codicon-eye /> để chuyển dự án đang hoạt động. Biểu tượng <codicon-add /> cho phép bạn tải dự án trang chiếu chưa được quét tự động.

Trong **cây thư mục trang chiếu**, bạn thấy tất cả các trang chiếu trong dự án đang hoạt động. Bạn có thể nhấp vào mục để di chuyển con trỏ đến trang chiếu trong editor, và kéo thả để thay đổi thứ tự trang chiếu.

Trong **cửa sổ xem trước**, bạn có thể nhấp biểu tượng <codicon-run-all /> để khởi động server phát triển và nhấp biểu tượng <codicon-globe /> để mở trang chiếu trên trình duyệt. Bật/tắt biểu tượng <codicon-lock /> để đồng bộ hoặc không đồng bộ điều hướng xem trước với con trỏ trong editor.

Ngoài ra còn có một số **lệnh** bạn có thể dùng. Gõ `Slidev` trong bảng lệnh để xem chúng.

Bạn có thể thêm mẫu glob vào cấu hình `slidev.include` để bao gồm các file làm mục nhập Slidev. Giá trị mặc định là `["**/*.md"]`. Ví dụ:

```json
{
  "slidev.include": ["**/presentation.md"]
}
```

## Plugin Prettier

Slidev cũng cung cấp một plugin Prettier để định dạng các trang chiếu của bạn. Bạn có thể sử dụng nó với bất kỳ editor ưa thích nào hỗ trợ Prettier. Tài liệu cho plugin có thể được tìm thấy [tại đây](https://github.com/slidevjs/prettier-plugin).
