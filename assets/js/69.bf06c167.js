(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{490:function(e,s,p){"use strict";p.r(s);var v=p(3),_=Object(v.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h3",{attrs:{id:"下载-axios-时出现很多-npm-err-错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载-axios-时出现很多-npm-err-错误"}},[e._v("#")]),e._v(" "),s("strong",[e._v("下载 axios 时出现很多 npm ERR 错误")])]),e._v(" "),s("p",[e._v("原来的下载命令：")]),e._v(" "),s("p",[e._v("npm i --save axios")]),e._v(" "),s("p",[e._v("解决办法：在原来的下载命令上加上：--legacy-peer-deps")]),e._v(" "),s("p",[e._v("npm i --save axios --legacy-peer-deps")]),e._v(" "),s("p",[e._v('就能解决了，可以查看 package.json 文件里有没有"axios 版本号”，有的话就下载成功了。')]),e._v(" "),s("p",[e._v("使用 axios：要先导入")]),e._v(" "),s("p",[e._v("import axios from 'axios'//要先导入")]),e._v(" "),s("p",[e._v("axios.get('url').then(res=>{console.log(res)})//再使用")]),e._v(" "),s("p",[e._v("注意：在 src 文件夹下的组件中使用任何外来的模块都是要导入的，axios 下载后也是要导入的，不要忘记啦！！！！")]),e._v(" "),s("p",[s("strong",[e._v("举一反三")]),e._v("：**")]),e._v(" "),s("p",[e._v("为什么会出现上述错误：")]),e._v(" "),s("p",[e._v("是因为 npm 版本过高的原因，高于 7 之后要求会更严格；")]),e._v(" "),s("p",[e._v("npm -V 可以查看 npm 的版本")]),e._v(" "),s("p",[e._v("--legacy-peer-deps 标志 是在 v7 中引入的,目的是绕过 peerDependency 自动安装;它告诉 NPM 忽略项目中引入的各个 modules 之间的相同 modules 但不同版本的问题并继续安装。")]),e._v(" "),s("p",[e._v("所以以后如果下载别的东西出现上述错误，就在命令后面加上： --legacy-peer-deps；")])])}),[],!1,null,null,null);s.default=_.exports}}]);