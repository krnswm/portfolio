"use client";
import { useEffect } from "react";

// Theme toggle, work filters, mobile menu, copy button and scroll reveal.
export default function Interactive() {
  useEffect(() => {
    const ac = new AbortController();
    const on = (el, fn) => el.addEventListener("click", fn, { signal: ac.signal });
    const $ = (id) => document.getElementById(id);
    const root = document.documentElement;

    /* Work filters */
    const chips = document.querySelectorAll(".chip");
    chips.forEach((chip) => on(chip, () => {
      chips.forEach((c) => c.classList.toggle("is-active", c === chip));
      document.querySelectorAll("#work-grid .card").forEach((card) => {
        card.hidden = !card.dataset.cats.split(" ").includes(chip.dataset.filter);
      });
    }));

    /* Copy email */
    document.querySelectorAll(".copy-btn").forEach((b) => on(b, () => {
      const done = (m) => { b.textContent = m; setTimeout(() => { b.textContent = "Copy"; }, 1500); };
      if (navigator.clipboard) navigator.clipboard.writeText(b.dataset.copy).then(() => done("Copied"), () => done("Press Ctrl+C"));
    }));

    /* Theme toggle */
    const toggle = $("theme-toggle");
    const syncToggle = () => {
      const dark = root.dataset.theme !== "light";
      toggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#0E0D0F" : "#FAF9F7");
    };
    on(toggle, () => {
      root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
      try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
      syncToggle();
    });
    syncToggle();

    /* Mobile menu */
    const nav = $("nav"), menuBtn = $("menu-toggle");
    on(menuBtn, () => {
      const open = nav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", open);
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    const links = nav.querySelectorAll("a");
    links.forEach((a) => on(a, () => { nav.classList.remove("is-open"); menuBtn.setAttribute("aria-expanded", "false"); }));

    /* Highlight current section in nav */
    const secObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) links.forEach((a) => a.classList.toggle("is-current", a.getAttribute("href") === "#" + e.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["work", "acting", "content", "about"].forEach((id) => secObs.observe($(id)));

    /* Reveal on scroll */
    const revObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); revObs.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach((el) => revObs.observe(el));

    return () => { ac.abort(); secObs.disconnect(); revObs.disconnect(); };
  }, []);
  return null;
}
