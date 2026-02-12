import React from 'react';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesGrid from '@/components/landing/FeaturesGrid';
import SolutionSection from '@/components/landing/SolutionSection';
import PackageContents from '@/components/landing/PackageContents';
import BenefitsSection from '@/components/landing/BenefitsSection';
import AccountFeatures from '@/components/landing/AccountFeatures';

import PricingSection from '@/components/landing/PricingSection';
import SpecsSection from '@/components/landing/SpecsSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesGrid />
      <SolutionSection />
      <PackageContents />
      <BenefitsSection />
      <AccountFeatures />

      <PricingSection />
      <SpecsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}