'use client';

import { useEffect, useRef } from 'react';
import Head from 'next/head';

export default function GamePage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Optional: logic for interacting with iframe if needed
  }, []);

  return (
    <>
      <Head>
        <title>Space Shooter Game | David Vasquez</title>
      </Head>

      <div className="min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4 text-center">Space Shooter Game</h1>
          <p className="text-center mb-6 text-gray-300">
            🚀 Use your keyboard (left/right arrows) to <strong>move</strong>, <strong>shoot (spacebar) </strong>, and <strong>survive</strong> waves of enemies!
          </p>

          <div className="aspect-video w-full max-w-4xl mx-auto border-4 border-blue-500 rounded-lg shadow-lg">
            <iframe
              ref={iframeRef}
              src="/game1.html"
              title="Space Shooter"
              className="w-full h-full rounded-lg"
              tabIndex={0}
            />
          </div>
        </div>
      </div>
    </>
  );
}
