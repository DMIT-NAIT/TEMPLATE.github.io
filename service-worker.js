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
    "revision": "861e926cf19c4bfe1536d64a7ccbdd3d"
  },
  {
    "url": "about/index.html",
    "revision": "0fb3763da24cc0d492a3c6e2875ca3f4"
  },
  {
    "url": "about/todo.html",
    "revision": "d9700811ff2a5673163e7061d04fdd4b"
  },
  {
    "url": "assets/css/0.styles.0120a00b.css",
    "revision": "751e19dc2b5cb5b29f538f8db7cc1f01"
  },
  {
    "url": "assets/img/CreateFromTemplate.328dd274.png",
    "revision": "328dd27418475a8e0b8765fea720d4a6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.a79d9c6e.js",
    "revision": "54042f4e6f5671d45efc57ec0ba997f9"
  },
  {
    "url": "assets/js/3.a9fd5256.js",
    "revision": "73d12ec1a554488749ee89afbcd9c464"
  },
  {
    "url": "assets/js/4.565e58d0.js",
    "revision": "746abd06f0076fd7bf6722ea4410904b"
  },
  {
    "url": "assets/js/5.bc2f4547.js",
    "revision": "aade79fa951a52ed066f4ff31f590405"
  },
  {
    "url": "assets/js/6.576e3d1d.js",
    "revision": "d0f68ec52a7f9855fd423f23749ae95e"
  },
  {
    "url": "assets/js/7.c5667359.js",
    "revision": "bd25cbe8b66996c9b2f008a7c3256c63"
  },
  {
    "url": "assets/js/8.d7f21f43.js",
    "revision": "fadbf6ee76ab5cacad8d111944330c2b"
  },
  {
    "url": "assets/js/9.5551022d.js",
    "revision": "e8b86536eff7f27c4565d40df0a559c7"
  },
  {
    "url": "assets/js/app.aa7753e4.js",
    "revision": "c250ae5a105dcc4d15225cb15dc7432a"
  },
  {
    "url": "favicon-512x512.png",
    "revision": "6e137a703ae87f7c6b21446308b3281d"
  },
  {
    "url": "index.html",
    "revision": "3f302d26787530eef8dcc422d5e35173"
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
