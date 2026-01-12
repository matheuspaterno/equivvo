"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

const LOGO_SRC = "/equivvologo.png";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/about", label: "About" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const items = useMemo(
    () =>
      navItems.map((item) => ({
        ...item,
        active: isActive(pathname, item.href),
      })),
    [pathname],
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Equivvo">
          <Image
            src={LOGO_SRC}
            alt="Equivvo"
            width={27}
            height={27}
            priority
            className="h-[27px] w-[27px] rounded-sm"
          />
          <span className="font-serif text-lg tracking-[0.14em]">equivvo</span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground/80 hover:text-foreground sm:hidden"
          aria-expanded={open}
          aria-controls="equivvo-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>

        <nav id="equivvo-nav" className="hidden items-center gap-2 sm:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.active
                  ? "rounded-md bg-surface px-3 py-2 text-sm font-medium text-foreground"
                  : "rounded-md px-3 py-2 text-sm text-foreground/70 hover:bg-surface hover:text-foreground"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile */}
      {open ? (
        <div className="border-t border-border bg-background sm:hidden">
          <nav className="mx-auto max-w-6xl px-4 py-3">
            <div className="grid gap-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    item.active
                      ? "rounded-md bg-surface px-3 py-2 text-sm font-medium text-foreground"
                      : "rounded-md px-3 py-2 text-sm text-foreground/70 hover:bg-surface hover:text-foreground"
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
