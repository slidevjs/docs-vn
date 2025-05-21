# Cấu hình Phím tắt

> Có sẵn từ phiên bản v0.20  
> Kể từ phiên bản v0.35.6 (không bao gồm), bạn có thể quyết định giữ lại những phím tắt cơ bản nào (xem `...base,` bên dưới).

<Environment type="client" />

## Bắt đầu

Tạo file `./setup/shortcuts.ts` với nội dung sau:

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

Với thiết lập này, bạn có thể cung cấp cấu hình tùy chỉnh cho các phím tắt được đề cập trong [Điều hướng](/guide/navigation#navigation-bar). Cấu hình ở trên sẽ gán phím <kbd>Enter</kbd> để chuyển sang hoạt ảnh hoặc trang trình chiếu tiếp theo, và phím <kbd>Backspace</kbd> để quay lại hoạt ảnh hoặc trang trình chiếu trước đó.

Hàm cấu hình sẽ nhận một đối tượng chứa một số phương thức điều hướng, và trả về một mảng chứa cấu hình các phím tắt. Tham khảo định nghĩa kiểu dữ liệu để biết thêm chi tiết.

## Gán phím nâng cao

Kiểu `key` chỉ cho phép giá trị dạng chuỗi, nhưng bạn vẫn có thể gán nhiều phím bằng cách sử dụng quy ước sau:

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

## Tính năng điều hướng nâng cao

Các thao tác điều hướng `nav` cho phép bạn truy cập nhiều chức năng hơn ngoài việc chỉ _chuyển đến trang trình chiếu tiếp theo_ hoặc _quay lại trang trước_. Xem các trường hợp sử dụng dưới đây để hiểu rõ hơn:

```ts
import { NavOperations, defineShortcutsSetup } from '@slidev/types'

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

Tham khảo [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) để biết thêm chi tiết về sự kiện nhấn phím.
