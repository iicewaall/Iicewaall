"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/data";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  // Highlight the nav link of the section on screen
  useEffect(() => {
    const onScroll = () => {
      let cur = "#top";
      nav.forEach(({ href }) => {
        const el = document.querySelector(href);
        if (el && el.getBoundingClientRect().top <= 120) cur = href;
      });
      setActive(cur);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header" id="top">
      <div className="wrap header-inner">
        <a href="#top" className="logo" aria-label="IICE WAALL home">
          <img src={`${base}/assets/logo-sm.png`} alt="IICE WAALL" width={130} height={87} />
        </a>
        <nav className={`nav${open ? " open" : ""}`} id="nav" aria-label="Primary">
          {nav.map(({ href, label }) => (
            <a key={href} href={href} className={active === href ? "active" : undefined} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-primary hdr-quote">
          Get Quote <span aria-hidden="true">→</span>
        </a>
        <button className="menu-btn" aria-label="Open menu" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
