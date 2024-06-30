# Hỗ trợ trình soạn thảo

<<<<<<< HEAD
Vì Slidev đang sử dụng Markdown làm mục nhập nguồn, bạn có thể sử dụng BẤT KỲ trình soạn thảo nào bạn thích để viết nó.
=======
Since Slidev uses Markdown as the source entry, you can use any editor you prefer to create your slides.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

Nếu bạn muốn một số quản lý hiệu quả cao cho các slide của mình, chúng tôi cung cấp các trình soạn thảo tích hợp cho bạn!

## Trình soạn thảo tích hợp

<<<<<<< HEAD
Slidev đi kèm với trình soạn thảo tích hợp [CodeMirror](https://codemirror.net/) sẽ tải lại ngay lập tức và lưu các thay đổi vào file của bạn. 
=======
Slidev comes with an integrated editor that will instantly reload and save the changes to your file.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

Click vào nút <carbon-edit class="inline-icon-btn"/> để mở.

![](/screenshots/integrated-editor.png)

## VS Code Extension

<p align="center">
    <a href="https://github.com/slidevjs/slidev" target="_blank">
        <img src="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/logo-for-vscode.png" alt="Slidev" width="300"/>
    </a>
    <br>
    <a href="https://marketplace.visualstudio.com/items?itemName=antfu.slidev" target="__blank">
        <img src="https://img.shields.io/visual-studio-marketplace/v/antfu.slidev.svg?color=4EC5D4&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" />
    </a>
    &nbsp;
    <a href="https://marketplace.visualstudio.com/items?itemName=antfu.slidev" target="__blank">
        <img src="https://img.shields.io/visual-studio-marketplace/d/antfu.slidev.svg?color=2B90B6" alt="Visual Studio Marketplace Downloads" />
    </a>
</p>

The VS Code extension cung cấp một số tính năng để giúp bạn tổ chức các slide của mình tốt hơn và có cái nhìn tổng quan nhanh về chúng.

### Tính năng

<<<<<<< HEAD
- Xem các slide trong panel bên cạnh
- Chuyển đến các nút next / prev
- Sắp xếp lại các slide
- Đóng gói các khối slide
- Chuyển đổi Markdown sang HTML
=======
- Preview slides in the side panel
- Slides tree view
- Re-ordering slides
- Folding for slide blocks
- Multiple slides project support
- Start the dev server with one click
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

![](https://github.com/slidevjs/slidev/assets/63178754/2c9ba01a-d21f-4b33-b6b6-4e249873f865)

::: code-group

<TheTweet id="1395333405345148930" />

<TheTweet id="1789684139152810151" />

:::

### Installation

You can install the extension from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=antfu.slidev).

### Usage

Click the `Slidev` icon in the activity bar to open the **Slidev panel**. In the Slidev panel, you can see the projects tree view, slides tree view, and the preview webview.

In the **projects tree view**, you can see all the Slidev projects in your workspace. You can dlick the item to open the corresponding file, and click the <codicon-eye /> icon over it to switch the active project. The <codicon-add /> icon allows you to load a slides project that wasn't scanned automatically.

In the **slides tree view**, you can see all the slides in the active project. You can click the item to move you cursor to the slide in the editor, and drag and drop to reorder the slides.

In the **preview webview**, you can click the <codicon-run-all /> icon to start the dev server and click the <codicon-globe /> icon to open the slides in the browser. Toggle <codicon-lock /> icon to sync/unsync the preview navigation with the editor cursor.

There are also some **commands** you can use. Type `Slidev` in the command palette to see them.

You can add glob patterns to the `slidev.include` configuration to include files as Slidev entries. The default value is `["**/*.md"]`. Example:

```json
{
  "slidev.include": ["**/presentation.md"]
}
```

## Prettier Plugin

Slidev also provides a Prettier plugin to format your slides. You can use it with your favorite editor that supports Prettier. Docs for the plugin can be found [here](https://github.com/slidevjs/prettier-plugin).
