import { pgTable, uuid, varchar, integer, text, timestamp } from "drizzle-orm/pg-core";
import { profiles } from "./profile";
import { exerciseTypeEnum, sleepQualityEnum } from "./constants";

export const dailyWellness = pgTable("daily_wellness", {
    id: uuid("id").defaultRandom().primaryKey(),
    profileId: uuid("profile_id")
        .notNull()
        .references(() => profiles.id, { onDelete: "cascade" }),
    steps: integer("steps"),
    exerciseDuration: integer("exercise_duration"),
    exerciseType: exerciseTypeEnum("exercise_type"),
    sleepQuality: sleepQualityEnum("sleep_quality").notNull(),
    sleepDuration: integer("sleep_duration").notNull(),
    mood: varchar("mood", { length: 100 }).notNull(),
    stressLevel: integer("stress_level").notNull(),
    energy: varchar("energy", { length: 100 }).notNull(),
    waterIntake: integer("water_intake").notNull(),
    caffeine: integer("caffeine"),
    meals: text("meals"),
    screenTime: integer("screen_time"),
    meditation: integer("meditation"),
    alcohol: varchar("alcohol", { length: 100 }),
    weight: integer("weight"),
    bp: varchar("bp", { length: 50 }),
    heartRate: integer("heart_rate"),
    bloodSugar: integer("blood_sugar"),
    notes: text("notes"),
    date: varchar("date", { length: 50 }).notNull(),

    // timestamps
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull(),
});
