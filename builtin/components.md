# Component

## Tích hợp Component

> Các tài liệu của phần này vẫn đang được hoàn thiện. Trước đó, bạn có thể xem trực tiếp tại [source code](https://github.com/slidevjs/slidev/blob/main/packages/client/builtin).

<<<<<<< HEAD
## Tùy chỉnh Component
=======
### `Toc`

Insert a Table Of Content.

If you want a slide to not appear in the `<Toc>` component, you can use in the front matter block of the slide:
```yml
---
hideInToc: true
---
```

Titles are displayed using the [`<Titles>` component](#titles)

#### Usage

~~~md
<Toc />
~~~

Parameters:

* `columns` (`string | number`, default: `1`): The number of columns of the display
* `listClass` (`string | string[]`, default: `''`): Classes to apply to the table of contents list
* `maxDepth` (`string | number`, default: `Infinity`): The maximum depth level of title to display
* `minDepth` (`string | number`, default: `1`): The minimum depth level of title to display
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, default: `'all'`):
  * `'all'`: Display all items
  * `'onlyCurrentTree'`: Display only items that are in current tree (active item, parents and children of active item)
  * `'onlySiblings'`: Display only items that are in current tree and their direct siblings

### `Link`

Insert a link you can use to navigate to a given slide.

#### Usage

~~~md
<Link to="42">Go to slide 42</Link>
<Link to="42" title="Go to slide 42"/>
~~~

Parameters:

* `to` (`string | number`): The path of the slide to navigate to (slides starts from `1`)
* `title` (`string`): The title to display

### `Titles`

Insert the main title from a slide parsed as HTML.

Titles and title levels get automatically retrieved from the first title element of each slides.

You can override this automatic behaviour for a slide by using the front matter syntax:
```yml
---
title: Amazing slide title
level: 2
---
```

#### Usage

The `<Titles>` component is a virtual component you can import with:
```js
import Titles from '/@slidev/titles.md'
```

Then you can use it with:
~~~md
<Titles no="42" />
~~~

Parameters:

* `no` (`string | number`): The number of the slide to display the title from (slides starts from `1`)

### `LightOrDark`

Use it to display one thing or another depending on the active light or dark theme.

#### Usage

Use it with the two named Slots `#dark` and `#light`:
~~~md
<LightOrDark>
  <template #dark>Dark mode is on</template>
  <template #light>Light mode is on</template>
</LightOrDark>
~~~

Provided props on `LightOrDark` component will be available using scoped slot props:
~~~md
<LightOrDark width="100" alt="some image">
  <template #dark="props">
    <img src="/dark.png" v-bind="props"/>
  </template>
  <template #light="props">
    <img src="/light.png" v-bind="props"/>
  </template>
</LightOrDark>
~~~

You can provide markdown in the slots, but you will need to surround the content with blank lines:
~~~md
<LightOrDark>
  <template #dark>
  
![dark](/dark.png)

  </template>
  <template #light>
  
![light](/light.png)

  </template>
</LightOrDark>
~~~


## Custom Components
>>>>>>> 38e076f9a7c55cbd4d7b58579eecb54e77e9723a

Tạo một thư mục `components/` trong dự án gốc của bạn và chỉ cần đặt các component Vue tùy chỉnh của bạn bên trong nó, sau đó bạn có thể sử dụng nó với cùng tên trong file markdown của mình!

Đọc thêm trong phần [Tùy chỉnh](/custom/directory-structure#components).

## Component do Chủ đề cung cấp

Chủ đề cũng có thể cung cấp các component. Vui lòng đọc tài liệu về nó để biết những gì nó cung cấp.

Kiểm tra thêm trong phần [Cấu trúc thư mục](/custom/directory-structure).
