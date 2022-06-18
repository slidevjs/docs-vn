# Cấu hình Phím tắt

> Có hiệu lực từ v0.20

<Environment type="client" />

Tạo `./setup/shortcuts.ts` với nội dung sau:

```ts
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'enter',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'backspace',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
  ]
})
```

Với việc cài đặt, bạn có thể cung cấp cài đặt tùy chỉnh cho các phím tắt được đề cập trong [Navigation](/guide/navigation#navigation-bar). Cấu hình trên liên kết animation hoặc trang chiếu tiếp theo với <kbd>enter</kbd> và animation hoặc trang chiếu trước đó với <kbd>backspace</kbd>.

Hàm cấu hình nhận một đối tượng với một số hàm navigation và trả về một mảng chứa một số cấu hình phím tắt. Tham khảo định nghĩa loại để biết thêm chi tiết.

<<<<<<< HEAD
Tham khảo [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) để biết thêm chi tiết về sự kiện được nhấn phím.
=======
The `key` type only allows for strings, but you can still bind multiple keys by using following convention:

```ts
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'ShiftLeft+ArrowRight',
      fn: () => nav.next(),
      autoRepeat: true,
    }
  ]
})
```

Refer to [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) for more details about key pressed event.
>>>>>>> 893d0b65c494856dc47a8834adc01480dbf6a161
