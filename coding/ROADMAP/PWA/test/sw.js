// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open("finally").then((cache) => {
//       return cache.addAll(["/", "/index.html", "/public", "main.css"]);
//     })
//   );
// })

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.open("finally").then((cache) => {
//       return cache.match(event.request).then((response) => {
//         if (response) {
//           return response;
//         }
//         fetch(event.request)
//           .then((networkResponse) => {
//             cache.put(event.request, networkResponse.clone());
//             return networkResponse;
//           })
//           .catch(() => {
//             return caches.match("offline.html");
//           });
//       });
//     })
//   );
// });

// .showNotification('hellow',{

// })

self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.open("finally").then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response) {
             return response;
          }
          return fetch(event.request)
            .then((networkResponse) => {
              if (event.request.url == "http://127.0.0.1:5501/") {
                showNotification("faizan", "New content is available.");
                console.log("show noification");
              }
              cache.put(event.request, networkResponse.clone());

              return networkResponse;
            })
            .catch(() => {
              // return caches.match("offline.html");
              showNotification("404", "internet is not  available.");

            });
        });
      })
    );
//   if (!navigator.onLine) {
//     showNotification("notwork", "palse connect the internet connection");
//     alert("io");
//   }
});

function showNotification(title, body) {
  if ("Notification" in self && Notification.permission === "granted") {
    self.registration.showNotification(title, {
      body: body,
      icon: "/public/icon//android-chrome-512x512.png",
    });
  }
}
