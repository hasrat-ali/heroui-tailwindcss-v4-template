"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@heroui/button";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      The current theme is: {theme}
      <Button color="danger" onPress={() => setTheme("light")}>
        Light Mode
      </Button>
      <Button onPress={() => setTheme("dark")}>Dark Mode</Button>
    </div>
  );
}
