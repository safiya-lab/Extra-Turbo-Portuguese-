self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('turbo-pt-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.webmanifest',
        './icon-192.png',
        './icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
