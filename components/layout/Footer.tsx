"use client";


import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Flyer Design",
  "Branding & Identity",
  "T-Shirt Printing",
  "Banner Design",
  "Social Media Graphics",
  "Event Materials",
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* CTA Strip */}
      <div className="bg-muted py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-heading font-bold text-xl text-foreground">Ready to start your project?</h3>
              <p className="text-muted-foreground">Get in touch for a free consultation today.</p>
            </div>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-2 border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-background"
              asChild
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-3">
              {/* <div className="bg-background p-2 rounded-xl">
                <Image src="/assets/logo.png" alt="MkayMedia logo" className="h-10 w-auto" width={40} height={40} />
              </div> */}
              <div>
                <span className="font-heading font-bold text-xl block text-background">
                  MkayMedia
                </span>
               
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Your creative partner for stunning graphic design and high-quality
              printing solutions. We bring your vision to life.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-background hover:text-foreground transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading font-semibold text-lg mb-6 text-background">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading font-semibold text-lg mb-6 text-background">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <span className="text-background/70">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading font-semibold text-lg mb-6 text-background">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-foreground" />
                </div>
                <div>
                  <span className="text-background/70 text-sm">
                    123 Creative Street, Accra,<br />
                    Greater Accra Region, Ghana
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-foreground" />
                </div>
                <div className="flex flex-col">
                  <a
                    href="tel:0596214271"
                    className="text-background/70 text-sm hover:text-background transition-colors"
                  >
                    0596214271
                  </a>
                  <a
                    href="tel:0209797033"
                    className="text-background/70 text-sm hover:text-background transition-colors"
                  >
                    0209797033
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-foreground" />
                </div>
                <a
                  href="mailto:kwamepiesie25@gmail.com"
                  className="text-background/70 text-sm hover:text-background transition-colors"
                >
                  kwamepiesie25@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Kryptic Pixel Studio. All rights reserved.
          </p>
          <p className="text-background/60 text-sm">
            Designed with ❤️ in Ghana
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
