import { useEffect, useRef } from 'react';

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; z: number; radius: number; alpha: number }[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      // Mengurangi kepadatan bintang dan membatasi jumlah maksimal (max 300) agar GPU tidak berat di layar besar/4K
      const numStars = Math.min(Math.floor((canvas.width * canvas.height) / 2000), 300);
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 2 + 0.1, // Depth for parallax
          radius: Math.random() * 1.2,
          alpha: Math.random(),
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - window.innerWidth / 2) * 0.05;
      targetMouseY = (e.clientY - window.innerHeight / 2) * 0.05;
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const isDark = document.documentElement.classList.contains('dark');

      stars.forEach((star) => {
        ctx.beginPath();
        // Parallax effect based on z-depth
        const px = star.x + mouseX * star.z;
        const py = star.y + mouseY * star.z;
        
        // Wrap around screen & use Math.floor to avoid expensive sub-pixel rendering
        let drawX = Math.floor(px % canvas.width);
        let drawY = Math.floor(py % canvas.height);
        if (drawX < 0) drawX += canvas.width;
        if (drawY < 0) drawY += canvas.height;

        ctx.arc(drawX, drawY, star.radius, 0, Math.PI * 2);
        
        // Twinkle effect
        star.alpha += (Math.random() - 0.5) * 0.05;
        if (star.alpha < 0.1) star.alpha = 0.1;
        if (star.alpha > 1) star.alpha = 1;

        ctx.fillStyle = isDark 
          ? `rgba(255, 255, 255, ${star.alpha})` 
          : `rgba(15, 23, 42, ${star.alpha * 0.3})`;
        ctx.fill();
        
        // Move slowly upwards
        star.y -= 0.2 * star.z;
      });

      animationFrameId = requestAnimationFrame(drawStars);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas();
    drawStars();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none bg-slate-50 dark:bg-[#030014] transition-colors duration-500 will-change-transform"
    />
  );
}
