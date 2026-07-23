"use client";

import { useEffect, useRef, useState } from "react";

const BELPATRA_IMAGE_SRC = "/images/belaptra.png";
const GENERATION_DURATION_MS = 10_000;
const MAX_DRAIN_DURATION_MS = 9_000;

type BelpatraLeaf = {
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  swayAmount: number;
  swaySpeed: number;
  swayOffset: number;
  opacity: number;
};

const getLeafCount = (width: number) => {
  if (width < 640) {
    return 18;
  }

  if (width < 1024) {
    return 28;
  }

  return 48;
};

const createLeaf = (width: number, height: number, startAboveViewport = true): BelpatraLeaf => ({
  x: Math.random() * width,
  y: startAboveViewport ? -80 - Math.random() * height * 0.35 : Math.random() * height,
  size: 28 + Math.random() * 34,
  speed: 0.55 + Math.random() * 1.1,
  rotation: Math.random() * 360,
  rotationSpeed: (Math.random() - 0.5) * 1.8,
  swayAmount: 18 + Math.random() * 42,
  swaySpeed: 0.012 + Math.random() * 0.018,
  swayOffset: Math.random() * Math.PI * 2,
  opacity: 0.68 + Math.random() * 0.24,
});

export function BelpatraRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const leavesRef = useRef<BelpatraLeaf[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef(0);
  const lastSpawnTimeRef = useRef(0);
  const viewportRef = useRef({ width: 0, height: 0, dpr: 1 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d", { alpha: true });

    if (!context) {
      return;
    }

    const belpatraImage = new Image();

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      viewportRef.current = { width, height, dpr };
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seedInitialLeaves = () => {
      const { width, height } = viewportRef.current;
      const leafCount = getLeafCount(width);

      leavesRef.current = Array.from({ length: Math.floor(leafCount * 0.5) }, () =>
        createLeaf(width, height, false),
      );
    };

    const drawLeaf = (leaf: BelpatraLeaf, elapsed: number) => {
      const sway = Math.sin(elapsed * leaf.swaySpeed + leaf.swayOffset) * leaf.swayAmount;
      const drawSize = leaf.size;
      const drawHeight = drawSize * 0.68;

      context.save();
      context.globalAlpha = leaf.opacity;
      context.translate(leaf.x + sway, leaf.y);
      context.rotate((leaf.rotation * Math.PI) / 180);
      context.drawImage(
        belpatraImage,
        -drawSize / 2,
        -drawHeight / 2,
        drawSize,
        drawHeight,
      );
      context.restore();
    };

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
        lastSpawnTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const { width, height } = viewportRef.current;
      const targetLeafCount = getLeafCount(width);
      const isGenerating = elapsed <= GENERATION_DURATION_MS;

      context.clearRect(0, 0, width, height);

      if (isGenerating && timestamp - lastSpawnTimeRef.current > 180) {
        const leavesToAdd = Math.max(1, Math.ceil(targetLeafCount / 32));

        for (let index = 0; index < leavesToAdd; index += 1) {
          if (leavesRef.current.length < targetLeafCount) {
            leavesRef.current.push(createLeaf(width, height));
          }
        }

        lastSpawnTimeRef.current = timestamp;
      }

      leavesRef.current = leavesRef.current.filter((leaf) => {
        leaf.y += leaf.speed;
        leaf.rotation += leaf.rotationSpeed;
        drawLeaf(leaf, elapsed);

        return leaf.y < height + leaf.size * 1.5;
      });

      if (
        isGenerating ||
        (leavesRef.current.length > 0 && elapsed < GENERATION_DURATION_MS + MAX_DRAIN_DURATION_MS)
      ) {
        animationFrameRef.current = window.requestAnimationFrame(animate);
        return;
      }

      setIsVisible(false);
    };

    resizeCanvas();
    seedInitialLeaves();
    window.addEventListener("resize", resizeCanvas);

    const startAnimation = () => {
      if (animationFrameRef.current) {
        return;
      }

      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    belpatraImage.onload = startAnimation;
    belpatraImage.onerror = () => setIsVisible(false);
    belpatraImage.src = BELPATRA_IMAGE_SRC;

    if (belpatraImage.complete) {
      startAnimation();
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);

      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden bg-transparent"
      aria-hidden="true"
    />
  );
}
