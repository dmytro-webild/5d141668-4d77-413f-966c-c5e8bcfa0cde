"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroCentered from "@/components/sections/hero/HeroCentered";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import MetricSplitMediaAbout from "@/components/sections/about/MetricSplitMediaAbout";
import FeatureCardTwentyThree from "@/components/sections/feature/FeatureCardTwentyThree";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import ContactText from "@/components/sections/contact/ContactText";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { Sparkles } from "lucide-react";

export default function SaJewellersPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="mediumSmall"
      sizing="large"
      background="circleGradient"
      cardStyle="solid"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Sweta Jewellers"
          navItems={[
            { name: "Collections", id: "collections" },
            { name: "Bridal", id: "bridal" },
            { name: "Custom Design", id: "custom" },
            { name: "Reviews", id: "reviews" }
          ]}
          button={{ text: "Call Now", href: "tel:+919969173510" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCentered
          title="Trusted Gold Jewellery in Andheri West Since Years"
          description="Elegant Designs. Pure Gold. Trusted Craftsmanship. Discover timeless jewellery for every occasion."
          background={{ variant: "plain" }}
          avatars={[
            { src: "http://img.b2bpic.net/free-vector/call-center-avatar-sample-flat-style_23-2147941257.jpg", alt: "Customer testimonial" },
            { src: "http://img.b2bpic.net/free-vector/call-center-avatar-sample-flat-style_23-2147941257.jpg", alt: "Customer testimonial" },
            { src: "http://img.b2bpic.net/free-vector/call-center-avatar-sample-flat-style_23-2147941257.jpg", alt: "Customer testimonial" }
          ]}
          avatarText="Trusted by local families"
          buttons={[
            { text: "📞 Call Now", href: "tel:+919969173510" },
            { text: "💬 WhatsApp Us", href: "https://wa.me/919969173510" }
          ]}
          buttonAnimation="slide-up"
          ariaLabel="Hero section for Sweta Jewellers"
        />
      </div>

      <div id="trust" data-section="trust">
        <MetricCardSeven
          title="Why Choose Sweta Jewellers"
          description="We are committed to excellence, trust, and premium quality in every piece"
          tag="Trust Markers"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          metrics={[
            { id: "rating", value: "4.6", title: "Google Rating", items: ["7 verified reviews", "Highly trusted locally"] },
            { id: "service", value: "100%", title: "Hallmarked Gold", items: ["Pure & certified", "Purity guaranteed"] },
            { id: "delivery", value: "24h", title: "Delivery Available", items: ["Fast & reliable", "Safe packaging"] },
            { id: "experience", value: "Years", title: "Experience", items: ["Expert craftsmen", "Trusted expertise"] }
          ]}
          animationType="slide-up"
          uniformGridCustomHeightClasses="min-h-80"
        />
      </div>

      <div id="collections" data-section="collections">
        <ProductCardTwo
          title="Featured Collections"
          description="Explore our curated selection of premium jewellery pieces"
          tag="Collections"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "necklace",              brand: "Sweta Jewellers",              name: "Premium Gold Necklace",              price: "₹25,000+",              rating: 5,
              reviewCount: "12",              imageSrc: "http://img.b2bpic.net/free-photo/bright-engagement-gold-shiny-love-macro_1400-32.jpg",              imageAlt: "Premium gold necklace design"
            },
            {
              id: "mangalsutra",              brand: "Sweta Jewellers",              name: "Traditional Mangalsutra",              price: "₹18,000+",              rating: 5,
              reviewCount: "8",              imageSrc: "http://img.b2bpic.net/free-photo/young-indian-woman-wearing-sari_23-2149400870.jpg",              imageAlt: "Traditional mangalsutra"
            },
            {
              id: "bangles",              brand: "Sweta Jewellers",              name: "Gold Bangles Set",              price: "₹20,000+",              rating: 5,
              reviewCount: "10",              imageSrc: "http://img.b2bpic.net/free-photo/jewel-details-hands-woman-wearing-sari-dress_23-2149565117.jpg",              imageAlt: "Elegant gold bangles"
            }
          ]}
        />
      </div>

      <div id="bridal" data-section="bridal">
        <MetricSplitMediaAbout
          tag="Bridal Special"
          tagIcon={Sparkles}
          title="Make Your Wedding Shine with Timeless Gold"
          description="Our bridal jewellery collection features exquisite designs crafted for your special day. From elegant necklaces to statement earrings, each piece is designed to enhance your beauty and celebrate your love story."
          metrics={[
            { value: "500+", title: "Bridal Pieces" },
            { value: "100%", title: "Custom Design" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/bride-holds-her-hand-hanged-bridal-dress_8353-10443.jpg"
          imageAlt="Beautiful bridal jewellery collection"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="custom" data-section="custom">
        <FeatureCardTwentyThree
          title="Custom Jewellery Services"
          description="Design your own masterpiece with our expert customization services"
          tag="Personalized"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              id: "1",              title: "Expert Design Consultation",              tags: ["Personalized", "Free Consultation"],
              imageSrc: "http://img.b2bpic.net/free-photo/jewelry-store-employee-holding-tablet-helps-customers-choose-rings-providing-information-price-manufacturer-jewelry-copy-space-about-holiday-gifts_166373-8867.jpg",              imageAlt: "Expert jewellery design consultation"
            },
            {
              id: "2",              title: "Old Gold Exchange",              tags: ["Value Addition", "Fair Pricing"],
              imageSrc: "http://img.b2bpic.net/free-photo/business-meeting-cafe_53876-20923.jpg",              imageAlt: "Old gold exchange service"
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardTen
          title="What Our Customers Say"
          description="Read verified reviews from our satisfied customers"
          tag="Reviews"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              title: "Excellent Quality & Service",              quote: "I purchased a necklace from Sweta Jewellers and was impressed with the quality and craftsmanship. The staff was very helpful and professional.",              name: "Priya Sharma",              role: "Customer",              imageSrc: "http://img.b2bpic.net/free-photo/positive-confident-businesswoman-wearing-formal-suit-standing-with-arms-folded_74855-10328.jpg?_wi=1",              imageAlt: "Priya Sharma"
            },
            {
              id: "2",              title: "Perfect for My Wedding",              quote: "The bridal collection is absolutely stunning. Each piece is beautifully crafted. I couldn't have asked for better service for my special day.",              name: "Anjali Patel",              role: "Bride",              imageSrc: "http://img.b2bpic.net/free-photo/positive-confident-businesswoman-wearing-formal-suit-standing-with-arms-folded_74855-10328.jpg?_wi=2",              imageAlt: "Anjali Patel"
            },
            {
              id: "3",              title: "Trusted for Years",              quote: "My family has been buying jewellery from Sweta Jewellers for years. Their authenticity and reliability are unmatched in the area.",              name: "Meera Gupta",              role: "Loyal Customer",              imageSrc: "http://img.b2bpic.net/free-photo/positive-confident-businesswoman-wearing-formal-suit-standing-with-arms-folded_74855-10328.jpg?_wi=3",              imageAlt: "Meera Gupta"
            },
            {
              id: "4",              title: "Amazing Custom Work",              quote: "I had a custom design made and the result exceeded my expectations. The team listened to every detail and delivered perfection.",              name: "Kavya Nair",              role: "Customer",              imageSrc: "http://img.b2bpic.net/free-photo/positive-confident-businesswoman-wearing-formal-suit-standing-with-arms-folded_74855-10328.jpg?_wi=4",              imageAlt: "Kavya Nair"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services and products"
          tag="FAQ"
          textboxLayout="default"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          faqsAnimation="slide-up"
          mediaPosition="left"
          imageSrc="http://img.b2bpic.net/free-photo/shop-cashier-seller-operating-payment-process-with-pos-terminal-credit-card-customer-paying-cloth-checkout-shopping-purchase-concept_74855-12002.jpg"
          imageAlt="Customer support"
          faqs={[
            { id: "1", title: "Do you provide hallmarked gold?", content: "Yes, all our gold jewellery is 100% hallmarked and certified. We guarantee purity and authenticity in every piece." },
            { id: "2", title: "Do you take custom jewellery orders?", content: "Absolutely! We offer complete custom design services. Our expert team will work with you to bring your vision to life." },
            { id: "3", title: "Do you offer jewellery delivery?", content: "Yes, we provide safe and reliable delivery service within 24 hours for your convenience." },
            { id: "4", title: "What are your store timings?", content: "We are open daily. We close at 9:30 PM. Please call us for exact opening time or visit us in person." },
            { id: "5", title: "Do you accept old gold exchange?", content: "Yes, we accept old gold exchange with fair market pricing. Bring your old jewellery and get great value." }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to find your perfect jewellery? Visit us at our Andheri West store or connect with us today for personalized assistance."
          animationType="entrance-slide"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          buttons={[
            { text: "📍 Get Directions", href: "https://maps.google.com/?q=20/B+Pink+Apartment+JP+Road+Aram+Nagar+Seven+Bungalows+Andheri+West+Mumbai+400061" },
            { text: "📞 Call Now", href: "tel:+919969173510" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Quick Links",              items: [
                { label: "Collections", href: "#collections" },
                { label: "Bridal Jewellery", href: "#bridal" },
                { label: "Custom Design", href: "#custom" },
                { label: "Reviews", href: "#reviews" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "📞 +919969173510", href: "tel:+919969173510" },
                { label: "💬 WhatsApp", href: "https://wa.me/919969173510" },
                { label: "📍 Andheri West, Mumbai", href: "#" },
                { label: "Store Hours: 9:30 PM", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Return Policy", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Sweta Jewellers (श्वेता ज्वेलर्स). All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
