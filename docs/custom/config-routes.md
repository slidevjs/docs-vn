# Cấu hình Routes

<Environment type="client" />

Thêm các trang của bạn vào ứng dụng Slidev.

## Cách sử dụng

Tạo file `./setup/routes.ts` với nội dung sau:

```ts
import { defineRoutesSetup } from '@slidev/types'

export default defineRoutesSetup((routes) => {
  return [
    ...routes,
    {
      path: '/my-page',
      component: () => import('../pages/my-page.vue'),
    },
  ]
})
```

Tìm hiểu thêm về routes trong [tài liệu Vue Router](https://router.vuejs.org/).
