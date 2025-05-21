# Cấu hình và Mở rộng Bộ Phân tích cú pháp (Parser)

Slidev phân tích file trình chiếu của bạn (ví dụ: `slides.md`) qua ba bước:

1. Bước "chuẩn bị phân tích" (preparsing) được thực hiện: file được tách thành các slide sử dụng dấu phân cách `---`, đồng thời xét đến các khối frontmatter có thể có.
2. Mỗi slide được phân tích cú pháp bởi một thư viện bên ngoài.
3. Slidev xử lý thuộc tính frontmatter đặc biệt `src: ....`, cho phép chèn thêm các file md khác.

## Bộ Phân tích Markdown

Việc cấu hình bộ phân tích markdown dùng ở bước 2 có thể thực hiện bằng cách [cấu hình các plugin nội bộ của Vite](/custom/config-vite#configure-internal-plugins).

## Mở rộng Bộ Phân tích Chuẩn bị (Preparser)

> Có từ phiên bản v0.37.0 trở đi.

:::warning
Quan trọng: khi thay đổi cấu hình preparser, bạn cần dừng và khởi động lại slidev hoàn toàn (chỉ restart có thể không đủ).
:::

Bộ preparser (bước 1 ở trên) rất dễ mở rộng và cho phép bạn triển khai các cú pháp tùy chỉnh cho file md của mình. Việc mở rộng preparser được xem là **một tính năng nâng cao** và có thể làm hỏng [tích hợp trình soạn thảo](/guide/editors) do thay đổi cú pháp ngầm.

Để tùy chỉnh, bạn tạo file `./setup/preparser.ts` với nội dung sau:

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(({ filepath, headmatter, mode }) => {
  return [
    {
      transformRawLines(lines) {
        for (const i in lines) {
          if (lines[i] === '@@@')
            lines[i] = 'HELLO'
        }
      },
    }
  ]
})
```

Ví dụ này sẽ thay thế hệ thống mỗi dòng có `@@@` thành một dòng chứa chữ `hello`. Nó minh họa cấu trúc file cấu hình preparser và một số khái niệm chính mà preparser sử dụng:

- `definePreparserSetup` phải được gọi với một hàm làm tham số.
- Hàm này nhận vào đường dẫn file (của file trình chiếu gốc), phần headmatter (trong file md) và, kể từ phiên bản v0.48.0, một mode (dev, build hoặc export). Hàm có thể sử dụng thông tin này (ví dụ: kích hoạt extension dựa trên file trình chiếu hoặc khi xuất PDF).
- Hàm phải trả về một danh sách các extension cho preparser.
- Mỗi extension có thể bao gồm:
  - một hàm `transformRawLines(lines)` chạy ngay sau khi phân tích headmatter của file md, nhận một danh sách tất cả các dòng (từ file md). Hàm có thể thay đổi danh sách này tùy ý.
  - một hàm `transformSlide(content, frontmatter)` được gọi cho mỗi slide, ngay sau khi tách file thành các slide, nhận nội dung slide dưới dạng chuỗi và frontmatter của slide dưới dạng object. Hàm có thể sửa đổi frontmatter và phải trả về chuỗi nội dung (có thể đã chỉnh sửa hoặc `undefined` nếu không có thay đổi).
  - một thuộc tính `name`

## Ví dụ các extension Preparser

### Trường hợp sử dụng 1: cú pháp gọn cho phần trình chiếu ở cấp cao nhất

Giả sử bạn có một phần hoặc toàn bộ bài trình chiếu chủ yếu dùng để hiển thị ảnh bìa và chèn các file md khác. Bạn có thể muốn một cách viết gọn, ví dụ (một phần) file `slides.md` như sau:

<!-- eslint-skip -->

```md
@cover: /nice.jpg
# Welcome
@src: page1.md
@src: page2.md
@cover: /break.jpg
@src: pages3-4.md
@cover: https://source.unsplash.com/collection/94734566/1920x1080
# Questions?
see you next time
```

Để cho phép các cú pháp `@src:` và `@cover:`, bạn tạo một file `./setup/preparser.ts` với nội dung sau:

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      transformRawLines(lines) {
        let i = 0
        while (i < lines.length) {
          const l = lines[i]
          if (l.match(/^@cover:/i)) {
            lines.splice(
              i,
              1,
              '---',
              'layout: cover',
              `background: ${l.replace(/^@cover: */i, '')}`,
              '---',
              ''
            )
            continue
          }
          if (l.match(/^@src:/i)) {
            lines.splice(
              i,
              1,
              '---',
              `src: ${l.replace(/^@src: */i, '')}`,
              '---',
              ''
            )
            continue
          }
          i++
        }
      }
    },
  ]
})
```

Vậy là xong.

### Trường hợp sử dụng 2: dùng frontmatter tùy chỉnh để bao quanh các slide

Hãy tưởng tượng một trường hợp bạn thường muốn phóng to một số slide nhưng vẫn muốn sử dụng nhiều layout có sẵn, nên việc tạo một layout mới không phù hợp.
Ví dụ, bạn có thể viết file `slides.md` như sau:

<!-- eslint-skip -->

```md
---
layout: quote
_scale: 0.75
---

# Welcome

> great!

---
_scale: 4
---
# Break

---

# Ok

---
layout: center
_scale: 2.5
---
# Questions?
see you next time
```

Ở đây chúng ta dùng dấu gạch dưới `_scale` để tránh xung đột có thể xảy ra với các thuộc tính frontmatter hiện có (thực tế, nếu dùng `scale` không có gạch dưới sẽ gây ra vấn đề tiềm ẩn).

Để xử lý cú pháp `_scale: ...` trong frontmatter, bạn tạo file `./setup/preparser.ts` với nội dung như sau:

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      transformSlide(content, frontmatter) {
        if ('_scale' in frontmatter) {
          return [
            `<Transform :scale=${frontmatter._scale}>`,
            '',
            content,
            '',
            '</Transform>'
          ].join('\n')
        }
      },
    },
  ]
})
```

Và thế là xong.
