const CACHE_NAME = 'cli-exercises-learn-offline-v16';
// Offline-first: pre-cache document and manifest so app works without network
const STATIC_ASSETS = ['./manifest.json', './icon.svg', './index.html', './'];

// Install: Pre-cache document and static assets so the app runs fully offline
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(err => {
        console.log('Cache install error (some assets may be missing):', err);
      });
    })
  );
  self.skipWaiting(); // Activate immediately
});

// Activate: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim(); // Take control of all pages
});

// Fetch: network-first for HTML (ensures updates reach users), cache-first for assets
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (event.request.url.includes('clear-sw.html')) {
    event.respondWith(fetch(event.request, { cache: 'no-store' }));
    return;
  }

  const isDoc = event.request.mode === 'navigate' || event.request.destination === 'document';
  if (isDoc) {
    const docCacheKey = new Request(new URL('./index.html', self.location.origin + self.location.pathname).href);
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .then((response) => {
          if (response && response.status === 200 && response.type !== 'opaque') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(docCacheKey, clone));
          }
          return response;
        })
        .catch(() => caches.match(docCacheKey).then((r) => r || caches.match('./index.html').then((x) => x || caches.match('./'))))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type === 'opaque') return response;
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      });
    })
  );
});
