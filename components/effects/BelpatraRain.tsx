"use client";

import { useEffect, useRef, useState } from "react";

const BELPATRA_ASSET_PATH = "/images/belaptra.png";
const SPAWN_WINDOW_MS = 10_000;
const DPR_LIMIT = 2;

type Leaf = {
  x: number;
  y: number;
  height: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  swayAmount: number;
  swaySpeed: number;
  swayPhase: number;
  opacity: number;
};

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function getActiveLeafTarget(width: number) {
  if (width < 640) {
    return 18;
  }

  if (width < 1024) {
    return 28;
  }

  return 46;
}

function createLeaf(width: number): Leaf {
  return {
    x: randomBetween(-40, width + 40),
    y: randomBetween(-120, -28),
    height: randomBetween(18, 38),
    speed: randomBetween(70, 128),
    rotation: randomBetween(-Math.PI, Math.PI),
    rotationSpeed: randomBetween(-1.35, 1.35),
    swayAmount: randomBetween(18, 74),
    swaySpeed: randomBetween(0.9, 1.9),
    swayPhase: randomBetween(0, Math.PI * 2),
    opacity: randomBetween(0.72, 0.95),
  };
}

export function BelpatraRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const hideFrame = window.requestAnimationFrame(() => setIsVisible(false));
      return () => window.cancelAnimationFrame(hideFrame);
    }

    const context = canvas.getContext("2d", { alpha: true });

    if (!context) {
      const hideFrame = window.requestAnimationFrame(() => setIsVisible(false));
      return () => window.cancelAnimationFrame(hideFrame);
    }

    let isMounted = true;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let activeLeafTarget = getActiveLeafTarget(width);
    let animationFrame = 0;
    let previousTime = performance.now();
    const startTime = previousTime;
    let nextSpawnAt = 0;
    const leaves: Leaf[] = [];
    const belpatraImage = new Image();

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      activeLeafTarget = getActiveLeafTarget(width);

      const dpr = Math.min(window.devicePixelRatio || 1, DPR_LIMIT);
      canvas.width = Math.ceil(width * dpr);
      canvas.height = Math.ceil(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawnLeaf = () => {
      if (leaves.length < activeLeafTarget) {
        leaves.push(createLeaf(width));
      }
    };

    const drawLeaf = (leaf: Leaf, elapsedSeconds: number) => {
      const sway =
        Math.sin(elapsedSeconds * leaf.swaySpeed + leaf.swayPhase) * leaf.swayAmount;
      const drawX = leaf.x + sway;
      const imageRatio = belpatraImage.naturalWidth / belpatraImage.naturalHeight || 1;
      const leafWidth = leaf.height * imageRatio;

      context.save();
      context.globalAlpha = leaf.opacity;
      context.translate(drawX, leaf.y);
      context.rotate(leaf.rotation);
      context.drawImage(
        belpatraImage,
        -leafWidth / 2,
        -leaf.height / 2,
        leafWidth,
        leaf.height,
      );
      context.restore();
    };

    const render = (time: number) => {
      const deltaSeconds = Math.min((time - previousTime) / 1000, 0.04);
      const elapsedMs = time - startTime;
      const elapsedSeconds = elapsedMs / 1000;
      previousTime = time;

      context.clearRect(0, 0, width, height);

      // Spawn for exactly 10 seconds; after that, existing leaves drain naturally.
      while (elapsedMs <= SPAWN_WINDOW_MS && elapsedMs >= nextSpawnAt) {
        spawnLeaf();
        nextSpawnAt += randomBetween(95, 220);
      }

      for (let index = leaves.length - 1; index >= 0; index -= 1) {
        const leaf = leaves[index];
        leaf.y += leaf.speed * deltaSeconds;
        leaf.rotation += leaf.rotationSpeed * deltaSeconds;
        drawLeaf(leaf, elapsedSeconds);

        if (leaf.y - leaf.height > height + 80) {
          leaves.splice(index, 1);
        }
      }

      if (elapsedMs > SPAWN_WINDOW_MS && leaves.length === 0) {
        setIsVisible(false);
        return;
      }

      animationFrame = window.requestAnimationFrame(render);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });

    // Small first batch makes the animation visible immediately without a burst.
    for (let index = 0; index < Math.min(6, activeLeafTarget); index += 1) {
      spawnLeaf();
    }

    const startAnimation = () => {
      if (isMounted) {
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    const hideOnAssetError = () => {
      if (isMounted) {
        animationFrame = window.requestAnimationFrame(() => setIsVisible(false));
      }
    };

    belpatraImage.src = BELPATRA_ASSET_PATH;
    belpatraImage.decode().then(startAnimation).catch(hideOnAssetError);

    return () => {
      isMounted = false;
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1000] overflow-hidden bg-transparent [contain:strict] motion-reduce:hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}

