# Cài đặt

## Mẫu dành cho người mới bắt đầu

> Slidev yêu cầu [**Node.js >=14.0**](https://nodejs.org/)

Cách tốt nhất để bắt đầu là sử dụng mẫu chính thức của chúng tôi.

Với NPM:

```bash
$ npm init slidev@latest
```

Với Yarn:

```bash
$ yarn create slidev
```

Làm theo lời nhắc và nó sẽ tự động mở trình chiếu tại http://localhost:3030/ cho bạn.

Nó cũng bao gồm thiết lập cơ bản và một bản demo ngắn với hướng dẫn về cách bắt đầu với Slidev.

## Cài đặt thủ công

Nếu bạn vẫn muốn cài đặt Slidev theo cách thủ công hoặc muốn tích hợp nó vào các dự án hiện có của mình, bạn có thể thực hiện:

```bash
$ npm install @slidev/cli @slidev/theme-default
```
```bash
$ touch slides.md
```
```bash
$ npx slidev
```

> Xin lưu ý rằng nếu bạn đang sử dụng [pnpm](https://pnpm.io), bạn sẽ cần bật tùy chọn [shamefully-hoist](https://pnpm.io/npmrc#shamefully-hoist) để Slidev hoạt động bình thường:
>
> ```bash
> echo 'shamefully-flatten=true' >> .npmrc
> ```

## Cài đặt trên toàn cục

> Có hiệu lực từ v0.14

Bạn có thể cài đặt Slidev trên toàn cục bằng lệnh sau

```bash
$ npm i -g @slidev/cli
```

Và sau đó sử dụng `slidev` ở bất cứ nơi nào mà không cần tạo dự án.

```bash
$ slidev
```

Lệnh này cũng sẽ sử dụng cục bộ `@slidev/cli` nếu nó được tìm thấy trong `node_modules`.

## Cài đặt trên Docker

Nếu bạn cần chạy bản trình bày với container một cách nhanh chóng, bạn có thể sử dụng hình ảnh [docker](https://hub.docker.com/r/stig124/slidev) được duy trì bởi [stig124](https://github.com/Stig124), hoặc xây dựng của riêng bạn.

Tham khảo [slidevjs/container repo](https://github.com/slidevjs/container) để biết thêm chi tiết.
