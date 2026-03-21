"use client";

import { useEffect, useRef } from "react";

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let isMobile = false;

    // Mouse coordinates
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

    // Particles/Nodes
    const nodes: { x: number; y: number; vx: number; vy: number; originX: number; originY: number }[] = [];
    
    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      isMobile = width < 768;

      nodes.length = 0;
      
      // We will create a loose grid of nodes
      const spacing = isMobile ? 80 : 100;
      const cols = Math.floor(width / spacing) + 1;
      const rows = Math.floor(height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          // Add some randomness to their initial grid positions
          const x = i * spacing + (Math.random() - 0.5) * spacing * 0.5;
          const y = j * spacing + (Math.random() - 0.5) * spacing * 0.5;
          
          nodes.push({
            x,
            y,
            originX: x,
            originY: y,
            vx: 0,
            vy: 0
          });
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Draw subtle glowing torch around mouse (only desktop)
      if (!isMobile && mouse.x > 0) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 400);
        gradient.addColorStop(0, "rgba(255, 60, 0, 0.12)");
        gradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Update and draw nodes
      ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        // Float around origin
        const time = Date.now() * 0.001;
        const offsetX = Math.sin(time + node.originY) * 10;
        const offsetY = Math.cos(time + node.originX) * 10;
        
        const targetX = node.originX + offsetX;
        const targetY = node.originY + offsetY;

        // Interaction with mouse
        let forceX = 0;
        let forceY = 0;
        
        if (!isMobile) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 200) {
            const force = (200 - dist) / 200;
            forceX = -dx * force * 0.03;
            forceY = -dy * force * 0.03;
          }
        }

        node.vx += (targetX - node.x) * 0.01 + forceX;
        node.vy += (targetY - node.y) * 0.01 + forceY;
        
        // Damping
        node.vx *= 0.9;
        node.vy *= 0.9;

        node.x += node.vx;
        node.y += node.vy;

        // Draw dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1, 0, Math.PI * 2);
        ctx.fill();

        // Connect to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Only connect if close
          if (dist < 120) {
            ctx.beginPath();
            // Opacity based on distance
            const opacity = 0.12 * (1 - dist / 120);
            
            // If near mouse, tint orange
            let isNearMouse = false;
            if (!isMobile) {
               const distToMouse = Math.sqrt(Math.pow(mouse.x - (node.x + other.x)/2, 2) + Math.pow(mouse.y - (node.y + other.y)/2, 2));
               if (distToMouse < 200) {
                  isNearMouse = true;
                  ctx.strokeStyle = `rgba(255, 60, 0, ${opacity * 2.5})`;
               } else {
                  ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
               }
            } else {
               ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            }

            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => init();
    
    const handleMouseMove = (e: MouseEvent) => {
      // Get relative position in case user scrolls
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
         mouse.targetX = e.clientX - rect.left;
         mouse.targetY = e.clientY - rect.top;
      }
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("resize", handleResize);
    const container = containerRef.current;
    if (container) {
       container.addEventListener("mousemove", handleMouseMove);
       container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (container) {
         container.removeEventListener("mousemove", handleMouseMove);
         container.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden bg-[#0f0e0c] z-0">
      {/* Ambient glow — multiple light spots matching brand palette */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary orange glow — top left, illuminates headline */}
        <div className="absolute -top-[10%] -left-[5%] w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(255,60,0,0.18)_0%,transparent_65%)]" />
        {/* Warm orange glow — center, behind content */}
        <div className="absolute top-[30%] left-[25%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,106,0,0.12)_0%,transparent_65%)]" />
        {/* Purple/cold glow — right side, behind mockups */}
        <div className="absolute top-[10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(169,96,238,0.14)_0%,transparent_65%)]" />
        {/* Subtle orange glow — bottom center, transition zone */}
        <div className="absolute bottom-[-10%] left-[20%] w-[1000px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,60,0,0.10)_0%,transparent_65%)]" />
        {/* Subtle purple glow — bottom right */}
        <div className="absolute bottom-[0%] right-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(169,96,238,0.08)_0%,transparent_65%)]" />
      </div>
      <canvas
        ref={canvasRef}
        className="block w-full h-full pointer-events-none"
      />
      {/* Vignette mask for depth — reduced to let glows show */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0f0e0c_100%)] pointer-events-none opacity-40" />
    </div>
  );
}
