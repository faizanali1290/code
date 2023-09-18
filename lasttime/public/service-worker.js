const CACHE_VERSION = "v1";

const IMAGE_CACHE = "image-cache";
const cacheName = "cache-v1";
const FILES_TO_CACHE = ["/", "/index.html", "/assest", "/manifest.json","/service-worker.js"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => cache.addAll(FILES_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.destination === "image") {
    event.respondWith(fetchAndCacheImage(event.request));
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    );
  }
});

async function fetchAndCacheImage(request) {
  return caches.open(IMAGE_CACHE).then((cache) => {
    return cache.match(request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(request).then((networkResponse) => {
        cache.put(request, networkResponse.clone());
        return networkResponse;
      });
    });
  });
}
