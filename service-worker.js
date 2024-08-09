/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d21f17f53a53c813e05d50aaec5a801a"
  },
  {
    "url": "about/about.html",
    "revision": "3453b17ab990782cbf0085cf8f6dfb16"
  },
  {
    "url": "assets/css/0.styles.7cee5409.css",
    "revision": "513ff49024abbebc7f969f0fc5c26893"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/cat1.jpg",
    "revision": "aafa26cb32298ce6cc1af406e9d93b8e"
  },
  {
    "url": "assets/img/cat2.gif",
    "revision": "9af0224200d9a65bce1724f111d76c90"
  },
  {
    "url": "assets/img/icon.png",
    "revision": "cff86c69530a9c9a8297739b99b88728"
  },
  {
    "url": "assets/img/vue2.png",
    "revision": "56e5d7007fec185de1a9997c80560e46"
  },
  {
    "url": "assets/img/vue3.png",
    "revision": "65445fde8ca242dfd4a1804a786d88fc"
  },
  {
    "url": "assets/js/1.5940e742.js",
    "revision": "aa28683a81a1cf18ab2e2e63fdc0e464"
  },
  {
    "url": "assets/js/10.ecf54f9f.js",
    "revision": "5217e73f8ca1911b0cd152553853b72f"
  },
  {
    "url": "assets/js/11.170b145d.js",
    "revision": "0b8284570d956001352715725155fcdd"
  },
  {
    "url": "assets/js/14.c80e2ba5.js",
    "revision": "765bb16a8c16c5bd39167f40faedac24"
  },
  {
    "url": "assets/js/15.b8a29577.js",
    "revision": "a959772e89112039a8bd5646f4fca946"
  },
  {
    "url": "assets/js/16.a70476de.js",
    "revision": "56e1281cf5a8ae48c71fb59eec7c4ec2"
  },
  {
    "url": "assets/js/17.8cbe101f.js",
    "revision": "384d46ef82b9912b3a667a1d41f72bd6"
  },
  {
    "url": "assets/js/18.065d683e.js",
    "revision": "29a68ac04607a6016fe5d1332e981287"
  },
  {
    "url": "assets/js/19.0c605365.js",
    "revision": "06a983e174fbaf178804685b7417ec4d"
  },
  {
    "url": "assets/js/2.ac7416c4.js",
    "revision": "dba5b31010c6858d4ebf06560d2f174d"
  },
  {
    "url": "assets/js/20.d02f811a.js",
    "revision": "40223a21f6e707cfd67112866017670b"
  },
  {
    "url": "assets/js/21.6e7ebf1b.js",
    "revision": "d8b39746773626d90023062effe74ae6"
  },
  {
    "url": "assets/js/22.1fbfb30f.js",
    "revision": "c3ca34f19928f46bd6b6060beca20988"
  },
  {
    "url": "assets/js/23.13544f2c.js",
    "revision": "98bbd191a4e84d93d81c5212083fbfe7"
  },
  {
    "url": "assets/js/24.ee4cf8d7.js",
    "revision": "87885943154dfaf1fe7f61c4d606c522"
  },
  {
    "url": "assets/js/25.dcce9c8f.js",
    "revision": "810f18677462e9ccaf0b605a47d7b4f2"
  },
  {
    "url": "assets/js/26.e233fb4f.js",
    "revision": "c86f6ea7e67d3ec76e94600c7758502c"
  },
  {
    "url": "assets/js/27.efb46ddb.js",
    "revision": "4cbdc84d1efbb5581fbb7e1f532d5c0f"
  },
  {
    "url": "assets/js/28.94ac4ebf.js",
    "revision": "b04c1f535a63b69be30af1f5fe8a93d5"
  },
  {
    "url": "assets/js/29.537c68b3.js",
    "revision": "3979ae64482b16cb5d75b77d812ae8e2"
  },
  {
    "url": "assets/js/3.876bb6e8.js",
    "revision": "efa50a7ab5afc35fc863dd78a355a50c"
  },
  {
    "url": "assets/js/30.f10bbf40.js",
    "revision": "82436e70a6f437ab74d10fc7760574f0"
  },
  {
    "url": "assets/js/31.b49138d3.js",
    "revision": "2bece0884725e17b4fea8ee3adf24c93"
  },
  {
    "url": "assets/js/32.4774fc31.js",
    "revision": "08ecc656b886746783a3251c9c952054"
  },
  {
    "url": "assets/js/33.29c1abbc.js",
    "revision": "99d5388179184a5af4db588886e967b8"
  },
  {
    "url": "assets/js/34.5fa1fcd6.js",
    "revision": "e3e5ee0a78339bc0dac4a88d3f0e2639"
  },
  {
    "url": "assets/js/35.6a833c7e.js",
    "revision": "c304ddc5147216caa8e53f0c2e98b1ac"
  },
  {
    "url": "assets/js/36.da0b2da8.js",
    "revision": "ac918db3c4c424c4f937bc17959ba743"
  },
  {
    "url": "assets/js/37.aa295e2b.js",
    "revision": "e3df7cb564d6d3ff637fed4ccb1418c1"
  },
  {
    "url": "assets/js/38.d5a70dba.js",
    "revision": "4032e1eb2cf658520ba63a539b4e4bf8"
  },
  {
    "url": "assets/js/39.c2267d34.js",
    "revision": "89d64ace3ed66a71926b3909d1989343"
  },
  {
    "url": "assets/js/4.9ad04f64.js",
    "revision": "d3e590328d87de56cef900aabdc8627c"
  },
  {
    "url": "assets/js/40.1f8c0599.js",
    "revision": "e5af35739155af71ab670350f8d7b37f"
  },
  {
    "url": "assets/js/41.24be17d3.js",
    "revision": "a8f334d2d5ac3ad3d88c127d9d4a8d87"
  },
  {
    "url": "assets/js/42.47c0c77d.js",
    "revision": "beca80e71937c99deca46ca5470a85a8"
  },
  {
    "url": "assets/js/43.bc2331e3.js",
    "revision": "8777acd5eac7a94c10caae19009a0a61"
  },
  {
    "url": "assets/js/44.cb98ee82.js",
    "revision": "fbbfa70267a21d9c0eaa98b905a932e2"
  },
  {
    "url": "assets/js/45.8687c342.js",
    "revision": "1bfad4cad37cab0a2b5162872ef86d07"
  },
  {
    "url": "assets/js/46.ad2a649e.js",
    "revision": "003a96064a07e040d897a3888ad2545f"
  },
  {
    "url": "assets/js/47.be599a6d.js",
    "revision": "57ab4b9ac20560d51d989f6ef42a6282"
  },
  {
    "url": "assets/js/48.350e4725.js",
    "revision": "6688d1cc45554cd6c9a7ab8236a8168f"
  },
  {
    "url": "assets/js/49.91d5cc49.js",
    "revision": "5b3ef84347555413f8269fbd1492964c"
  },
  {
    "url": "assets/js/5.aa4f18f2.js",
    "revision": "769a852a3e17f432a8b5efdcc68ade76"
  },
  {
    "url": "assets/js/50.8b0a9c50.js",
    "revision": "1b48665463052a02dff5e4802842dc4e"
  },
  {
    "url": "assets/js/51.90910875.js",
    "revision": "2a875d4675f3b298cc3e5a0e020fd71a"
  },
  {
    "url": "assets/js/52.8bc44e28.js",
    "revision": "de8f8bea8aaa5ad3d6769dfcab0f2021"
  },
  {
    "url": "assets/js/53.a6e19b68.js",
    "revision": "7aa3168dbabab802d724f5eb7dfa0cbf"
  },
  {
    "url": "assets/js/54.1a337da6.js",
    "revision": "c8fdbb39f74e5e17fd420ad73e40065a"
  },
  {
    "url": "assets/js/55.97010bfe.js",
    "revision": "a7b9542b40abe1a36cbe043bd92a3cd8"
  },
  {
    "url": "assets/js/56.a5998e08.js",
    "revision": "19c3b430f113cc56d17bb143ffd25d3e"
  },
  {
    "url": "assets/js/57.fa864624.js",
    "revision": "79a8a7c6dbd48ead51bb7ce56c9873b2"
  },
  {
    "url": "assets/js/58.cd9f02f8.js",
    "revision": "185eb134aa3bdcec9b0bc00030f2a902"
  },
  {
    "url": "assets/js/59.4194483b.js",
    "revision": "d0fdcb744f29bf2967bd422a3617cbc8"
  },
  {
    "url": "assets/js/6.18b5bf89.js",
    "revision": "332402ac5e9b5e2d032b81cf5e7053a1"
  },
  {
    "url": "assets/js/60.7fae623c.js",
    "revision": "26634711ba5dc2729b7504d1b5ff1e13"
  },
  {
    "url": "assets/js/61.e8819b2b.js",
    "revision": "4c6edfb9adfe34b8e5f62521dd59246c"
  },
  {
    "url": "assets/js/62.12379a89.js",
    "revision": "c7f6ab8781f912c2e92ccf7149eea482"
  },
  {
    "url": "assets/js/63.6c404921.js",
    "revision": "181766b95a74097533c94d48289a9932"
  },
  {
    "url": "assets/js/64.973cdf4d.js",
    "revision": "a77b892b145c17e3234cfae1668142a2"
  },
  {
    "url": "assets/js/65.49305366.js",
    "revision": "4e6b473f3659025e67fb223d1b8e0466"
  },
  {
    "url": "assets/js/66.6f166911.js",
    "revision": "b627d77763f13f7d29552b311a1838f0"
  },
  {
    "url": "assets/js/67.15b33612.js",
    "revision": "6c142366b712b94375dd66a539bbbb39"
  },
  {
    "url": "assets/js/68.7e81bb14.js",
    "revision": "bf8a3d71557abc50577cd07f8de7ea33"
  },
  {
    "url": "assets/js/69.bf06c167.js",
    "revision": "b75b70ec3df28f4fa9cc2ebca16ee6e5"
  },
  {
    "url": "assets/js/7.3b888766.js",
    "revision": "188035891ca6d2118b8b50a81c2df79a"
  },
  {
    "url": "assets/js/70.4b6492a8.js",
    "revision": "e664c3544a137e3629d3afc8e21476b4"
  },
  {
    "url": "assets/js/71.c6b0ca5a.js",
    "revision": "b274f14464e77f667def5a03c7aed717"
  },
  {
    "url": "assets/js/72.5b180ba2.js",
    "revision": "a08f08e2b68274d1932dc9bce1b5a24f"
  },
  {
    "url": "assets/js/73.ce5b8050.js",
    "revision": "5c8e7a8c066b96623732844f72d9ce8f"
  },
  {
    "url": "assets/js/8.a292267d.js",
    "revision": "415997d5e54073d7cfcf80fe731c52a4"
  },
  {
    "url": "assets/js/9.90dbfd19.js",
    "revision": "3ea6cb051ee9e0114681b206739dab0f"
  },
  {
    "url": "assets/js/app.869185d5.js",
    "revision": "a868d1b247d4324a2c17db62d21b559c"
  },
  {
    "url": "assets/js/vendors~docsearch.d1186166.js",
    "revision": "731b8d5ddac5e9be56cf4a09d341c82e"
  },
  {
    "url": "categories/index.html",
    "revision": "003afe2a96661830646a889316ccff26"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "40f6aefeb0a8d19da202684b97b2e06b"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "8f2f4606072a8e842288418b8726b9b6"
  },
  {
    "url": "categories/问题/index.html",
    "revision": "40eadcdcb34bab351d52f96d823d9e5b"
  },
  {
    "url": "categories/鸿蒙NEXT/index.html",
    "revision": "b3ddad4f6770243463c7a87b95cdb4ef"
  },
  {
    "url": "guide/demo/background.html",
    "revision": "6d08f9f3863e623f450e7e7d17e15b9b"
  },
  {
    "url": "guide/demo/flower.html",
    "revision": "cd77557bc460eea88e21d3f0b5e8e884"
  },
  {
    "url": "guide/demo/hot.html",
    "revision": "7819536a181a14fcd1106629b4373d30"
  },
  {
    "url": "guide/demo/life_app.html",
    "revision": "d2c59639b714e5006c7279e6f945847e"
  },
  {
    "url": "guide/demo/shopping.html",
    "revision": "5a1e4c79410cd104b088b6ded8ebfa86"
  },
  {
    "url": "guide/demo/waimai.html",
    "revision": "13fb211f210ae8140df398aadfbc3a3e"
  },
  {
    "url": "guide/HarmonyOS/ArkTS/index.html",
    "revision": "77b6c9b37b52296ac385a4f56711ea82"
  },
  {
    "url": "guide/HarmonyOS/ArkTS/什么是ArkTS.html",
    "revision": "24b849d553e757769af163ab1e98d485"
  },
  {
    "url": "guide/HarmonyOS/ArkUI/index.html",
    "revision": "d89c7f48269a32078797bb40a8831ecc"
  },
  {
    "url": "guide/web/css/css 选择器优先级.html",
    "revision": "dc9d844e2fb657b06ced57a73a3e3af4"
  },
  {
    "url": "guide/web/css/index.html",
    "revision": "c1a210a16ce1a70f521b9fe4f2ee831a"
  },
  {
    "url": "guide/web/css/隐藏元素的方法有哪些？.html",
    "revision": "58481e1e781982698cb1cb03b42da8fb"
  },
  {
    "url": "guide/web/ES6/index.html",
    "revision": "5cbddb909d0c2a619225f4dc38fa713f"
  },
  {
    "url": "guide/web/ES6/新内容.html",
    "revision": "3091edeed69fdfe0b537408730e2e33a"
  },
  {
    "url": "guide/web/html/href与src.html",
    "revision": "4d2705b3767d9139adf4900a0046e413"
  },
  {
    "url": "guide/web/html/HTML语义化.html",
    "revision": "2241a9e3c9ed4e8202669f0d74813d09"
  },
  {
    "url": "guide/web/html/index.html",
    "revision": "a12f3b27622b1028afcd1704a98b8314"
  },
  {
    "url": "guide/web/html/什么是优雅降级渐进增强？.html",
    "revision": "94677d43cf4e5948d1c60b156d76416c"
  },
  {
    "url": "guide/web/JavaScript/index.html",
    "revision": "5a06d542385d0443c26a3b2d56f81854"
  },
  {
    "url": "guide/web/JavaScript/什么是闭包.html",
    "revision": "7192820107b1d660f7ae4160346057f4"
  },
  {
    "url": "guide/web/TS/index.html",
    "revision": "a282c07d19241ec0a62cd29ff4591b87"
  },
  {
    "url": "guide/web/TS/ts与js的区别.html",
    "revision": "9fd56b27a44ae4929f94c4fc32d11b56"
  },
  {
    "url": "guide/web/Vue/diff算法.html",
    "revision": "fb8f642a143d24a76af37748e96b2413"
  },
  {
    "url": "guide/web/Vue/index.html",
    "revision": "6a56df04b721e1429039c673931a0207"
  },
  {
    "url": "index.html",
    "revision": "95b954772e25354e323e6ca7b289cd42"
  },
  {
    "url": "interview/index.html",
    "revision": "e94b721470e1705487ab6d31079a1d74"
  },
  {
    "url": "interview/上海创泓度⽹络科技有限公司.html",
    "revision": "c5f6969755a27fe33dfc3bfe4b9eb045"
  },
  {
    "url": "interview/河南瑞朴科技有限公司.html",
    "revision": "ba95c550c8b32f3cc2adae27284afb18"
  },
  {
    "url": "question/app/index.html",
    "revision": "6ea743ab9a2550ebb3698ef61999fbc5"
  },
  {
    "url": "question/app/下载axios时出现很多npm ERR错误.html",
    "revision": "6855cacc92e0c4dcad55edc8904be695"
  },
  {
    "url": "question/code/el-table组件复用问题.html",
    "revision": "ceba36479daace9445f4e0fa47e97fc4"
  },
  {
    "url": "question/code/index.html",
    "revision": "31672ad1f780df9b349851ab0e946a29"
  },
  {
    "url": "question/code/Object.defineproperty监听不了数组.html",
    "revision": "074e839f3ed4001b16705d79a947c256"
  },
  {
    "url": "tag/app/index.html",
    "revision": "dc396bc38780f6456937df53b6ae4e85"
  },
  {
    "url": "tag/code/index.html",
    "revision": "20ff2de1925464e696d88a5597b5f752"
  },
  {
    "url": "tag/css/index.html",
    "revision": "5d56d7c35fdad9624a3b4909b5d81c9c"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "89f7f57253c1bd561fe7a106f613df17"
  },
  {
    "url": "tag/HarmonyOS NEXT/index.html",
    "revision": "de42124335c88b84062f78c79be1e9ca"
  },
  {
    "url": "tag/html/index.html",
    "revision": "f77295cfc28d245676d73336c75f9864"
  },
  {
    "url": "tag/index.html",
    "revision": "6282ce67e8bfa044099e651627278fc2"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "616bcbca09ce1dfa79f7217686c7e600"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "33e0a6663038412f6523bc2fd5c325e8"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c58810dfd7d21ecc82db4d7598980966"
  },
  {
    "url": "tag/描述/index.html",
    "revision": "8346bc86d3703e4d26e77786569c45b7"
  },
  {
    "url": "tag/描述/page/2/index.html",
    "revision": "78982fb917f47bc152a15a1fdd66ee7e"
  },
  {
    "url": "tag/解析/index.html",
    "revision": "f93050e2addfba4b31fc275f2b820693"
  },
  {
    "url": "timeline/index.html",
    "revision": "e49c3e81be6d9ec59765d09c58101e8c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
