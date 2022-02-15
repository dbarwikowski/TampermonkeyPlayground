
self.addEventListener('install', (event) => {
    event.waitUntil(
        console.log('%c⚙ Hello from service worker ⚙', 'color: dodgerblue;font-size: 20px;font-weight: bold;')
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
    );
});