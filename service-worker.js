const CACHE_NAME = "ebook-reader-v1";
const assets = [
    "/",
    "/index.html",
    "/styles.css",
    "/manifest.json",
    "/ebooks/livro1.pdf",
    "/ebooks/livro2.pdf",
    "/images/icon-192.png",
    "/images/icon-512.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
