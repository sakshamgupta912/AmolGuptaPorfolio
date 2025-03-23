"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const MaskCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 300, damping: 20 });
  const smoothY = useSpring(cursorY, { stiffness: 300, damping: 20 });

  const { resolvedTheme, theme } = useTheme();
  const [cursorStyle, setCursorStyle] = useState("");
  const [mounted, setMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Detect if the device is a touchscreen
    const checkTouchDevice = () => {
      setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
    };

    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);

    return () => {
      window.removeEventListener("resize", checkTouchDevice);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return; // Disable cursor on touch devices

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 40);
      cursorY.set(e.clientY - 40);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, isTouchDevice]);

  useEffect(() => {
    if (!mounted || isTouchDevice) return;

    let currentTheme = resolvedTheme || theme;

    // Detect system theme preference if not explicitly set
    if (!currentTheme) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      currentTheme = prefersDark ? "dark" : "light";
    }

    // Apply cursor style based on theme
    setCursorStyle(
      currentTheme === "dark"
        ? "bg-white mix-blend-difference"
        : "bg-black bg-opacity-20 mix-blend-multiply"
    );
  }, [resolvedTheme, theme, mounted, isTouchDevice]);

  // Prevent rendering on touch devices and before mounting (to avoid hydration issues)
  if (!mounted || isTouchDevice) return null;

  return (
    <motion.div
      className={`fixed w-20 h-20 rounded-full pointer-events-none z-50 ${cursorStyle}`}
      style={{
        translateX: smoothX,
        translateY: smoothY,
      }}
    />
  );
};

export default MaskCursor;
