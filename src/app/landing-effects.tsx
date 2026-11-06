"use client";

import { useEffect } from "react";

const ATTRIBUTION_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "utm_id"];
const COUNTDOWN_MS = 10 * 60 * 1000;
const COUNTDOWN_KEY = "brl-offer-deadline:bordadorusso";

/**
 * Comportamentos da página de referência: loop do carrossel do hero, revelar ao
 * rolar, cronômetro de 10 minutos (guardado na sessão), UTMs repassadas para o
 * checkout e FAQ com um item aberto por vez.
 */
export default function LandingEffects() {
  useEffect(() => {
    const root = document.getElementById("brl");
    if (!root) return;
    const cleanups: (() => void)[] = [];

    // Carrossel do hero: mede a distância entre os dois grupos para o loop não pular.
    const heroRail = root.querySelector<HTMLElement>("[data-brl-hero-rail]");
    if (heroRail) {
      const groups = heroRail.querySelectorAll<HTMLElement>(".brl__hero-results-group");
      let frame = 0;
      const measure = () => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          if (groups.length !== 2) return;
          const distance =
            Math.round((groups[1].getBoundingClientRect().left - groups[0].getBoundingClientRect().left) * 1000) / 1000;
          if (!distance || Number(heroRail.dataset.brlLoopDistance) === distance) {
            heroRail.classList.add("is-ready");
            return;
          }
          heroRail.classList.remove("is-ready");
          heroRail.style.setProperty("--brl-hero-loop-distance", `-${distance}px`);
          heroRail.dataset.brlLoopDistance = String(distance);
          void heroRail.offsetWidth;
          heroRail.classList.add("is-ready");
        });
      };
      measure();
      window.addEventListener("load", measure, { once: true });
      window.addEventListener("resize", measure, { passive: true });
      const observer = new ResizeObserver(measure);
      groups.forEach((group) => observer.observe(group));
      cleanups.push(() => {
        cancelAnimationFrame(frame);
        window.removeEventListener("load", measure);
        window.removeEventListener("resize", measure);
        observer.disconnect();
      });
    }

    // UTMs da URL vão junto para o checkout.
    const landingParams = new URLSearchParams(window.location.search);
    const attribution = new URLSearchParams();
    ATTRIBUTION_KEYS.forEach((key) => {
      const value = landingParams.get(key);
      if (value) attribution.set(key, value);
    });
    if (Array.from(attribution).length) {
      root.querySelectorAll<HTMLAnchorElement>("[data-brl-checkout-link]").forEach((link) => {
        if (link.getAttribute("href")?.startsWith("#")) return;
        try {
          const destination = new URL(link.href, window.location.href);
          attribution.forEach((value, key) => destination.searchParams.set(key, value));
          link.href = destination.toString();
        } catch {}
      });
    }

    // Revelar ao rolar.
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = root.querySelectorAll(".brl__reveal");
    if (!reducedMotion && "IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
      );
      revealItems.forEach((item) => revealObserver.observe(item));
      cleanups.push(() => revealObserver.disconnect());
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    // Depoimentos sempre começam do primeiro.
    const proofRail = root.querySelector<HTMLElement>(".brl__proof-grid");
    const resetProofRail = () => {
      if (!proofRail) return;
      const previous = proofRail.style.scrollBehavior;
      proofRail.style.scrollBehavior = "auto";
      proofRail.scrollLeft = 0;
      requestAnimationFrame(() => {
        proofRail.scrollLeft = 0;
        proofRail.style.scrollBehavior = previous;
      });
    };
    resetProofRail();
    window.addEventListener("pageshow", resetProofRail, { passive: true });
    cleanups.push(() => window.removeEventListener("pageshow", resetProofRail));

    // Cronômetro da oferta.
    const countdowns = Array.from(root.querySelectorAll<HTMLElement>("[data-brl-countdown]"));
    let deadline = 0;
    try {
      deadline = Number(sessionStorage.getItem(COUNTDOWN_KEY));
    } catch {}
    if (!Number.isFinite(deadline) || deadline <= Date.now()) {
      deadline = Date.now() + COUNTDOWN_MS;
      try {
        sessionStorage.setItem(COUNTDOWN_KEY, String(deadline));
      } catch {}
    }
    const tick = () => {
      const remaining = Math.max(0, deadline - Date.now());
      const total = Math.ceil(remaining / 1000);
      const minutes = String(Math.floor(total / 60)).padStart(2, "0");
      const seconds = String(total % 60).padStart(2, "0");
      countdowns.forEach((countdown) => {
        const m = countdown.querySelector("[data-brl-minutes]");
        const s = countdown.querySelector("[data-brl-seconds]");
        if (m) m.textContent = minutes;
        if (s) s.textContent = seconds;
        countdown.classList.toggle("is-expired", remaining === 0);
      });
      if (remaining === 0) clearInterval(interval);
    };
    const interval = window.setInterval(tick, 1000);
    tick();
    cleanups.push(() => clearInterval(interval));

    // FAQ: abrir um fecha os outros.
    const faqItems = Array.from(root.querySelectorAll<HTMLDetailsElement>(".brl__faq-item"));
    const onToggle = (event: Event) => {
      const item = event.currentTarget as HTMLDetailsElement;
      if (!item.open) return;
      faqItems.forEach((other) => {
        if (other !== item) other.removeAttribute("open");
      });
    };
    faqItems.forEach((item) => item.addEventListener("toggle", onToggle));
    cleanups.push(() => faqItems.forEach((item) => item.removeEventListener("toggle", onToggle)));

    // Enquanto não houver checkout, os botões rolam até o bloco da oferta.
    const buyTarget = root.querySelector<HTMLElement>("#brl-buy");
    const buyLinks = root.querySelectorAll<HTMLAnchorElement>('a[href="#brl-buy"]');
    const scrollToBuy = (event: Event) => {
      event.preventDefault();
      requestAnimationFrame(() =>
        buyTarget?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "end", inline: "nearest" }),
      );
    };
    buyLinks.forEach((link) => link.addEventListener("click", scrollToBuy));
    cleanups.push(() => buyLinks.forEach((link) => link.removeEventListener("click", scrollToBuy)));

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
