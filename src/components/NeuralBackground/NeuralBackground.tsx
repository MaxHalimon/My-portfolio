import { useEffect, useRef } from 'react';

type NodePoint = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

const NODE_COUNT = 72;
const CONNECTION_DISTANCE = 150;
const MOUSE_DISTANCE = 180;

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let nodes: NodePoint[] = [];

    const createNodes = () => {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 1.2,
      }));
    };

    const resize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createNodes();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, 'rgba(239, 246, 255, 0.95)');
      gradient.addColorStop(0.5, 'rgba(248, 250, 252, 0.92)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.98)');
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      nodes.forEach((node) => {
        const dx = node.x - mouseRef.current.x;
        const dy = node.y - mouseRef.current.y;
        const mouseDistance = Math.hypot(dx, dy);

        if (mouseDistance < MOUSE_DISTANCE) {
          const force = (MOUSE_DISTANCE - mouseDistance) / MOUSE_DISTANCE;
          node.vx += (dx / mouseDistance) * force * 0.035 || 0;
          node.vy += (dy / mouseDistance) * force * 0.035 || 0;
        }

        node.x += node.vx;
        node.y += node.vy;
        node.vx *= 0.995;
        node.vy *= 0.995;

        if (node.x <= 0 || node.x >= width) node.vx *= -1;
        if (node.y <= 0 || node.y >= height) node.vy *= -1;

        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));
      });

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const first = nodes[i];
          const second = nodes[j];
          const distance = Math.hypot(first.x - second.x, first.y - second.y);

          if (distance < CONNECTION_DISTANCE) {
            const opacity = 1 - distance / CONNECTION_DISTANCE;
            context.strokeStyle = `rgba(37, 99, 235, ${opacity * 0.22})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(first.x, first.y);
            context.lineTo(second.x, second.y);
            context.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        const distanceToMouse = Math.hypot(node.x - mouseRef.current.x, node.y - mouseRef.current.y);
        const glow = Math.max(0, 1 - distanceToMouse / MOUSE_DISTANCE);

        context.beginPath();
        context.fillStyle = `rgba(14, 116, 144, ${0.45 + glow * 0.35})`;
        context.shadowColor = 'rgba(14, 165, 233, 0.55)';
        context.shadowBlur = 8 + glow * 14;
        context.arc(node.x, node.y, node.radius + glow * 1.8, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0;
      });

      animationFrame = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    const handlePointerLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
