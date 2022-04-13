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

Làm theo lời nhắc và nó sẽ tự động mở trình chiếu tại http://localhost:3030/ cho bạn.

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

You can access your slides from http://localhost:3030/


### Build deployable image

Or you can create your own slidev project to a docker image with Dockerfile:

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev

```

Create the docker image: `docker build -t myppt .`

And run the container: `docker run --name myslides --rm --user node -p 3030:3030 myppt`

You can visit your slides from http://localhost:3030/


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
>>>>>>> 9fa6829bca1bd8a2262cbc20eb2759d08a0f11fa
