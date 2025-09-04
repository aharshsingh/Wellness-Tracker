'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, SendHorizonal } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <main>
      {/* Removed the gradient background */}
      <section className="overflow-hidden relative">
        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-24">
          <div className="lg:flex lg:items-center lg:gap-12">
            {/* LEFT CONTENT */}
            <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
              <Link
                href="/"
                className="rounded-lg mx-auto flex w-fit items-center gap-2 border border-green-200 bg-white/80 dark:bg-gray-800 dark:border-gray-700 p-1 pr-3 lg:ml-0"
              >
                <span className="bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100 rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
                  New
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-200">
                  Introducing Wellness Tracker
                </span>
                <span className="bg-gray-300 dark:bg-gray-600 block h-4 w-px"></span>
                <ArrowRight className="size-4 text-green-600 dark:text-green-400" />
              </Link>

              {/* Gradient Title */}
              <h1 className="mt-10 text-balance text-4xl md:text-6xl xl:text-6xl font-extrabold leading-tight bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Track. Improve. Thrive.
              </h1>

              <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 max-w-md">
                Wellness Tracker helps you monitor your health habits, get
                AI-powered insights, and stay motivated on your journey to a
                healthier life.
              </p>

              {/* SUBSCRIBE FORM */}
              <form
                action=""
                className="mx-auto my-10 max-w-sm lg:my-12 lg:ml-0 lg:mr-auto"
              >
                <div className="bg-white dark:bg-gray-800 relative grid grid-cols-[1fr_auto] items-center rounded-[1rem] border border-green-200 dark:border-gray-700 pr-1 shadow shadow-zinc-950/5 has-[input:focus]:ring-2 has-[input:focus]:ring-green-400">
                  <Mail className="text-gray-400 dark:text-gray-500 pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                  <input
                    placeholder="Your email address"
                    className="h-14 w-full bg-transparent pl-12 focus:outline-none text-gray-900 dark:text-white"
                    type="email"
                  />

                  <div className="md:pr-1.5 lg:pr-0">
                    <Button
                      aria-label="submit"
                      className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                    >
                      <span className="hidden md:block">Subscribe</span>
                      <SendHorizonal
                        className="relative mx-auto size-5 md:hidden"
                        strokeWidth={2}
                      />
                    </Button>
                  </div>
                </div>
              </form>

              <ul className="list-inside list-disc space-y-2 text-left text-gray-700 dark:text-gray-300">
                <li>Track daily health & wellness</li>
                <li>AI-powered personalized insights</li>
                <li>Stay consistent and motivated</li>
              </ul>
            </div>

            {/* RIGHT SIDE IMAGE ANIMATION */}
            <div className="relative lg:w-1/2 hidden lg:block overflow-visible">
              <motion.img
                src="/ChatGPT Image Sep 4, 2025, 12_27_49 PM.png"
                alt="Running girl"
                className="w-[650px] max-h-[700px] object-cover mx-auto [mask-image:linear-gradient(to_right,transparent,black_20%,black)] [mask-repeat:no-repeat] [mask-size:100%_100%]"
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
