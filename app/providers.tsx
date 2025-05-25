"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

export function Providers({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <HeroUIProvider>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </HeroUIProvider>
  );
}

declare module "@react-types/shared" {}
