const CACHE_NAME = 'gita-divine-cache-v10';

const STATIC_ASSETS = [
  '/',
  '/entry.html',
  '/index.html',
  '/page1.html',
  '/telugu.html',
  '/chapter1.html',
  '/telugu1.html',
  '/index.css',
  '/gita-ai-assistant.js',
  '/gita-navigator.js',
  '/vishwaroopam_4k_final.png',
  '/krishna_divine_entry.jpg',
  '/Krishna Govardhan.jpeg',
  '/0b34eae6-ee2b-4ced-8bd1-4da3d0fd8f08.jpeg',
  '/3f0a2367-774b-41bf-ba30-f7f77c23203d.jpeg',
  '/43c519c2-d1e5-4528-a5c0-1f6f54e90cc2.jpeg',
  '/46f41a2e-3208-457c-9d70-d178af2c4022.jpeg',
  '/60e4f0b0-b3a6-44fe-aa0c-148f002ecc42.jpeg',
  '/9ec5edf2-4f87-491e-b100-f89e6f002016.jpeg',
  '/b90867ff-26e2-4503-b282-5d8f2510701d.jpeg',
  '/cabeb903-61d2-4f52-9987-4f6c3394a19b.jpeg',
  '/efca9b6f-ade2-43c0-81f3-789ccfb9e1a6.jpeg',
  '/f82f42e3-1600-46e8-b5ef-4038edd9d477.jpeg',
  '/f8fd5a53-7621-44e8-afea-7ca096327aec.jpeg',
  '/20250714_123407.jpg',
  '/20250714_123452.jpg',
  '/20250714_123519.jpg',
  '/20250714_123530.jpg',
  '/20250714_123540.jpg',
  '/20250714_123543.jpg',
  '/20250714_123548.jpg',
  '/20250714_123625.jpg',
  '/20250714_123651.jpg',
  '/2232de381d57b7c95aa60cc216683119.jpg'
];

// Install Event: Pre-cache core shell & images for instant offline access
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(
        STATIC_ASSETS.map((url) => cache.add(url).catch((err) => console.warn('Pre-cache skip:', url, err)))
      );
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Clean up all legacy caches immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('Purging legacy service worker cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Network-First for JS, CSS, and HTML (never serve stale code!); Cache-First for media
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Skip non-GET requests and API calls
  if (request.method !== 'GET' || url.pathname.startsWith('/api/')) {
    return;
  }

  // Range requests (e.g. video streaming) pass through directly
  if (request.headers.get('range')) {
    return;
  }

  // 1. Code Assets (JS & CSS): Network-First to guarantee latest updates
  const isCode = /\.(js|css)$/i.test(url.pathname);
  if (isCode) {
    event.respondWith(
      fetch(request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return networkResponse;
      }).catch(() => caches.match(request))
    );
    return;
  }

  // 2. Heavy Media Assets (Images, Audio, Fonts): Cache-First for speed
  const isMedia = /\.(png|jpg|jpeg|gif|svg|ico|woff2?|ttf|mp3|wav)$/i.test(url.pathname);
  if (isMedia) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // 3. HTML Pages: Network-First with Cache Fallback (guarantees fresh content, falls back to offline cache)
  event.respondWith(
    fetch(request).then((networkResponse) => {
      if (networkResponse && networkResponse.status === 200) {
        const clone = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
      }
      return networkResponse;
    }).catch(() => {
      return caches.match(request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        // Fallback to entry.html if offline
        return caches.match('/entry.html');
      });
    })
  );
});
