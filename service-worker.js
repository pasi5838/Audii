self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("teka-teki-hewan").then(function(cache) {
      return cache.addAll([
        "index.html",
        "soal.js",
        "manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
