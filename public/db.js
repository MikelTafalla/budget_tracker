if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js").then(reg => {
        console.log("service worker registered", reg);
      }).catch(function(err) {
        console.log("Service Worker Failed to Register", err);
      });
    });
  }