"use client";

import { useEffect, useRef } from "react";

interface FloatingBlock {
  x: number;
  y: number;
  size: number;
  rotation: number;
  speed: number;
  rotSpeed: number;
  opacity: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let blocks: FloatingBlock[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      initBlocks();
    }

    function initBlocks() {
      const count = Math.floor((canvas!.width * canvas!.height) / 80000);
      blocks = Array.from({ length: Math.min(count, 25) }, () => ({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        size: 30 + Math.random() * 80,
        rotation: Math.random() * Math.PI * 2,
        speed: 0.15 + Math.random() * 0.3,
        rotSpeed: (Math.random() - 0.5) * 0.003,
        opacity: 0.08 + Math.random() * 0.12,
      }));
    }

    function drawGrid() {
      if (!ctx || !canvas) return;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 0.5;
      const step = 60;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    }

    function drawBlocks() {
      if (!ctx || !canvas) return;
      for (const b of blocks) {
        b.y -= b.speed;
        b.rotation += b.rotSpeed;
        if (b.y + b.size < 0) {
          b.y = canvas.height + b.size;
          b.x = Math.random() * canvas.width;
        }
        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.rotate(b.rotation);
        ctx.strokeStyle = `rgba(255, 255, 255, ${b.opacity})`;
        ctx.lineWidth = 1;
        const half = b.size / 2;
        ctx.strokeRect(-half, -half, b.size, b.size);
        ctx.restore();
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      drawBlocks();
      animId = requestAnimationFrame(animate);
    }

    resize();
    animId = requestAnimationFrame(animate);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0f0e0c]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Orange glow — top left, illuminates headline */}
      <div
        className="absolute -top-[5%] left-[5%] w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 60, 0, 0.15) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      {/* Purple glow — top right, behind mockups */}
      <div
        className="absolute top-[5%] right-[-10%] w-[900px] h-[900px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(169, 96, 238, 0.22) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      {/* Warm orange glow — center, ties both sides */}
      <div
        className="absolute top-[40%] left-[35%] w-[800px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(255, 106, 0, 0.10) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />

      {/* Purple glow — bottom left */}
      <div
        className="absolute bottom-[-5%] left-[10%] w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(169, 96, 238, 0.10) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />

      {/* Orange glow — bottom right */}
      <div
        className="absolute bottom-[-5%] right-[5%] w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 60, 0, 0.12) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />

      {/* Vignette — subtle edge darkening */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, #0f0e0c 100%)",
          opacity: 0.4,
        }}
      />
    </div>
  );
}
