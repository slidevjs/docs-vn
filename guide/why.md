# Tại sao chọn Slidev

Có rất nhiều công cụ làm slide đa tính năng, tổng quát và WYSIWYG như [Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) và [Apple Keynote](https://www.apple.com/keynote/). Chúng hoạt động rất tốt để tạo slide đẹp với hiệu ứng hoạt hình, biểu đồ, và nhiều tính năng khác, đồng thời rất trực quan và dễ học. Vậy tại sao phải tạo ra Slidev?

Slidev hướng đến việc cung cấp sự linh hoạt và tính tương tác cho các nhà phát triển để làm cho bài thuyết trình của họ trở nên thú vị, biểu cảm và hấp dẫn hơn bằng cách sử dụng các công cụ và công nghệ mà họ đã quen thuộc.

Khi làm việc với các trình soạn thảo WYSIWYG, rất dễ bị phân tâm bởi các lựa chọn kiểu dáng. Slidev khắc phục điều này bằng cách tách biệt nội dung và hình thức hiển thị. Điều này cho phép bạn tập trung vào từng phần một, đồng thời có thể tái sử dụng các chủ đề từ cộng đồng. Slidev không có mục tiêu thay thế hoàn toàn các công cụ tạo slide khác, mà tập trung phục vụ cộng đồng nhà phát triển.

## Slidev

![](/screenshots/cover.png)

Dưới đây là một số tính năng nổi bật của Slidev:

## Dựa trên Markdown

Slidev sử dụng định dạng Markdown mở rộng để lưu trữ và tổ chức các slide trong một file văn bản thuần túy duy nhất. Điều này giúp bạn tập trung vào việc tạo nội dung. Và vì nội dung và kiểu dáng được tách biệt, bạn cũng dễ dàng chuyển đổi giữa các chủ đề khác nhau.

Tìm hiểu thêm về [Cú pháp Markdown của Slidev](/guide/syntax).

## Có thể tùy chỉnh giao diện (Themable)

Các chủ đề cho Slidev có thể được chia sẻ và cài đặt thông qua các gói npm. Bạn chỉ cần áp dụng với một dòng cấu hình duy nhất.

Xem [bộ sưu tập chủ đề](/themes/gallery) hoặc [học cách viết chủ đề](/themes/write-a-theme).

## Thân thiện với nhà phát triển

Slidev hỗ trợ tuyệt vời cho đoạn mã (code snippets). Nó dùng [Shiki](https://github.com/shikijs/shiki) để làm nổi bật cú pháp một cách sắc nét, đồng thời bạn có thể chỉnh sửa code bất cứ lúc nào. Với [Monaco editor](https://microsoft.github.io/monaco-editor/) tích hợp, bạn có thể làm demo / live coding trong bài thuyết trình với tính năng tự động hoàn thành, xem thông tin kiểu (type hover), và kiểm tra type cho TypeScript.

Tìm hiểu thêm về [highlighters](/custom/highlighters) và [cấu hình Monaco](/custom/config-monaco).

## Nhanh chóng

Slidev sử dụng [Vite](https://vitejs.dev/), [Vue 3](https://v3.vuejs.org/) và [UnoCSS](https://unocss.dev/), mang đến trải nghiệm viết slide tuyệt vời. Mọi thay đổi bạn thực hiện sẽ được phản ánh **ngay lập tức** trên slide.

Tìm hiểu thêm về [công nghệ mà chúng tôi dùng](/guide/#tech-stack).

## Tương tác và biểu cảm

Bạn có thể viết các component Vue tùy chỉnh và dùng trực tiếp trong file markdown. Bạn cũng có thể tương tác với chúng trong bài thuyết trình để thể hiện ý tưởng một cách thú vị và trực quan hơn.

## Hỗ trợ ghi hình

Slidev tích hợp sẵn chức năng ghi hình và xem camera. Bạn có thể chia sẻ bài thuyết trình kèm hình camera của bạn, hoặc ghi lại màn hình và camera riêng biệt. Tất cả trong một, không cần thêm công cụ bên ngoài.

Tìm hiểu thêm về [ghi hình tại đây](/guide/recording).

## Dễ dàng mang đi

Bạn có thể xuất slide ra các định dạng PDF, PPTX, PNG hoặc thậm chí thành một ứng dụng Single-page Application (SPA) có thể host chỉ với một lệnh, và chia sẻ dễ dàng.

Xem thêm ở phần [hướng dẫn xuất file](/guide/exporting).

## Dễ dàng tùy biến

Vì Slidev dựa trên các công nghệ web, bất cứ thứ gì làm được trên web app cũng có thể làm được với Slidev. Ví dụ như WebGL, gọi API, iframe, hay thậm chí live sharing. Tất cả phụ thuộc vào trí tưởng tượng của bạn!

## Hãy thử ngay

Thử chơi với Slidev sẽ giúp bạn hiểu hơn là hàng ngàn từ ngữ có thể nói. Bạn chỉ cần một lệnh:

```bash
$ npm init slidev
```

Hoặc bạn có thể xem trước nhanh như sau:

<iframe class="aspect-16/9 rounded-xl w-full shadow-md border-none" src="https://www.youtube.com/embed/eW7v-2ZKZOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
