"use client";

import { motion } from "framer-motion";

import { StoreButton } from "@/components/core/button-hero";
import { Container } from "@/components/core/container";
import { Section } from "@/components/core/section";
import { Button } from "@/components/ui/button";
// import { WaitlistForm } from "@/components/blocks/waitlist-form";
import { siteConfig } from "@/config/site";
import type { Messages } from "@/locales/types";

interface CTAProps {
  messages: Messages["cta"];
  storeMessages: Messages["store"];
  waitlistMessages: Messages["waitlist"];
  newsletterMessages: Messages["newsletter"];
}

export function CTA({ messages, storeMessages, newsletterMessages }: CTAProps) {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-400 via-brand-500 to-coin" />
      <Container className="relative flex flex-col items-center gap-10 text-center text-white">
        <motion.h2
          className="text-3xl font-semibold md:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {messages.heading}
        </motion.h2>
        <motion.p
          className="max-w-2xl text-base md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {messages.description}
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <StoreButton
            href={siteConfig.androidDownloadUrl}
            variant="google"
            subtitle={storeMessages.googleSubtitle}
            title={storeMessages.googleTitle}
            className="bg-white text-slate-900"
          />
          <StoreButton
            href={siteConfig.iosDownloadUrl}
            variant="apple"
            subtitle={storeMessages.appleSubtitle}
            title={storeMessages.appleTitle}
            className="bg-slate-900 text-white"
          />
        </motion.div>
        <motion.div
          className="w-full max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Button
            variant="secondary"
            size="lg"
            onClick={() => window.open('https://888f9e22.sibforms.com/serve/MUIFAEF_gwPK0Kzn2-TQIDYFOf5KIvtHaRaNC1eFm7FK67Tx53LNygeeosXs77j3k5-oYV65VlAqSUxcRO-WA1zg5L_8sqmse_CkcmDbJHstHR71FUzJ2_txr27CKgUm1PQephqt8ZaLGqCXjSl7HLYmPYnqHtVtjZ3UlkuU1a3LAYUkxzj6jAcJab-lvMBvMqfmt7mTCBdPuvVb', '_blank')}
            className="bg-white text-slate-900 hover:bg-slate-100 shadow-lg font-semibold"
          >
            {newsletterMessages.button}
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
