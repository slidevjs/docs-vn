# Cấu hình Menu Chuột Phải (Context Menu)

<Environment type="client" />

Tuỳ chỉnh các mục trong menu chuột phải của Slidev.

Tạo file `./setup/context-menu.ts` với nội dung như sau:

```ts
import { defineContextMenuSetup } from '@slidev/types'
import { computed } from 'vue'
import Icon3DCursor from '~icons/carbon/3d-cursor'

export default defineContextMenuSetup((items) => {
  const { isPresenter } = useNav()
  return computed(() => [
    ...items.value,
    {
      small: false,
      icon: Icon3DCursor, // Used as `title` if `small` is `true`
      label: 'Custom Menu Item', // or a Vue component
      action() {
        alert('Custom Menu Item Clicked!')
      },
      disabled: isPresenter.value,
    },
  ])
})
```

Điều này sẽ thêm một mục mới vào menu chuột phải.

Để vô hiệu hóa menu chuột phải toàn cục, đặt `contextMenu` thành `false` trong phần frontmatter. `contextMenu` cũng có thể được đặt thành `dev` hoặc `build` để chỉ enable menu chuột phải trong chế độ development hoặc chế độ build.
