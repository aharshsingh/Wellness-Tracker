import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export function WeeklySelector() {
  const [range, setRange] = useState<{ from?: Date; to?: Date }>({})

  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      numberOfMonths={2} // show 2 months for easier week picking
      className="rounded-md border"
    />
  )
}
