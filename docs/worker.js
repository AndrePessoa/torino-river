/* eslint-disable no-restricted-globals */
var CACHE_NAME = "cache";
// eslint-disable-next-line no-unused-vars
const version = "0.0.1";

// Install a service worker
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(["/"]);
    })
  );
});

// Update a service worker
// Inside the service worker’s activate event, delete all
// previously cached files if necessary
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (CACHE_NAME !== cacheName && cacheName.startsWith("cache")) {
            return caches.delete(cacheName);
          }

          return Promise.resolve();
        })
      );
    })
  );
});

// Cache and return requests
self.addEventListener("fetch", (event) => {
  if (
    event.request.mode === "navigate" ||
    (event.request.method === "GET" &&
      event.request.headers.get("accept").includes("text/html"))
  ) {
    event.respondWith(
      fetch(event.request.url).catch((error) => {
        return caches.match("offline.html");
      })
    );
  } else {
    // if the resources arent in the cache ,
    // they are requested from the server
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );
  }
});

//for notify user when worker file is updated
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
