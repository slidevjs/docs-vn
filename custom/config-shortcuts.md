# Cấu hình Phím tắt

> Có hiệu lực từ v0.20

> Since v0.35.6 (excluded), you decide which base shortcuts to keep (see `...base,` below).

<Environment type="client" />

Tạo `./setup/shortcuts.ts` với nội dung sau:

```ts
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base, // keep the existing shortcuts
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
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base,
    {
      key: 'ShiftLeft+ArrowRight',
      fn: () => nav.next(),
      autoRepeat: true,
    }
  ]
})
```

Refer to [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) for more details about key pressed event.
>>>>>>> ecd8bf022f3594c9efceac78aae2852a0055f9bf
