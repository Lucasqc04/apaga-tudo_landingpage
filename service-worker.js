const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/imagens/apagador.png', 
  '/imagens/lucas.png',
  '/imagens/ferrari.png',
  '/imagens/juan.png',
  '/imagens/julio.png',
  '/imagens/alessandra.png',
  '/imagens/gama.png',
];


self.addEventListener('install', function(event) {
 
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
