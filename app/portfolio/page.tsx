"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* Motion wrapper for next/image */
const MotionImage = motion(Image);

const categories = [
  "All",
  "Branding",
  "Printing",
  "Social Media",
  "Church Materials",
];

const portfolioItems = [
  {
    id: 1,
    image: "/assets/portfolio/high-school-visit.jpg",
    title: "High School Visitation Flyer",
    category: "Church Materials",
    description:
      "Dynamic event flyer design for Methodist Church Ghana Youth Development Ministry school visitation program.",
  },
  {
    id: 2,
    image: "/assets/portfolio/funeral-banner.jpg",
    title: "Memorial Banner Design",
    category: "Printing",
    description:
      "Elegant funeral announcement banner with professional typography and respectful design elements.",
  },
  {
    id: 3,
    image: "/assets/portfolio/polo-shirt.jpg",
    title: "Custom Polo Shirt Design",
    category: "Printing",
    description:
      "Professional branded polo shirt design with custom logo placement for corporate identity.",
  },
  {
    id: 4,
    image: "/assets/portfolio/frame-pricelist.png",
    title: "Frame Pricing Display",
    category: "Printing",
    description:
      "Professional price list design showcasing classic wooden lamination frames with various size options.",
  },
  {
    id: 5,
    image: "/assets/portfolio/social-media.jpg",
    title: "Social Media Campaign",
    category: "Social Media",
    description:
      "Complete social media graphics package including posts, stories, and profile assets.",
  },
  {
    id: 6,
    image: "/assets/portfolio/church-poster.jpg",
    title: "Church Conference Materials",
    category: "Church Materials",
    description:
      "Inspirational poster and program design for annual church conference and revival.",
  },
  {
    id: 7,
    image: "/assets/portfolio/afrimode-branding.jpg",
    title: "Complete Brand Identity",
    category: "Branding",
    description:
      "Full branding package including logo, merchandise, stationery, and promotional materials for AFRIMODE.",
  },
  {
    id: 8,
    image: "/assets/portfolio/frames.jpg",
    title: "Gallery Wall Collection",
    category: "Printing",
    description:
      "Custom picture frame designs and photo printing for residential gallery installation.",
  },
  {
    id: 9,
    image: "/assets/portfolio/youth-activities.jpg",
    title: "Youth Ministry Activities",
    category: "Church Materials",
    description:
      "Monthly activities poster design for St. Andrews Youth Ministry featuring event schedules and details.",
  },
  {
    id: 10,
    image: "/assets/portfolio/sharing-session.jpg",
    title: "Educational Session Poster",
    category: "Church Materials",
    description:
      "Modern sharing session pamphlet design with bold typography for HIMAPROSIF x EDUBIA collaboration event.",
  },
  {
    id: 11,
    image: "/assets/portfolio/branded-apparel.jpg",
    title: "Corporate Apparel Set",
    category: "Printing",
    description:
      "Branded t-shirts and caps collection with consistent logo placement for team uniforms.",
  },
  {
    id: 12,
    image: "/assets/portfolio/branded-aprons.jpg",
    title: "Restaurant Branding",
    category: "Branding",
    description:
      "Custom branded aprons and kitchen apparel for Bites Hub restaurant with playful design elements.",
  },
  {
    id: 13,
    image: "/assets/portfolio/rollup-food.jpg",
    title: "Restaurant Roll-Up Banner",
    category: "Printing",
    description:
      "Appetizing roll-up banner design for Sabane Fast-Food featuring grilled chicken promotion.",
  },
  {
    id: 14,
    image: "/assets/portfolio/rollup-corporate.jpg",
    title: "Corporate Roll-Up Display",
    category: "Printing",
    description:
      "Professional corporate roll-up banner with service highlights and contact information.",
  },
  {
    id: 15,
    image: "/assets/portfolio/christfest-tshirt.jpg",
    title: "Christ Fest T-Shirt",
    category: "Church Materials",
    description:
      "Creative church festival t-shirt design with vibrant green graphics and spiritual imagery.",
  },
  {
    id: 16,
    image: "/assets/portfolio/youth-ablaze-tshirt.jpg",
    title: "Youth Ablaze T-Shirt",
    category: "Church Materials",
    description:
      "Dynamic youth ministry t-shirt design for PCG Peniel with front and back artwork.",
  },
  {
    id: 17,
    image: "/assets/portfolio/prayer-conference-tshirt.jpg",
    title: "Prayer Conference T-Shirt",
    category: "Church Materials",
    description:
      "Connexional Prayer Conference 2024 t-shirt design with inspirational message and branding.",
  },
  {
    id: 18,
    image: "/assets/portfolio/church-flyer.jpg",
    title: "Now Ministering Flyer",
    category: "Church Materials",
    description:
      "Dynamic church conference flyer design for PCOP Jumapo District featuring guest minister at SwagUp Conference.",
  },
  {
    id: 19,
    image: "/assets/portfolio/wedding-program.jpg",
    title: "Wedding Program Design",
    category: "Printing",
    description:
      "Elegant wedding order of service program featuring teal and gold theme with ceremony details and photo sections.",
  },
  {
    id: 20,
    image: "/assets/portfolio/id-card-design.jpg",
    title: "Clergy ID Card Design",
    category: "Branding",
    description:
      "Professional clergy and associates ID card design with lanyard for CCC City of Praise Parish.",
  },
  {
    id: 21,
    image: "/assets/portfolio/street-wisdom-flyer.jpg",
    title: "Street Wisdom Flyer",
    category: "Church Materials",
    description:
      "Vibrant urban-style church event flyer for Faith Nation featuring bold typography and dynamic visuals.",
  },
  {
    id: 22,
    image: "/assets/portfolio/music-flyer.jpg",
    title: "Music Event Flyer",
    category: "Social Media",
    description:
      "Live recording experience flyer design for Gedeon K and Heros Jazzy music event promotion.",
  },
  {
    id: 23,
    image: "/assets/portfolio/photography-post.jpg",
    title: "Photography Social Media",
    category: "Social Media",
    description:
      "Professional photography booking social media post design with camera focus and contact details.",
  },
  {
    id: 24,
    image: "/assets/portfolio/branded-bag.jpg",
    title: "Branded Packaging",
    category: "Branding",
    description:
      "Custom branded nylon bag design for Silver's Artistry beauty salon with logo and service list.",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] =
    useState<(typeof portfolioItems)[0] | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((i) => i.category === activeCategory);

  return (
    <div>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden hero-gradient">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/assets/portfolio/hero-bg.jpg"
            alt="Creative design portfolio background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-background/50 via-background/80 to-background" />

        <div className="container relative z-10 px-4 lg:px-8">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              Our Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Creative Work That{" "}
              <span className="text-gradient">Speaks Volumes</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our collection of design and printing projects that
              showcase creativity, detail, and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="py-16">
        <div className="container px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-linear-to-r from-yellow to-yellow-dark text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group relative aspect-square overflow-hidden rounded-2xl text-left"
                  whileHover={{ y: -8 }}
                >
                  <div className="relative w-full h-full">
                    <MotionImage
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Text */}
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-yellow-400 text-xs font-semibold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="mt-1 text-lg font-heading font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedItem(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-card rounded-2xl overflow-hidden max-w-4xl w-full border border-border"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center"
              >
                <X />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative aspect-square">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <span className="text-primary uppercase text-sm">
                    {selectedItem.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-4">
                    {selectedItem.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {selectedItem.description}
                  </p>
                  <Button asChild variant="hero">
                    <Link href="/contact">
                      Request Similar Project
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-24 bg-card border-t border-border text-center">
        <h2 className="text-4xl font-bold mb-6">
          Like What You <span className="text-gradient">See?</span>
        </h2>
        <Button size="xl" variant="hero" asChild>
          <Link href="/contact">
            Start Your Project
            <ArrowRight size={20} />
          </Link>
        </Button>
      </section>
    </div>
  );
}
