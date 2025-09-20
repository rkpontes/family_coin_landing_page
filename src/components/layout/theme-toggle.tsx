"use client";

import * as React from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const options = [
  { value: "light", label: "Claro", icon: Sun },
  { value: "dark", label: "Escuro", icon: Moon },
  { value: "system", label: "Sistema", icon: Monitor }
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      {options.map((option) => {
        const Icon = option.icon;
        const isActive = theme === option.value || (!theme && option.value === "system");
        return (
          <Button
            key={option.value}
            variant={isActive ? "default" : "outline"}
            size="icon"
            aria-label={`Mudar tema para ${option.label}`}
            onClick={() => setTheme(option.value)}
          >
            <Icon className="h-4 w-4" />
          </Button>
        );
      })}
    </div>
  );
}
