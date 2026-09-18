"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

export function LiquidBackground() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const frameId = requestAnimationFrame(() =>
      setFrame(Math.random() * 1_000_000),
    );
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <MeshGradient
        colors={[
          "#63C963",
          "#027E02",
          "#B8EF5F",
          "#4C7D00",
          "#8ed970",
          "#0a4d05",
          "#edf2c0",
          "#2d8c2d",
          "#a8e155",
          "#053b16",
        ]}
        distortion={1}
        swirl={1}
        grainMixer={0}
        grainOverlay={0}
        speed={1.1}
        scale={1.1}
        frame={frame}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
