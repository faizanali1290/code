const resourcesToCache = [
  "/",
  "/index.html",
  "/main.css",
  "/icon",
  "/pwa/serviceworker.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open('static-files')
      .then((cache) => {
        return cache.addAll(resourcesToCache);
      })
      .then(() => {
        console.log("Resources cached");
      })
      .catch((error) => {
        console.error("Caching failed:", error);
      })
  );
});

// Cache and return requests
self.addEventListener("fetch", event => {
  console.log('Sw: fetching');
  event.respondWith(caches.match(event.request)
  .then(cachedResponse => {
    return cachedResponse || fetch(event.request)
  }))
})
