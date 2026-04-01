"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Button } from "../ui/button";

export default function GYGActivitiesWidget({ data }) {
  const initWidget = () => {
    // Check if the GYG object exists
    if (window.GYG) {
      // 1. Try the standard render method (common in newer versions)
      if (
        window.GYG.widgets &&
        typeof window.GYG.widgets.render === "function"
      ) {
        window.GYG.widgets.render();
      }
      // 2. Fallback to the init method if it exists
      else if (typeof window.GYG.init === "function") {
        window.GYG.init();
      }
    }
  };

  useEffect(() => {
    // Re-initialize if the script is already loaded (e.g., on client-side navigation)
    initWidget();
  }, []);

  const [initialCount, setInitialCount] = useState(data?.numberOfItems || 15);

  if (!data) {
    return;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl  font-bold text-gray-900 border-l-4 border-black pl-6">
        Sponsered Activities
      </h1>
      <br />
      {/* Load the GYG SDK */}
      <Script
        src="https://widget.getyourguide.com/dist/pa.umd.production.min.js"
        strategy="afterInteractive"
        onLoad={initWidget}
        data-gyg-partner-id="XDZ8IZE"
      />

      <div
        data-gyg-href="https://widget.getyourguide.com/default/activities.frame"
        data-gyg-location-id={data?.locationId}
        data-gyg-locale-code="en-US"
        data-gyg-widget="activities"
        data-gyg-number-of-items={initialCount}
        data-gyg-partner-id={data?.partnerId}
        data-gyg-q={data?.query}
      >
        <span>
          Powered by{" "}
          <a target="_blank" rel="sponsored" href={data?.locationUrl}>
            GetYourGuide
          </a>
        </span>
      </div>

      <div>
        {/* <Button
          variant="outline"
          onClick={() => {
            setInitialCount((prev) => prev + 10);
          }}
        >
          Load More
        </Button> */}
      </div>
    </div>
  );
}
