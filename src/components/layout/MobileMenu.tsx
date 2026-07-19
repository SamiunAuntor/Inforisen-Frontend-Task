"use client";

import { useState } from "react";
import { LockKeyhole, Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { GradientButton } from "@/components/shared/GradientButton";

const menuId = "mobile-navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
      </button>

      {isOpen && (
        <div
          id={menuId}
          className="absolute inset-x-0 top-[calc(100%+0.75rem)] z-20 rounded-2xl border border-black/5 bg-white p-3 shadow-[0_18px_50px_rgba(56,26,15,0.14)]"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-orange-50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <GradientButton href="#sign-in" className="mt-2 w-full" onClick={closeMenu}>
            <LockKeyhole aria-hidden="true" size={15} />
            Sign In
          </GradientButton>
        </div>
      )}
    </div>
  );
}
