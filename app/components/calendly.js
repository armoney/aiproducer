"use client";
import Head from "next/head";
import { useEffect } from "react";

function Calendly() {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js",
    );
    head.appendChild(script);
  }, []);

  return (
    <div>
      <div id="schedule_form">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/armonsf/30min"
          style={{ minWidth: "320px", height: "660px" }}
        />
      </div>
    </div>
  );
}

export default Calendly;
