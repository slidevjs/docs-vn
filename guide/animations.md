---
outline: deep
---

# Animations

## Click Animations

> [!LƯU Ý]
> Kể từ phiên bản v0.48.0, chúng tôi đã viết lại hệ thống click animations với hành vi nhất quán hơn nhiều. Điều này có thể thay đổi hành vi của các slide hiện tại của bạn trong một số trường hợp đặc biệt. Mặc dù trang này hiển thị hệ thống click mới, bạn có thể tìm thấy thêm chi tiết về lần refactor trong [#1279](https://github.com/slidevjs/slidev/pull/1279).

### `v-click`

Để áp dụng "click animations" cho các element, bạn có thể sử dụng directive `v-click` hoặc component `<v-click>`

```md
<!-- Component usage:
     this will be invisible until you press "next" -->

<v-click> Hello **World** </v-click>

<!-- Directive usage:
     this will be invisible until you press "next" the second time -->
<div v-click class="text-xl"> Hey! </div>
```

### `v-after`

`v-after` chỉ được cung cấp dưới dạng directive. Nó sẽ làm element hiển thị khi `v-click` trước đó được kích hoạt.

```md
<div v-click> Hello </div>
<div v-after> World </div>
```

Khi bạn nhấn "next", cả `Hello` và `World` sẽ xuất hiện cùng lúc.

### Ẩn sau khi nhấp

Thêm modifier `.hide` vào `v-click` hoặc `v-after` để làm element trở nên vô hình sau khi nhấp, thay vì hiển thị lên.

```md
<div v-click> Visible after 1 click </div>
<div v-click.hide> Hidden after 2 click </div>
<div v-after.hide> Hidden after 2 click </div>
```

Đối với component `v-click`, bạn có thể sử dụng prop `hide` để đạt được hiệu ứng tương tự:

```md
<v-click> Visible after 1 click </v-click>
<v-click hide> Hidden after 2 click </v-click>
```

### `v-clicks`

`v-clicks` chỉ được cung cấp dưới dạng một component. Đây là một cách viết tắt để áp dụng directive `v-click` cho tất cả các element con của nó. Nó đặc biệt hữu ích khi làm việc với danh sách và bảng.

```md
<v-clicks>

- Item 1
- Item 2
- Item 3

</v-clicks>
```

Một mục sẽ hiển thị mỗi khi bạn nhấn "next".  
Nó chấp nhận một thuộc tính `depth` để dùng cho danh sách lồng nhau:

```md
<v-clicks depth="2">

- Item 1
  - Item 1.1
  - Item 1.2
- Item 2
  - Item 2.1
  - Item 2.2

</v-clicks>
```

Bạn cũng có thể sử dụng thuộc tính `every` để chỉ định số lượng mục sẽ hiển thị sau mỗi lần nhấp:

```md
<v-clicks every="2">

- Item 1 (part 1)
- Item 1 (part 2)
- Item 2 (part 1)
- Item 2 (part 2)

</v-clicks>
```

### Định vị

Theo mặc định, các animation khi nhấp xảy ra từng cái một. Bạn có thể tùy chỉnh vị trí animation của các element bằng cách sử dụng thuộc tính `at` hoặc directive `v-click` với giá trị.

Giống như hệ thống layout CSS, các element có animation khi nhấp có thể là "relative" hoặc "absolute":

#### Vị trí Relative

Vị trí thực tế của các element relative được tính dựa trên các element relative trước đó:

````md
<div v-click> visible after 1 click </div>
<v-click at="+2"><div> visible after 3 clicks </div></v-click>
<div v-click.hide="'-1'"> hidden after 2 clicks </div>

```js {none|1|2}{at:'+5'}
1  // highlighted after 7 clicks
2  // highlighted after 8 clicks
```
````

> [!LƯU Ý]
> Giá trị mặc định của `v-click` là `'+1'` khi bạn không chỉ định nó.

Thực tế, `v-after` chỉ là cách viết tắt cho `v-click` với thuộc tính `at`:

```md
<!-- The following 2 usages are equivalent -->
<img v-after />
<img v-click="'+0'" />

<!-- The following 3 usages are equivalent -->
<img v-click />
<img v-click="'+1'" />
<v-click-gap size="1" /><img v-after />
```

:::info
Chỉ các giá trị chuỗi bắt đầu với `'+'` hoặc `'-'` như `'+1'` mới được xử lý như các vị trí relative:

| Giá trị          | Loại     |
| -------------- | -------- |
| `'-1'`, `'+1'` | Relative |
| `+1` === `1`   | Absolute |
| `'1'`          | Absolute |

Vì vậy, đừng quên dấu nháy đơn cho các giá trị relative.
:::

#### Vị trí Absolute

Giá trị được cung cấp là số lần nhấp chuột chính xác để hiển thị element:

````md
<div v-click="3"> visible after 3 clicks </div>
<v-click at="2"><div> visible after 2 clicks </div></v-click>
<div v-click.hide="1"> hidden after 1 click </div>

```js {none|1|2}{at:3}
1  // highlighted after 3 clicks
2  // highlighted after 4 clicks
```
````

#### Trường hợp kết hợp

Bạn có thể kết hợp các vị trí absolute và relative:

```md
<div v-click> visible after 1 click </div>
<div v-click="3"> visible after 3 clicks </div>
<div v-click> visible after 2 click </div>
<div v-click="'-1'"> visible after 1 click </div>
<div v-click="4"> visible after 4 clicks </div>
```

Ví dụ sau đây đồng bộ hóa việc tô sáng của hai khối code:

````md
```js {1|2}{at:1}
1 + 1
'a' + 'b'
```

```js {1|2}{at:1}
2
'ab'
```
````

### Enter & Leave

Bạn cũng có thể chỉ định chỉ số bắt đầu và kết thúc cho directive `v-click` bằng cách truyền một mảng. Chỉ số kết thúc là loại trừ.

```md
<div v-click.hide="[2, 4]">
  This will be hidden at click 2 and 3.
</div>
<div v-click />
<div v-click="'[+1, +1]'">
  This will be shown at click 3, and hidden since click 4.
</div>
```

Bạn cũng có thể sử dụng `v-switch` để đạt được hiệu ứng tương tự:

```md
<v-switch>
  <template #1> show at click 1, hide at click 2. </template>
  <template #2> show at click 2, hide at click 5. </template>
  <template #5-7> show at click 5, hide at click 7. </template>
</v-switch>
```

Xem [`VSwitch` Component](/builtin/components#vswitch) để biết thêm chi tiết.

### Tùy chỉnh Tổng số lần Click

Theo mặc định, Slidev đếm số bước cần thiết trước khi chuyển sang trang chiếu tiếp theo. Bạn có thể ghi đè thiết lập này bằng cách truyền tùy chọn `clicks` trong frontmatter:

```yaml
---
# 10 clicks in this slide, before going to the next
clicks: 10
---
```

### Chuyển tiếp Phần tử

Khi bạn áp dụng directive `v-click` cho các element của mình, nó sẽ gán tên class `slidev-vclick-target` cho element đó. Khi các element bị ẩn, tên class `slidev-vclick-hidden` cũng sẽ được gán. Ví dụ:

```html
<div class="slidev-vclick-target slidev-vclick-hidden">Text</div>
```

Sau một lần nhấp, nó sẽ trở thành

```html
<div class="slidev-vclick-target">Text</div>
```

Theo mặc định, một hiệu ứng chuyển tiếp độ mờ nhẹ sẽ được áp dụng cho các class đó:

```css
// the default

.slidev-vclick-target {
  transition: opacity 100ms ease;
}

.slidev-vclick-hidden {
  opacity: 0;
  pointer-events: none;
}
```

Bạn có thể ghi đè chúng để tùy chỉnh hiệu ứng chuyển tiếp trong các stylesheet tùy chỉnh của bạn.

Ví dụ, bạn có thể tạo hiệu ứng chuyển tiếp phóng to bằng cách:

```css
/* styles.css */

.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  transform: scale(0);
}
```

Để chỉ định hoạt ảnh cho chỉ một số trang chiếu hoặc layout nhất định

```scss
.slidev-page-7,
.slidev-layout.my-custom-layout {
  .slidev-vclick-target {
    transition: all 500ms ease;
  }

  .slidev-vclick-hidden {
    transform: scale(0);
  }
}
```

Tìm hiểu thêm về [tùy chỉnh style](/custom/directory-structure#style).

## Đánh Dấu Sơ Khai

> Có sẵn từ phiên bản v0.48.0

Slidev tích hợp [Rough Notation](https://github.com/linkstrifer/react-rough-notation) để cho phép đánh dấu hoặc làm nổi bật các element trong trang chiếu của bạn.

### `v-mark`

Rough Notation được tích hợp với directive `v-mark`.

#### Loại

`v-mark.underline` để đánh dấu gạch dưới, `v-mark.circle` để đánh dấu bằng vòng tròn, v.v. Mặc định là `underline`.

#### Màu sắc

`v-mark.red` làm cho ký hiệu có màu `đỏ`. Hỗ trợ các chủ đề màu có sẵn từ UnoCSS. Đối với màu tùy chỉnh, sử dụng cú pháp đối tượng `v-mark="{ color: '#234' }"`

#### Click

`v-mark` hoạt động giống như `v-click` và sẽ được kích hoạt sau khi nhấp chuột. Tương tự như `v-click`, bạn có thể truyền giá trị nhấp chuột tùy chỉnh, như `v-mark="5"` hoặc `v-mark="'+1'"`.

#### Tùy chọn

Bạn cũng có thể truyền một đối tượng vào `v-mark` để chỉ định các tùy chọn, ví dụ:

```vue
<span v-mark="{ at: 5, color: '#234', type: 'circle' }">
Important text
</span>
```

#### Xem trước

<video src="https://github.com/slidevjs/slidev/assets/11247099/c840340c-0aa1-4cde-b228-e6c67e5f6879" rounded-lg shadow controls></video>

## Chuyển động

Slidev tích hợp sẵn [@vueuse/motion](https://motion.vueuse.org/). Bạn có thể sử dụng directive `v-motion` cho bất kỳ element nào để áp dụng hiệu ứng chuyển động cho chúng. Ví dụ:

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
  Slidev
</div>
```

Văn bản `Slidev` sẽ di chuyển từ `-80px` về vị trí ban đầu khi khởi tạo.

> Lưu ý: Slidev tải trước trang chiếu tiếp theo để cải thiện hiệu suất, điều này có nghĩa là hoạt ảnh có thể bắt đầu trước khi bạn chuyển đến trang đó. Để hoạt động chính xác, bạn có thể tắt tính năng tải trước cho trang chiếu cụ thể đó.
>
> ```md
> ---
> preload: false
> ---
> ```
>
> Hoặc kiểm soát vòng đời của element bằng `v-if` để có quyền kiểm soát chi tiết hơn
>
> ```html
> <div
>   v-if="$slidev.nav.currentPage === 7"
>   v-motion
>   :initial="{ x: -80 }"
>   :enter="{ x: 0 }">
>   Slidev
> </div>
> ```

Xem thêm: [Demo](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/features/directive-usage) | [Presets](https://motion.vueuse.org/features/presets)

## Chuyển Tiếp Trang Chiếu

<div id="pages-transitions" />

> Có sẵn từ phiên bản v0.39.0

Slidev hỗ trợ chuyển tiếp trang chiếu ngay từ đầu. Bạn có thể enable tính năng này bằng cách thiết lập tùy chọn `transition` trong phần frontmatter:

```md
---
transition: slide-left
---
```

Điều này sẽ mang lại hiệu ứng trượt mượt mà khi chuyển trang chiếu. Thiết lập trong phần frontmatter sẽ áp dụng cho tất cả các trang chiếu. Bạn cũng có thể thiết lập hiệu ứng chuyển tiếp khác nhau cho từng trang chiếu.

### Hiệu Ứng Chuyển Tiếp Tích Hợp

- `fade` - Làm mờ dần vào/ra
- `fade-out` - Làm mờ dần ra rồi vào
- `slide-left` - Trượt sang trái (trượt sang phải khi quay lại)
- `slide-right` - Trượt sang phải (trượt sang trái khi quay lại)
- `slide-up` - Trượt lên trên (trượt xuống dưới khi quay lại)
- `slide-down` - Trượt xuống dưới (trượt lên trên khi quay lại)
- `view-transition` - Trượt với API chuyển tiếp giao diện (view transitions)

### Chuyển Tiếp Giao Diện

> Có sẵn từ phiên bản v0.43.0

**View Transitions API** cung cấp cơ chế để dễ dàng tạo hiệu ứng chuyển động giữa các trạng thái DOM khác nhau. Tìm hiểu thêm về cách hoạt động tại [View Transitions API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API).

:::warning
Tính năng thử nghiệm: Không được hỗ trợ bởi tất cả các trình duyệt. Kiểm tra kỹ [bảng tương thích trình duyệt](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#browser_compatibility) trước khi sử dụng.
:::

Bạn có thể sử dụng thuộc tính CSS `view-transition-name` để đặt tên cho các chuyển tiếp giao diện, tạo sự liên kết giữa các element trang khác nhau và giúp quá trình chuyển trang mượt mà hơn.

Bạn có thể enable hỗ trợ cú pháp [MDC (Markdown Component)](/guide/syntax#mdc-syntax) để đặt tên cho các view-transition một cách thuận tiện:

```md
---
transition: view-transition
mdc: true
---

# View Transition {.inline-block.view-transition-title}

---

# View Transition {.inline-block.view-transition-title}
```

### Chuyển Tiếp Tùy Chỉnh

Các chuyển tiếp trang chiếu của Slidev được hỗ trợ bởi [Vue Transition](https://vuejs.org/guide/built-ins/transition.html). Bạn có thể cung cấp các chuyển tiếp tùy chỉnh của riêng mình bằng cách:

```md
---
transition: my-transition
---
```

và sau đó trong các tập tin stylesheet tùy chỉnh của bạn:

```css
.my-transition-enter-active,
.my-transition-leave-active {
  transition: opacity 0.5s ease;
}

.my-transition-enter-from,
.my-transition-leave-to {
  opacity: 0;
}
```

Tìm hiểu thêm cách hoạt động tại [Vue Transition](https://vuejs.org/guide/built-ins/transition.html).

### Chuyển Tiếp Tiến & Lùi

Bạn có thể chỉ định các hiệu ứng chuyển tiếp khác nhau cho việc điều hướng tiến và lùi bằng cách sử dụng dấu `|` làm dấu phân tách trong tên hiệu ứng chuyển tiếp:

```md
---
transition: go-forward | go-backward
---
```

Với cách này, khi bạn chuyển từ trang chiếu 1 sang trang chiếu 2, hiệu ứng `go-forward` sẽ được áp dụng. Khi bạn chuyển từ trang chiếu 2 về trang chiếu 1, hiệu ứng `go-backward` sẽ được áp dụng.

### Sử Dụng Nâng Cao

Trường `transition` chấp nhận một tùy chọn sẽ được truyền vào thành phần [`<TransitionGroup>`](https://vuejs.org/api/built-in-components.html#transition). Ví dụ:

```md
---
transition:
  name: my-transition
  enterFromClass: custom-enter-from
  enterActiveClass: custom-enter-active
---
```
