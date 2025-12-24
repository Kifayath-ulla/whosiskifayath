import { useEffect, useRef } from 'react';

interface Block {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

const BlockchainBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const blocks: Block[] = [];
    const blockCount = 30;

    for (let i = 0; i < blockCount; i++) {
      blocks.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.3 + 0.1,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    const drawBlock = (block: Block) => {
      ctx.save();
      ctx.translate(block.x, block.y);
      ctx.rotate(block.rotation);
      
      ctx.strokeStyle = `hsla(165, 100%, 50%, ${block.opacity})`;
      ctx.lineWidth = 1;
      
      // Draw hexagon
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const px = Math.cos(angle) * block.size;
        const py = Math.sin(angle) * block.size;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();

      // Inner glow
      ctx.strokeStyle = `hsla(270, 100%, 60%, ${block.opacity * 0.5})`;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const px = Math.cos(angle) * (block.size * 0.6);
        const py = Math.sin(angle) * (block.size * 0.6);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();

      ctx.restore();
    };

    const drawConnections = () => {
      for (let i = 0; i < blocks.length; i++) {
        for (let j = i + 1; j < blocks.length; j++) {
          const dx = blocks[i].x - blocks[j].x;
          const dy = blocks[i].y - blocks[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            ctx.strokeStyle = `hsla(165, 100%, 50%, ${0.1 * (1 - distance / 200)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(blocks[i].x, blocks[i].y);
            ctx.lineTo(blocks[j].x, blocks[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawConnections();

      blocks.forEach((block) => {
        block.y -= block.speed;
        block.rotation += block.rotationSpeed;

        if (block.y < -block.size) {
          block.y = canvas.height + block.size;
          block.x = Math.random() * canvas.width;
        }

        drawBlock(block);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default BlockchainBackground;
