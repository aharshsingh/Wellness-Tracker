import { z } from "zod";
import { EXERCISE_TYPES, MOOD_ENUM_VALUES, SLEEP_QUALITY_VALUES } from "../constants/enums";

export const registerSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const dailyWellnessSchema = z.object({
  profileId: z.string().uuid(),
  steps: z.number().int().min(0).optional(),
  exerciseDuration: z.number().int().min(0).optional(),
  exerciseType: z.enum(EXERCISE_TYPES).optional(),
  sleepQuality: z.enum(SLEEP_QUALITY_VALUES),
  sleepDuration: z.number().int().min(0),
  mood: z.enum(MOOD_ENUM_VALUES),
  stressLevel: z.number().int().min(0),
  energy: z.string().max(100),
  waterIntake: z.number().int().min(0),
  caffeine: z.number().int().min(0).optional(),
  meals: z.string().optional(),
  screenTime: z.number().int().min(0).optional(),
  meditation: z.number().int().min(0).optional(),
  alcohol: z.string().max(100).optional(),
  weight: z.number().int().min(0).optional(),
  bp: z.string().max(50).optional(),
  heartRate: z.number().int().min(0).optional(),
  bloodSugar: z.number().int().min(0).optional(),
  notes: z.string().optional(),
  date: z.string(),
});

// Type inference
export type DailyWellnessInput = z.infer<typeof dailyWellnessSchema>;
