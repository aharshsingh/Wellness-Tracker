import { boolean, date, integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { users } from "./users";

export const profiles = pgTable("profiles", {
    id: uuid().defaultRandom().primaryKey(),
    userId: uuid("user_id")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    email: varchar("email", { length: 255 }).notNull().unique(),
    isEmailVerified: boolean("is_email_verified").default(false),
    age: integer("age").notNull(),
    gender: varchar("gender", { length: 50 }).notNull(),
    location: varchar("location", { length: 100 }).notNull(),
    themePreference: varchar("theme_preference", { length: 20 }).default("light"), // "light" | "dark"
    language: varchar("language", { length: 50 }).default("en"),
    subscribed: boolean("subscribed").default(false).notNull(),
    dob: date("dob"),
    bloodGroup: varchar("blood_group", { length: 5 }),
    goal: varchar("goal", { length: 255 }),
});
