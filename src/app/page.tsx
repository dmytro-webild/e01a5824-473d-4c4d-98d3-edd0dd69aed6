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

export default function LandingPage() {
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
          brandName="Taishan Construction"
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
          title="Toronto's Trusted Interlock & Construction Specialists"
          description="Premium landscaping and construction services across the GTA. Designed with precision. Built to last."
          tag="Luxury Construction"
          tagIcon={Building2}
          background={{ variant: "plain" }}
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/natural-grass-close-up_23-2148858213.jpg?_wi=1",              imageAlt: "Luxury interlock driveway installation"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/old-woman-doing-fitness-exercises_23-2149565528.jpg",              imageAlt: "Premium patio transformation"
            }
          ]}
          rating={5}
          ratingText="1000+ Projects Completed"
          buttons={[
            { text: "Get Your Free 3D Design", href: "#contact" },
            { text: "Visit Our Showroom", href: "#showroom" }
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
          title="The Taishan Effect"
          description="Why homeowners choose Taishan Construction for their premium hardscape and construction projects."
          tag="Why Choose Taishan"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          imagePosition="right"
          mediaAnimation="slide-up"
          bulletPoints={[
            {
              title: "Free 3D Project Visualization",              description: "See your complete project before construction begins with our professional rendering service",              icon: Eye
            },
            {
              title: "Professional Project Planning",              description: "Detailed timelines, material specifications, and structured installation processes",              icon: CheckCircle2
            },
            {
              title: "Outdoor Material Showroom",              description: "Explore real samples and design options in person to make confident material selections",              icon: Palette
            },
            {
              title: "Experienced Installation Teams",              description: "Certified professionals with years of expertise in premium hardscape installation",              icon: Users
            },
            {
              title: "Clear Communication & Timelines",              description: "Transparent updates throughout your project with professional project management",              icon: MessageCircle
            }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/high-angle-clay-pieces-arrangement_23-2149480221.jpg?_wi=1"
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
          title="See Your Project Before We Build It"
          description="Taishan Construction offers complimentary 3D project renderings so you can visualize your driveway, backyard, or porch before construction begins. This allows homeowners to make confident decisions before investing in their project."
          tag="3D Design Technology"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          features={[
            {
              icon: Eye,
              title: "Photorealistic Renderings",              description: "Crystal-clear 3D visualizations showing materials, lighting, landscaping, and final details",              button: { text: "Get Free 3D Design", href: "#contact" }
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
        <FeatureHoverPattern
          title="Our Services"
          description="Premium construction and landscaping services for Toronto and the Greater Toronto Area. Each project is crafted with precision and built to last."
          tag="Complete Solutions"
          features={[
            {
              icon: Cog,
              title: "Interlock Driveways",              description: "Professional interlock paving with premium materials and expert installation"
            },
            {
              icon: Palette,
              title: "Backyard Patios",              description: "Custom patio designs transforming outdoor living spaces into luxury retreats"
            },
            {
              icon: Footprints,
              title: "Walkways",              description: "Decorative and functional pathways connecting your property with style"
            },
            {
              icon: Building2,
              title: "Retaining Walls",              description: "Structural and aesthetic walls for landscaping and property management"
            },
            {
              icon: Home,
              title: "Natural Stone Porches",              description: "Premium stone entry features creating impressive curb appeal"
            },
            {
              icon: Zap,
              title: "Landscape Lighting",              description: "Professional outdoor lighting systems enhancing ambiance and security"
            },
            {
              icon: Hammer,
              title: "Decks",              description: "Custom wooden decks designed for durability and aesthetic appeal"
            },
            {
              icon: Shield,
              title: "Fences",              description: "Privacy fences and decorative fencing solutions for residential properties"
            },
            {
              icon: Trees,
              title: "Rock Beds & Landscaping",              description: "Landscape design elements that enhance property value and curb appeal"
            },
            {
              icon: Droplet,
              title: "Basement Waterproofing",              description: "Professional waterproofing solutions protecting your foundation and home"
            },
            {
              icon: Frame,
              title: "Interior Renovations",              description: "Premium interior construction and renovation services for Toronto homes"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          tagAnimation="slide-up"
          cardTitleClassName="text-5xl font-bold mb-4"
        />
      </div>

      <div id="gallery" data-section="gallery">
        <BlogCardThree
          title="Project Gallery"
          description="Explore our portfolio of premium hardscape and construction projects across the GTA."
          tag="Portfolio Showcase"
          tagAnimation="slide-up"
          blogs={[
            {
              id: "driveway-1",              category: "Driveways",              title: "Modern Interlock Driveway Transformation",              excerpt: "Premium herringbone pattern interlock installation with integrated lighting",              imageSrc: "http://img.b2bpic.net/free-photo/natural-grass-close-up_23-2148858213.jpg?_wi=2",              imageAlt: "Modern interlock driveway",              authorName: "Taishan Team",              authorAvatar: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              date: "2024"
            },
            {
              id: "driveway-2",              category: "Driveways",              title: "Contemporary Driveway Design",              excerpt: "Large format pavers with sophisticated layout and professional finishing",              imageSrc: "http://img.b2bpic.net/free-photo/natural-grass-close-up_23-2148858213.jpg?_wi=3",              imageAlt: "Contemporary driveway design",              authorName: "Taishan Team",              authorAvatar: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              date: "2024"
            },
            {
              id: "backyard-1",              category: "Backyards",              title: "Luxury Backyard Living Space",              excerpt: "Complete outdoor renovation with patio, lighting, and landscaping",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-luxury-swimming-pool-with-palm-trees-thai-style-decoration_1258-111445.jpg?_wi=1",              imageAlt: "Luxury backyard patio",              authorName: "Taishan Team",              authorAvatar: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              date: "2024"
            },
            {
              id: "backyard-2",              category: "Backyards",              title: "Premium Patio Entertainment Area",              excerpt: "Multi-level patio with integrated seating and ambient lighting design",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-luxury-swimming-pool-with-palm-trees-thai-style-decoration_1258-111445.jpg?_wi=2",              imageAlt: "Premium patio area",              authorName: "Taishan Team",              authorAvatar: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              date: "2024"
            },
            {
              id: "porch-1",              category: "Porches",              title: "Natural Stone Entry Porch",              excerpt: "Custom stone work creating impressive curb appeal and property value",              imageSrc: "http://img.b2bpic.net/free-photo/vintage-background-steps-turquoise-doors-ancient-architecture_169016-20034.jpg",              imageAlt: "Natural stone porch entry",              authorName: "Taishan Team",              authorAvatar: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              date: "2024"
            },
            {
              id: "walkway-1",              category: "Walkways",              title: "Decorative Stone Walkway",              excerpt: "Professional pathway installation enhancing property flow and design",              imageSrc: "http://img.b2bpic.net/free-photo/stone-path-with-grass-growing-up_1137-86.jpg",              imageAlt: "Stone walkway design",              authorName: "Taishan Team",              authorAvatar: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              date: "2024"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          cardTitleClassName="text-5xl font-bold mb-4"
        />
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
          imageSrc="http://img.b2bpic.net/free-photo/high-angle-clay-pieces-arrangement_23-2149480221.jpg?_wi=2"
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
              id: "1",              title: "Complete Driveway Transformation",              quote: "Taishan's team transformed our driveway into something spectacular. The 3D design preview was incredibly helpful, and the installation was professional from start to finish. Highly recommended for anyone in Toronto looking for premium hardscape work.",              name: "Jennifer Chen",              role: "Toronto Homeowner",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=1",              imageAlt: "Jennifer Chen"
            },
            {
              id: "2",              title: "Outstanding Patio Project",              quote: "We couldn't be happier with our new backyard patio. The team listened to our vision, created perfect 3D renderings, and delivered exactly what we envisioned. The attention to detail and timeline management were exceptional.",              name: "Michael Rodriguez",              role: "Vaughan Homeowner",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=2",              imageAlt: "Michael Rodriguez"
            },
            {
              id: "3",              title: "Professional & Reliable",              quote: "From the initial consultation through completion, Taishan showed true professionalism. Their material showroom helped us choose the perfect stone for our porch. The finished result exceeded our expectations.",              name: "Sarah Thompson",              role: "North York Resident",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=3",              imageAlt: "Sarah Thompson"
            },
            {
              id: "4",              title: "Worth Every Investment",              quote: "This is clearly a luxury construction company, not just a contractor. The entire process felt premium, from the design consultation to the final walkthrough. Our property value and curb appeal have both dramatically improved.",              name: "David Park",              role: "Markham Homeowner",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=4",              imageAlt: "David Park"
            },
            {
              id: "5",              title: "Exceptional Waterproofing Work",              quote: "We had basement waterproofing done by Taishan and couldn't be happier. Their expertise was evident, and our foundation is now completely protected. Highly professional team.",              name: "Lisa Martinez",              role: "Richmond Hill Homeowner",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=5",              imageAlt: "Lisa Martinez"
            },
            {
              id: "6",              title: "Complete Backyard Overhaul",              quote: "Taishan handled our entire backyard renovation including patio, landscape lighting, and landscaping. The coordination was seamless, and the final result is absolutely stunning. We now have the backyard of our dreams.",              name: "Robert Williams",              role: "Scarborough Homeowner",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=6",              imageAlt: "Robert Williams"
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
