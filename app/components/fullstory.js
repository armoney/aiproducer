"use client";
import { useEffect } from "react";
import { init as initFullStory } from "@fullstory/browser";

function FullStory() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      initFullStory({ orgId: process.env.NEXT_PUBLIC_FS_ORG_ID });
    }
  }, []);

  return <></>;
}

export default FullStory;
