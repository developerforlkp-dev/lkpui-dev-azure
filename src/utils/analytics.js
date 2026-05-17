let initializedMeasurementId = null;
let loadingPromise = null;

const GA_SCRIPT_ID = "ga4-gtag-script";

function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function ensureDataLayer() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };
}

function loadGtagScript(measurementId) {
  if (!isBrowser()) {
    return Promise.resolve(false);
  }

  const existingScript = document.getElementById(GA_SCRIPT_ID);
  if (existingScript) {
    return Promise.resolve(true);
  }

  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.id = GA_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.head.appendChild(script);
  });
}

export async function initAnalytics(measurementId) {
  if (!isBrowser() || !measurementId) {
    return false;
  }

  if (initializedMeasurementId === measurementId) {
    return true;
  }

  ensureDataLayer();

  if (!loadingPromise) {
    loadingPromise = loadGtagScript(measurementId);
  }

  const loaded = await loadingPromise;
  if (!loaded) {
    return false;
  }

  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });
  initializedMeasurementId = measurementId;
  return true;
}

export function trackPageView(path) {
  if (!isBrowser() || typeof window.gtag !== "function") {
    return;
  }

  const pagePath = path || `${window.location.pathname}${window.location.search}`;
  window.gtag("event", "page_view", {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  });
}
