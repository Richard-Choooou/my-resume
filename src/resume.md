

# 个人信息

* 周鹏 / 男 / 1995
* 专科 / 湖南信息职业技术学院（软件技术专业）
* 工作年限：5年
* 在线简历(gitpage): [http://www.zhouziwu.com](http://www.zhouziwu.com)
* 技术博客(gitpage)：[http://www.zpblogs.com/myBlogs/](http://www.zpblogs.com/myBlogs/)
* Github: [https://github.com/Richard-Choooou](https://github.com/Richard-Choooou)

---

# 联系方式
* 电话：13120665335
* Email: 2264746084@qq.com
* 微信：13120665335（周子物）

---
# 个人简介
* 5年前端开发经验，熟悉 React、Vue2 技术栈。
* 了解 android 开发，并有实际项目经验。
* 目前从事 python 后端开发。

---
# 工作经历
## 武汉小果科技有限公司 2018年8月 - 至今【3.5年】
* 零售组前端组长 2018年8月 - 2021年8月 

    负责组员编码指导，项目核心功能编写，以及难点攻坚等，推动了公司从**后端模版渲染**到**前后端分离**开发模式的转换，落地了 **vue**、**react**、**typescript**、**flutter** 等技术的应用。
* 批发组后端开发 2021年9月 - 至今

## 上海六感科技有限公司 2016年9月-2018年8月【2年】

---

# 项目经历
## 武汉小果科技有限公司
### 森果零售收银台
称重收银系统，实现商品选取、称重收银、打印、订单管理等功能。早期使用 flutter 进行开发，后期因需兼容更多平台，重构为 web 开发，并使用 hybrid 技术实现跨平台。
#### 技术选型
* react
* typescript
* jss （css in js）
* mobx
* electron
* android(java 语言)

#### 技术细节
* 使用 hybird 技术，使之跨 android、windows 以及 linux 平台运行
* 编写 js-bridge 实现 web 与原生平台通信，详见[森果收银台jsbridge设计](https://www.zpblogs.com/myBlogs/2021/02/07/%E6%A3%AE%E6%9E%9C%E6%94%B6%E9%93%B6%E5%8F%B0jsbridge%E8%AE%BE%E8%AE%A1)
* 使用串口通信实现通讯称重量读取，详见[森果收银台-通讯称对接文档](https://www.zpblogs.com/myBlogs/2021/01/20/%E9%80%9A%E8%AE%AF%E7%A7%B0%E5%AF%B9%E6%8E%A5%E6%96%87%E6%A1%A3/)
* 使用 usb 通信实现打印功能，详见[森果收银台-打印机对接文档](https://www.zpblogs.com/myBlogs/2021/01/22/%E6%A3%AE%E6%9E%9C%E6%94%B6%E9%93%B6%E5%8F%B0-%E6%89%93%E5%8D%B0%E6%9C%BA%E5%AF%B9%E6%8E%A5%E6%96%87%E6%A1%A3/)
* 编写 nodejs 原生扩展，详见[使用c++调用 windows打印 api 进行打印](https://www.zpblogs.com/myBlogs/2020/06/27/%E4%BD%BF%E7%94%A8-c-%E8%B0%83%E7%94%A8-windows-%E6%89%93%E5%8D%B0-api-%E8%BF%9B%E8%A1%8C%E6%89%93%E5%8D%B0/)
* 设计主副屏通信，展示更丰富订单信息，详见[森果零售收银台主副屏通信设计](https://www.zpblogs.com/myBlogs/2021/08/20/%E6%A3%AE%E6%9E%9C%E9%9B%B6%E5%94%AE%E6%94%B6%E9%93%B6%E5%8F%B0%E5%89%AF%E5%B1%8F%E9%80%9A%E4%BF%A1%E8%AE%BE%E8%AE%A1/)
* 使用面向对象将收银台整体抽象成类，并使用 mobx 进行状态管理，详见[森果收银台面向对象设计](https://www.zpblogs.com/myBlogs/2021/08/23/%E6%A3%AE%E6%9E%9C%E9%9B%B6%E5%94%AE%E6%94%B6%E9%93%B6%E5%8F%B0%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%AE%BE%E8%AE%A1)
* 使用职责链模式，优化订单结算流程，详见[森果零售收银台结算流程与职责链模式](https://www.zpblogs.com/myBlogs/2021/08/27/%E6%A3%AE%E6%9E%9C%E9%9B%B6%E5%94%AE%E6%94%B6%E9%93%B6%E5%8F%B0%E7%BB%93%E7%AE%97%E6%B5%81%E7%A8%8B%E4%B8%8E%E8%81%8C%E8%B4%A3%E9%93%BE%E6%A8%A1%E5%BC%8F/)

### 森果用户反馈系统
用于管理客户在使用森果各个系统时提交的 bug 反馈以及功能建议等信息。
#### 技术选型
* tornado(python)
* vue2 (pc端)
* react + typescript (移动端)

#### 技术细节
* 编写反馈表单插件，集成到各个子系统。
* 与 tower（项目管理工具）打通，进行联动。 

### 森果 app 管理平台
一个自发项目，用于管理森果各个app，实现版本管理，更新描述，统一下载地址等功能。
#### 技术选型
* midway(nodejs)

#### 技术细节
后端进行模版渲染，但为之编写了一套 webpack 多页面脚手架工具，以提升开发效率。
### 其它
* 森果零售通（react、typescript）
* 森果采购配货系统（vue2）

## 上海六感科技有限公司
主要使用 vue2 以及 jquery 进行开发，细节略过。
* 五菱E100 web商城
* 五菱E100-CRM系统
* 华为人机功效评估系统

---

# 开源项目

## 图片压缩跨平台客户端工具
基于electron react开发

地址[https://github.com/Richard-Choooou/image-compress](https://github.com/Richard-Choooou/image-compress)

## NPM库
### webpack-markdown-pdf-plugin
一个将markdown文件转换为pdf的webpack plugin

地址[https://www.npmjs.com/package/webpack-markdown-pdf-plugin](https://www.npmjs.com/package/webpack-markdown-pdf-plugin)
### best-calendar
一个封装日历算法的工具库，使用此库可以很方便的得到日历数据,随意定制日历

地址[https://www.npmjs.com/package/best-calendar](https://www.npmjs.com/package/best-calendar)

