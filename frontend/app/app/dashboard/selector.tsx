"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"

import { DailySelector } from "@/components/datePicker"
import { WeeklySelector } from "@/components/weekPicker"
import { MonthlySelector } from "@/components/monthPicker"

export default function SubNavbar() {
  const [view, setView] = useState<"daily" | "weekly" | "monthly">("daily")

  return (
    <div className="flex items-center justify-between border-b p-4">
      {/* Left: Popover Selector */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            {view === "daily" && "Select Date"}
            {view === "weekly" && "Select Week"}
            {view === "monthly" && "Select Month"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-2 w-auto">
          {view === "daily" && <DailySelector />}
          {view === "weekly" && <WeeklySelector />}
          {view === "monthly" && <MonthlySelector />}
        </PopoverContent>
      </Popover>

      {/* Right: View Switcher Buttons */}
      <div className="flex gap-2">
        <Button variant={view === "daily" ? "default" : "outline"} onClick={() => setView("daily")}>
          Daily
        </Button>
        <Button variant={view === "weekly" ? "default" : "outline"} onClick={() => setView("weekly")}>
          Weekly
        </Button>
        <Button variant={view === "monthly" ? "default" : "outline"} onClick={() => setView("monthly")}>
          Monthly
        </Button>
      </div>
    </div>
  )
}
