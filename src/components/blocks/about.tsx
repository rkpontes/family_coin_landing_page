import { Heart, Eye, Star } from "lucide-react";

import { Container } from "@/components/core/container";
import { Section } from "@/components/core/section";
import { Badge } from "@/components/ui/badge";
import type { Messages } from "@/locales/types";

interface AboutProps {
  messages: Messages["about"];
}

const icons = [
  { icon: Heart, accent: "bg-pink-100 text-pink-600" },
  { icon: Eye, accent: "bg-blue-100 text-blue-600" },
  { icon: Star, accent: "bg-yellow-100 text-yellow-600" }
];

export function About({ messages }: AboutProps) {
  return (
    <Section id="about" className="bg-slate-50">
      <Container>
        <div className="text-center">
          <Badge variant="secondary" className="mx-auto bg-brand-100 text-brand-700">
            {messages.badge}
          </Badge>
          <h2 className="mt-6 text-3xl font-semibold text-slate-900 md:text-4xl">{messages.heading}</h2>
          <p className="mt-4 text-lg text-slate-500 md:text-xl">{messages.description}</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {messages.items.map((item, index) => {
            const config = icons[index] ?? icons[0];
            const Icon = config.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${config.accent}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-brand-50 to-amber-50 p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              {messages.tokenEconomy.heading}
            </h3>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              {messages.tokenEconomy.description}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}