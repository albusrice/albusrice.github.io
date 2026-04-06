import { useEffect, useRef } from "react";

const BackgroundPattern = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
      draw();
    };

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Ising model lattice grid - subtle dots
      const spacing = 40;
      const cols = Math.ceil(w / spacing);
      const rows = Math.ceil(h / spacing);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing + spacing / 2;
          const y = j * spacing + spacing / 2;

          // Pseudo-random spin state based on position (deterministic)
          const spin = Math.sin(i * 12.9898 + j * 78.233) * 43758.5453;
          const state = (spin - Math.floor(spin)) > 0.5;

          // Vary opacity based on position to create gradient fade
          const distFromCenter = Math.sqrt(
            Math.pow((x - w / 2) / (w / 2), 2) +
            Math.pow((y - h * 0.3) / (h * 0.5), 2)
          );
          const fade = Math.max(0, 1 - distFromCenter * 0.6);

          if (state) {
            ctx.fillStyle = `rgba(180, 200, 220, ${0.15 * fade})`;
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }

          // Draw subtle connection lines (nearest neighbor coupling)
          if (i < cols - 1) {
            const nextSpin = Math.sin((i + 1) * 12.9898 + j * 78.233) * 43758.5453;
            const nextState = (nextSpin - Math.floor(nextSpin)) > 0.5;
            if (state === nextState) {
              ctx.strokeStyle = `rgba(170, 195, 225, ${0.06 * fade})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x + spacing, y);
              ctx.stroke();
            }
          }

          if (j < rows - 1) {
            const nextSpin = Math.sin(i * 12.9898 + (j + 1) * 78.233) * 43758.5453;
            const nextState = (nextSpin - Math.floor(nextSpin)) > 0.5;
            if (state === nextState) {
              ctx.strokeStyle = `rgba(170, 195, 225, ${0.06 * fade})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x, y + spacing);
              ctx.stroke();
            }
          }
        }
      }

      // Frosted crystalline accents - scattered hexagonal shapes
      const hexPositions = [
        { x: w * 0.08, y: h * 0.15, size: 60, opacity: 0.04 },
        { x: w * 0.92, y: h * 0.08, size: 45, opacity: 0.03 },
        { x: w * 0.15, y: h * 0.45, size: 35, opacity: 0.025 },
        { x: w * 0.88, y: h * 0.35, size: 50, opacity: 0.035 },
        { x: w * 0.05, y: h * 0.7, size: 40, opacity: 0.03 },
        { x: w * 0.95, y: h * 0.6, size: 55, opacity: 0.04 },
        { x: w * 0.12, y: h * 0.85, size: 30, opacity: 0.02 },
        { x: w * 0.85, y: h * 0.8, size: 45, opacity: 0.03 },
      ];

      hexPositions.forEach(({ x, y, size, opacity }) => {
        ctx.strokeStyle = `rgba(160, 190, 220, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let k = 0; k < 6; k++) {
          const angle = (Math.PI / 3) * k - Math.PI / 6;
          const hx = x + size * Math.cos(angle);
          const hy = y + size * Math.sin(angle);
          if (k === 0) ctx.moveTo(hx, hy);
          else ctx.lineTo(hx, hy);
        }
        ctx.closePath();
        ctx.stroke();
      });
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default BackgroundPattern;
