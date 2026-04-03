"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  phase: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let stars: Star[] = [];
    const shootingStars: ShootingStar[] = [];
    let time = 0;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      initStars();
    }

    function initStars() {
      const count = Math.floor((canvas!.width * canvas!.height) / 4000);
      stars = Array.from({ length: Math.min(count, 200) }, () => ({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        size: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.6 + 0.1,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function spawnShootingStar() {
      if (shootingStars.length > 2) return;
      const maxLife = 60 + Math.random() * 40;
      shootingStars.push({
        x: Math.random() * canvas!.width * 0.8,
        y: Math.random() * canvas!.height * 0.4,
        length: 60 + Math.random() * 80,
        speed: 4 + Math.random() * 3,
        angle: Math.PI * 0.15 + Math.random() * 0.15,
        opacity: 0.4 + Math.random() * 0.3,
        life: 0,
        maxLife,
      });
    }

    function drawStars() {
      if (!ctx) return;
      for (const s of stars) {
        const flicker = Math.sin(time * s.twinkleSpeed + s.phase) * 0.3 + 0.7;
        const alpha = s.opacity * flicker;
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function drawShootingStars() {
      if (!ctx) return;
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.life++;

        const progress = ss.life / ss.maxLife;
        const fadeIn = Math.min(progress * 4, 1);
        const fadeOut = 1 - Math.max((progress - 0.6) / 0.4, 0);
        const alpha = ss.opacity * fadeIn * fadeOut;

        if (ss.life >= ss.maxLife) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = ss.x - Math.cos(ss.angle) * ss.length;
        const tailY = ss.y - Math.sin(ss.angle) * ss.length;

        const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0, `rgba(255, 60, 0, 0)`);
        grad.addColorStop(0.7, `rgba(255, 106, 0, ${alpha * 0.5})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${alpha})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.stroke();
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      time++;

      if (Math.random() < 0.008) spawnShootingStar();

      drawStars();
      drawShootingStars();
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
    <div className="absolute inset-0 overflow-hidden bg-background">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Warm orange glow — top left, subtle */}
      <div
        className="absolute -top-[10%] left-[0%] w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 60, 0, 0.10) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />

      {/* Soft orange glow — bottom center */}
      <div
        className="absolute bottom-[-10%] left-[30%] w-[800px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(255, 60, 0, 0.06) 0%, transparent 65%)",
          filter: "blur(120px)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, #000000 100%)",
          opacity: 0.5,
        }}
      />
    </div>
  );
}
