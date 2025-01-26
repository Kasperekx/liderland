import { useEffect, useRef } from 'react';

export const useFloatingAnimation = (delay: number = 0) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const startTime = Date.now() + delay;
    let animationFrameId: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      // Reduced amplitude and slower animation
      const position = Math.sin(elapsed / 1000) * 4;

      if (element) {
        // Use transform3d for better performance
        element.style.transform = `translate3d(0, ${position}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [delay]);

  return ref;
};
