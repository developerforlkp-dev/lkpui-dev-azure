import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, trackPageView } from "../utils/analytics";

function AnalyticsTracker() {
  const location = useLocation();
  const lastTrackedPathRef = useRef("");
  const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (!measurementId) {
      return;
    }

    let isMounted = true;
    const currentPath = `${location.pathname}${location.search}`;

    const startTracking = async () => {
      const initialized = await initAnalytics(measurementId);
      if (!initialized || !isMounted) {
        return;
      }

      if (lastTrackedPathRef.current !== currentPath) {
        trackPageView(currentPath);
        lastTrackedPathRef.current = currentPath;
      }
    };

    startTracking();

    return () => {
      isMounted = false;
    };
  }, [location.pathname, location.search, measurementId]);

  return null;
}

export default AnalyticsTracker;
