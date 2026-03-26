"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { locales, localeNames, type Locale } from "@/lib/i18n";

interface LanguageSwitcherProps {
  locale: string;
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function getLocalePath(targetLocale: string) {
    // Replace current locale in path with target locale
    const segments = pathname.split("/");
    segments[1] = targetLocale;
    return segments.join("/");
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-xs font-medium px-2.5 py-1.5 border border-border text-text-secondary hover:text-foreground hover:border-foreground/30 transition-colors uppercase tracking-wide"
        aria-label="Change language"
      >
        {locale}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 bg-surface border border-border shadow-lg z-50 min-w-[120px]">
          {locales.map((l) => (
            <Link
              key={l}
              href={getLocalePath(l)}
              onClick={() => {
                setIsOpen(false);
                // Set cookie for locale preference
                document.cookie = `NEXT_LOCALE=${l};path=/;max-age=${60 * 60 * 24 * 365}`;
              }}
              className={`block px-4 py-2 text-sm transition-colors ${
                l === locale
                  ? "text-foreground font-medium bg-neutral-100"
                  : "text-text-muted hover:text-foreground hover:bg-neutral-50"
              }`}
            >
              {localeNames[l as Locale]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
