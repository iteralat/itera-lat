"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils/cn";

interface Punto {
  x: number;
  y: number;
  z: number;
  tamano: number;
}

interface Estrella {
  x: number;
  y: number;
  tamano: number;
  fase: number;
}

const CANTIDAD_PUNTOS = 1300;
const CANTIDAD_ESTRELLAS = 110;
const VELOCIDAD_ROTACION = 0.00035; // rad por ms — una vuelta cada ~30s

/** Esfera de puntos en fibonacci: distribución pareja sin polos cargados. */
function crearPuntos(): Punto[] {
  const puntos: Punto[] = [];
  const aureo = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < CANTIDAD_PUNTOS; i++) {
    const y = 1 - (i / (CANTIDAD_PUNTOS - 1)) * 2;
    const radioY = Math.sqrt(1 - y * y);
    const angulo = aureo * i;
    puntos.push({
      x: Math.cos(angulo) * radioY,
      y,
      z: Math.sin(angulo) * radioY,
      tamano: 0.7 + ((i * 7919) % 100) / 100, // pseudo-random determinista
    });
  }
  return puntos;
}

function crearEstrellas(): Estrella[] {
  const estrellas: Estrella[] = [];
  for (let i = 0; i < CANTIDAD_ESTRELLAS; i++) {
    // Determinista (sin Math.random): hash simple sobre el índice
    const h1 = ((i * 2654435761) % 10000) / 10000;
    const h2 = ((i * 40503 + 13) % 10000) / 10000;
    const h3 = ((i * 9301 + 49297) % 10000) / 10000;
    estrellas.push({ x: h1, y: h2, tamano: 0.5 + h3, fase: h3 * Math.PI * 2 });
  }
  return estrellas;
}

export interface EsferaDigitalProps {
  className?: string;
}

/**
 * Fondo del hero: globo de puntos rotando lento + estrellas con twinkle,
 * en canvas 2D. Colores desde los tokens (--primary-rgb). Decorativo:
 * aria-hidden; con prefers-reduced-motion queda un frame estático.
 */
export function EsferaDigital({ className }: EsferaDigitalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rgb = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary-rgb")
      .trim() || "255, 94, 20";

    const puntos = crearPuntos();
    const estrellas = crearEstrellas();
    const reducirMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let ancho = 0;
    let alto = 0;
    let frame = 0;

    const redimensionar = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ancho = canvas.clientWidth;
      alto = canvas.clientHeight;
      canvas.width = Math.round(ancho * dpr);
      canvas.height = Math.round(alto * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const dibujar = (t: number) => {
      ctx.clearRect(0, 0, ancho, alto);

      // Estrellas de fondo (twinkle suave)
      for (const e of estrellas) {
        const alfa = 0.16 + 0.14 * Math.sin(t * 0.0012 + e.fase);
        ctx.fillStyle = `rgba(255, 255, 255, ${alfa})`;
        ctx.beginPath();
        ctx.arc(e.x * ancho, e.y * alto, e.tamano, 0, Math.PI * 2);
        ctx.fill();
      }

      // Globo: centrado horizontal, corazón apenas debajo del centro visual
      const cx = ancho / 2;
      const cy = alto * 0.62;
      const radio = Math.min(ancho * 0.46, alto * 0.72);
      const theta = t * VELOCIDAD_ROTACION;
      const cos = Math.cos(theta);
      const sin = Math.sin(theta);

      for (const p of puntos) {
        const x = p.x * cos + p.z * sin;
        const z = -p.x * sin + p.z * cos;
        const profundidad = (z + 1) / 2; // 0 atrás → 1 adelante
        const alfa = 0.05 + profundidad * 0.5;
        const px = cx + x * radio;
        const py = cy + p.y * radio;
        // Adelante: puntos casi blancos con tinte de marca; atrás: naranja apagado
        const color =
          profundidad > 0.72
            ? `rgba(255, 236, 224, ${alfa})`
            : `rgba(${rgb}, ${alfa})`;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(px, py, p.tamano * (0.5 + profundidad * 0.9), 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (t: number) => {
      dibujar(t);
      frame = requestAnimationFrame(loop);
    };

    redimensionar();
    const observador = new ResizeObserver(() => {
      redimensionar();
      if (reducirMotion.matches) dibujar(0);
    });
    observador.observe(canvas);

    if (reducirMotion.matches) {
      dibujar(0);
    } else {
      frame = requestAnimationFrame(loop);
    }

    const alCambiarMotion = () => {
      cancelAnimationFrame(frame);
      if (reducirMotion.matches) {
        dibujar(0);
      } else {
        frame = requestAnimationFrame(loop);
      }
    };
    reducirMotion.addEventListener("change", alCambiarMotion);

    return () => {
      cancelAnimationFrame(frame);
      observador.disconnect();
      reducirMotion.removeEventListener("change", alCambiarMotion);
    };
  }, []);

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 select-none", className)}>
      <canvas ref={canvasRef} className="size-full" />
      {/* Rim glow del globo + fade hacia el contenido, todo con tokens */}
      <div className="halo-globo absolute inset-0" />
    </div>
  );
}
