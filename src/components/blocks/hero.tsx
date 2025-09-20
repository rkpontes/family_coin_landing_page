"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { StoreButton } from "@/components/core/button-hero";
import { Container } from "@/components/core/container";
import { siteConfig } from "@/config/site";
import type { Messages } from "@/locales/types";
import logoImage from "@/assets/icon.png";

interface HeroProps {
  messages: Messages["hero"];
  storeMessages: Messages["store"];
}

export function Hero({ messages, storeMessages }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-brand-50">
      <div className="absolute -left-20 top-10 hidden h-72 w-72 rounded-full bg-brand-200/40 blur-3xl md:block" />
      <div className="absolute -right-16 bottom-0 hidden h-72 w-72 rounded-full bg-coin/40 blur-3xl md:block" />
      <Container className="relative flex flex-col items-center gap-16 py-24 md:flex-row md:py-32">
        <motion.div
          className="flex-1 space-y-8 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 rounded-full bg-white/80 px-5 py-2 text-sm shadow-sm backdrop-blur"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
              <Image
                src={logoImage}
                alt="FamilyCoin logo"
                width={48}
                height={48}
                className="h-10 w-10"
                priority
              />
            </span>
            <span className="font-medium text-brand-700">{messages.badge}</span>
          </motion.div>
          <motion.h1
            className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {messages.title}
          </motion.h1>
          <motion.p
            className="text-lg text-slate-600 md:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {messages.description}
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 md:justify-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <StoreButton
              href={siteConfig.androidDownloadUrl}
              variant="google"
              subtitle={storeMessages.googleSubtitle}
              title={storeMessages.googleTitle}
            />
            <StoreButton
              href={siteConfig.iosDownloadUrl}
              variant="apple"
              subtitle={storeMessages.appleSubtitle}
              title={storeMessages.appleTitle}
              className="bg-white text-slate-900"
            />
          </motion.div>
          <motion.ul
            className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500 md:justify-start"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            {messages.chips.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1 shadow-sm"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {feature}
              </li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div
          className="relative flex flex-1 justify-center md:justify-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative w-full max-w-sm rounded-3xl bg-white/90 p-6 shadow-card backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                {messages.card.title}
              </span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-600">
                {messages.card.bonus}
              </span>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between rounded-2xl bg-brand-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-200 text-brand-700">
                    <Image
                      src="/icons/tasks.svg"
                      alt={messages.card.firstTask.title}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{messages.card.firstTask.title}</p>
                    <p className="text-sm text-slate-500">{messages.card.firstTask.reward}</p>
                  </div>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-500">
                  {messages.card.firstTask.status}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-500">
                    <Image
                      src="/icons/coin.svg"
                      alt={messages.card.secondTask.title}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{messages.card.secondTask.title}</p>
                    <p className="text-sm text-slate-500">{messages.card.secondTask.reward}</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-600">
                  {messages.card.secondTask.status}
                </span>
              </div>
              <div className="rounded-2xl border border-dashed border-slate-200 p-4 text-center text-sm text-slate-400">
                {messages.card.info}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
