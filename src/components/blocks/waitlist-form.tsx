"use client";

import * as React from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { analytics } from "@/lib/analytics";
import type { Messages } from "@/locales/types";

interface WaitlistFormProps {
  className?: string;
  messages: Messages["waitlist"];
}

export function WaitlistForm({ className, messages }: WaitlistFormProps) {
  const schema = React.useMemo(
    () => z.object({ email: z.string().email({ message: messages.invalidEmail }) }),
    [messages.invalidEmail]
  );

  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(false);

    const validation = schema.safeParse({ email });

    if (!validation.success) {
      setError(validation.error.issues[0]?.message ?? messages.error);
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      analytics.track("waitlist_joined", { email });
      setSuccess(true);
      setEmail("");
    } catch (err) {
      console.error(err);
      setError(messages.error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex w-full flex-col gap-3 rounded-2xl bg-white/10 p-2 text-left shadow-lg backdrop-blur",
        className
      )}
    >
      <div className="flex flex-col gap-2 rounded-xl bg-white/90 p-3 text-slate-900 md:flex-row md:items-center md:gap-3">
        <label htmlFor="email" className="sr-only">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={messages.placeholder}
          className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-200"
          disabled={isSubmitting}
        />
        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
          {isSubmitting ? messages.loading : messages.submit}
        </Button>
      </div>
      {error ? <p className="px-4 text-sm text-rose-500">{error}</p> : null}
      {success ? <p className="px-4 text-sm text-emerald-200">{messages.success}</p> : null}
    </form>
  );
}
