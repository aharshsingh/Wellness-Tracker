"use client"

import { useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/line-chart"
import { NumericWellnessKeys, WellnessDay } from "@/lib/types"

// Weekly data
const weeklyData = [
  { day: "Mon", steps: 7500, sleep: 6.5, stress: 3, energy: 7, weight: 70 },
  { day: "Tue", steps: 8200, sleep: 7, stress: 4, energy: 6, weight: 69.8 },
  { day: "Wed", steps: 6700, sleep: 5.5, stress: 5, energy: 5, weight: 69.7 },
  { day: "Thu", steps: 9100, sleep: 8, stress: 2, energy: 8, weight: 69.5 },
  { day: "Fri", steps: 10200, sleep: 7.5, stress: 3, energy: 7, weight: 69.4 },
  { day: "Sat", steps: 12000, sleep: 6.8, stress: 2, energy: 8, weight: 69.2 },
  { day: "Sun", steps: 6000, sleep: 7.2, stress: 4, energy: 6, weight: 69.3 },
]

// Monthly data
const monthlyData = Array.from({ length: 30 }, (_, i) => ({
  day: `Day ${i + 1}`,
  steps: Math.floor(Math.random() * 8000) + 4000,
  sleep: +(Math.random() * 3 + 5).toFixed(1),
  stress: Math.floor(Math.random() * 5) + 1,
  energy: Math.floor(Math.random() * 5) + 5,
  weight: +(69 + Math.random() * 2).toFixed(1),
}))

const chartConfigs = {
  steps: { label: "Steps", gradient: "url(#stepsGradient)" },
  sleep: { label: "Sleep (hrs)", gradient: "url(#sleepGradient)" },
  stress: { label: "Stress", gradient: "url(#stressGradient)" },
  energy: { label: "Energy", gradient: "url(#energyGradient)" },
  weight: { label: "Weight (kg)", gradient: "url(#weightGradient)" },
}

// Utility: calculate percentage change
function getPercentageChange(data: WellnessDay[], key: NumericWellnessKeys ) {
  if (data.length < 2) return null
  const last = data[data.length - 1][key]
  const prev = data[data.length - 2][key]
  const diff = ((last - prev) / prev) * 100
  return diff.toFixed(1)
}

export default function ChartsDemo() {
  const [timeRange, setTimeRange] = useState<"weekly" | "monthly">("weekly")
  const data = timeRange === "weekly" ? weeklyData : monthlyData

  const renderChart = (key: keyof typeof chartConfigs) => {
    const change = getPercentageChange(data, key)
    const isUp = change && parseFloat(change) >= 0

    return (
      <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="font-semibold">{chartConfigs[key].label}</h3>
            <p className="text-sm text-gray-500">
              {timeRange === "weekly" ? "This Week" : "This Month"}
            </p>
          </div>
          {change !== null && (
            <span
              className={`text-sm font-medium px-2 py-1 rounded-full ${
                isUp ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
              }`}
            >
              {isUp ? "▲" : "▼"} {Math.abs(parseFloat(change))}%
            </span>
          )}
        </div>

        {/* Chart */}
        <div className="h-32">
          <ChartContainer config={chartConfigs}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
              >
                {/* Gradient Defs */}
                <defs>
                  <linearGradient id="stepsGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#00c6ff" />
                    <stop offset="100%" stopColor="#0072ff" />
                  </linearGradient>
                  <linearGradient id="sleepGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#7b2ff7" />
                    <stop offset="100%" stopColor="#f107a3" />
                  </linearGradient>
                  <linearGradient id="stressGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#ff0844" />
                    <stop offset="100%" stopColor="#ffb199" />
                  </linearGradient>
                  <linearGradient id="energyGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#00b09b" />
                    <stop offset="100%" stopColor="#96c93d" />
                  </linearGradient>
                  <linearGradient id="weightGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#f7971e" />
                    <stop offset="100%" stopColor="#ffd200" />
                  </linearGradient>

                  {/* ClipPath to keep lines inside */}
                  <clipPath id={`clip-${key}`}>
                    <rect x="0" y="0" width="100%" height="100%" />
                  </clipPath>
                </defs>

                <XAxis dataKey="day" hide />
                <YAxis hide />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey={key}
                  stroke={chartConfigs[key].gradient}
                  strokeWidth={3}
                  dot={false}
                  clipPath={`url(#clip-${key})`}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Toggle buttons */}
      <div className="flex gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            timeRange === "weekly" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setTimeRange("weekly")}
        >
          Weekly
        </button>
        <button
          className={`px-4 py-2 rounded ${
            timeRange === "monthly" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setTimeRange("monthly")}
        >
          Monthly
        </button>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderChart("steps")}
        {renderChart("sleep")}
        {renderChart("stress")}
        {renderChart("energy")}
        {renderChart("weight")}
      </div>
    </div>
  )
}
