
'use client'

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

// ✅ Validation Schema
const wellnessSchema = z.object({
  steps: z.number().optional(),
  exerciseDuration: z.number().optional(),
  exerciseType: z.string().optional(),
  sleepDuration: z.number(),
  sleepQuality: z.string(),
  mood: z.string(),
  stressLevel: z.number(),
  energy: z.string(),
  waterIntake: z.number(),
  caffeine: z.number().optional(),
  meals: z.string().optional(),
  screenTime: z.number().optional(),
  meditation: z.number().optional(),
  alcohol: z.string().optional(),
  weight: z.number().optional(),
  bp: z.string().optional(),
  heartRate: z.number().optional(),
  bloodSugar: z.number().optional(),
  notes: z.string().optional(),
  date: z.string(),
})

export default function DailyWellnessForm() {
  const { register, handleSubmit, setValue } = useForm<z.infer<typeof wellnessSchema>>({
    resolver: zodResolver(wellnessSchema),
    defaultValues: {
      date: new Date().toISOString().split("T")[0],
    },
  })

  const onSubmit = (data: z.infer<typeof wellnessSchema>) => {
    console.log("Wellness Data:", data)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">

      {/* ======= Header / Banner ======= */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">🌱 Daily Wellness Tracker</h1>
        <p className="text-gray-600 text-lg">
          Take a few minutes to track your daily habits, mood, and health indicators.  
          Small steps every day lead to big improvements in your wellbeing.
        </p>
        <blockquote className="italic text-gray-500">
          {"Wellness is a connection of paths: knowledge and action."} – Joshua Holtz
        </blockquote>
      </div>

      {/* ======= Wellness Form ======= */}
       <div className="max-w-4xl mx-auto p-6">
      <Card className="shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">🌱 Daily Wellness Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Physical Activity */}
            <section>
              <h2 className="text-lg font-semibold mb-2">1. Physical Activity</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input {...register("steps", { valueAsNumber: true })} placeholder="Steps walked" type="number" />
                <Input {...register("exerciseDuration", { valueAsNumber: true })} placeholder="Exercise (minutes)" type="number" />
                <Select onValueChange={(val) => setValue("exerciseType", val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Exercise type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="running">Running</SelectItem>
                    <SelectItem value="gym">Gym</SelectItem>
                    <SelectItem value="yoga">Yoga</SelectItem>
                    <SelectItem value="cycling">Cycling</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </section>

            {/* Sleep */}
            <section>
              <h2 className="text-lg font-semibold mb-2">2. Sleep</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input {...register("sleepDuration", { valueAsNumber: true })} placeholder="Hours slept" type="number" />
                <Select onValueChange={(val) => setValue("sleepQuality", val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sleep quality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="poor">Poor</SelectItem>
                    <SelectItem value="average">Average</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </section>

            {/* Mood & Mental Wellness */}
            <section>
              <h2 className="text-lg font-semibold mb-2">3. Mood & Mental Wellness</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Select onValueChange={(val) => setValue("mood", val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Mood" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="happy">😊 Happy</SelectItem>
                    <SelectItem value="neutral">😐 Neutral</SelectItem>
                    <SelectItem value="tired">😴 Tired</SelectItem>
                    <SelectItem value="stressed">😫 Stressed</SelectItem>
                    <SelectItem value="energetic">⚡ Energetic</SelectItem>
                  </SelectContent>
                </Select>

                <div>
                  <Label>Stress Level</Label>
                  <Slider
                    min={1}
                    max={5}
                    step={1}
                    defaultValue={[3]}
                    onValueChange={(val) => setValue("stressLevel", val[0])}
                  />
                </div>

                <Select onValueChange={(val) => setValue("energy", val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Energy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </section>

            {/* Nutrition */}
            <section>
              <h2 className="text-lg font-semibold mb-2">4. Nutrition & Hydration</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input {...register("waterIntake", { valueAsNumber: true })} placeholder="Water (glasses)" type="number" />
                <Input {...register("caffeine", { valueAsNumber: true })} placeholder="Caffeine (cups)" type="number" />
                <Select onValueChange={(val) => setValue("meals", val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Meals quality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="healthy">Healthy</SelectItem>
                    <SelectItem value="average">Average</SelectItem>
                    <SelectItem value="unhealthy">Unhealthy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </section>

            {/* Lifestyle */}
            <section>
              <h2 className="text-lg font-semibold mb-2">5. Lifestyle & Habits</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input {...register("screenTime", { valueAsNumber: true })} placeholder="Screen time (hours)" type="number" />
                <Input {...register("meditation", { valueAsNumber: true })} placeholder="Meditation (minutes)" type="number" />
                <Select onValueChange={(val) => setValue("alcohol", val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Alcohol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No</SelectItem>
                    <SelectItem value="yes">Yes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </section>

            {/* Health Indicators */}
            <section>
              <h2 className="text-lg font-semibold mb-2">6. Health Indicators</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Input {...register("weight", { valueAsNumber: true })} placeholder="Weight (kg)" type="number" />
                <Input {...register("bp")} placeholder="BP (120/80)" />
                <Input {...register("heartRate", { valueAsNumber: true })} placeholder="Heart rate (BPM)" type="number" />
                <Input {...register("bloodSugar", { valueAsNumber: true })} placeholder="Blood sugar (mg/dL)" type="number" />
              </div>
            </section>

            {/* General */}
            <section>
              <h2 className="text-lg font-semibold mb-2">7. General</h2>
              <Textarea {...register("notes")} placeholder="Notes / Journal" />
              <Input {...register("date")} type="date" />
            </section>

            <div className="flex justify-center">
              <Button type="submit" className="px-6 py-2 text-lg">Submit 🌟</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
    </div>
  )
}
