"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Download, Mail, MessageCircle } from "lucide-react";
import { contact } from "@/data/portfolio";
import { FiverrIcon } from "@/components/ui/FiverrIcon";
import { buildMailto } from "@/lib/utils";

const footerLinks = [
  { label: "Fiverr", href: contact.fiverr, external: true },
  { label: "Resume", href: contact.resume, download: true },
  { label: "Email", href: `mailto:${contact.email}` },
  { label: "Top", href: "#top" }
];

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerVisible, setFooterVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCompact = window.matchMedia("(max-width: 1023px)").matches;
    const disableReveal = prefersReducedMotion || isCompact;
    let frame = 0;
    let current = 0;
    let target = 0;

    const clamp = (value: number) => Math.min(Math.max(value, 0), 1);
    const mapProgress = (value: number, start: number, end: number) => clamp((value - start) / (end - start));

    const applyProgress = (value: number) => {
      const panel = panelRef.current;
      const intro = introRef.current;
      const content = contentRef.current;
      const divider = dividerRef.current;

      if (!panel || !intro || !content || !divider) {
        return;
      }

      if (disableReveal) {
        panel.style.clipPath = "inset(0% 0% 0% 0%)";
        intro.style.opacity = "0";
        content.style.opacity = "1";
        content.style.transform = "translateY(0px)";
        divider.style.transform = "scaleX(1)";
        return;
      }

      const expand = mapProgress(value, 0, 0.34);
      const introOut = mapProgress(value, 0.16, 0.32);
      const contentIn = mapProgress(value, 0.28, 0.48);
      const dividerIn = mapProgress(value, 0.38, 0.56);
      const inset = 32 - expand * 32;

      panel.style.clipPath = `inset(${inset}% 0% ${inset}% 0%)`;
      intro.style.opacity = `${1 - introOut}`;
      intro.style.transform = `translateY(${-150 * introOut}px) scale(${1 - 0.18 * introOut})`;
      content.style.opacity = `${contentIn}`;
      content.style.transform = `translateY(${110 - 110 * contentIn}px)`;
      divider.style.transform = `scaleX(${dividerIn})`;
    };

    const updateProgress = () => {
      const section = sectionRef.current;

      if (section) {
        const rect = section.getBoundingClientRect();
        const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
        target = clamp(-rect.top / travel);
      }
    };

    if (disableReveal) {
      applyProgress(1);
      return undefined;
    }

    const tick = () => {
      updateProgress();
      current += (target - current) * 0.24;

      if (Math.abs(target - current) < 0.001) {
        current = target;
      }

      applyProgress(current);
      frame = requestAnimationFrame(tick);
    };

    updateProgress();
    applyProgress(current);
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) {
      return undefined;
    }

    const footerElement = footer;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      const frame = requestAnimationFrame(() => setFooterVisible(true));

      return () => cancelAnimationFrame(frame);
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
        }
      },
      { rootMargin: "0px", threshold: 0.01 }
    );

    function cleanup() {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      observer.disconnect();
      window.removeEventListener("scroll", scheduleCheck);
      window.removeEventListener("resize", scheduleCheck);
    }

    function reveal() {
      setFooterVisible(true);
      cleanup();
    }

    function scheduleCheck() {
      if (frame) {
        return;
      }

      frame = requestAnimationFrame(() => {
        frame = 0;

        const rect = footerElement.getBoundingClientRect();

        if (rect.top < window.innerHeight * 0.99 && rect.bottom > 0) {
          reveal();
        }
      });
    }

    observer.observe(footerElement);
    window.addEventListener("scroll", scheduleCheck, { passive: true });
    window.addEventListener("resize", scheduleCheck);
    scheduleCheck();

    return cleanup;
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Portfolio inquiry from ${name || "Portfolio visitor"}`;
    const body = [
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      `Phone: ${phone || "Not provided"}`,
      "",
      message || "Hi Tallal, I would like to discuss a Shopify project, role, or agency contract."
    ].join("\n");

    window.location.href = buildMailto(subject, body);
  };

  return (
    <section ref={sectionRef} id="contact" className="contact-reveal relative z-50 bg-lime text-black lg:min-h-[210svh] lg:bg-black">
      <div className="relative min-h-[100svh] overflow-visible bg-lime lg:sticky lg:top-0 lg:overflow-hidden lg:bg-black">
        <div
          ref={panelRef}
          className="contact-panel relative min-h-[100svh] bg-lime text-black lg:absolute lg:inset-0"
        >
          <div
            data-mobile-contact-intro="true"
            className="flex min-h-[54svh] items-center justify-center border-b-4 border-black px-4 pb-8 pt-20 lg:hidden"
          >
            <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2 whitespace-nowrap">
              <span className="display-text text-right text-[clamp(3.8rem,19vw,5.8rem)] leading-none text-black">
                LET&apos;S
              </span>
              <span className="contact-burst display-text inline-block text-[clamp(3.5rem,15vw,5.2rem)] leading-none text-[#ff5a1f]">*</span>
              <span className="display-text text-[clamp(3.8rem,19vw,5.8rem)] leading-none text-black">
                TALK
              </span>
            </div>
          </div>

          <div
            ref={introRef}
            className="contact-intro pointer-events-none absolute inset-0 hidden items-center justify-center px-4 lg:flex"
          >
            <div className="flex w-full items-center justify-center gap-[3.2vw] whitespace-nowrap">
              <span className="display-text text-[clamp(5rem,14vw,16rem)] text-black">LET&apos;S</span>
              <span className="contact-burst display-text inline-block text-[clamp(5.4rem,10vw,11.5rem)] leading-none text-[#ff5a1f]">*</span>
              <span className="display-text text-[clamp(5rem,14vw,16rem)] text-black">TALK</span>
            </div>
          </div>

          <div
            ref={contentRef}
            className="contact-content relative z-10 flex min-h-[100svh] flex-col justify-between overflow-visible px-5 py-8 sm:px-8 sm:py-12 lg:grid lg:h-[100svh] lg:min-h-0 lg:grid-rows-[auto_minmax(0,1fr)_auto] lg:gap-4 lg:overflow-hidden lg:px-10 lg:py-6 xl:px-14 xl:py-8"
          >
            <div
              ref={dividerRef}
              aria-hidden="true"
              className="contact-divider h-1 origin-left bg-black"
            />

            <motion.div
              className="grid gap-14 py-12 lg:min-h-0 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-10 lg:overflow-hidden lg:py-2 xl:gap-12"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-black/68">09 / Contact</p>
                <h2 className="display-text mt-7 max-w-xl text-[clamp(4.2rem,9vw,9.4rem)] text-black lg:mt-5 lg:text-[clamp(3.9rem,6.4vw,7.2rem)]">Get In Touch</h2>
                <p className="mt-9 max-w-lg text-base font-bold leading-8 text-black/72 sm:text-lg lg:mt-5 lg:text-base lg:leading-6">
                  Open to remote Shopify roles, agency contracts, freelance builds, and long-term e-commerce development partnerships.
                </p>

                <div className="mt-12 grid gap-5 text-lg font-black uppercase text-black sm:text-xl lg:mt-6 lg:gap-2 lg:text-base">
                  <a className="focus-ring inline-flex w-fit items-center gap-3 transition hover:opacity-65" href={`mailto:${contact.email}`}>
                    <Mail size={20} />
                    {contact.email}
                  </a>
                  <a className="focus-ring inline-flex w-fit items-center gap-3 transition hover:opacity-65" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={20} />
                    {contact.phone}
                  </a>
                  <a className="focus-ring inline-flex w-fit items-center gap-3 transition hover:opacity-65" href={contact.fiverr} target="_blank" rel="noopener noreferrer">
                    <FiverrIcon className="size-6" />
                    fiverr.com/tallalaamir
                  </a>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="grid gap-9 lg:gap-4 lg:pt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:gap-5">
                  <label className="grid gap-3 lg:gap-2">
                    <span className="display-text text-3xl text-black sm:text-4xl lg:text-[1.7rem]">Full Name</span>
                    <input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="h-16 border-0 border-b-2 border-black bg-transparent px-0 text-lg font-bold text-black outline-none placeholder:text-black/38 focus:border-black/60 lg:h-10 lg:text-base"
                      placeholder="Muhammad Tallal Aamir"
                    />
                  </label>
                  <label className="grid gap-3 lg:gap-2">
                    <span className="display-text text-3xl text-black sm:text-4xl lg:text-[1.7rem]">Phone Number</span>
                    <input
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      type="tel"
                      className="h-16 border-0 border-b-2 border-black bg-transparent px-0 text-lg font-bold text-black outline-none placeholder:text-black/38 focus:border-black/60 lg:h-10 lg:text-base"
                      placeholder={contact.phone}
                    />
                  </label>
                </div>

                <label className="grid gap-3 lg:gap-2">
                  <span className="display-text text-3xl text-black sm:text-4xl lg:text-[1.7rem]">Email</span>
                  <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    className="h-16 border-0 border-b-2 border-black bg-transparent px-0 text-lg font-bold text-black outline-none placeholder:text-black/38 focus:border-black/60 lg:h-10 lg:text-base"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="grid gap-3 lg:gap-2">
                  <span className="display-text text-3xl text-black sm:text-4xl lg:text-[1.7rem]">Your Message</span>
                  <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    rows={4}
                    className="min-h-28 resize-none border-0 border-b-2 border-black bg-transparent px-0 py-3 text-lg font-bold leading-7 text-black outline-none placeholder:text-black/38 focus:border-black/60 lg:min-h-16 lg:text-base lg:leading-6"
                    placeholder="Tell me about the store, feature, role, or agency project."
                  />
                </label>

                <div className="flex justify-end pt-2 lg:pt-0">
                  <button
                    type="submit"
                    data-cursor="button"
                    className="focus-ring group inline-flex min-h-12 items-center gap-3 border-b-4 border-black pb-1 text-right font-black uppercase text-black transition hover:gap-5 hover:opacity-70 sm:text-2xl lg:text-lg"
                  >
                    Send A Message
                    <ArrowUpRight size={24} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              ref={footerRef}
              data-contact-footer="true"
              className="border-b-4 border-black pb-6 lg:pb-3"
              initial={false}
              animate={footerVisible ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(8px)" }}
              transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col gap-6 text-xs font-black uppercase text-black sm:flex-row sm:items-end sm:justify-between lg:gap-4 lg:text-[0.7rem]">
                <p>
                  Copyright (c) Muhammad Tallal Aamir 2026
                  <span className="mt-1 block text-black/58">Senior Shopify Developer / Development Lead</span>
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  {footerLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      download={link.download ? true : undefined}
                      aria-label={link.label === "Fiverr" ? "Open Fiverr profile" : undefined}
                      className="focus-ring inline-flex min-h-9 items-center gap-2 underline decoration-2 underline-offset-4 transition hover:opacity-60"
                      initial={false}
                      animate={footerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: footerVisible ? 0.1 + footerLinks.indexOf(link) * 0.055 : 0, duration: 0.38 }}
                    >
                      {link.label === "Fiverr" ? <FiverrIcon className="size-6" /> : link.label}
                      {link.download ? <Download size={14} /> : link.external ? <ArrowUpRight size={14} /> : null}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
