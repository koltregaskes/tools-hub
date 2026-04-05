let deferredInstallPrompt = null;

async function registerToolsHubServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  try {
    await navigator.serviceWorker.register("./service-worker.js");
  } catch (error) {
    console.error("Tools Hub service worker registration failed.", error);
  }
}

function wireInstallButton() {
  const installButton = document.getElementById("installAppBtn");
  if (!installButton) {
    return;
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    installButton.hidden = false;
  });

  installButton.addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
      return;
    }

    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    installButton.hidden = true;
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    installButton.hidden = true;
  });
}

registerToolsHubServiceWorker();
wireInstallButton();
