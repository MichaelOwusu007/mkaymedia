"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import NextImage from "next/image";
import { 
  ArrowRight, 
  FileText, 
  Palette, 
  Shirt, 
  Image, 
  Share2, 
  Church, 
  Coffee, 
  Frame,
  Sticker,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Flyer Design",
    description: "Eye-catching business and event flyers designed to grab attention and drive action.",
    features: ["Business Flyers", "Event Flyers", "Promotional Flyers", "Double-sided Options"],
  },
  {
    icon: Share2,
    title: "Social Media Graphics",
    description: "Scroll-stopping social media content that engages your audience and grows your following.",
    features: ["Instagram Posts", "Facebook Ads", "Twitter Headers", "Story Templates"],
  },
  {
    icon: Church,
    title: "Church Materials",
    description: "Inspiring designs for religious events, programs, and congregational materials.",
    features: ["Event Posters", "Program Booklets", "Banners", "Announcement Cards"],
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    description: "Complete visual identity systems that define and distinguish your brand.",
    features: ["Logo Design", "Brand Guidelines", "Business Cards", "Letterheads"],
  },
  {
    icon: Shirt,
    title: "T-Shirt Printing",
    description: "Custom apparel printing with vibrant colors and durable results.",
    features: ["Screen Printing", "DTG Printing", "Bulk Orders", "Custom Designs"],
  },
  {
    icon: Coffee,
    title: "Promotional Products",
    description: "Branded merchandise that keeps your company top of mind.",
    features: ["Custom Mugs", "Branded Caps", "Tote Bags", "Corporate Gifts"],
  },
  {
    icon: Image,
    title: "Banner & Signage",
    description: "Large format printing for maximum visibility and impact.",
    features: ["Vinyl Banners", "Roll-up Displays", "Outdoor Signage", "Trade Show Displays"],
  },
  {
    icon: Frame,
    title: "Picture Frames",
    description: "Custom framing solutions to showcase your precious memories and artwork.",
    features: ["Photo Frames", "Certificate Frames", "Art Framing", "Gallery Walls"],
  },
  {
    icon: Sticker,
    title: "Stickers & Labels",
    description: "Custom stickers and labels for products, packaging, and promotional use.",
    features: ["Die-cut Stickers", "Product Labels", "Window Decals", "Vinyl Stickers"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We discuss your vision, goals, and requirements to understand exactly what you need.",
  },
  {
    step: "02",
    title: "Concept Design",
    description: "Our designers create initial concepts and mockups for your review and feedback.",
  },
  {
    step: "03",
    title: "Refinement",
    description: "We refine the designs based on your feedback until they're perfect.",
  },
  {
    step: "04",
    title: "Production",
    description: "Once approved, we produce your materials with the highest quality standards.",
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden hero-gradient">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <NextImage
            src="/assets/portfolio/hero-bg.jpg"
            alt="Services background"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-background/50 via-background/80 to-background" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow/10 rounded-full blur-3xl" />

        <div className="container relative z-10 px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mt-4 mb-6">
              Creative Solutions for <span className="text-gradient">Every Need</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From stunning graphic designs to premium printing, we offer comprehensive 
              services to bring your brand vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-card rounded-2xl p-8 border border-border card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-yellow to-yellow-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={28} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle size={16} className="text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-4 mb-6">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our streamlined process ensures you get exceptional results every time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-linear-to-r from-border to-transparent" />
                )}
                <div className="text-6xl font-heading font-bold text-gradient opacity-50 mb-4">
                  {step.step}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-24">
        <div className="container px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-linear-to-br from-navy-light to-card rounded-3xl p-10 lg:p-16 border border-border text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
                Need a <span className="text-gradient">Custom Quote?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Every project is unique. Contact us for a personalized quote tailored 
                to your specific requirements and budget.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link href="/contact">
                    Request a Quote
                    <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
