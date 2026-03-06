"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Building2, Eye, CheckCircle2, Palette, Users, MessageCircle, Sparkles, ArrowRightLeft, Cog, Footprints, Home, Zap, Shield, Hammer, Trees, Droplet, Frame, Lightbulb, Crown, Phone } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link';

interface BeforeAfterImagePair {
  beforeSrc: string;
  afterSrc: string;
  title: string;
}

const BeforeAfterCard: React.FC<{
  pair: BeforeAfterImagePair;
  isHovered: boolean;
}> = ({ pair, isHovered }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  return (
    <div
      className="relative w-full h-64 rounded-lg overflow-hidden cursor-col-resize bg-gray-900"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSliderPosition(50)}
    >
      <div className="absolute inset-0">
        <img
          src={pair.afterSrc}
          alt="After"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={pair.beforeSrc}
          alt="Before"
          className="w-full h-full object-cover"
          style={{ width: `${(100 / sliderPosition) * 100}%` }}
        />
      </div>
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-colors"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
          <ArrowRightLeft size={16} className="text-gray-900" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
        <p className="text-white text-sm font-semibold">{pair.title}</p>
      </div>
    </div>
  );
};

export default function LandingPage() {
  const [servicesHoveredCard, setServicesHoveredCard] = useState<string | null>(null);
  const [galleryHoveredCard, setGalleryHoveredCard] = useState<string | null>(null);

  const beforeAfterPairs: BeforeAfterImagePair[] = [
    {
      beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-lbulq2e9.jpg?_wi=1",      afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-uklcyhsf.jpg?_wi=1",      title: "Modern Interlock Driveway – North York"
    },
    {
      beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-ok3joqnq.jpg?_wi=1",      afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=1",      title: "Contemporary Patio Design – Toronto"
    },
    {
      beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-uklcyhsf.jpg?_wi=2",      afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-lbulq2e9.jpg?_wi=2",      title: "Luxury Stone Entry – Vaughan"
    }
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="largeSmallSizeLargeTitles"
      background="none"
      cardStyle="outline"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Taishan"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Gallery", id: "gallery" },
            { name: "Showroom", id: "showroom" },
            { name: "Process", id: "process" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Designing Outdoor Spaces Worth Coming Home To"
          description="Transform your property into a luxurious outdoor sanctuary through thoughtful design, exceptional craftsmanship, and meticulous planning. Every project begins with vision and precision."
          tag="Architectural Design"
          tagIcon={Building2}
          tagAnimation="slide-up"
          buttons={[
            { text: "Start Designing Your Space", href: "#contact" },
            { text: "View Our Work", href: "#gallery" }
          ]}
          buttonAnimation="slide-up"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-lbulq2e9.jpg?_wi=1",              imageAlt: "Premium project showcase"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-uklcyhsf.jpg?_wi=1",              imageAlt: "Luxury construction detail"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-ok3joqnq.jpg?_wi=1",              imageAlt: "Contemporary design"
            }
          ]}
          mediaAnimation="slide-up"
          background={{ variant: "plain" }}
          textBoxClassName="max-w-2xl"
          titleClassName="text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          descriptionClassName="text-lg lg:text-xl leading-relaxed"
          tagClassName="inline-flex items-center gap-2 font-semibold uppercase tracking-wider"
        />
      </div>

      <div id="taishan-effect" data-section="taishan-effect">
        <SplitAbout
          title="The Taishan Approach"
          description="A refined methodology combining architectural precision, cutting-edge visualization, and curated material expertise to create outdoor spaces of enduring beauty."
          tag="Design Excellence"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          imagePosition="right"
          mediaAnimation="slide-up"
          bulletPoints={[
            {
              title: "Strategic Planning & Conceptualization",              description: "We begin with a comprehensive vision, understanding your lifestyle and aesthetic preferences to craft a thoughtful design narrative",              icon: Eye
            },
            {
              title: "Photorealistic 3D Visualization",              description: "Our advanced rendering technology transforms concepts into crystal-clear three-dimensional designs, revealing every material, finish, and spatial relationship before construction",              icon: CheckCircle2
            },
            {
              title: "Curated Material Selection",              description: "Access to premium architectural materials and finishes, expertly curated and displayed in our showroom for confident, informed decisions",              icon: Palette
            },
            {
              title: "Masterful Execution",              description: "Certified installation specialists with deep expertise in luxury hardscape construction and meticulous attention to architectural detail",              icon: Users
            },
            {
              title: "Transparent Collaboration",              description: "Clear communication throughout every phase, with professional project management ensuring your vision becomes reality on schedule",              icon: MessageCircle
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-ok3joqnq.jpg?_wi=1"
          imageAlt="Material showroom display"
          buttons={[{ text: "Explore Our Approach", href: "#contact" }]}
          buttonAnimation="slide-up"
          titleClassName="text-5xl font-bold mb-4"
          descriptionClassName="text-lg leading-relaxed mb-8"
          bulletTitleClassName="text-xl font-semibold mb-2"
        />
      </div>

      <div id="3d-design" data-section="3d-design">
        <FeatureHoverPattern
          title="Step Into Your Future Backyard"
          description="Experience the emotional transformation of your outdoor space before the first stone is laid. Our immersive 3D renderings reveal not just what your project will look like, but how it will feel—the ambiance, the flow, the experience of luxury design realized."
          tag="Visualization Technology"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          features={[
            {
              icon: Eye,
              title: "Immersive Design Experience",              description: "Step into your future. Our photorealistic renderings show lighting, materials, landscaping, and the emotional character of your completed transformation",              button: { text: "Request Your Vision", href: "#contact" }
            },
            {
              icon: ArrowRightLeft,
              title: "Concept to Reality Comparison",              description: "Side-by-side visualizations of your current property and the finished design, revealing the transformative power of thoughtful architectural planning"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
          buttons={[{ text: "Begin Your Design Journey", href: "#contact" }]}
          cardTitleClassName="text-5xl font-bold mb-4"
        />
      </div>

      <div id="services" data-section="services">
        <div className="px-6 lg:px-12 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-cta mb-2">Design + Craftsmanship</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Architectural Specialties</h2>
              <p className="text-lg text-foreground/80">Premium outdoor design and construction across the Greater Toronto Area. Each commission represents a collaboration in creating spaces of lasting beauty and function.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  id: "interlock",                  icon: Cog,
                  title: "Architectural Interlock Driveways",                  description: "Premium interlock paving systems designed with precision and executed with masterful craftsmanship"
                },
                {
                  id: "patios",                  icon: Palette,
                  title: "Custom Outdoor Sanctuaries",                  description: "Thoughtfully designed patio spaces transforming properties into luxurious outdoor experiences"
                },
                {
                  id: "walkways",                  icon: Footprints,
                  title: "Signature Pathway Design",                  description: "Architecturally composed walkways connecting spaces with refined elegance and functionality"
                },
                {
                  id: "retaining",                  icon: Building2,
                  title: "Structural Stone Elements",                  description: "Engineered retaining walls combining aesthetic refinement with enduring structural integrity"
                },
                {
                  id: "porches",                  icon: Home,
                  title: "Natural Stone Entry Statements",                  description: "Premium stone features creating commanding first impressions and architectural distinction"
                },
                {
                  id: "lighting",                  icon: Zap,
                  title: "Curated Landscape Illumination",                  description: "Professional lighting design systems enhancing ambiance, function, and architectural character"
                }
              ].map((service) => (
                <div
                  key={service.id}
                  className="relative group"
                  onMouseEnter={() => setServicesHoveredCard(service.id)}
                  onMouseLeave={() => setServicesHoveredCard(null)}
                >
                  <div className="p-6 rounded-lg border border-accent/20 bg-card hover:border-primary-cta/40 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary-cta mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-foreground/70 text-sm">{service.description}</p>
                  </div>
                  {servicesHoveredCard === service.id && (
                    <div className="absolute inset-0 rounded-lg bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="text-center text-white p-4">
                        <p className="font-semibold">Explore our portfolio</p>
                        <p className="text-sm text-white/80">of completed transformations</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-card rounded-lg p-8 border border-accent/20">
              <h3 className="text-2xl font-bold mb-6">Design Excellence Gallery</h3>
              <p className="text-foreground/80 mb-8">Hover to compare architectural renderings with realized projects:</p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {beforeAfterPairs.map((pair, index) => (
                  <BeforeAfterCard
                    key={index}
                    pair={pair}
                    isHovered={galleryHoveredCard === `service-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="gallery" data-section="gallery">
        <div className="px-6 lg:px-12 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-cta mb-2">Project Portfolio</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Architectural Commissions</h2>
              <p className="text-lg text-foreground/80">A curated selection of premium outdoor design projects across the Greater Toronto Area, each representing our commitment to transformative craftsmanship.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  id: "project-1",                  title: "Luxury Residential Development",                  category: "Modern Hardscape – Scarborough",                  beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-ok3joqnq.jpg?_wi=2",                  afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-lbulq2e9.jpg?_wi=2",                  description: "Precision-crafted hardscape showcasing refined design and meticulous execution"
                },
                {
                  id: "project-2",                  title: "Contemporary Hardscape Design",                  category: "Architectural Interlock – Toronto",                  beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=2",                  afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-uklcyhsf.jpg?_wi=2",                  description: "Large format architectural design with sophisticated material composition and refined finishing"
                },
                {
                  id: "project-3",                  title: "Luxury Outdoor Living Space",                  category: "Premium Patio – North York",                  beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-lbulq2e9.jpg?_wi=3",                  afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-ok3joqnq.jpg?_wi=3",                  description: "Complete outdoor transformation merging design vision with architectural precision"
                },
                {
                  id: "project-4",                  title: "Premium Patio Entertainment Area",                  category: "Multi-Level Design – Vaughan",                  beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-uklcyhsf.jpg?_wi=3",                  afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=3",                  description: "Sophisticated multi-level composition with integrated features and ambient illumination"
                },
                {
                  id: "project-5",                  title: "Natural Stone Entry Design",                  category: "Stone Architecture – Markham",                  beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-ok3joqnq.jpg?_wi=4",                  afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-uklcyhsf.jpg?_wi=4",                  description: "Bespoke stone elements creating architectural distinction and timeless curb appeal"
                },
                {
                  id: "project-6",                  title: "Professional Landscape Installation",                  category: "Landscape Transformation – Richmond Hill",                  beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-lbulq2e9.jpg?_wi=4",                  afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-ok3joqnq.jpg?_wi=4",                  description: "Comprehensive landscape composition enhancing property flow and spatial experience"
                }
              ].map((project) => (
                <div
                  key={project.id}
                  className="group"
                  onMouseEnter={() => setGalleryHoveredCard(project.id)}
                  onMouseLeave={() => setGalleryHoveredCard(null)}
                >
                  <div className="rounded-lg overflow-hidden border border-accent/20">
                    {galleryHoveredCard === project.id ? (
                      <BeforeAfterCard
                        pair={{
                          beforeSrc: project.beforeSrc,
                          afterSrc: project.afterSrc,
                          title: project.title
                        }}
                        isHovered={true}
                      />
                    ) : (
                      <div className="h-64 relative overflow-hidden">
                        <img
                          src={project.afterSrc}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
                          <p className="text-xs text-white/70 mb-2">{project.category}</p>
                          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                          <p className="text-sm text-white/80 mt-2">{project.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="showroom" data-section="showroom">
        <SplitAbout
          title="The Design Experience Showroom"
          description="Step into our curated space to explore premium materials, finishes, and design possibilities. Our expert team guides you through every option to refine your architectural vision."
          tag="Material Consultation"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          imagePosition="left"
          mediaAnimation="slide-up"
          bulletPoints={[
            {
              title: "Experience Materials In Their Element",              description: "Touch, see, and envision authentic materials and finishes in carefully curated displays designed to inspire confident selections",              icon: Eye
            },
            {
              title: "Design Consultation With Experts",              description: "Our specialists help refine your vision, balancing aesthetic aspirations with practical considerations and budget parameters",              icon: Users
            },
            {
              title: "Render-to-Reality Visualization",              description: "Compare your 3D architectural renderings with actual samples to ensure perfect harmony between design vision and final execution",              icon: Lightbulb
            },
            {
              title: "Access to Exclusive Collections",              description: "Discover premium architectural materials and professional-grade systems typically reserved for high-end design projects",              icon: Crown
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=1"
          imageAlt="Material showroom samples and display"
          buttons={[{ text: "Schedule Your Consultation", href: "#contact" }]}
          buttonAnimation="slide-up"
          titleClassName="text-5xl font-bold mb-4"
          descriptionClassName="text-lg leading-relaxed mb-8"
        />
      </div>

      <div id="process" data-section="process">
        <MetricCardTen
          title="The Design & Build Journey"
          description="A collaborative process grounded in precision planning, transparent communication, and architectural excellence at every stage."
          tag="Professional Process"
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",              title: "Architectural Vision Discovery",              subtitle: "Understanding your lifestyle, aesthetic preferences, and project aspirations in depth",              category: "Step 1",              value: "Complimentary"
            },
            {
              id: "2",              title: "Design Development & Rendering",              subtitle: "Photorealistic 3D visualizations revealing every detail before construction commences",              category: "Step 2",              value: "Included"
            },
            {
              id: "3",              title: "Master Craftsmanship Execution",              subtitle: "Specialized installation teams bringing architectural precision to every element of your project",              category: "Step 3",              value: "Fully Insured"
            },
            {
              id: "4",              title: "Final Realization & Stewardship",              subtitle: "Comprehensive walkthrough, final refinements, and warranty protection ensuring lasting beauty",              category: "Step 4",              value: "Guaranteed"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          textBoxTitleClassName="text-5xl font-bold mb-4"
          textBoxDescriptionClassName="text-lg leading-relaxed mb-8"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Trusted By Discerning Homeowners Across the GTA"
          description="Discover what our clients value most: architectural vision realized, transformative design, and uncompromising craftsmanship."
          tag="Client Testimonials"
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              title: "Complete Driveway Transformation",              quote: "Taishan elevated our driveway from ordinary to extraordinary. The 3D design process was revelatory—seeing the final vision before construction meant we could make truly confident decisions. The installation team's precision and professionalism exceeded every expectation.",              name: "Jennifer Chen",              role: "Toronto Homeowner",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=2",              imageAlt: "Jennifer Chen"
            },
            {
              id: "2",              title: "Architectural Patio Masterpiece",              quote: "They didn't just build a patio—they created an outdoor sanctuary that transformed how we experience our property. The design process was collaborative, the vision brought to life with masterful precision. This is luxury redefined.",              name: "Michael Rodriguez",              role: "Vaughan Homeowner",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=3",              imageAlt: "Michael Rodriguez"
            },
            {
              id: "3",              title: "Design Sophistication & Excellence",              quote: "From consultation through completion, every interaction reflected true professionalism and architectural expertise. Their material showroom made material selection feel like an art form. The finished result is stunning—every detail matters.",              name: "Sarah Thompson",              role: "North York Resident",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=4",              imageAlt: "Sarah Thompson"
            },
            {
              id: "4",              title: "Transformative Architectural Vision",              quote: "This is clearly a design-focused architecture firm, not a conventional contractor. The entire journey felt premium—from the initial vision consultation through the final reveal. Our property has been architecturally transformed.",              name: "David Park",              role: "Markham Homeowner",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=5",              imageAlt: "David Park"
            },
            {
              id: "5",              title: "Precision & Craftsmanship",              quote: "Exceptional expertise and meticulous attention to detail in every phase. The team's knowledge of materials and execution was evident in every interaction. Our foundation improvements are built to last for generations.",              name: "Lisa Martinez",              role: "Richmond Hill Homeowner",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=6",              imageAlt: "Lisa Martinez"
            },
            {
              id: "6",              title: "Complete Outdoor Transformation",              quote: "Taishan coordinated our entire backyard renovation—patio, landscape architecture, and professional lighting—into a cohesive masterpiece. The transformation is breathtaking. We now have the outdoor sanctuary we've always envisioned.",              name: "Robert Williams",              role: "Scarborough Homeowner",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=7",              imageAlt: "Robert Williams"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          textBoxTitleClassName="text-5xl font-bold mb-4"
          textBoxDescriptionClassName="text-lg leading-relaxed mb-8"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Let's Create Something Exceptional"
          ctaDescription="Start planning your outdoor transformation today. Your first consultation includes a comprehensive site assessment and complimentary architectural concepts."
          ctaButton={{
            text: "Start Your Project",            href: "mailto:info@taishanconstruction.com?subject=Begin%20My%20Design%20Consultation"
          }}
          ctaIcon={Sparkles}
          useInvertedBackground={false}
          animationType="slide-up"
          faqs={[
            {
              id: "1",              title: "Which areas do you serve?",              content: "We serve the entire Greater Toronto Area (GTA), including Toronto, Scarborough, Markham, North York, Richmond Hill, Vaughan, Pickering, Ajax, and surrounding communities. Contact us to discuss your specific location and project vision."
            },
            {
              id: "2",              title: "Are consultations and design quotes complimentary?",              content: "Yes, we provide comprehensive on-site consultations and detailed design proposals at no cost. During your consultation, we assess your property, discuss your architectural vision, and provide transparent, detailed pricing."
            },
            {
              id: "3",              title: "What's included in your 3D design service?",              content: "Our photorealistic 3D renderings showcase your complete project—materials, finishes, lighting, landscaping, and architectural details. This visualization process allows you to experience your finished project before construction begins, enabling confident decision-making."
            },
            {
              id: "4",              title: "What is the typical project timeline?",              content: "Timelines vary by scope and complexity. Driveway projects typically require 1-2 weeks, patios 2-3 weeks, and larger architectural commissions may take 4-6 weeks. We provide detailed scheduling during the planning phase."
            },
            {
              id: "5",              title: "Do you provide warranties on completed work?",              content: "Absolutely. We stand behind our craftsmanship with comprehensive warranties covering all workmanship and materials. Details are included in your project estimate and final contract."
            },
            {
              id: "6",              title: "Can I visit your material showroom?",              content: "We encourage you to experience our curated showroom displaying premium interlock options, natural stone varieties, and professional landscape lighting systems. Contact us to schedule your personal consultation."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",              items: [
                { label: "Architectural Interlock", href: "#services" },
                { label: "Outdoor Design", href: "#services" },
                { label: "Stone Architecture", href: "#services" },
                { label: "Retaining Structures", href: "#services" },
                { label: "Premium Entries", href: "#services" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "Our Process", href: "#process" },
                { label: "Project Gallery", href: "#gallery" },
                { label: "Design Showroom", href: "#showroom" },
                { label: "Our Approach", href: "#taishan-effect" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "Toronto, Canada", href: "#" },
                { label: "Phone: (416) XXX-XXXX", href: "tel:+14165551234" },
                { label: "Email: info@taishanconstruction.com", href: "mailto:info@taishanconstruction.com" },
                { label: "Service Areas", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2024 Taishan Construction. All rights reserved. Premium architectural design and hardscape services for the Greater Toronto Area."
        />
      </div>
    </ThemeProvider>
  );
}