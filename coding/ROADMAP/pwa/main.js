if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/pwa/serviceworker.js",{ scope: '/pwa/' });
    console.log('service worker connected')

  });
}

