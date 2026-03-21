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
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
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
    <div className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Ambient glow - top left orange */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(255, 60, 0, 0.22) 0%, transparent 70%)",
          filter: "blur(80px)",
          animationDuration: "6s",
        }}
      />

      {/* Ambient glow - bottom right cool */}
      <div
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(169, 96, 238, 0.12) 0%, transparent 70%)",
          filter: "blur(100px)",
          animationDuration: "8s",
          animationDelay: "3s",
        }}
      />

      {/* Ambient glow - center orange */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(255, 60, 0, 0.08) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
    </div>
  );
}
