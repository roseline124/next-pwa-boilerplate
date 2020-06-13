self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/5b9348d1572f0d1530086b4f7c3a1133cdf4ef3f.799df4235c418b6b27a8.js",
    "revision": "dd465e527d314dfe5051"
  },
  {
    "url": "/_next/static/chunks/7eea20ab0d02d64c335a0d499fccc2f59dd2e2e0.494c3d8965617229cd75.js",
    "revision": "925b4ce9cb5aeacf6b78"
  },
  {
    "url": "/_next/static/chunks/commons.d904649786c7cd0fd628.js",
    "revision": "a68eeb4b2f57ec5d42df"
  },
  {
    "url": "/_next/static/chunks/framework.619a4f70c1d4d3a29cbc.js",
    "revision": "a3d0f19c5e3f180141b2"
  },
  {
    "url": "/_next/static/runtime/main-f51396e682c413f31acc.js",
    "revision": "15fa9d10933caae5ce70"
  },
  {
    "url": "/_next/static/runtime/polyfills-56b4684c7b58a6bda0e2.js",
    "revision": "3242bce0348ac5834632"
  },
  {
    "url": "/_next/static/runtime/webpack-c212667a5f965e81e004.js",
    "revision": "b8c901404995672f4107"
  },
  {
    "url": "/_next/static/uZQkKXmJc23anGnUuwxyM/_buildManifest.js",
    "revision": "fb96ae7926f5104f50f0cf1b3a23a9b5"
  },
  {
    "url": "/_next/static/uZQkKXmJc23anGnUuwxyM/_ssgManifest.js",
    "revision": "abee47769bf307639ace4945f9cfd4ff"
  },
  {
    "url": "/_next/static/uZQkKXmJc23anGnUuwxyM/pages/_app.js",
    "revision": "de7065264a698fbbe4f1"
  },
  {
    "url": "/_next/static/uZQkKXmJc23anGnUuwxyM/pages/_error.js",
    "revision": "4dcc92d7834c89c8db85"
  },
  {
    "url": "/_next/static/uZQkKXmJc23anGnUuwxyM/pages/index.js",
    "revision": "5118a9482e24b9d2d5e7"
  }
];

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

importScripts(
  
);

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
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"https-calls","networkTimeoutSeconds":15, plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
