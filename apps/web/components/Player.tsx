"use client";

import { useEffect, useRef } from "react";

interface PlayerProps {
  src: string;
  title?: string;
}

export default function Player({ src, title }: PlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [src]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {title && <h2 className="text-xl mb-2 text-neon-green">{title}</h2>}
      <video
        ref={videoRef}
        controls
        className="w-full rounded border border-neon-green"
        playsInline
      >
        <source src={src} type="application/x-mpegURL" />
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
