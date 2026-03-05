"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Building2, Eye, CheckCircle2, Palette, Users, MessageCircle, Sparkles, ArrowRightLeft, Cog, Footprints, Home, Zap, Shield, Hammer, Trees, Droplet, Frame, Lightbulb, Crown, Phone, Calendar } from 'lucide-react';
import React, { useState } from 'react';

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
      <div id="nav" data-section="nav" className="fixed top-0 left-0 right-0 z-50">
        <NavbarStyleApple
          brandName="Taishan"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Gallery", id: "gallery" },
            { name: "Showroom", id: "showroom" },
            { name: "Process", id: "process" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Book Appointment Now",            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero" className="pt-20">
        <HeroBillboardScroll
          title="Toronto's Trusted Interlock & Construction Specialists"
          description="Premium landscaping and construction services across the GTA. Designed with precision. Built to last."
          tag="Luxury Construction"
          tagIcon={Building2}
          background={{ variant: "plain" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-lbulq2e9.jpg?_wi=1"
          imageAlt="Premium project showcase"
          buttons={[
            { text: "Get Your Free 3D Design", href: "#contact" },
            { text: "Visit Our Showroom", href: "#showroom" }
          ]}
          buttonAnimation="slide-up"
          tagAnimation="slide-up"
          containerClassName="max-w-full"
          titleClassName="text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          descriptionClassName="text-lg lg:text-xl leading-relaxed"
          tagClassName="inline-flex items-center gap-2 font-semibold uppercase tracking-wider"
        />
      </div>

      <div id="taishan-effect" data-section="taishan-effect">
        <SplitAbout
          title="Why Choose Taishan"
          description="Premium quality, professional service, and guaranteed satisfaction for every project."
          tag="The Taishan Advantage"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          imagePosition="right"
          mediaAnimation="slide-up"
          bulletPoints={[
            {
              title: "6-Year Warranty",              description: "Complete coverage and peace of mind on all materials and workmanship",              icon: Shield
            },
            {
              title: "10,000 sq ft Showroom",              description: "Explore real samples and design options in person to make confident selections",              icon: Building2
            },
            {
              title: "Free 3D Design Technology",              description: "See your complete project before construction begins with professional renderings",              icon: Eye
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-ok3joqnq.jpg?_wi=1"
          imageAlt="Material showroom display"
          buttons={[{ text: "Start Your Project Plan", href: "#contact" }]}
          buttonAnimation="slide-up"
          titleClassName="text-5xl font-bold mb-4"
          descriptionClassName="text-lg leading-relaxed mb-8"
          bulletTitleClassName="text-xl font-semibold mb-2"
        />
      </div>

      <div id="3d-design" data-section="3d-design">
        <FeatureHoverPattern
          title="Experience Breathtaking 3D Design Technology"
          description="Taishan Construction offers complimentary 3D project renderings with a custom client portal where you can view your design, track progress, and access project documents anytime, anywhere. Visualize your driveway, backyard, or porch before construction begins with crystal-clear photorealistic renderings."
          tag="3D Design Technology"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          features={[
            {
              icon: Eye,
              title: "Photorealistic Renderings",              description: "Crystal-clear 3D visualizations showing materials, lighting, landscaping, and final details",              button: { text: "Get Free 3D Design", href: "#contact" }
            },
            {
              icon: Calendar,
              title: "Custom Client Portal",              description: "Access your project anytime with dedicated portal for designs, progress updates, and documentation"
            },
            {
              icon: ArrowRightLeft,
              title: "Before & After Comparisons",              description: "Side-by-side views showing current property and your completed dream project transformation"
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
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-cta mb-2">Complete Solutions</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-foreground/80">Premium construction and landscaping services for Toronto and the Greater Toronto Area. Each project is crafted with precision and built to last.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  id: "interlock",                  icon: Cog,
                  title: "Interlock Driveways",                  description: "Professional interlock paving with premium materials and expert installation"
                },
                {
                  id: "patios",                  icon: Palette,
                  title: "Backyard Patios",                  description: "Custom patio designs transforming outdoor living spaces into luxury retreats"
                },
                {
                  id: "walkways",                  icon: Footprints,
                  title: "Walkways",                  description: "Decorative and functional pathways connecting your property with style"
                },
                {
                  id: "retaining",                  icon: Building2,
                  title: "Retaining Walls",                  description: "Structural and aesthetic walls for landscaping and property management"
                },
                {
                  id: "porches",                  icon: Home,
                  title: "Natural Stone Porches",                  description: "Premium stone entry features creating impressive curb appeal"
                },
                {
                  id: "lighting",                  icon: Zap,
                  title: "Landscape Lighting",                  description: "Professional outdoor lighting systems enhancing ambiance and security"
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
              <h3 className="text-2xl font-bold mb-6">Interlock Driveway Showcase</h3>
              <p className="text-foreground/80 mb-8">Hover over the slider to see our photorealistic 3D renderings compared to actual completed projects:</p>
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
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Project Gallery</h2>
              <p className="text-lg text-foreground/80">Explore our portfolio of premium hardscape and construction projects across the GTA.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  id: "project-1",                  title: "Luxury Residential Development",                  category: "Premium Projects",                  beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-ok3joqnq.jpg?_wi=2",                  afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-lbulq2e9.jpg?_wi=2",                  description: "High-end construction showcasing precision craftsmanship and attention to detail"
                },
                {
                  id: "project-2",                  title: "Contemporary Hardscape Design",                  category: "Premium Projects",                  beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=2",                  afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-uklcyhsf.jpg?_wi=2",                  description: "Large format pavers with sophisticated layout and professional finishing"
                },
                {
                  id: "project-3",                  title: "Luxury Outdoor Living Space",                  category: "Premium Projects",                  beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-lbulq2e9.jpg?_wi=3",                  afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-ok3joqnq.jpg?_wi=3",                  description: "Complete outdoor transformation with premium materials and expert installation"
                },
                {
                  id: "project-4",                  title: "Premium Patio Entertainment Area",                  category: "Premium Projects",                  beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-uklcyhsf.jpg?_wi=3",                  afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=3",                  description: "Multi-level design with integrated features and ambient lighting"
                },
                {
                  id: "project-5",                  title: "Natural Stone Entry Design",                  category: "Premium Projects",                  beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-ok3joqnq.jpg?_wi=4",                  afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-uklcyhsf.jpg?_wi=4",                  description: "Custom stone work creating impressive curb appeal and property value"
                },
                {
                  id: "project-6",                  title: "Professional Landscape Installation",                  category: "Premium Projects",                  beforeSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-lbulq2e9.jpg?_wi=4",                  afterSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-ok3joqnq.jpg?_wi=4",                  description: "Complete landscape design and installation enhancing property flow"
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
          title="Visit Our Outdoor Material Showroom"
          description="Explore real materials and design options before construction begins. Compare interlock styles, natural stone, lighting systems, and layout options with our expert team."
          tag="Showroom Experience"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          imagePosition="left"
          mediaAnimation="slide-up"
          bulletPoints={[
            {
              title: "Compare Materials In Person",              description: "Touch and see actual materials, finishes, and color options for your project",              icon: Eye
            },
            {
              title: "Plan With Experts",              description: "Our design team helps you make confident selections based on your vision and budget",              icon: Users
            },
            {
              title: "Visualize Your Project",              description: "Use our showroom samples alongside 3D renderings to finalize your design",              icon: Lightbulb
            },
            {
              title: "Premium Product Selection",              description: "Access to exclusive high-end materials and professional-grade landscape lighting",              icon: Crown
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=1"
          imageAlt="Material showroom samples and display"
          buttons={[{ text: "Book a Showroom Visit", href: "#contact" }]}
          buttonAnimation="slide-up"
          titleClassName="text-5xl font-bold mb-4"
          descriptionClassName="text-lg leading-relaxed mb-8"
        />
      </div>

      <div id="process" data-section="process">
        <MetricCardTen
          title="Our Proven Process"
          description="A structured approach to delivering premium hardscape projects on time and on budget."
          tag="Professional Installation"
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",              title: "Consultation & Assessment",              subtitle: "Understanding your vision, site conditions, and project requirements",              category: "Step 1",              value: "Free Quote"
            },
            {
              id: "2",              title: "3D Design & Planning",              subtitle: "Professional renderings and detailed project specifications",              category: "Step 2",              value: "Included"
            },
            {
              id: "3",              title: "Professional Construction",              subtitle: "Expert installation with certified teams and quality materials",              category: "Step 3",              value: "Fully Insured"
            },
            {
              id: "4",              title: "Final Walkthrough & Warranty",              subtitle: "Inspection, final touches, and comprehensive project warranty",              category: "Step 4",              value: "Guaranteed"
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
          title="Trusted By Homeowners Across the GTA"
          description="See what our satisfied clients have to say about their Taishan Construction projects."
          tag="Client Testimonials"
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              title: "Complete Driveway Transformation",              quote: "Taishan's team transformed our driveway into something spectacular. The 3D design preview was incredibly helpful, and the installation was professional from start to finish. Highly recommended for anyone in Toronto looking for premium hardscape work.",              name: "Jennifer Chen",              role: "Toronto Homeowner",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=2",              imageAlt: "Jennifer Chen"
            },
            {
              id: "2",              title: "Outstanding Patio Project",              quote: "We couldn't be happier with our new backyard patio. The team listened to our vision, created perfect 3D renderings, and delivered exactly what we envisioned. The attention to detail and timeline management were exceptional.",              name: "Michael Rodriguez",              role: "Vaughan Homeowner",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=3",              imageAlt: "Michael Rodriguez"
            },
            {
              id: "3",              title: "Professional & Reliable",              quote: "From the initial consultation through completion, Taishan showed true professionalism. Their material showroom helped us choose the perfect stone for our porch. The finished result exceeded our expectations.",              name: "Sarah Thompson",              role: "North York Resident",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=4",              imageAlt: "Sarah Thompson"
            },
            {
              id: "4",              title: "Worth Every Investment",              quote: "This is clearly a luxury construction company, not just a contractor. The entire process felt premium, from the design consultation to the final walkthrough. Our property value and curb appeal have both dramatically improved.",              name: "David Park",              role: "Markham Homeowner",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=5",              imageAlt: "David Park"
            },
            {
              id: "5",              title: "Exceptional Waterproofing Work",              quote: "We had basement waterproofing done by Taishan and couldn't be happier. Their expertise was evident, and our foundation is now completely protected. Highly professional team.",              name: "Lisa Martinez",              role: "Richmond Hill Homeowner",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=6",              imageAlt: "Lisa Martinez"
            },
            {
              id: "6",              title: "Complete Backyard Overhaul",              quote: "Taishan handled our entire backyard renovation including patio, landscape lighting, and landscaping. The coordination was seamless, and the final result is absolutely stunning. We now have the backyard of our dreams.",              name: "Robert Williams",              role: "Scarborough Homeowner",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AXh5KliD4l7rWjrQZkOq7ZuPnH/uploaded-1772749929936-heyeujvs.jpg?_wi=7",              imageAlt: "Robert Williams"
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
          ctaTitle="Ready to Transform Your Property?"
          ctaDescription="Book a consultation and receive a free 3D preview of your project."
          ctaButton={{
            text: "Get Free 3D Design",            href: "mailto:info@taishanconstruction.com?subject=Free%203D%20Design%20Consultation"
          }}
          ctaIcon={Sparkles}
          useInvertedBackground={false}
          animationType="slide-up"
          faqs={[
            {
              id: "1",              title: "What areas do you service?",              content: "We service the entire Greater Toronto Area (GTA), including Toronto, Scarborough, Markham, North York, Richmond Hill, Vaughan, Pickering, Ajax, and surrounding communities. Contact us for your specific location."
            },
            {
              id: "2",              title: "Do you offer free consultations and quotes?",              content: "Yes, we provide free on-site consultations and quotes for all projects. During your consultation, we'll assess your property, discuss your vision, and provide transparent pricing."
            },
            {
              id: "3",              title: "What is included in the 3D design service?",              content: "Our free 3D design includes photorealistic renderings of your complete project, showing materials, lighting, landscaping, and final details. This allows you to visualize the finished result before construction begins."
            },
            {
              id: "4",              title: "How long does a typical project take?",              content: "Project timelines vary depending on scope and complexity. A driveway typically takes 1-2 weeks, patios 2-3 weeks, and larger projects may take 4-6 weeks. We'll provide a detailed timeline during planning."
            },
            {
              id: "5",              title: "Do you offer warranties on your work?",              content: "Yes, we stand behind our work with comprehensive warranties. All installations include workmanship guarantees, and material warranties vary by product. Details are provided with your project estimate."
            },
            {
              id: "6",              title: "Can I visit your material showroom?",              content: "Absolutely! We encourage homeowners to visit our outdoor material showroom to explore interlock styles, natural stone options, and landscape lighting systems. Call us to schedule a convenient time."
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
          copyrightText="© 2024 Taishan Construction. All rights reserved. Premium hardscape and construction services for the GTA."
        />
      </div>
    </ThemeProvider>
  );
}
