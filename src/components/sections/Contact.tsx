"use client";

import { FormEvent, useState } from "react";
import { ExternalLink, Mail, MessageCircle, Send } from "lucide-react";
import { contact } from "@/data/portfolio";
import { buildMailto } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Shopify work inquiry from ${name || "Portfolio visitor"}`;
    const body = message || "Hi Tallal, I would like to discuss a Shopify project, role, or agency contract.";
    window.location.href = buildMailto(subject, body);
  };

  return (
    <section id="contact" className="section-shell py-24 sm:py-32">
      <SectionHeading
        index="09"
        eyebrow="Contact"
        title="Work With Muhammad Tallal Aamir"
        copy="Open to remote Shopify roles, agency contracts, freelance builds, and long-term e-commerce development partnerships."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-panel rounded-[8px] p-6 sm:p-8">
          <p className="text-xl leading-8 text-cream">
            I can join a team, support an agency pipeline, work directly with clients, or own a focused Shopify or full-stack feature from brief to launch.
          </p>
          <div className="mt-8 grid gap-3">
            <MagneticButton href={`mailto:${contact.email}`} className="w-full justify-between">
              Email Me
            </MagneticButton>
            <MagneticButton href={contact.whatsapp} target="_blank" variant="secondary" className="w-full justify-between">
              WhatsApp Me
            </MagneticButton>
            <MagneticButton href={contact.fiverr} target="_blank" variant="secondary" className="w-full justify-between">
              Fiverr Profile
            </MagneticButton>
            <MagneticButton href={contact.resume} download variant="secondary" className="w-full justify-between">
              Download Resume
            </MagneticButton>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-muted">
            <a className="focus-ring inline-flex items-center gap-3 transition hover:text-cream" href={`mailto:${contact.email}`}>
              <Mail size={17} className="text-lime" />
              {contact.email}
            </a>
            <a className="focus-ring inline-flex items-center gap-3 transition hover:text-cream" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={17} className="text-lime" />
              {contact.phone}
            </a>
            <a className="focus-ring inline-flex items-center gap-3 transition hover:text-cream" href={contact.fiverr} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={17} className="text-lime" />
              fiverr.com/tallalaamir
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[8px] border border-white/12 bg-white/[0.035] p-6 sm:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-cream">
              Name
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="min-h-12 rounded-[8px] border border-white/12 bg-black/24 px-4 text-base font-normal text-cream outline-none transition placeholder:text-muted focus:border-lime/60"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-cream">
              Email
              <input
                type="email"
                className="min-h-12 rounded-[8px] border border-white/12 bg-black/24 px-4 text-base font-normal text-cream outline-none transition placeholder:text-muted focus:border-lime/60"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-cream">
            Project details
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={8}
              className="resize-none rounded-[8px] border border-white/12 bg-black/24 p-4 text-base font-normal leading-7 text-cream outline-none transition placeholder:text-muted focus:border-lime/60"
              placeholder="Tell me about the store, feature, role, or agency project."
            />
          </label>
          <button
            type="submit"
            className="focus-ring mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-black uppercase !text-black transition hover:bg-shopify [&_*]:!text-black"
          >
            Send Inquiry
            <Send size={17} />
          </button>
        </form>
      </div>
    </section>
  );
}
