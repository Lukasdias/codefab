"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const AnimatedSun = motion(Sun);
const AnimatedMoon = motion(Moon);

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="bg-[#ff5678] dark:bg-[#f92672] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Codefab
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="text-white hover:text-white hover:bg-white/20"
        >
          <AnimatedSun
            variants={{
              initial: { rotate: 0, scale: 1 },
              dark: { rotate: -90, scale: 0 },
            }}
            initial="initial"
            animate={theme}
            transition={{
              stiffness: 1000,
              damping: 100,
            }}
            className="h-[1.2rem] w-[1.2rem]"
          />
          <AnimatedMoon
            className="absolute h-[1.2rem] w-[1.2rem]"
            variants={{
              initial: { rotate: 0, scale: 1 },
              light: { rotate: 90, scale: 0 },
            }}
            initial="initial"
            animate={theme}
            transition={{
              stiffness: 1000,
              damping: 100,
            }}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
}
