# Sử dụng Addon

Addons là tập hợp các component bổ sung, layout, style, configuration... v.v mà bạn có thể sử dụng trong bài thuyết trình của mình.

Chúng khá giống với [themes](/themes/use), nhưng nói chung:

- chúng không ảnh hưởng đến style toàn cục của các slide
- bạn có thể sử dụng nhiều addons trong một bài thuyết trình

Để sử dụng addons, bạn cần cài đặt thủ công qua:

```bash
$ npm install [slidev-addon-package1] [slidev-addon-package2]
```

Và sau đó khai báo addons trong frontmatter của bạn:

```yaml
---
addons:
  - slidev-addon-package1
  - slidev-addon-package2
---
```

Hoặc trong file `package.json` của bạn:

```json
// package.json
{
  "slidev": {
    "addons": [
      "slidev-addon-package1",
      "slidev-addon-package2"
    ]
  }
}
```

## Ví dụ

- [slidev-addon-qrcode](https://github.com/kravetsone/slidev-addon-qrcode) là một addon cho phép bạn nhúng mã QR vào các slide của mình.

- [slidev-addon-remoji](https://github.com/twitwi/slidev-addon-remoji) là một addon thay thế emoji bằng các biểu tượng trong slide để đảm bảo tính nhất quán hoặc phục vụ cho việc in ấn.
