"use client"

import type React from "react"
import Image from 'next/image'
import { useRef } from "react"
import {
  Activity,
  Moon,
  Smile,
  Target,
  Award,
  Users,
  Calendar,
  TrendingUp,
  ArrowRight,
  Zap,
  Sparkles,
  Star,
  CheckCircle,
} from "lucide-react"
import { motion } from "framer-motion"

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      icon: <Activity className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-green-500" />,
      title: "Track Health",
      description:
        "Log your steps, workouts, and sleep effortlessly. Wellness Tracker helps you keep all your daily health data in one place.",
      position: "left",
    },
    {
      icon: <Smile className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-green-500" />,
      title: "Mood Tracking",
      description:
        "Understand your emotional well-being by recording your daily moods and discovering patterns over time.",
      position: "left",
    },
    {
      icon: <Moon className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-green-500" />,
      title: "Better Sleep",
      description:
        "Monitor your sleep quality and get AI-powered suggestions to improve rest and recovery.",
      position: "left",
    },
    {
      icon: <Target className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-green-500" />,
      title: "Set Goals",
      description:
        "Define fitness and wellness goals such as step counts, sleep hours, or exercise frequency, and stay motivated.",
      position: "right",
    },
    {
      icon: <Award className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-green-500" />,
      title: "AI Insights",
      description:
        "Receive personalized tips and insights from our AI to help you balance activity, sleep, and mood.",
      position: "right",
    },
    {
      icon: <Users className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-green-500" />,
      title: "Stay Connected",
      description:
        "Join a growing community of wellness seekers, share your journey, and celebrate achievements together.",
      position: "right",
    },
  ]

  const stats = [
    { icon: <Users />, value: "10K+", label: "Active Users" },
    { icon: <Award />, value: "95%", label: "User Satisfaction" },
    { icon: <Calendar />, value: "3+", label: "Years of Growth" },
    { icon: <TrendingUp />, value: "500+", label: "Goals Achieved" },
  ]

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-24 px-4 text-gray-900 overflow-hidden relative bg-white"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <span className="text-gray-700 font-medium mb-2 flex items-center gap-2">
            <Zap className="w-4 h-4" />
            OUR MISSION
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Wellness Tracker
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600"></div>
        </div>

        <p className="text-center max-w-2xl mx-auto mb-16 text-gray-600">
          Wellness Tracker is designed to help you live a healthier, balanced life. We combine powerful tracking tools
          with AI-driven insights to make wellness simple, personalized, and effective.
        </p>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="space-y-16">
            {services.filter((s) => s.position === "left").map((s, i) => (
              <ServiceItem key={`left-${i}`} {...s} />
            ))}
          </div>

          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <div className="relative w-full max-w-xs">
              <div className="rounded-md overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1200&auto=format&fit=crop"
                  alt="Wellness Tracking App Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-16">
            {services.filter((s) => s.position === "right").map((s, i) => (
              <ServiceItem key={`right-${i}`} {...s} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 border border-gray-200 text-gray-900 p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 bg-gray-50">
          <div className="flex-1">
            <h3 className="text-2xl font-medium mb-2">Ready to take charge of your health?</h3>
            <p className="text-gray-600">Start tracking today and unlock your personalized wellness journey.</p>
          </div>
          <motion.button
            className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 hover:opacity-90 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

function ServiceItem({ icon, secondaryIcon, title, description }: {icon: React.ReactNode, secondaryIcon: React.ReactNode, title: string, description: string}) {
  return (
    <div className="flex flex-col group hover:-translate-y-1 transition-transform duration-200">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-gray-800 bg-gray-100 p-3 rounded-lg relative group-hover:bg-gray-200 transition-colors duration-300">
          {icon}
          {secondaryIcon}
        </div>
        <h3 className="text-xl font-semibold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h3>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed pl-12">{description}</p>
    </div>
  )
}

function StatCard({ icon, value, label }: {icon: React.ReactNode, value: string, label: string}) {
  return (
    <div className="border border-gray-200 p-6 rounded-xl flex flex-col items-center text-center group hover:bg-emerald-50 transition-colors duration-300">
      <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
        {icon}
      </div>
      {/* Gradient applied here */}
      <div className="text-3xl font-bold flex items-center bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
        {value}
      </div>
      <p className="text-gray-600 text-sm mt-1">{label}</p>
    </div>
  )
}

