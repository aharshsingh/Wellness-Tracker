'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function WellnessLandingPage() {
  return (
    <div className="w-full bg-[#f0fdf4] text-gray-900">

      {/* ==================== Hero Section ==================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 text-center space-y-8 bg-gradient-to-br from-green-50 to-green-100">
        <div className="relative w-full max-w-4xl h-80 md:h-96 rounded-3xl overflow-hidden shadow-lg mx-auto">
          <Image
            src="/wellness-hero.jpg"
            alt="Daily Wellness Hero"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          🌱 Daily Wellness Tracker
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-700">
          Track your habits, mood, nutrition, sleep, and more.  
          Small steps daily lead to big improvements in your overall wellbeing.
        </p>
        <blockquote className="italic text-gray-600 text-lg max-w-xl">
          "Wellness is a journey, not a destination." – Anonymous
        </blockquote>
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-lg font-semibold"
          onClick={() => window.location.href = '/wellness/form'}
        >
          Start Your Wellness Journey 📝
        </Button>
      </section>

      {/* ==================== Features Section ==================== */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Features to Boost Your Wellbeing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-green-50 rounded-2xl p-6 shadow hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-3">Habit Tracking</h3>
            <p className="text-gray-700">
              Log daily activities like exercise, sleep, hydration, and meditation.
            </p>
          </div>
          <div className="bg-green-50 rounded-2xl p-6 shadow hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-3">Mood & Stress Insights</h3>
            <p className="text-gray-700">
              Keep track of your mood and stress levels to identify patterns over time.
            </p>
          </div>
          <div className="bg-green-50 rounded-2xl p-6 shadow hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-3">Nutrition & Hydration</h3>
            <p className="text-gray-700">
              Monitor meals, water intake, caffeine, and other nutrition habits.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== Wellness Stats / Cards Section ==================== */}
      <section className="py-20 px-6 md:px-12 bg-green-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Daily Wellness Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:scale-105 transition-transform">
            <h3 className="text-5xl font-bold text-green-600 mb-2">76%</h3>
            <p className="text-gray-700">
              of users report improved mood after consistent tracking for 30 days.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:scale-105 transition-transform">
            <h3 className="text-5xl font-bold text-green-600 mb-2">41%</h3>
            <p className="text-gray-700">
              of participants increased their water intake and reduced caffeine consumption.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:scale-105 transition-transform">
            <h3 className="text-5xl font-bold text-green-600 mb-2">85%</h3>
            <p className="text-gray-700">
              of users developed a consistent sleep schedule after using the tracker.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== Testimonial / Quote Section ==================== */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Why Users Love Daily Wellness</h2>
          <p className="italic text-gray-600 text-lg">
            "Since I started logging my habits daily, I feel more energized, sleep better, and handle stress more effectively. It has truly changed my life!" – Sarah L.
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-lg font-semibold"
            onClick={() => window.location.href = '/wellness/form'}
          >
            Start Tracking Today 📝
          </Button>
        </div>
      </section>

      {/* ==================== CTA Banner Section ==================== */}
      <section className="py-20 px-6 md:px-12 bg-green-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-12">
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Take Charge of Your Wellness Today</h2>
            <p className="text-gray-700 text-lg">
              It only takes a few minutes each day to log your habits, track your mood, and see measurable improvements.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-lg font-semibold"
            onClick={() => window.location.href = '/wellness/form'}
          >
            Get Started 📝
          </Button>
        </div>
      </section>
    </div>
  )
}
