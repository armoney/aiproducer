"use client";
import { useEffect } from "react";

function Calendly() {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div>
      <div id="schedule_form">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/seevpro/30min"
          style={{ minWidth: "320px", height: "1000px" }}
        />
      </div>
    </div>
  );
}

export default Calendly;
