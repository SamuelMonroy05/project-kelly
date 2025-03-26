const CACHE_NAME = "app-cache-v1";
const urlsToCache = [
  "/FORMULARIO/",
  "/FORMULARIO/index.html",
  "/FORMULARIO/404.html",
  "/FORMULARIO/manifest.json",
  "/FORMULARIO/firebase.json",
  "/FORMULARIO/firebase-config.js",

  // CSS
  "/FORMULARIO/estilos.css",
  "/FORMULARIO/estilosport.css",
  "/FORMULARIO/estilowen.css",
  "/FORMULARIO/styles.css",

  // JS
  "/FORMULARIO/dist/accesibility.js",
  "/FORMULARIO/dist/app.js",
  "/FORMULARIO/dist/information.js",
  "/FORMULARIO/dist/paint.js",
  "/FORMULARIO/dist/servicios.js",
  "/FORMULARIO/dist/validate.js",

  // Assets
  "/FORMULARIO/assets/audio/",
  "/FORMULARIO/assets/images/admin.jpg",
  "/FORMULARIO/assets/images/exterior.jpg",
  "/FORMULARIO/assets/images/facebook.jpg",
  "/FORMULARIO/assets/images/instagram.png",
  "/FORMULARIO/assets/images/log.png",
  "/FORMULARIO/assets/images/mark.jpg",
  "/FORMULARIO/assets/images/posgrado.jpg",
  "/FORMULARIO/assets/images/tecnologias.jpg",

  // Pages
  "/FORMULARIO/pages/inicio.html",
  "/FORMULARIO/pages/servicios.html",
  "/FORMULARIO/pages/portafolio.html",
];


// ✅ **Instalar y cachear archivos**
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});


// ✅ **Interceptar las solicitudes y responder desde la caché si no hay conexión**
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        return caches.match("/404.html"); // Mostrar página de error si no hay conexión
      });
    })
  );
});



// ✅ **Actualizar caché cuando se haga un nuevo deploy**
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});
