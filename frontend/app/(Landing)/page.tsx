'use client'

import AboutUsSection from '@/components/about-us-section'
import { AccordionComponent } from '@/components/faq-accordion'
import { FeaturesSectionWithBentoGrid } from '@/components/feature-section-with-bento-grid'
import { HeroSection } from '@/components/hero-section-6'
import Testimonials from '@/components/testimonials'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function WellnessLandingPage() {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const aboutRef = useRef(null)
  const testimonialsRef = useRef(null)
  const faqRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, amount: 0.2 })
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 })
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.2 })
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 })
  const faqInView = useInView(faqRef, { once: true, amount: 0.2 })

  const fadeUp = (inView: boolean, delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, delay },
  })

  return (
    <>
      <motion.div ref={heroRef} {...fadeUp(heroInView)}>
        <HeroSection />
      </motion.div>

      <motion.div ref={featuresRef} {...fadeUp(featuresInView, 0.2)}>
        <FeaturesSectionWithBentoGrid />
      </motion.div>

      <motion.div ref={aboutRef} {...fadeUp(aboutInView, 0.4)}>
        <AboutUsSection />
      </motion.div>

      <motion.div ref={testimonialsRef} {...fadeUp(testimonialsInView, 0.6)}>
        <Testimonials />
      </motion.div>

      <motion.div ref={faqRef} {...fadeUp(faqInView, 0.8)}>
        <AccordionComponent />
      </motion.div>
    </>
  )
}
