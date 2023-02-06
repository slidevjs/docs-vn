# Animation

## Click Animation

### `v-click`

Để áp dụng "click animation" cho các element, bạn có thể sử dụng `v-click` hoặc các component `<v-click>`

```md
# Hello

<!-- Sử dụng Component: cái này sẽ ẩn cho đến khi bạn nhấn "next" -->
<v-click>

Hello World

</v-click>

<!-- Sử dụng Directive: cái này sẽ ẩn cho đến khi bạn nhấn "next" lần thứ hai -->
<div v-click class="text-xl p-2">

Hey!

</div>
```

### `v-after`

Việc sử dụng `v-after` tương tự như `v-click` nhưng nó sẽ hiển thị element khi kích hoạt `v-click` trước đó.

```md
<div v-click>Hello</div>
<div v-after>World</div>
```

Khi bạn nhấp vào nút "next", cả hai `Hello` và `World` sẽ cùng hiển thị.

### `v-click-hide`

Tương tự như `v-click` nhưng thay vì làm cho phần tử xuất hiện, nó làm cho element ẩn sau khi nhấn.

```md
<div v-click-hide>Hello</div>
```

### `v-clicks`

`v-clicks` chỉ được cung cấp như một component. Đó là một cách viết tắt để áp dụng `v-click` cho tất cả các element con của nó. Nó đặc biệt hữu ích khi làm việc với list.

```md
<v-clicks>

- Item 1
- Item 2
- Item 3
- Item 4

</v-clicks>
```

Một mục sẽ hiển thị mỗi khi bạn nhấn vào "next".

### Custom Số lần Click

Theo mặc định, Slidev đếm số bước cần thiết trước khi chuyển sang trang chiếu tiếp theo. Bạn có thể ghi đè cài đặt này bằng cách chuyển tùy chọn frontmatter `clicks`:

```yaml
---
# 10 lần nhấn vào trang trình bày này, trước khi chuyển sang trang tiếp theo
clicks: 10
---
```

### Ordering

Chuyển chỉ số nhấp chuột vào directive của bạn, bạn có thể tùy chỉnh thứ tự của việc revealing

```md
<div v-click>1</div>
<div v-click>2</div>
<div v-click>3</div>
```

```md
<!-- thứ tự bị đảo ngược -->
<div v-click="3">1</div>
<div v-click="2">2</div>
<div v-click="1">3</div>
```

```md
---
clicks: 3
---

<!-- hiển thị sau 3 lần click -->
<v-clicks at="3">
  <div>Hi</div>
</v-clicks>
```

### Chuyển đổi Element

Khi bạn áp dụng `v-click` cho các element của mình, nó sẽ đính kèm tên class `slidev-vclick-target` vào đó. Khi các element bị ẩn, tên class `slidev-vclick-hidden` cũng sẽ được đính kèm. Ví dụ:

```html
<div class="slidev-vclick-target slidev-vclick-hidden">Text</div>
```

Sau khi click, nó sẽ trở thành

```html
<div class="slidev-vclick-target">Text</div>
```

Theo mặc định, một quá trình chuyển đổi opacity được áp dụng cho các class đó:

```css
// mặc định

.slidev-vclick-target {
  transition: opacity 100ms ease;
}

.slidev-vclick-hidden {
  opacity: 0;
  pointer-events: none;
}
```

Bạn có thể ghi đè chúng để tùy chỉnh các hiệu ứng chuyển tiếp trong các stylesheet tùy chỉnh của mình. 

Ví dụ: bạn có thể đạt được các chuyển đổi scale bằng cách:

```css
// styles.css

.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  transform: scale(0);
}
```

Để chỉ định animation cho một slide hoặc layout nhất định

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

Tìm hiểu thêm về [customizing styles](/custom/directory-structure#style).

## Motion

Slidev được tích hợp sẵn [@vueuse/motion](https://motion.vueuse.org/). Bạn có thể sử dụng `v-motion` cho bất kỳ element nào để thực hiện motion áp dụng cho chúng. Ví dụ

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
  Slidev
</div>
```

Văn bản `Slidev` sẽ di chuyển từ `-80px` về vị trí ban đầu khi khởi tạo.

> Lưu ý: Slidev tải trước slide tiếp theo để trình bày, có nghĩa là các animation có thể bắt đầu trước khi bạn điều hướng đến trang. Để làm cho nó hoạt động bình thường, bạn có thể tắt tính năng tải trước cho slide cụ thể
>
> ```md
> ---
> preload: false
> ---
> ```
>
> Hoặc kiểm soát vòng đời của element bằng `v-if` để có các điều khiển chi tiết
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

Tìm hiểu chế độ [Demo](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/directive-usage.html) | [Presets](https://motion.vueuse.org/presets.html)

<<<<<<< HEAD
## Chuyển trang

> Hỗ trợ tích hợp cho các slide KHÔNG ĐƯỢC cung cấp trong phiên bản hiện tại. Chúng tôi đang có kế hoạch bổ sung hỗ trợ cho họ trong phiên bản chính tiếp theo. Trước đó, bạn vẫn có thể sử dụng các style và librarie tùy chỉnh của mình để làm điều đó.
=======
## Slide Transitions

<div id="pages-transitions" />

> Available since v0.39.0

Slidev supports slide transitions out of the box. You can enable it by setting the `transition` frontmatter option:

```md
---
transition: slide-left
---
```

This will give you a nice sliding effects on slide switching. Setting it in the frontmatter will apply to all slides. You can also set different transition per slide.

### Builtin Transitions

- `fade` - Crossfade in/out
- `fade-out` - Fade out and then fade in
- `slide-left` - Slides to the left (slide to right when going backward)
- `slide-right` - Slides to the right (slide to left when going backward)
- `slide-up` - Slides to the top (slide to bottom when going backward)
- `slide-down` - Slides to the bottom (slide to top when going backward)

### Custom Transitions

Slidev's slide transitions are powered by [Vue Transition](https://vuejs.org/guide/built-ins/transition.html). You can provide your custom transitions by:

```md
---
transition: my-transition
---
```

and then in your custom stylesheets:

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

Learn more how it works in [Vue Transition](https://vuejs.org/guide/built-ins/transition.html).

### Forward & Backward Transitions

You can specify different transitions for forward and backward navigation using `|` as a separator in the transition name:

```md
---
transition: go-forward | go-backward
---
```

With this, when you go from slide 1 to slide 2, the `go-forward` transition will be applied. When you go from slide 2 to slide 1, the `go-backward` transition will be applied.

### Advanced Usage

The `transition` field accepts an option that will passed to the [`<TransitionGroup>`](https://vuejs.org/api/built-in-components.html#transition) component. For example:

```md
---
transition:
  name: my-transition
  enterFromClass: custom-enter-from
  enterActiveClass: custom-enter-active
---
```
>>>>>>> dbdc820c8574243d4ae38131ae2a53f6a35a9104
