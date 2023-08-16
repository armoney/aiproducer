"use client";
import { useEffect } from "react";
import Calendly from "../components/calendly";
import Link from "next/link";
import { gradient } from "../utils/Gradient";
import "./page.css";

export default function Page() {
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  });

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <canvas id="gradient-canvas" data-transition-in />
      <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/828795162?h=0fc5665123"
        width="640"
        height="360"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <Calendly />

      <Link href="/producer" prefetch={false}>
        Create video
      </Link>
    </>
  );
}
