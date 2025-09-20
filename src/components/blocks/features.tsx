import { Sparkles, Trophy, Wallet } from "lucide-react";

import { Container } from "@/components/core/container";
import { Section } from "@/components/core/section";
import { Badge } from "@/components/ui/badge";
import type { Messages } from "@/locales/types";

interface FeaturesProps {
  messages: Messages["features"];
}

const icons = [
  { icon: Sparkles, accent: "bg-brand-100 text-brand-700" },
  { icon: Wallet, accent: "bg-amber-100 text-amber-600" },
  { icon: Trophy, accent: "bg-emerald-100 text-emerald-600" }
];

export function Features({ messages }: FeaturesProps) {
  return (
    <Section id="features" className="bg-white">
      <Container>
        <div className="text-center">
          <Badge variant="secondary" className="mx-auto bg-brand-100 text-brand-700">
            {messages.badge}
          </Badge>
          <h2 className="mt-6 text-3xl font-semibold text-slate-900 md:text-4xl">{messages.heading}</h2>
          <p className="mt-4 text-lg text-slate-500 md:text-xl">{messages.description}</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {messages.items.map((feature, index) => {
            const config = icons[index] ?? icons[0];
            const Icon = config.icon;
            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-100 bg-gradient-to-b from-white to-brand-50/30 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${config.accent}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
