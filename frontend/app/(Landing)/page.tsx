'use client'

import AboutUsSection from '@/components/about-us-section'
import { AccordionComponent } from '@/components/faq-accordion'
import { FeaturesSectionWithBentoGrid } from '@/components/feature-section-with-bento-grid'
import { HeroSection } from '@/components/hero-section-6'
import Testimonials from '@/components/testimonials'
import React from 'react'

export default function WellnessLandingPage() {
  return (
    <>
      <HeroSection/>
      <FeaturesSectionWithBentoGrid/>
      <AboutUsSection/>
      <Testimonials/>
      <AccordionComponent/>
    </>
  )
}
