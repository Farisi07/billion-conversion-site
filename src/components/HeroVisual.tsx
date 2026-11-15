"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight emerald particle-wave on <canvas>.
 * - ~30fps cap, pauses when off-screen or tab hidden
 * - fewer particles on small screens
 * - reduced-motion: draws a single static frame
 * Purely decorative (aria-hidden); the path suggests visibility → leads → customers → revenue.
 */
export function HeroVisual() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    type P = { u: number; band: number; off: number; size: number; speed: number; alpha: number };
    let particles: P[] = [];

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = w < 640 ? 380 : 950;
      particles = Array.from({ length: count }, () => ({
        u: Math.random(),
        band: Math.random() < 0.55 ? 0 : 1,
        off: (Math.random() - 0.5) * (Math.random() < 0.8 ? 18 : 110),
        size: Math.random() * 1.9 + 0.6,
        speed: 0.00025 + Math.random() * 0.0006,
        alpha: 0.4 + Math.random() * 0.6,
      }));
    };

    // A rising wave: low on the left, sweeping up to the top-right
    const waveY = (u: number, t: number, band: number) => {
      const base = h * (0.82 - u * 0.62);
      const amp = h * (band ? 0.07 : 0.1);
      return base + Math.sin(u * 6.2 + t * 0.0006 + band * 1.7) * amp + Math.sin(u * 13 + t * 0.0011) * amp * 0.25;
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      // glowing ribbons (several fine strands per band)
      for (let strand = 0; strand < 8; strand++) {
        const band = strand < 5 ? 0 : 1;
        const shift = (strand % 5 - 2) * 3.5;
        ctx.beginPath();
        for (let i = 0; i <= 80; i++) {
          const u = i / 80;
          const x = u * w;
          const y = waveY(u, t, band) + shift * Math.sin(u * Math.PI);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const g = ctx.createLinearGradient(0, 0, w, 0);
        g.addColorStop(0, "rgba(16,185,129,0)");
        g.addColorStop(0.55, strand === 2 ? "rgba(209,250,229,0.95)" : band ? "rgba(20,184,166,0.4)" : "rgba(52,211,153,0.55)");
        g.addColorStop(1, "rgba(16,185,129,0.05)");
        ctx.strokeStyle = g;
        ctx.lineWidth = strand === 2 ? 2.2 : 0.8;
        ctx.shadowColor = "rgba(16,185,129,0.8)";
        ctx.shadowBlur = strand === 2 ? 22 : 10;
        ctx.stroke();
      }
      ctx.shadowBlur = 0;
      // particles
      for (const p of particles) {
        if (!reduced) p.u = (p.u + p.speed) % 1;
        const x = p.u * w;
        const y = waveY(p.u, t, p.band) + p.off;
        const fade = Math.sin(p.u * Math.PI);
        ctx.globalAlpha = p.alpha * fade;
        ctx.fillStyle = p.size > 1.4 ? "#a7f3d0" : "#10b981";
        ctx.fillRect(x, y, p.size, p.size);
      }
      ctx.globalAlpha = 1;
    };

    resize();
    let raf = 0;
    let last = 0;
    let visible = true;
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible || document.hidden || t - last < 33) return;
      last = t;
      draw(t);
    };

    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);
    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw(0);
    });
    ro.observe(canvas);

    if (reduced) draw(0);
    else raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="absolute inset-0 h-full w-full" />;
}
