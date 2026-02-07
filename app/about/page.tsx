import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Award, Users, Clock } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every pixel matters. We deliver designs with meticulous attention to detail.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We pour our creative energy into every project, treating your brand like our own.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Premium materials and cutting-edge techniques ensure exceptional results.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work closely with you, turning your vision into stunning visual reality.",
  },
];

const milestones = [
  { year: "2019", title: "Founded", description: "Kryptic Pixel Studio was born from a passion for creative design." },
  { year: "2020", title: "First 100 Clients", description: "Reached our first milestone of serving 100+ happy customers." },
  { year: "2021", title: "Printing Expansion", description: "Added full-scale custom printing services to our offerings." },
  { year: "2022", title: "Team Growth", description: "Expanded our team with talented designers and print specialists." },
  { year: "2023", title: "500+ Projects", description: "Celebrated completing over 500 successful design projects." },
];

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden hero-gradient">
        <div className="absolute inset-0">
          <Image
            src="/assets/portfolio/hero-bg.jpg"
            alt="Hero background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-background/50 via-background/80 to-background" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mt-4 mb-6">
              Crafting <span className="text-gradient">Visual Stories</span> That Inspire
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Kryptic Pixel Studio is a premier graphic design and printing company based in 
              Accra, Ghana. We transform ideas into captivating visual experiences that 
              elevate brands and connect with audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-10 border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-yellow/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <Eye className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-2xl font-heading font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading creative design and printing studio in West Africa, 
                recognized for innovative solutions, exceptional quality, and the ability 
                to transform any vision into stunning visual reality that makes lasting 
                impressions.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-10 border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-yellow-dark/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <Target className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-2xl font-heading font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional graphic design and premium printing services that 
                exceed client expectations. We combine creativity, technology, and dedication 
                to help businesses, organizations, and individuals communicate their message 
                effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-4 mb-6">
              From Passion to <span className="text-gradient">Purpose</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Kryptic Pixel Studio started with a simple belief: every brand deserves 
              exceptional visual representation. What began as a small design studio 
              has grown into a full-service creative agency, serving clients across 
              Ghana and beyond.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />
            
            <div className="space-y-8 lg:space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`flex flex-col lg:flex-row items-center gap-6 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-background rounded-xl p-6 border border-border inline-block">
                      <span className="text-primary font-heading font-bold text-lg">{milestone.year}</span>
                      <h3 className="font-heading font-semibold text-xl mt-2">{milestone.title}</h3>
                      <p className="text-muted-foreground mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-yellow to-yellow-dark flex items-center justify-center font-heading font-bold shrink-0 z-10 text-primary-foreground">
                    <Clock size={20} />
                  </div>
                  
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Core Values</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-4 mb-6">
              What <span className="text-gradient">Drives Us</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our values shape everything we do, from the smallest design detail 
              to the largest print production.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-8 border border-border text-center card-hover"
              >
                <div className="w-16 h-16 rounded-xl bg-linear-to-br from-yellow to-yellow-dark flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Let's Create Something <span className="text-gradient">Amazing Together</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Ready to elevate your brand? We'd love to hear about your project.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link href="/contact">
                Start a Conversation
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
