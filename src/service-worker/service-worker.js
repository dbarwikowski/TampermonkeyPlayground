
self.addEventListener('install', (event) => {
    event.waitUntil(
        console.log('%cā Hello from service worker ā', 'color: dodgerblue;font-size: 20px;font-weight: bold;')
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
    );
});