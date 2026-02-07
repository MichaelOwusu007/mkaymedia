"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-white"
      )}
    >
      {/* Top contact bar */}
      <div className="bg-foreground text-background py-2 hidden md:block">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:0596214271"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone size={14} />
              <span>0596214271</span>
            </a>
            <span className="text-muted-foreground">|</span>
            <a
              href="tel:0209797033"
              className="hover:text-primary transition-colors"
            >
              0209797033
            </a>
          </div>

          <span className="text-muted-foreground">
            Your Creative Design Partner in Ghana
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* <Image
              src="/assets/logo.png"
              alt="MkayMedia logo"
              width={48}
              height={48}
              priority
              className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
            /> */}

            <div className="hidden sm:block leading-tight">
              <span className="font-heading font-bold text-xl text-foreground block">
                MkayMedia
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 bg-white",
            isOpen
              ? "max-h-105 pb-6 border-t border-border"
              : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl font-medium transition-all duration-300",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="px-4 pt-4 border-t border-border mt-2">
              <Button
                variant="hero"
                className="w-full rounded-full"
                asChild
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>

            <div className="px-4 pt-2 text-sm text-muted-foreground">
              <a href="tel:0596214271" className="hover:text-primary">
                0596214271
              </a>
              <span className="mx-2">|</span>
              <a href="tel:0209797033" className="hover:text-primary">
                0209797033
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
