const CACHE='car-assistant-v10-twins';
self.addEventListener('install', e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./manifest.json','./assets/icon-512.png','./assets/icon-192.png'])));});
self.addEventListener('fetch', e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
