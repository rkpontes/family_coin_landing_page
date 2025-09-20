import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

import { cn } from "@/lib/utils";

interface StoreButtonProps {
  href: string;
  variant?: "google" | "apple";
  subtitle: string;
  title: string;
  className?: string;
}

const variantStyles = {
  google: "bg-slate-900 text-white",
  apple: "bg-white text-slate-900"
} as const;

const icons = {
  google: faGooglePlay,
  apple: faApple
} as const;

export function StoreButton({ href, variant = "google", subtitle, title, className }: StoreButtonProps) {
  const icon = icons[variant];

  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-3 rounded-2xl px-5 py-3 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl",
        variantStyles[variant],
        className
      )}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
        <FontAwesomeIcon icon={icon} className="h-6 w-6" aria-hidden="true" />
      </span>
      <span className="text-left">
        <span className="block text-xs uppercase tracking-widest opacity-70">{subtitle}</span>
        <span className="block text-base font-semibold">{title}</span>
      </span>
    </Link>
  );
}
