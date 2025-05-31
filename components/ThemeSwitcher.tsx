"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@heroui/switch";
import { MoonIcon, SunIcon } from "@heroui/shared-icons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Switch
        defaultSelected
        color="primary"
        size="lg"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
        onValueChange={(isSelected) => {
          setTheme(isSelected ? "dark" : "light");
        }}
      >
        {theme} mode
      </Switch>
    </>
  );
}
