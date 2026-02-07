"use client";


import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Sparkles, Printer, Phone, Mail, MapPin, CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import NeuralBackground from "@/components/ui/flow-field-background";

const MotionImage = motion(Image);

const services = [
    {
        icon: Palette,
        title: "Graphic Design",
        description: "Eye-catching flyers, posters, and social media graphics that make your brand stand out.",
        features: ["Flyers & Posters", "Social Media", "Logo Design"],
    },
    {
        icon: Sparkles,
        title: "Branding & Identity",
        description: "Complete visual identity including logos, color schemes, and brand guidelines.",
        features: ["Logo Creation", "Brand Guidelines", "Stationery Design"],
    },
    {
        icon: Printer,
        title: "Custom Printing",
        description: "High-quality printing on T-shirts, caps, mugs, banners, and promotional materials.",
        features: ["T-Shirt Printing", "Banner & Signs", "Promotional Items"],
    },
];

const featuredWork = [
    { image: "/assets/portfolio/afrimode-branding.jpg", title: "Complete Brand Identity", category: "Branding" },
    { image: "/assets/portfolio/polo-shirt.jpg", title: "Corporate Polo Shirts", category: "Printing" },
    { image: "/assets/portfolio/prayer-conference-tshirt.jpg", title: "Conference T-Shirt", category: "Church Materials" },
];

const stats = [
    { value: "200+", label: "Projects Completed" },
    { value: "200+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "100%", label: "Satisfaction Rate" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const Index = () => {
    return (
        <div>
            {/* MTN-Style Hero Section */}
            <section className="relative pt-32 md:pt-40 pb-20 hero-dark overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <NeuralBackground 
                        color="#818cf8"
                        trailOpacity={0.1}
                        speed={0.8}
                    />
                </div>
                <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/50" />
                
                {/* Decorative elements */}
                <motion.div 
                    className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div 
                    className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                
                <div className="container relative z-10 px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <motion.div 
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-6 border border-white/20"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Star size={16} className="fill-white" />
                                Ghana's Premier Design Studio
                            </motion.div>
                            
                            <motion.h1 
                                className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-white"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                Creative Design &{" "}
                                <span className="text-white/80">Printing</span>{" "}
                                Solutions
                            </motion.h1>
                            
                            <motion.p 
                                className="text-xl text-white/70 max-w-xl mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                Transform your ideas into captivating visual experiences. We deliver professional graphic design and high-quality printing services for businesses, churches, and events.
                            </motion.p>
                            
                            <motion.div 
                                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                    <Button variant="hero" size="xl" className="rounded-full bg-white text-foreground hover:bg-white/90" asChild>
                                        <Link href="/portfolio">
                                            View Our Work
                                            <ArrowRight size={20} />
                                        </Link>
                                    </Button>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                    <Button 
                                        variant="outline" 
                                        size="xl" 
                                        className="rounded-full border-white/30 text-white hover:bg-white/10"
                                        asChild
                                    >
                                        <Link href="/contact">Get a Free Quote</Link>
                                    </Button>
                                </motion.div>
                            </motion.div>

                            {/* Quick contact */}
                            <motion.div 
                                className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                            >
                                <a href="tel:0596214271" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                                    <Phone size={18} />
                                    <span className="text-sm">0596214271</span>
                                </a>
                                <a href="tel:0209797033" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                                    <Phone size={18} />
                                    <span className="text-sm">0209797033</span>
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Stats Cards */}
                        <motion.div 
                            className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                >
                                    <span className="text-3xl sm:text-4xl font-heading font-bold text-white block mb-1">
                                        {stat.value}
                                    </span>
                                    <span className="text-white/60 text-sm">{stat.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-background">
                <div className="container px-4 lg:px-8">
                    <motion.div 
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-foreground/10 text-foreground font-semibold text-sm mb-4">
                            Our Services
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 text-foreground">
                            What We Offer
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            From concept to completion, we provide end-to-end design and printing solutions tailored to your needs.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="group bg-card rounded-3xl p-8 border border-border hover:border-foreground/30 transition-all duration-300 hover:shadow-lg"
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                            >
                                <motion.div 
                                    className="w-16 h-16 rounded-2xl bg-foreground flex items-center justify-center mb-6"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <service.icon size={28} className="text-background" />
                                </motion.div>
                                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{service.title}</h3>
                                <p className="text-muted-foreground mb-6">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle size={16} className="text-foreground" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div 
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Button variant="outline" size="lg" className="rounded-full" asChild>
                            <Link href="/services">
                                View All Services
                                <ArrowRight size={18} />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Featured Work Section */}
            <section className="py-24 bg-muted">
                <div className="container px-4 lg:px-8">
                    <motion.div 
                        className="text-center max-w-3xl mx-auto mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-foreground/10 text-foreground font-semibold text-sm mb-4">
                            Portfolio
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 text-foreground">
                            Featured Projects
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Take a look at some of our recent work and see how we've helped businesses and organizations achieve their goals.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {featuredWork.map((work, index) => (
                            <motion.div
                                key={work.title}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                            >
                                <Link
                                    href="/portfolio"
                                    className="group block bg-card rounded-3xl overflow-hidden border border-border hover:border-foreground/30 transition-all duration-300 hover:shadow-lg"
                                >
                                    <div className="aspect-4/5 overflow-hidden relative">
                                        <MotionImage
                                            src={work.image}
                                            alt={work.title}
                                            fill
                                            className="object-cover"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                    <div className="p-6">
                                        <span className="inline-block px-3 py-1 rounded-full bg-foreground/10 text-foreground text-xs font-medium mb-2">
                                            {work.category}
                                        </span>
                                        <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-muted-foreground transition-colors">
                                            {work.title}
                                        </h3>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div 
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Button variant="hero" size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90" asChild>
                            <Link href="/portfolio">
                                View All Projects
                                <ArrowRight size={18} />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Strip */}
            <section className="py-20 bg-background">
                <div className="container px-4 lg:px-8">
                    <motion.div 
                        className="grid md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div 
                            className="bg-card rounded-3xl p-8 border border-border text-center hover:shadow-lg transition-all"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <motion.div 
                                className="w-16 h-16 rounded-2xl bg-foreground flex items-center justify-center mx-auto mb-4"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <Phone size={28} className="text-background" />
                            </motion.div>
                            <h3 className="font-heading font-bold text-lg mb-2 text-foreground">Call Us</h3>
                            <p className="text-muted-foreground">0596214271</p>
                            <p className="text-muted-foreground">0209797033</p>
                        </motion.div>
                        
                        <motion.div 
                            className="bg-card rounded-3xl p-8 border border-border text-center hover:shadow-lg transition-all"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <motion.div 
                                className="w-16 h-16 rounded-2xl bg-foreground flex items-center justify-center mx-auto mb-4"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <Mail size={28} className="text-background" />
                            </motion.div>
                            <h3 className="font-heading font-bold text-lg mb-2 text-foreground">Email Us</h3>
                            <p className="text-muted-foreground">kwamepiesie25@gmail.com</p>
                        </motion.div>
                        
                        <motion.div 
                            className="bg-card rounded-3xl p-8 border border-border text-center hover:shadow-lg transition-all"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <motion.div 
                                className="w-16 h-16 rounded-2xl bg-foreground flex items-center justify-center mx-auto mb-4"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <MapPin size={28} className="text-background" />
                            </motion.div>
                            <h3 className="font-heading font-bold text-lg mb-2 text-foreground">Visit Us</h3>
                            <p className="text-muted-foreground">Accra, Ghana</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 hero-dark">
                <div className="container px-4 lg:px-8">
                    <motion.div 
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 text-white">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                            Get in touch with us today for a free consultation and let's create something amazing together.
                        </p>
                        <motion.div 
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                            whileHover={{ scale: 1.02 }}
                        >
                            <Button variant="hero" size="xl" className="rounded-full bg-white text-foreground hover:bg-white/90" asChild>
                                <Link href="/contact">
                                    Contact Us Today
                                    <ArrowRight size={20} />
                                </Link>
                            </Button>
                            <Button 
                                variant="outline" 
                                size="xl" 
                                className="rounded-full border-white/30 text-white hover:bg-white/10"
                                asChild
                            >
                                <a href="tel:0596214271">
                                    <Phone size={20} />
                                    Call Now
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Index;
