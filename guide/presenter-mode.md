# Chế độ Trình bày

<<<<<<< HEAD
Nhấn vào nút <carbon-user-speaker class="inline-icon-btn"/> trong bảng điều hướng hoặc truy cập http://localhost:3030/presenter theo cách thủ công, để vào chế độ người thuyết trình. Bất cứ khi nào bạn vào chế độ người thuyết trình, các phiên bản trang khác sẽ tự động đồng bộ với người trình bày.
=======
Click the <carbon-user-speaker class="inline-icon-btn"/> button in the navigation panel, or visit `http://localhost:3030/presenter` manually, to enter the presenter mode. Whenever you enter the presenter mode, other page instances will automatically stay in sync with the presenter.
>>>>>>> 7acc3394a2458462d04fe918c5d45c5414a749e6

![](/screenshots/presenter-mode.png)

## Disabling

Presenter mode is enabled by default.

You can disable this feature with the following config:

```md
---
presenter: false
---
```

Or you can enable it only for `dev` or `build` mode by setting the mode you want in the config:
```md
---
presenter: dev
---
```
In that case the presenter will only be available when running `slidev` but not when running `slidev build`.

## Remote restricted access

You can run your presentation with remote access by running `slidev --remote`.

In that case you may want to share the slides with other people but you don't want them to access the presenter mode to mess up your presentation.

For this scenario you can provide a password for starting the server by running `slidev --remote=your_password`.

In that case you will need to provide the password when accessing `/presenter/*` routes.
