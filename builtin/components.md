---
outline: [2, 3]
---

# Các component

## Các component tích hợp sẵn

### `Arrow`

Vẽ một mũi tên.

#### Cách sử dụng

```md
<Arrow x1="10" y1="20" x2="100" y2="200" />
```

Hoặc:

```md
<Arrow v-bind="{ x1:10, y1:10, x2:200, y2:200 }" />
```

Các tham số:

- `x1` (`string | number`, bắt buộc): tọa độ x điểm bắt đầu
- `y1` (`string | number`, bắt buộc): tọa độ y điểm bắt đầu
- `x2` (`string | number`, bắt buộc): tọa độ x điểm kết thúc
- `y2` (`string | number`, bắt buộc): tọa độ y điểm kết thúc
- `width` (`string | number`, mặc định: `2`): độ dày đường kẻ
- `color` (`string`, mặc định: `'currentColor'`): màu đường kẻ
- `two-way` (`boolean`, mặc định: `false`): vẽ mũi tên hai chiều

### `VDragArrow`

Một component `Arrow` có thể kéo thả được.

#### Cách sử dụng

Xem tại https://sli.dev/guide/draggable.html#draggable-arrow

Các tham số không liên quan đến vị trí giống như [component `Arrow`](#arrow).

### `AutoFitText`

> Thử nghiệm

Hộp chứa bên trong mà kích thước chữ sẽ tự động điều chỉnh để vừa với nội dung. Tương tự như TextBox trong PowerPoint hoặc Keynote.

#### Cách sử dụng

```md
<AutoFitText :max="200" :min="100" modelValue="Some text"/>
```

Các tham số:

- `max` (`string | number`, mặc định `100`): Kích thước chữ tối đa
- `min` (`string | number`, mặc định `30`): Kích thước chữ tối thiểu
- `modelValue` (`string`, mặc định `''`): nội dung văn bản

### `LightOrDark`

Sử dụng để hiển thị nội dung khác nhau tùy theo theme đang dùng là sáng (light) hay tối (dark).

#### Cách sử dụng

Dùng với hai named Slots `#dark` và `#light`:

```md
<LightOrDark>
  <template #dark>Dark mode is on</template>
  <template #light>Light mode is on</template>
</LightOrDark>
```

Các props được cung cấp trên component `LightOrDark` sẽ có sẵn thông qua scoped slot props:

```md
<LightOrDark width="100" alt="some image">
  <template #dark="props">
    <img src="/dark.png" v-bind="props"/>
  </template>
  <template #light="props">
    <img src="/light.png" v-bind="props"/>
  </template>
</LightOrDark>
```

Bạn có thể cung cấp markdown trong các slot, nhưng bạn cần phải để trống một dòng ở trên và dưới nội dung đó:

```md
<LightOrDark>
  <template #dark>

![dark](/dark.png)

  </template>
  <template #light>

![light](/light.png)

  </template>
</LightOrDark>
```

### `Link`

Chèn một liên kết bạn có thể dùng để điều hướng đến slide cụ thể.

#### Cách dùng

```md
<Link to="42">Go to slide 42</Link>
<Link to="42" title="Go to slide 42"/>
<Link to="solutions" title="Go to solutions"/>
```

Các tham số:

- `to` (`string | number`): Đường dẫn của slide muốn điều hướng đến (slide bắt đầu từ số `1`)
- `title` (`string`): Tiêu đề sẽ hiển thị

Bạn có thể dùng một chuỗi làm `to`, với điều kiện route tương ứng đã tồn tại, ví dụ:

```md
---
routeAlias: solutions
---

# Now some solutions!
```

### `PoweredBySlidev`

Hiển thị dòng "Powered by Slidev" kèm theo liên kết đến trang web của Slidev.

### `RenderWhen`

Chỉ render slot khi điều kiện context thỏa mãn (ví dụ khi đang ở chế độ presenter view).

#### Cách sử dụng

```md
<RenderWhen context="presenter">This will only be rendered in presenter view.</RenderWhen>
```

Kiểu context: `'main' | 'slide' | 'overview' | 'presenter' | 'previewNext'`

Tham số:

- `context` (`Context | Context[]`): context hoặc mảng các context mà bạn muốn slot được render

### `SlideCurrentNo`

Số thứ tự slide hiện tại.

#### Cách sử dụng

```md
<SlideCurrentNo />
```

### `SlidesTotal`

Tổng số lượng slide.

#### Cách sử dụng

```md
<SlidesTotal />
```

### `Titles`

Chèn tiêu đề chính từ một slide đã được phân tích cú pháp thành HTML.

Tiêu đề và cấp độ tiêu đề được tự động lấy từ phần tử tiêu đề đầu tiên của mỗi slide.

Bạn có thể ghi đè hành vi tự động này cho một slide bằng cách sử dụng cú pháp front matter:

```yml
---
title: Amazing slide title
level: 2
---
```

#### Cách sử dụng

`<Titles>` là một component ảo mà bạn có thể import bằng cách:

```js
import Titles from '/@slidev/titles.md'
```

Sau đó bạn có thể sử dụng nó với:

```md
<Titles no="42" />
```

Các tham số:

- `no` (`string | number`): Số thứ tự của slide để hiển thị tiêu đề (slide bắt đầu từ `1`)

### `Toc`

Chèn một Mục Lục (Table Of Content).

Nếu bạn muốn một slide không xuất hiện trong thành phần `<Toc>`, bạn có thể sử dụng trong khối front matter của slide:

```yml
---
hideInToc: true
---
```

Tiêu đề được hiển thị bằng cách sử dụng [`<Titles>` component](#titles)

#### Cách sử dụng

```md
<Toc />
```

Tham số:

- `columns` (`string | number`, mặc định: `1`): Số cột hiển thị
- `listClass` (`string | string[]`, mặc định: `''`): Các lớp CSS áp dụng cho danh sách mục lục
- `maxDepth` (`string | number`, mặc định: `Infinity`): Mức độ sâu tối đa của tiêu đề để hiển thị
- `minDepth` (`string | number`, mặc định: `1`): Mức độ sâu tối thiểu của tiêu đề để hiển thị
- `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, mặc định: `'all'`):
  - `'all'`: Hiển thị tất cả các mục
  - `'onlyCurrentTree'`: Chỉ hiển thị các mục trong cây hiện tại (mục đang hoạt động, các mục cha và con của mục hoạt động)
  - `'onlySiblings'`: Chỉ hiển thị các mục trong cây hiện tại và các anh chị em trực tiếp của chúng

### `Transform`

Áp dụng tỉ lệ hoặc biến đổi cho các phần tử.

#### Cách sử dụng

```md
<Transform :scale="0.5">
  <YourElements />
</Transform>
```

Tham số:

- `scale` (`number | string`, mặc định `1`): giá trị tỉ lệ biến đổi (transform scale)
- `origin` (`string`, mặc định `'top left'`): giá trị gốc biến đổi (transform origin)

### `Tweet`

Nhúng một tweet.

#### Cách sử dụng

```md
<Tweet id="20" />
```

Tham số:

- `id` (`number | string`, bắt buộc): ID của tweet
- `scale` (`number | string`, mặc định `1`): giá trị tỉ lệ biến đổi (transform scale)
- `conversation` (`string`, mặc định `'none'`): [tham số nhúng tweet](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)
- `cards` (`'hidden' | 'visible'`, mặc định `'visible'`): [tham số nhúng tweet](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)

### `VAfter`, `VClick` và `VClicks`

Xem https://sli.dev/guide/animations.html

### `VSwitch`

Chuyển đổi giữa nhiều slot dựa trên các cú nhấp chuột.

Xem https://sli.dev/guide/animations.html#enter-leave

- Nếu prop `unmount` được đặt thành `true`, slot trước sẽ bị gỡ bỏ khi chuyển sang slot tiếp theo. Mặc định là `false`.
- Dùng prop `tag` và `childTag` để thay đổi thẻ mặc định của component và các phần tử con. Mặc định là `div`.
- Dùng prop `transition` để thay đổi hiệu ứng chuyển đổi. Mặc định là `false` (tắt).

### `VDrag`

Xem https://sli.dev/guide/draggable.html

### `SlidevVideo`

Nhúng một video.

#### Cách sử dụng

```md
<SlidevVideo v-click autoplay controls>
  <!-- Anything that can go in a HTML video element. -->
  <source src="/myMovie.mp4" type="video/mp4" />
  <source src="/myMovie.webm" type="video/webm" />
  <p>
    Your browser does not support videos. You may download it
    <a href="/myMovie.mp4">here</a>.
  </p>
</SlidevVideo>
```

Xem [tài liệu phần tử video HTML](https://developer.mozilla.org/docs/Web/HTML/Element/Video) để biết những gì có thể được bao gồm trong slot của component này.

Tham số:

- `controls` (`boolean`, mặc định: `false`): hiển thị điều khiển video
- `autoplay` (`boolean | 'once'`, mặc định: `false`):
  - `true` hoặc `'once'`: chỉ phát video một lần và không phát lại khi video kết thúc hoặc bị tạm dừng
  - `false`: không tự động phát video (phụ thuộc vào `controls`)
- `autoreset` (`'slide' | 'click'`, mặc định: `undefined`):
  - `'slide'`: quay lại đầu video khi trở về slide
  - `'click'`: quay lại đầu video khi trở về lượt click của component
- `poster` (`string | undefined`, mặc định: `undefined`):
  - Nguồn ảnh hiển thị khi video chưa phát
- `printPoster` (`string | undefined`, mặc định: `undefined`):
  - Thay thế `poster` khi in ấn
- `timestamp` (`string | number`, mặc định: `0`):
  - Thời gian bắt đầu phát video tính bằng giây
- `printTimestamp` (`string | number | 'last' | undefined`, mặc định: `undefined`):
  - Thay thế `timestamp` khi in ấn

::: warning
Khi xuất file, video có thể không tải được vì Chromium không hỗ trợ một số định dạng video. Trong trường hợp này, bạn có thể chỉ định đường dẫn thực thi của trình duyệt. Xem [Đường dẫn thực thi Chromium](/guide/exporting.html#executable-path) để biết thêm chi tiết.
:::

### `Youtube`

Nhúng video từ Youtube.

#### Cách sử dụng

```md
<Youtube id="luoMHjh-XcQ" />
```

Tham số:

- `id` (`string`, bắt buộc): id của video youtube
- `width` (`number`): chiều rộng của video
- `height` (`number`): chiều cao của video

Bạn cũng có thể cho video bắt đầu phát từ một thời điểm cụ thể bằng cách thêm `?start=1234` vào giá trị id (trong đó 1234 là số giây).

## Component tùy chỉnh

Tạo thư mục `components/` dưới thư mục gốc của dự án, rồi đặt các component Vue tùy chỉnh của bạn vào đó. Sau đó bạn có thể sử dụng chúng với cùng tên trong file markdown!

Đọc thêm ở phần [Tùy chỉnh](/custom/directory-structure#components).

## Component do Theme cung cấp

Các theme cũng có thể cung cấp component. Vui lòng đọc tài liệu của họ để biết những component nào được cung cấp.

Xem thêm trong phần [cấu trúc thư mục](/custom/directory-structure).
