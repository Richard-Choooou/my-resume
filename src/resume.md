

## 个人信息
* 周鹏 ｜ 男 ｜ 27岁
* 5年经验 ｜ 在职 ｜ 前端开发工程师
* 电话：13120665335
* Email: 1002672071@qq.com
* 技术博客(gitpage)：[http://www.zpblogs.com/myBlogs/](http://www.zpblogs.com/myBlogs/)
* Github: [https://github.com/Richard-Choooou](https://github.com/Richard-Choooou)

---

## 专业技能
* 掌握 **Javascript**, **CSS3**, **HTML5** 等 web 开发技术。
* 熟悉 **React**、**Vue** 技术栈。
* 熟练使用 Ant-design 以及 Element-ui 等 UI 库。
* 熟悉 Typescript 的配置以及使用。
* 熟悉 Less, Sass 等 CSS 预处理器。
* 熟悉 Webpack、Gulp 等构建工具的使用，擅长利用工具解决工程问题。
* 熟悉 Python 语言，并拥有后端开发经验。
* 熟悉 java 语言，并拥有 Android 开发经验。

---
## 工作经历
### 武汉小果科技有限公司 2018年8月 - 至今【3.5年】
1. 负责**公司新人培养**、**项目核心功能编写**以及**新技术推广**等工作。
2. 定制前端开发规范，审核代码提交。
3. 推动公司的开发模式从**后端模版渲染**到**前后端分离**。
4. 落地 **vue**、**react**、**typescript** 等技术的应用。
5. 同时承担着 Android 以及桌面客户端开发的职责。

### 上海六感科技有限公司 2016年9月-2018年8月【2年】
1. 负责业务模块的持续迭代开发及重构。
2. 负责前端通用组件的开发及维护。
3. 参与产品功能评审，以及交互体验优化。


---

## 项目经历
### 森果零售收银台
跨 android, windows 以及 linux 端的果蔬称重收银系统，实现商品选取、商品称重、扫码收银、订单打印、订单管理等主要功能。在该项目中负责系统架构、核心结算逻辑编写以及 android 和桌面客户端功能开发，详见技术细节。
#### 技术选型
* react
* typescript
* jss 
* mobx
* electron
* android(java 语言)

#### 技术细节
* 使用混编技术，使之跨 Android、Windows 以及 Linux 平台运行，并解决不同平台兼容问题。
* 设计跨平台通信流程，抹平多平台通信差异，分别编写 Web 以及客户端代码完成 Js-Bridge, 实现底层方法的调用。
* 使用 发布订阅、观察者、组合、职责链 等设计模式对系统模块进行解耦，提升系统鲁棒性，使收银台稳定运行至今，从未发生重大事故。
* 将性能优化到极致，以适应低端机型，至今已适配 20 余款机型，为公司提供了更多销售选择。
* 使用 OOP 将收银台整体进行抽象，提升系统扩展性，降低团队成员理解系统的难度。
* 将 Web 与 Electron 平台同构，并结合 Typescript 解决 API 一致性问题。
* 使用 Node-gyp 编译 C++ 代码，实现 Electron 调用 Windows 平台 API。
* 使用 Android NDK 编译 SerialPort，实现电子称称重数据的读取和解析。
* 设计 Android 平台 USBDevice 管理模块，实现 USB 打印机的即插即用。


更多关于收银台实现细节，您可在我的[博客](https://www.zpblogs.com/myBlogs/2021/02/06/%E6%A3%AE%E6%9E%9C%E6%94%B6%E9%93%B6%E5%8F%B0%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A1/)中了解。

### 森果用户反馈系统
用于管理客户在使用森果各个系统时提交的 bug 反馈以及功能建议等信息，在该项目中负责前端主体功能编写，后端部分功能编写。
#### 技术选型
* tornado mysql sqlalchemy celery (python)
* vue2 (pc端)
* react + typescript (移动端)

#### 技术细节
* 将反馈表单组件抽离成插件，集成到各个子系统，避免重复开发。
* 使用 vuex 优化权限管理。
* 配置 webpack 实现增量更新，解决资源 404 问题。
* 与 tower（项目管理工具）打通，进行联动，以提升工作效率。 
* 使用 selenium 无头浏览器完成 tower OAuth2.0 登录认证。
* 使用 celery 定时任务完成 tower token 的刷新。


### 其它
* 森果零售通（react、typescript）
* 森果采购配货系统（vue2）
* 五菱E100 web商城 (vue2)
* 五菱E100-CRM系统 (vue2)
* 华为人机功效评估系统 (jquery)

---

## 开源项目

### webpack-markdown-pdf-plugin
一个将 markdown 文件转换为 pdf 的 webpack plugin

地址[https://www.npmjs.com/package/webpack-markdown-pdf-plugin](https://www.npmjs.com/package/webpack-markdown-pdf-plugin)

### 图片压缩客户端工具
基于 electron 和 react 开发

地址[https://github.com/Richard-Choooou/image-compress](https://github.com/Richard-Choooou/image-compress)

### best-calendar
一个封装日历算法的工具库，使用此库可以很方便的得到日历数据,随意定制日历

地址[https://www.npmjs.com/package/best-calendar](https://www.npmjs.com/package/best-calendar)


## 教育经历
湖南信息职业技术学院 ｜ 软件技术专业