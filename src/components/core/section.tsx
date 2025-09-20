import * as React from "react";

import { cn } from "@/lib/utils";

export type SectionProps = React.HTMLAttributes<HTMLElement>;

export function Section({ className, ...props }: SectionProps) {
  return <section className={cn("py-20 md:py-28", className)} {...props} />;
}
