"use client"

import { CursorCard, CursorCardsContainer } from "@/components/cursor-cards"
import { Footprints, Moon, Smile, Droplet, Monitor, Activity } from "lucide-react"
import { useState } from "react";
import ChartsDemo from "./chart";

export default function DailyWellnessCards({ entry }) {
    entry = {
        steps: 7500,
        exercise: { duration: 30, type: "Running" },
        sleep: { duration: 6.5, quality: "Good" },
        mood: "Happy 😊",
        stress: "Medium",
        energy: "High",
        hydration: 7,
        caffeine: 2,
        meals: "Healthy",
        screenTime: 4,
        meditation: 10,
        alcohol: "No",
        weight: 70,
        bp: "120/80",
        heartRate: 72,
        bloodSugar: 95,
        notes: "Felt productive today!",
        date: "2025-08-25"
    }

    const [mode, setMode] = useState("daily");
    const [date, setDate] = useState(null);

    return (
        <>
            <CursorCardsContainer
                className="grid gap-4 p-4 
                 grid-cols-1
                 sm:grid-cols-2 
                 lg:grid-cols-4 
                 auto-rows-[minmax(150px,auto)]"
            >
                {/* Physical Activity */}
                <CursorCard className="rounded-xl shadow-md p-4 flex flex-col lg:col-span-2 lg:row-span-2">
                    <div className="flex items-center gap-2 mb-2">
                        <Footprints className="w-5 h-5" />
                        <h2 className="text-lg font-semibold">Physical Activity</h2>
                    </div>
                    <p><strong>Steps:</strong> {entry.steps}</p>
                    <p><strong>Exercise:</strong> {entry.exercise.duration} mins ({entry.exercise.type})</p>
                </CursorCard>

                {/* Sleep */}
                <CursorCard className="rounded-xl shadow-md p-4 flex flex-col lg:row-span-1">
                    <div className="flex items-center gap-2 mb-2">
                        <Moon className="w-5 h-5" />
                        <h2 className="text-lg font-semibold">Sleep</h2>
                    </div>
                    <p><strong>Duration:</strong> {entry.sleep.duration} hrs</p>
                    <p><strong>Quality:</strong> {entry.sleep.quality}</p>
                </CursorCard>

                {/* Mood */}
                <CursorCard className="rounded-xl shadow-md p-4 flex flex-col lg:row-span-1">
                    <div className="flex items-center gap-2 mb-2">
                        <Smile className="w-5 h-5" />
                        <h2 className="text-lg font-semibold">Mood & Mental</h2>
                    </div>
                    <p><strong>Mood:</strong> {entry.mood}</p>
                    <p><strong>Stress:</strong> {entry.stress}</p>
                    <p><strong>Energy:</strong> {entry.energy}</p>
                </CursorCard>

                {/* Nutrition */}
                <CursorCard className="rounded-xl shadow-md p-4 flex flex-col lg:row-span-1">
                    <div className="flex items-center gap-2 mb-2">
                        <Droplet className="w-5 h-5" />
                        <h2 className="text-lg font-semibold">Nutrition & Hydration</h2>
                    </div>
                    <p><strong>Water:</strong> {entry.hydration} glasses</p>
                    <p><strong>Caffeine:</strong> {entry.caffeine} cups</p>
                    <p><strong>Meals:</strong> {entry.meals}</p>
                </CursorCard>

                {/* Lifestyle */}
                <CursorCard className="rounded-xl shadow-md p-4 flex flex-col lg:row-span-1">
                    <div className="flex items-center gap-2 mb-2">
                        <Monitor className="w-5 h-5" />
                        <h2 className="text-lg font-semibold">Lifestyle & Habits</h2>
                    </div>
                    <p><strong>Screen Time:</strong> {entry.screenTime} hrs</p>
                    <p><strong>Meditation:</strong> {entry.meditation} mins</p>
                    <p><strong>Alcohol:</strong> {entry.alcohol}</p>
                </CursorCard>

                {/* Health Indicators */}
                <CursorCard className="rounded-xl shadow-md p-4 flex flex-col lg:col-span-2">
                    <div className="flex items-center gap-2 mb-2">
                        <Activity className="w-5 h-5" />
                        <h2 className="text-lg font-semibold">Health Indicators</h2>
                    </div>
                    <p><strong>Weight:</strong> {entry.weight} kg</p>
                    <p><strong>BP:</strong> {entry.bp}</p>
                    <p><strong>HR:</strong> {entry.heartRate} bpm</p>
                    <p><strong>Blood Sugar:</strong> {entry.bloodSugar} mg/dL</p>
                </CursorCard>

                {/* Notes */}
                <CursorCard className="rounded-xl shadow-md p-4 flex flex-col lg:col-span-2">
                    <h2 className="text-lg font-semibold mb-2">General Notes</h2>
                    <p>{entry.notes}</p>
                    <p className="mt-2 text-sm text-gray-500">Date: {entry.date}</p>
                </CursorCard>
            </CursorCardsContainer>
            <ChartsDemo />
        </>
    )
}
