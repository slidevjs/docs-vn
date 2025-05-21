# Cấu hình Vue

<Environment type="client" />

Slidev sử dụng [Vue 3](https://v3.vuejs.org/) để render ứng dụng ở phía client. Bạn có thể mở rộng ứng dụng để thêm các plugin hoặc cấu hình tùy chỉnh.

Tạo file `./setup/main.ts` với nội dung sau:

```ts
import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(YourPlugin)
})
```

Điều này cũng có thể được sử dụng như điểm khởi đầu chính của ứng dụng Slidev để thực hiện một số khởi tạo trước khi ứng dụng bắt đầu.

Tìm hiểu thêm: [Vue Application API](https://v3.vuejs.org/api/application-api.html#component)
