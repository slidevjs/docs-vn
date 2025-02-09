## Các component

Trang này liệt kê tất cả các component tích hợp sẵn do Slidev cung cấp. Những component này có thể được **sử dụng trực tiếp** trong slide của bạn.

Lưu ý rằng <LinkInline link="guide/theme-addon" /> có thể cung cấp các component bổ sung. Để thêm các component của riêng bạn, xem thêm tại <LinkInline link="guide/component#write" />.

## `Arrow`

Vẽ một mũi tên.

### Cách sử dụng

```md
<Arrow x1="10" y1="20" x2="100" y2="200" />
```

Hoặc:

```md
<Arrow v-bind="{ x1:10, y1:10, x2:200, y2:200 }" />
```

Thuộc tính:

- `x1` (`string | number`, bắt buộc): vị trí điểm bắt đầu x
- `y1` (`string | number`, bắt buộc): vị trí điểm bắt đầu y
- `x2` (`string | number`, bắt buộc): vị trí điểm kết thúc x
- `y2` (`string | number`, bắt buộc): vị trí điểm kết thúc y
- `width` (`string | number`, mặc định: `2`): độ rộng của đường thẳng
- `color` (`string`, mặc định: `'currentColor'`): màu của đường thẳng
- `two-way` (`boolean`, mặc định: `false`): vẽ mũi tên hai chiều

## `VDragArrow`

Một component `Arrow` có thể kéo di chuyển.

### Cách sử dụng

<LinkCard link="features/draggable#draggable-arrow" />

Các thuộc tính không liên quan đến vị trí giống như [component `Arrow`](#arrow).

## `AutoFitText`

> Experimental

Một hộp mà kích thước font chữ sẽ tự động điều chỉnh để phù hợp với nội dung. Giống như TextBox trong PowerPoint hoặc Keynote.

### Cách sử dụng

```md
<AutoFitText :max="200" :min="100" modelValue="Some text"/>
```

Thuộc tính:

- `max` (`string | number`, mặc định `100`): Kích thước font tối đa
- `min` (`string | number`, mặc định `30`): Kích thước font tối thiểu
- `modelValue` (`string`, mặc định `''`): nội dung văn bản

## `LightOrDark`

Sử dụng để hiển thị một thứ này hoặc thứ khác tùy theo chế độ sáng tối đang hoạt động.

### Cách sử dụng

Sử dụng với hai slot được đặt tên `#dark` và `#light`:

```md
<LightOrDark>
  <template #dark>Chế độ tối đã được bật</template>
  <template #light>Chế độ sáng đã được bật</template>
</LightOrDark>
```

Các thuộc tính được cung cấp trong component `LightOrDark` sẽ có sẵn qua các thuộc tính scoped slot:

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

Bạn có thể cung cấp markdown trong các slot, nhưng bạn sẽ cần bao quanh nội dung với các dòng trống:

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

## `Link`

Chèn một liên kết mà bạn có thể sử dụng để điều hướng đến một slide cụ thể.

### Cách sử dụng

```md
<Link to="42">Đi đến slide 42</Link>
<Link to="42" title="Đi đến slide 42"/>
<Link to="solutions" title="Đi đến các giải pháp"/>
```

Thuộc tính:

- `to` (`string | number`): Đường dẫn của slide cần điều hướng tới (đường dẫn slide bắt đầu từ `1`)
- `title` (`string`): Tiêu đề hiển thị

Bạn có thể sử dụng một chuỗi làm `to`, miễn là route tương ứng tồn tại, ví dụ:

```md
---
routeAlias: solutions
---

# Now some solutions!
```

## `PoweredBySlidev`

Hiển thị "Powered by Slidev" với liên kết đến trang web của Slidev.

## `RenderWhen`

Hiển thị các slot phụ thuộc vào việc ngữ cảnh có khớp hay không (ví dụ như khi chúng ta đang ở chế độ trình bày).

### Cách sử dụng

```md
<RenderWhen context="presenter">Chỉ hiển thị trong chế độ trình bày.</RenderWhen>
```

Loại ngữ cảnh: `'main' | 'visible' | 'print' | 'slide' | 'overview' | 'presenter' | 'previewNext'`

Thuộc tính:

- `context` (`Context | Context[]`): một ngữ cảnh hoặc mảng các ngữ cảnh mà bạn muốn kiểm tra
  - `'main'`: Hiển thị trong cả chế độ slide và trình bày (tương đương với ['slide', 'presenter']),
  - `'visible'`: Hiển thị nội dung nếu nó đang hiển thị
  - `'print'`: Hiển thị trong chế độ in ấn
  - `'slide'`: Hiển thị trong chế độ slide
  - `'overview'`: Hiển thị trong chế độ tổng quan
  - `'presenter'`: Hiển thị trong chế độ trình bày
  - `'previewNext'`: Hiển thị trong chế độ xem slide tiếp theo của người trình bày

Slots:

- `#default`: Hiển thị khi ngữ cảnh khớp
- `#fallback`: Hiển thị khi ngữ cảnh không khớp

## `SlideCurrentNo`

Số slide hiện tại.

### Cách sử dụng

```md
<SlideCurrentNo />
```

## `SlidesTotal`

Tổng số slide.

### Cách sử dụng

```md
<SlidesTotal />
```

## `TitleRenderer`

Chèn tiêu đề chính từ một slide được phân tích dưới dạng HTML.

Tiêu đề và cấp độ tiêu đề tự động được lấy từ phần tử tiêu đề đầu tiên của mỗi slide.

Bạn có thể ghi đè hành vi tự động này cho một slide bằng cách sử dụng cú pháp front matter:

```yml
---
title: Tiêu đề slide tuyệt vời
level: 2
---
```

### Cách sử dụng

Thành phần `<TitleRenderer>` là một component ảo mà bạn có thể nhập với:

```js
import TitleRenderer from '#slidev/title-renderer'
```

Sau đó, bạn có thể sử dụng nó với:

```md
<TitleRenderer no="42" />
```

Thuộc tính:

- `no` (`string | number`): Số của slide mà bạn muốn hiển thị tiêu đề (slides bắt đầu từ `1`)

## `Toc`

Chèn một mục lục.

Nếu bạn muốn một slide không xuất hiện trong component `<Toc>`, bạn có thể sử dụng tùy chọn `hideInToc` trong frontmatter của slide:

```yml
---
hideInToc: true
---
```

Tiêu đề được hiển thị bằng cách sử dụng component [`<Titles>`](#titles).

### Cách sử dụng

```md
<Toc />
```

Thuộc tính:

- `columns` (`string | number`, mặc định: `1`): Số cột hiển thị
- `listClass` (`string | string[]`, mặc định: `''`): Lớp CSS áp dụng cho danh sách mục lục
- `maxDepth` (`string | number`, mặc định: `Infinity`): Cấp độ tối đa của tiêu đề cần hiển thị
- `minDepth` (`string | number`, mặc định: `1`): Cấp độ tối thiểu của tiêu đề cần hiển thị
- `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, mặc định: `'all'`):
  - `'all'`: Hiển thị tất cả các mục
  - `'onlyCurrentTree'`: Hiển thị chỉ các mục trong cây hiện tại (mục đang hoạt động, các mục cha và con của mục đang hoạt động)
  - `'onlySiblings'`: Hiển thị chỉ các mục trong cây hiện tại và các anh chị em trực tiếp của chúng

## `Transform`

Áp dụng tỷ lệ hoặc biến đổi cho các phần tử.

### Cách sử dụng

```md
<Transform :scale="0.5">
  <YourElements />
</Transform>
```

Thuộc tính:

- `scale` (`number | string`, mặc định `1`): giá trị tỷ lệ biến đổi
- `origin` (`string`, mặc định `'top left'`): giá trị gốc của biến đổi

## `Tweet`

Nhúng một tweet.

### Cách sử dụng

```md
<Tweet id="20" />
```

Thuộc tính:

- `id` (`number | string`, bắt buộc): ID của tweet
- `scale` (`number | string`, mặc định `1`): giá trị tỷ lệ biến đổi
- `conversation` (`string`, mặc định `'none'`): tham số nhúng [tweet embed parameter](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)
- `cards` (`'hidden' | 'visible'`, mặc định `'visible'`): tham số nhúng [tweet embed parameter](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)

## `VAfter`, `VClick` và `VClicks`

<LinkCard link="guide/animations#click-animation" />

## `VSwitch`

Chuyển đổi giữa các slot khác nhau dựa trên các lần nhấp.

<LinkCard link="guide/animations#enter-leave" />

- Nếu thuộc tính `unmount` được đặt là `true`, slot trước đó sẽ bị tháo ra khi chuyển sang slot tiếp theo. Mặc định là `false`.
- Sử dụng thuộc tính `tag` và `childTag` để thay đổi thẻ mặc định của component và các phần tử con của nó. Mặc định là `div`.
- Sử dụng thuộc tính `transition` để thay đổi hiệu ứng chuyển tiếp. Mặc định là `false` (tắt).

## `VDrag`

<LinkCard link="features/draggable" />

## `SlidevVideo`

Nhúng một video.

### Cách sử dụng

```md
<SlidevVideo v-click autoplay controls>
  <!-- Bất kỳ thứ gì có thể đi vào thẻ video HTML. -->
  <source src="/myMovie.mp4" type="video/mp4" />
  <source src="/myMovie.webm" type="video/webm" />
  <p>
    Trình duyệt của bạn không hỗ trợ video. Bạn có thể tải xuống tại
    <a href="/myMovie.mp4">đây</a>.
  </p>
</SlidevVideo>
```

Kiểm tra [Tài liệu về thẻ video HTML](https://developer.mozilla.org/docs/Web/HTML/Element/Video) để xem những gì có thể được bao gồm trong slot của component này.

Thuộc tính:

- `controls` (`boolean`, mặc định: `false`): hiển thị điều khiển video
- `autoplay` (`boolean | 'once'`, mặc định: `false`):
  - `true` hoặc `'once'`: bắt đầu video chỉ một lần và không khởi động lại khi kết thúc hoặc tạm dừng
  - `false`: không tự động bắt đầu video (dựa vào `controls` thay vào đó)
- `autoreset` (`'slide' | 'click'`, mặc định: `undefined`):
  - `'slide'`: quay lại đầu video khi quay lại slide
  - `'click'`: quay lại đầu video khi quay lại lần nhấp vào component
- `poster` (`string | undefined`, mặc định: `undefined`):
  - Nguồn hình ảnh hiển thị khi video không phát.
- `printPoster` (`string | undefined`, mặc định: `undefined`):
  - Ghi đè cho `poster` khi in.
- `timestamp` (`string | number`, mặc định: `0`):
  - Thời gian bắt đầu của video tính bằng giây.
- `printTimestamp` (`string | number | 'last' | undefined`, mặc định: `undefined`):
  - Ghi đè cho `timestamp` khi in.

::: warning
Khi xuất bản, video có thể không tải được vì Chromium không hỗ trợ một số định dạng video. Trong trường hợp này, bạn có thể chỉ định đường dẫn thực thi của trình duyệt. Xem [Đường dẫn thực thi của Chromium](/guide/exporting.html#executable-path) để biết thêm thông tin.
:::

## `Youtube`

Nhúng một video YouTube.

### Cách sử dụng

```md
<Youtube id="luoMHjh-XcQ" />
```

Thuộc tính:

- `id` (`string`, bắt buộc): ID của video YouTube
- `width` (`number`): chiều rộng của video
- `height` (`number`): chiều cao của video

Bạn cũng có thể làm video bắt đầu từ một thời gian cụ thể nếu thêm `?start=1234` vào giá trị ID (với `1234` là số giây).