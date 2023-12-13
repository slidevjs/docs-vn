# Cấu hình Phím tắt

> Có hiệu lực từ v0.20

> Since v0.35.6 (excluded), you decide which base shortcuts to keep (see `...base,` below).

<Environment type="client" />

<<<<<<< HEAD
Tạo `./setup/shortcuts.ts` với nội dung sau:
=======
## Getting started

Create `./setup/shortcuts.ts` with the following content:
>>>>>>> a6529b60e6a2f963398d169ce543df66469f74df

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
## Advanced key binding

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

## Advanced navigation features

The `nav` navigation operations allows you to access some functionalities than basic _next slide_ or _previous slide_. See the following for use-cases:

```ts
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'e',
      
      // Set the `e` keyboard shortcut to be used as a bookmark
      // or quick-access of sorts, to navigate specifically to
      // slide number 42
      fn: () => nav.go(42),
      autoRepeat: true,
    }
  ]
})
```

Refer to [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) for more details about key pressed event.
>>>>>>> a6529b60e6a2f963398d169ce543df66469f74df
