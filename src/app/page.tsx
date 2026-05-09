import Hero               from "@/components/sections/Hero";
import ServicesPreview    from "@/components/sections/ServicesPreview";
import AboutSection       from "@/components/sections/AboutSection";
import StatsBar           from "@/components/sections/StatsBar";
import NewsletterPartners from "@/components/sections/NewsletterPartners";
import PortfolioPreview   from "@/components/sections/PortfolioPreview";
import WhyUs              from "@/components/sections/WhyUs";
import Testimonials       from "@/components/sections/Testimonials";
import TeamSection        from "@/components/sections/TeamSection";
import BlogPreview        from "@/components/sections/BlogPreview";
import CTABanner          from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero/>
      <ServicesPreview/>
      <AboutSection/>
      <StatsBar/>
      <NewsletterPartners/>
      <PortfolioPreview/>
      <WhyUs/>
      <Testimonials/>
      <TeamSection/>
      <BlogPreview/>
      <CTABanner/>
    </>
  );
}
