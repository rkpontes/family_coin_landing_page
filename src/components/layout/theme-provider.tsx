"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  attribute = "class"
}: {
  children: React.ReactNode;
  attribute?: string;
}) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
