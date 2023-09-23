# Tại sao chọn Slidev

Có rất nhiều trình tạo slide WYSIWYG đa năng, có mục đích chung, như [Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) và [Apple Keynote](https://www.apple.com/keynote/). Chúng hoạt động khá tốt để tạo các slide đẹp với animation, biểu đồ và nhiều thứ khác, đồng thời rất trực quan và dễ học. Vậy tại sao phải làm Slidev?

Slidev nhằm mục đích cung cấp tính linh hoạt và tính tương tác cho các nhà lập trình để làm cho bản trình bày của họ trở nên thú vị, biểu cảm và hấp dẫn hơn bằng cách sử dụng các công cụ và công nghệ mà họ đã quen thuộc.

Khi làm việc với các trình soạn thảo WYSIWYG, bạn rất dễ bị phân tâm bởi các tùy chọn tạo kiểu. Slidev khắc phục điều đó bằng cách tách nội dung và hình ảnh. Điều này cho phép bạn tập trung vào một thứ tại một thời điểm, đồng thời có thể sử dụng lại các chủ đề từ cộng đồng. Slidev không tìm cách thay thế hoàn toàn các slide deck builder khác. Thay vào đó, nó tập trung vào việc phục vụ cộng đồng nhà lập trình.

## Slidev

![](/screenshots/cover.png)

Dưới đây là một số tính năng thú vị nhất của Slidev:

## Dựa trên Markdown

Slidev sử dụng định dạng Markdown mở rộng để lưu trữ và sắp xếp các slide của bạn trong một file văn bản thuần. Điều này cho phép bạn tập trung vào việc tạo nội dung. Và vì nội dung và style được tách biệt, điều này cũng giúp bạn có thể chuyển đổi giữa các chủ đề khác nhau một cách dễ dàng.

Tìm hiểu thêm về [Cú pháp Markdown của Slidev](/guide/syntax).

## Themable

Các chủ đề cho Slidev có thể được chia sẻ và cài đặt bằng cách sử dụng các package npm. Sau đó, bạn áp dụng chúng chỉ với một dòng cấu hình.

Xem [thư viện chủ đề](/themes/gallery) hoặc [tìm hiểu cách viết chủ đề](/themes/write-a-theme).

## Thân thiện với nhà lập trình

Slidev cung cấp hỗ trợ tốt nhất các đoạn code cho các nhà lập trình. Nó hỗ trợ cả [Prism](https://prismjs.com/) và [Shiki](https://github.com/shikijs/shiki) để làm nổi bật cú pháp pixel hoàn hảo, trong khi vẫn có thể sửa đổi mã bất kỳ lúc nào thời gian. Với [trình soạn thảo Monaco](https://microsoft.github.io/monaco-editor/) được tích hợp sẵn, nó cũng cho phép bạn viết code / trình bày trực tiếp trong bản trình bày của mình với tính năng tự động hoàn thành, gõ di chuột và thậm chí hỗ trợ kiểm tra kiểu TypeScript.

Tìm hiểu thêm về [đánh dấu](/custom/highlighters) và [cấu hình Monaco](/custom/config-monaco).

## Nhanh

<<<<<<< HEAD
Slidev được cung cấp bởi [Vite](https://vitejs.dev/), [Vue 3](https://v3.vuejs.org/) và [Windi CSS](https://windicss.org/), cung cấp cho bạn trải nghiệm tác giả tuyệt vời nhất. Mọi thay đổi bạn thực hiện sẽ phản ánh vào các slide của bạn **ngay lập tức**.
=======
Slidev is powered by [Vite](https://vitejs.dev/), [Vue 3](https://v3.vuejs.org/) and [UnoCSS](https://unocss.dev/), which give you the most wonderful authoring experience. Every change you made will reflect to your slides **instantly**.
>>>>>>> 0c897047096b0c05c5b5d3c2a8c99912c5a33056

Tìm thêm về [our tech stack](/guide/#tech-stack).

## Interactive & Expressive

Bạn có thể viết các component Vue tùy chỉnh và sử dụng chúng trực tiếp bên trong file markdown của mình. Bạn cũng có thể tương tác với chúng bên trong bản trình bày để thể hiện ý tưởng của mình theo cách trực quan và thú vị hơn.

## Hỗ trợ Recording

Slidev cung cấp tính năng record và xem camera tích hợp. Bạn có thể chia sẻ bản trình bày của mình với chế độ xem camera hoặc ghi và lưu chúng riêng cho màn hình và camera của bạn. Tất cả chỉ với một bước, không cần công cụ bổ sung.

Tìm hiểu thêm về [recording](/guide/recording).

## Portable

Xuất các trang trình bày của bạn thành PDF, PNG hoặc thậm chí là Ứng dụng một trang có thể lưu trữ (SPA) chỉ với một lệnh duy nhất và chia sẻ chúng ở mọi nơi.

Đọc thêm về điều đó trong [tài liệu xuất](/guide/exporting).

## Hackable

Được hỗ trợ bởi công nghệ web, bất cứ điều gì có thể được thực hiện trong một ứng dụng web cũng có thể thực hiện được với Slidev. Ví dụ: WebGL, API requests, iframes hoặc thậm chí là chia sẻ trực tiếp. Nó tùy thuộc vào trí tưởng tượng của bạn!

## Hãy thử một lần

Thử với Slidev sẽ cho bạn biết hơn một nghìn từ. Bạn chỉ cần một lệnh:

```bash
$ npm init slidev
```

Hoặc xem trước nó:

<div class="aspect-9/16 relative">
<iframe class="rounded w-full shadow-md border-none" src="https://www.youtube.com/embed/eW7v-2ZKZOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
