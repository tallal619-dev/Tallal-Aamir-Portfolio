"use client";

import Shuffle from "@/components/react-bits/Shuffle";

export function NeonName() {
  return (
    <section
      aria-label="Muhammad Tallal Aamir"
      className="relative isolate overflow-hidden border-y border-lime/35 bg-lime px-4 py-20 text-center text-black sm:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-35 mix-blend-multiply"
        style={{
          background:
            "radial-gradient(circle at 20% 18%, rgba(255,255,255,0.9), transparent 26rem), radial-gradient(circle at 82% 52%, rgba(0,61,43,0.58), transparent 28rem), linear-gradient(90deg, rgba(0,0,0,0.08), transparent 36%, rgba(0,0,0,0.14))"
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:34px_34px] opacity-25" aria-hidden="true" />

      <Shuffle
        text="Muhammad Tallal Aamir"
        tag="h2"
        className="relative z-10 max-w-6xl text-[3.25rem] font-black leading-none tracking-normal text-black drop-shadow-[0_0_26px_rgba(255,255,255,0.42)] sm:text-[5.4rem] md:text-[6.8rem] lg:text-[8.2rem]"
        shuffleDirection="right"
        duration={0.42}
        animationMode="evenodd"
        shuffleTimes={2}
        ease="power3.out"
        stagger={0.025}
        threshold={0.2}
        rootMargin="-80px"
        triggerOnce={false}
        triggerOnHover={true}
        respectReducedMotion={true}
        scrambleCharset="TALLAAMIR01"
        colorFrom="#003d2b"
        colorTo="#050806"
      />
    </section>
  );
}
