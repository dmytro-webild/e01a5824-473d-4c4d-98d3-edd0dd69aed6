"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
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
      beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-lbulq2e9.jpg?_wi=1",      afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-uklcyhsf.jpg?_wi=1",      title: "Rendering vs. Completed Project"
    },
    {
      beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-ok3joqnq.jpg?_wi=1",      afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=1",      title: "3D Design to Reality"
    },
    {
      beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-uklcyhsf.jpg?_wi=2",      afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-lbulq2e9.jpg?_wi=2",      title: "Luxury Interlock Installation"
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
        <HeroSplitDualMedia
          title="Designing Outdoor Spaces Worth Coming Home To"
          description="Architectural precision meets refined craftsmanship. Premium hardscaping and custom construction throughout the Greater Toronto Area, where every detail is thoughtfully designed and expertly executed."
          tag="Luxury Outdoor Architecture"
          tagIcon={Building2}
          background={{ variant: "plain" }}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-lbulq2e9.jpg?_wi=1",              imageAlt: "Architectural outdoor space showcase"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-uklcyhsf.jpg?_wi=1",              imageAlt: "Premium hardscape design detail"
            }
          ]}
          rating={5}
          ratingText="1000+ Projects Completed"
          buttons={[
            { text: "Start Your Project", href: "#contact" },
            { text: "View Portfolio", href: "#gallery" }
          ]}
          buttonAnimation="slide-up"
          mediaAnimation="slide-up"
          tagAnimation="slide-up"
          textBoxClassName="max-w-2xl"
          titleClassName="text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          descriptionClassName="text-lg lg:text-xl leading-relaxed"
          tagClassName="inline-flex items-center gap-2 font-semibold uppercase tracking-wider"
        />
      </div>

      <div id="taishan-effect" data-section="taishan-effect">
        <SplitAbout
          title="The Taishan Signature Approach"
          description="A refined process combining strategic planning, photorealistic 3D visualization, and curated material selection. We design with intention, visualize with precision, and build with expertise."
          tag="Our Methodology"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          imagePosition="right"
          mediaAnimation="slide-up"
          bulletPoints={[
            {
              title: "Strategic Planning",              description: "Detailed site analysis and master planning that transforms your vision into a cohesive outdoor architecture",              icon: Eye
            },
            {
              title: "3D Visualization",              description: "Photorealistic renderings allowing you to experience your project before construction, ensuring complete confidence in the design",              icon: CheckCircle2
            },
            {
              title: "Material Curation",              description: "Carefully selected premium materials showcased in our outdoor showroom, chosen for both aesthetic excellence and lasting performance",              icon: Palette
            },
            {
              title: "Expert Execution",              description: "Certified installation teams with years of experience in luxury hardscape and construction projects",              icon: Users
            },
            {
              title: "Refined Communication",              description: "Transparent project management with detailed timelines and consistent updates throughout construction",              icon: MessageCircle
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-ok3joqnq.jpg?_wi=1"
          imageAlt="Premium material showcase and design consultation"
          buttons={[{ text: "Explore Our Process", href: "#process" }]}
          buttonAnimation="slide-up"
          titleClassName="text-5xl font-bold mb-4"
          descriptionClassName="text-lg leading-relaxed mb-8"
          bulletTitleClassName="text-xl font-semibold mb-2"
        />
      </div>

      <div id="3d-design" data-section="3d-design">
        <FeatureHoverPattern
          title="Step Into Your Future Backyard"
          description="Experience the emotional transformation before we build. Our complimentary 3D architectural renderings empower you to visualize every detail—from material textures to landscape integration—making confident design decisions with complete clarity."
          tag="Visualization Technology"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          features={[
            {
              icon: Eye,
              title: "Photorealistic 3D Renderings",              description: "Crystal-clear architectural visualizations showcasing materials, proportions, lighting, and surrounding landscape integration",              button: { text: "Get Free 3D Design", href: "#contact" }
            },
            {
              icon: ArrowRightLeft,
              title: "Before & After Experience",              description: "Side-by-side visualizations showing your current property and the completed outdoor sanctuary of your dreams"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
          buttons={[{ text: "Request Your Free 3D Design", href: "#contact" }]}
          cardTitleClassName="text-5xl font-bold mb-4"
        />
      </div>

      <div id="services" data-section="services">
        <div className="px-6 lg:px-12 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-cta mb-2">Design-Focused Solutions</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Architectural Services</h2>
              <p className="text-lg text-foreground/80">Premium hardscape architecture and construction services throughout Toronto and the Greater Toronto Area. Each project reflects refined design principles and masterful execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  id: "interlock",                  icon: Cog,
                  title: "Architectural Interlock Driveways",                  description: "Custom interlock design with premium materials, proportional patterns, and professional installation"
                },
                {
                  id: "patios",                  icon: Palette,
                  title: "Designer Backyard Patios",                  description: "Architectural patio design transforming outdoor living into refined entertaining spaces"
                },
                {
                  id: "walkways",                  icon: Footprints,
                  title: "Architectural Walkways",                  description: "Thoughtfully designed pathways connecting properties with sophisticated material selection"
                },
                {
                  id: "retaining",                  icon: Building2,
                  title: "Structural Retaining Walls",                  description: "Engineering-focused wall design combining structure and aesthetic refinement"
                },
                {
                  id: "porches",                  icon: Home,
                  title: "Natural Stone Entry Porches",                  description: "Premium stone architectural features creating distinguished curb appeal"
                },
                {
                  id: "lighting",                  icon: Zap,
                  title: "Architectural Landscape Lighting",                  description: "Professional outdoor lighting design enhancing ambiance and architectural details"
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
                        <p className="font-semibold">See examples of this service</p>
                        <p className="text-sm text-white/80">in our project gallery</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-card rounded-lg p-8 border border-accent/20">
              <h3 className="text-2xl font-bold mb-6">Architectural Interlock Showcase</h3>
              <p className="text-foreground/80 mb-8">Hover over the slider to compare our 3D architectural renderings with completed installations:</p>
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
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-cta mb-2">Portfolio Showcase</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Completed Projects</h2>
              <p className="text-lg text-foreground/80">Explore our portfolio of architectural hardscape and construction projects throughout the Greater Toronto Area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  id: "project-1",                  title: "Luxury Architectural Installation",                  type: "Interlock Driveway",                  location: "North York, ON",                  beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-ok3joqnq.jpg?_wi=2",                  afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-lbulq2e9.jpg?_wi=2",                  description: "Premium hardscape installation showcasing architectural precision and craftsmanship"
                },
                {
                  id: "project-2",                  title: "Contemporary Hardscape Design",                  type: "Patio Installation",                  location: "Vaughan, ON",                  beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=2",                  afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-uklcyhsf.jpg?_wi=2",                  description: "Large format pavers with sophisticated design and professional finishing"
                },
                {
                  id: "project-3",                  title: "Refined Outdoor Living Design",                  type: "Backyard Transformation",                  location: "Toronto, ON",                  beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-lbulq2e9.jpg?_wi=3",                  afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-ok3joqnq.jpg?_wi=3",                  description: "Complete outdoor transformation with premium materials and expert installation"
                },
                {
                  id: "project-4",                  title: "Luxury Entertainment Patio",                  type: "Architectural Patio",                  location: "Markham, ON",                  beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-uklcyhsf.jpg?_wi=3",                  afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=3",                  description: "Multi-level design with integrated features and ambient lighting"
                },
                {
                  id: "project-5",                  title: "Natural Stone Architectural Entry",                  type: "Stone Porch",                  location: "Richmond Hill, ON",                  beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-ok3joqnq.jpg?_wi=4",                  afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-uklcyhsf.jpg?_wi=4",                  description: "Custom stone architectural work creating distinguished curb appeal"
                },
                {
                  id: "project-6",                  title: "Professional Landscape Integration",                  type: "Hardscape Design",                  location: "Scarborough, ON",                  beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-lbulq2e9.jpg?_wi=4",                  afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-ok3joqnq.jpg?_wi=4",                  description: "Complete landscape architecture enhancing property flow and design"
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
                          <p className="text-xs text-white/70 mb-1">{project.type}</p>
                          <p className="text-xs text-white/60 mb-2">{project.location}</p>
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
          title="Visit Our Outdoor Material Showroom"
          description="Experience curated materials and design inspiration in person. Compare premium interlock, natural stone, and landscape lighting solutions with our expert team before finalizing your project."
          tag="Showroom Experience"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          imagePosition="left"
          mediaAnimation="slide-up"
          bulletPoints={[
            {
              title: "Material Exploration",              description: "Touch and examine authentic materials, finishes, and color options for your architectural project",              icon: Eye
            },
            {
              title: "Design Consultation",              description: "Our architectural team guides you through material selection aligned with your vision and investment",              icon: Users
            },
            {
              title: "Project Visualization",              description: "Combine showroom samples with 3D renderings to finalize your complete design concept",              icon: Lightbulb
            },
            {
              title: "Premium Collections",              description: "Exclusive access to high-end materials and professional-grade architectural lighting systems",              icon: Crown
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=1"
          imageAlt="Premium material showroom and design display"
          buttons={[{ text: "Schedule Showroom Consultation", href: "#contact" }]}
          buttonAnimation="slide-up"
          titleClassName="text-5xl font-bold mb-4"
          descriptionClassName="text-lg leading-relaxed mb-8"
        />
      </div>

      <div id="process" data-section="process">
        <MetricCardTen
          title="Our Architectural Process"
          description="A refined methodology delivering premium hardscape projects with precision, transparency, and exceptional craftsmanship."
          tag="Professional Execution"
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",              title: "Strategic Consultation",              subtitle: "Understanding your vision, site conditions, and architectural aspirations",              category: "Phase 1",              value: "Complimentary"
            },
            {
              id: "2",              title: "Architectural Design & 3D Visualization",              subtitle: "Professional renderings and detailed architectural specifications",              category: "Phase 2",              value: "Included"
            },
            {
              id: "3",              title: "Expert Installation",              subtitle: "Master craftsmen and certified teams with years of hardscape experience",              category: "Phase 3",              value: "Fully Insured"
            },
            {
              id: "4",              title: "Final Inspection & Warranty",              subtitle: "Comprehensive walkthrough, final touches, and project guarantees",              category: "Phase 4",              value: "Guaranteed"
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
          title="Trusted By Discerning Homeowners"
          description="Hear from homeowners who invested in premium outdoor architecture and are thrilled with their Taishan experience."
          tag="Client Testimonials"
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              title: "Complete Driveway Transformation",              quote: "Taishan's approach to our driveway was genuinely architectural. The 3D renderings were photorealistic, and the team's attention to every detail was exceptional. This isn't just construction—it's craftsmanship. Highly recommended for anyone serious about their property investment.",              name: "Jennifer Chen",              role: "Toronto Homeowner",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=2",              imageAlt: "Jennifer Chen"
            },
            {
              id: "2",              title: "Outstanding Patio Project",              quote: "We couldn't be more pleased with our patio. The team listened intently to our vision, created stunning 3D visualizations, and delivered exactly as promised. The level of professional project management and design refinement exceeded our expectations.",              name: "Michael Rodriguez",              role: "Vaughan Homeowner",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=3",              imageAlt: "Michael Rodriguez"
            },
            {
              id: "3",              title: "Professional & Refined",              quote: "From initial consultation through final inspection, Taishan demonstrated genuine professionalism and expertise. Their material showroom was instrumental in our selection process, and the finished result has truly transformed our property.",              name: "Sarah Thompson",              role: "North York Resident",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=4",              imageAlt: "Sarah Thompson"
            },
            {
              id: "4",              title: "Worth Every Investment",              quote: "This is clearly a luxury architectural firm, not just a contractor. The entire experience felt premium—from the design consultation to project completion. Our property value and curb appeal have both dramatically improved.",              name: "David Park",              role: "Markham Homeowner",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=5",              imageAlt: "David Park"
            },
            {
              id: "5",              title: "Exceptional Mastery",              quote: "We engaged Taishan for a complex multi-phase project and they handled every phase with sophistication. Their expertise was evident in every decision, and our backyard is now a true outdoor sanctuary.",              name: "Lisa Martinez",              role: "Richmond Hill Homeowner",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=6",              imageAlt: "Lisa Martinez"
            },
            {
              id: "6",              title: "Complete Outdoor Architecture",              quote: "Taishan orchestrated our entire backyard redesign—patio, lighting, landscaping—with seamless coordination. The finished outdoor space is absolutely stunning and has become our favorite place to spend time.",              name: "Robert Williams",              role: "Scarborough Homeowner",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=7",              imageAlt: "Robert Williams"
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
          ctaDescription="Begin your outdoor architectural journey with a complimentary consultation and 3D project preview."
          ctaButton={{
            text: "Start Your Project",            href: "mailto:info@taishanconstruction.com?subject=Project%20Consultation%20Request"
          }}
          ctaIcon={Sparkles}
          useInvertedBackground={false}
          animationType="slide-up"
          faqs={[
            {
              id: "1",              title: "What areas do you service?",              content: "We service the entire Greater Toronto Area (GTA), including Toronto, Scarborough, Markham, North York, Richmond Hill, Vaughan, Pickering, Ajax, and surrounding communities. Contact us to discuss your specific location."
            },
            {
              id: "2",              title: "Do you offer complimentary consultations?",              content: "Yes, we provide free on-site consultations for all projects. During your visit, we assess your property, understand your architectural vision, and provide transparent project estimates."
            },
            {
              id: "3",              title: "What does the 3D design process include?",              content: "Our complimentary 3D design service includes photorealistic architectural renderings showing materials, lighting, landscaping, and design details. This allows you to visualize the complete project and make confident design decisions before construction."
            },
            {
              id: "4",              title: "What are typical project timelines?",              content: "Project timelines vary by scope. Driveway installations typically require 1-2 weeks, patios 2-3 weeks, and larger architectural projects 4-6 weeks. We provide detailed project schedules during the planning phase."
            },
            {
              id: "5",              title: "Do you offer project warranties?",              content: "Absolutely. We stand behind our work with comprehensive warranties including workmanship guarantees and material-specific coverage. Full warranty details are provided with your project estimate."
            },
            {
              id: "6",              title: "Can we visit your material showroom?",              content: "We encourage all homeowners to visit our outdoor material showroom to explore interlock collections, natural stone options, and landscape lighting systems. Please contact us to schedule a convenient time."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",              items: [
                { label: "Interlock Driveways", href: "#services" },
                { label: "Backyard Patios", href: "#services" },
                { label: "Walkways", href: "#services" },
                { label: "Retaining Walls", href: "#services" },
                { label: "Natural Stone Porches", href: "#services" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "Our Process", href: "#process" },
                { label: "Gallery", href: "#gallery" },
                { label: "Showroom", href: "#showroom" },
                { label: "About", href: "#taishan-effect" },
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
          copyrightText="© 2024 Taishan Construction. All rights reserved. Premium hardscape and architectural design services for the GTA."
        />
      </div>
    </ThemeProvider>
  );
}
