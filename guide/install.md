# Cài đặt

## Mẫu dành cho người mới bắt đầu

> Slidev yêu cầu [**Node.js >=14.0**](https://nodejs.org/)

Cách tốt nhất để bắt đầu là sử dụng mẫu chính thức của chúng tôi.

Với NPM:

```bash
$ npm init slidev@latest
```

Với Yarn:

```bash
$ yarn create slidev
```

<<<<<<< HEAD
Làm theo lời nhắc và nó sẽ tự động mở trình chiếu tại http://localhost:3030/ cho bạn.
=======
Follow the prompts and it will open up the slideshow at `http://localhost:3030/` automatically for you.
>>>>>>> 5cffe3bca749ea2af7b370223f0f442d15d88d8e

Nó cũng bao gồm thiết lập cơ bản và một bản demo ngắn với hướng dẫn về cách bắt đầu với Slidev.

## Cài đặt thủ công

Nếu bạn vẫn muốn cài đặt Slidev theo cách thủ công hoặc muốn tích hợp nó vào các dự án hiện có của mình, bạn có thể thực hiện:

```bash
$ npm install @slidev/cli @slidev/theme-default
```
```bash
$ touch slides.md
```
```bash
$ npx slidev
```

> Xin lưu ý rằng nếu bạn đang sử dụng [pnpm](https://pnpm.io), bạn sẽ cần bật tùy chọn [shamefully-hoist](https://pnpm.io/npmrc#shamefully-hoist) để Slidev hoạt động bình thường:
>
> ```bash
> echo 'shamefully-hoist=true' >> .npmrc
> ```

## Cài đặt trên toàn cục

> Có hiệu lực từ v0.14

Bạn có thể cài đặt Slidev trên toàn cục bằng lệnh sau

```bash
$ npm i -g @slidev/cli
```

Và sau đó sử dụng `slidev` ở bất cứ nơi nào mà không cần tạo dự án.

```bash
$ slidev
```

Lệnh này cũng sẽ sử dụng cục bộ `@slidev/cli` nếu nó được tìm thấy trong `node_modules`.

## Cài đặt trên Docker

<<<<<<< HEAD
Nếu bạn cần chạy bản trình bày với container một cách nhanh chóng, bạn có thể sử dụng hình ảnh [docker](https://hub.docker.com/r/stig124/slidev) được duy trì bởi [stig124](https://github.com/Stig124), hoặc xây dựng của riêng bạn.

Tham khảo [slidevjs/container repo](https://github.com/slidevjs/container) để biết thêm chi tiết.
=======
If you need a rapid way to run a presentation with containers, you can use the prebuilt [docker](https://hub.docker.com/r/tangramor/slidev) image maintained by [tangramor](https://github.com/tangramor), or build your own.

Just run following command in your work folder:

```bash
docker run --name slidev --rm -it \
    --user node \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    tangramor/slidev:latest
```

If your work folder is empty, it will generate a template `slides.md` and other related files under your work folder, and launch the server on port `3030`. 

You can access your slides from `http://localhost:3030/`


### Build deployable image

Or you can create your own slidev project to a docker image with Dockerfile:

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev

```

Create the docker image: `docker build -t myppt .`

And run the container: `docker run --name myslides --rm --user node -p 3030:3030 myppt`

You can visit your slides from `http://localhost:3030/`


### Build hostable SPA (Single Page Application)

Run command `docker exec -i slidev npx slidev build` on the running container `slidev`. It will generate static HTML files under `dist` folder.


#### Host on Github Pages

You can host `dist` in a static web site such as [Github Pages](https://tangramor.github.io/slidev_docker/) or Gitlab Pages. 

Because in Github pages the url may contain subfolder, so you need to modify the generated `index.html` to change `href="/assets/xxx` to `href="./assets/xxx`. Or you may use `--base=/<subfolder>/` option during the build process, such as: `docker exec -i slidev npx slidev build --base=/slidev_docker/`.

And to avoid Jekyll build process, you need to add an empty file `.nojekyll`.


#### Host by docker

You can also host it by yourself with docker:

```bash
docker run --name myslides --rm -p 80:80 -v ${PWD}/dist:/usr/share/nginx/html nginx:alpine
```

Or create a static image with following Dockerfile:

```Dockerfile
FROM nginx:alpine

COPY dist /usr/share/nginx/html
```

Create the docker image: `docker build -t mystaticppt .`

And run the container: `docker run --name myslides --rm -p 80:80 mystaticppt`

You can visit your slides from http://localhost/

Refer to the [tangramor/slidev_docker](https://github.com/tangramor/slidev_docker) for more details.

## Command Line Interface (CLI)

`@slidev/cli` Expose a few commands you can use with `npx slidev ...` or by adding scripts in your `package.json`:
```json
{
  "script": {
    "dev": "slidev"
  }
}
```

In that case you will be able to run `npm run dev`.

You can pass options to any commands:

* boolean option are `true` if they are present, false otherwise (example: `slidev --open`)
* some options can have values you can add just after the option or by using the `=` character (example: `slidev --port 8080` or `slidev --port=8080`)

If you use npm scripts, don't forget to add `--` after the npm command:
```bash
npm run slidev -- --open
```

### `slidev [entry]`

Start a local server for Slidev.

* `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

Options:

* `--port`, `-p` (`number`, default: `3030`): port number.
* `--open`, `-o` (`boolean`, default: `false`): open in browser.
* `--remote [password]` (`string`): listen to public host and enable remote control, if a value is passed then the presenter mode is private and only accessible by passing the given password in the URL query `password` parameter.
* `--log` (`'error', 'warn', 'info', 'silent'`, default: `'warn'`): Log level.
* `--force`, `-f` (`boolean`, default `false`): force the optimizer to ignore the cache and re-bundle.
* `--theme`, `-t` (`string`): override theme.

### `slidev build [entry]`

Build hostable SPA.

* `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

Options:

* `--watch`, `-w` (`boolean`, default: `false`): build watch.
* `--out`, `-o` (`string`, default: `dist`): output dir.
* `--base` (`string`, default: `/`): base URL (see https://cli.vuejs.org/config/#publicpath)
* `--download` (`boolean`, default: `false`): allow to download the slides as PDF inside the SPA.
* `--theme`, `-t` (`string`): override theme.

### `slidev export [entry]`

Export slides to PDF (or other format).

* `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

Options:

* `--output` (`string`, default: use `exportFilename` (see https://sli.dev/custom/#frontmatter-configures) or use `[entry]-export`): path to the output.
* `--base` (`'pdf', 'png', 'md'`, default: `'pdf'`): output format.
* `--timeout` (`number`, default: `30000`): timeout for rendering the print page (see https://playwright.dev/docs/api/class-page#page-goto).
* `--range` (`string`): page ranges to export (example: `'1,4-5,6'`).
* `--dark` (`boolean`, default: `false`): export as dark theme.
* `--with-clicks`, `-c` (`boolean`, default: `false`): export pages for every clicks (see https://sli.dev/guide/animations.html#click-animations).
* `--theme`, `-t` (`string`): override theme.

### `slidev format [entry]`

Format the markdown file.

* `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

### `slidev theme [subcommand]`

Theme related operations.

Subcommands:

* `eject [entry]`: Eject current theme into local file system
  * `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.
  * Options:
    * `--dir` (`string`, default: `theme`): output dir.
    * `--theme`, `-t` (`string`): override theme.
>>>>>>> 5cffe3bca749ea2af7b370223f0f442d15d88d8e
