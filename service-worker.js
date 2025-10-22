const CACHE_NAME = "dtr-cache-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js",
  "https://www.gstatic.com/firebasejs/11.0.1/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth-compat.js",
  "https://www.gstatic.com/firebasejs/11.0.1/firebase-database-compat.js"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
