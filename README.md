# toy-browser

This is a repo for learning how browser works.

Before you start leaning, you need to install dependencies use `npm install`

First, you need run a backend server for sending html file to browser.

```ssh
$ npm run start OR node server.js
```

Second, use command to run client.js to render an image `viewport.jpg` from `demo.html`.

```ssh
$ npm run client OR node client.js
```

Finally, you can change HTML or CSS in demo.html, and re-run `npm run client` to render a new image.

---

When browser take a html file from server, browser will parse HTTP header for the first, and then parse HTML file. you can see how browser parsing DOM and parsing CSS in `parse.js`.

In `layout.js`, I use js to build a simple flex model to parse css to render css tree.



---

这个项目是以学习浏览器如何工作的。

在你开始项目之前，你需要按照项目需要的依赖，使用`npm install`。

首先，你需要一个后端服务给浏览器传输对应的HTML文件，使用以下指令：

```ssh
$ npm run start OR node server.js
```

第二， 使用下面的指令来启动客户端（浏览器），最终根据`demo.html`会渲染出一个图片`viewport.jpg`；

```ssh
$ npm run client OR node client.js
```

最后，你可以更改HTML或者CSS 在`demo.html`中，然后重新渲染出新的图片，来看到代码更改的效果。

---

### 知识点

当浏览器得到一个HTML文件的时候，浏览器会先解析对应的HTTP，然后开始解析HTML，一边加载一边解析，你可以在`parse.js`中看到浏览器是如何做HTTP和HTML解析的，对应的标准可以在whatwg中查看。

在 `layout.js`中，实现了一个简易的flex模型，来解析CSS获得渲染树