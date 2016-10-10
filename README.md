#webpack-vue

>A VueJs project with Webpack compiled by Babel!

### 技术栈

* VueJs
* Vuex
* Vue-router
* Less
* ES6
* Webpack
* Babel

### 安装

通过以下命令检测是否安装了workplus-cli

```bash
$ workplus -V
```

若尚未安装，可通过以下命令进行安装

```bash
$ npm install workplus-cli -g
```

然后执行以下命令安装项目：

```bash
$ workplus start webpack-vue my-project
```

安装完成后，进入项目目录`cd my-project`，执行`npm install`

### 开发

#### a. 开发模式

```bash
$ npm run dev
```

默认端口为8080，可通过配置config目录下的index.js文件的dev.port属性进行修改端口，大概配置如下：

```js
dev: {
  port: 8080
}
```

#### b. 设置代理

可在config目录下的index.js中配置dev.proxyTable来设置代理，大概配置如下：

```js
dev: {
  proxyTable: {
    '/api': {
      target: 'http://some.example.com'
    }
  }
}
```

切记：若使用该代理，访问接口应该为相对路径，既接口为`http://some.example.com/topics`，应写成`/topics`。

#### c. 发布

```bash
$ npm run build
```

代码将会打包到`dist`文件夹，可以使用workplus进入dist文件夹并启动server进行测试。

### Author

[AlbeeNaNa](https://github.com/AlbeeNaNa)


