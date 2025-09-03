import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";
import { dailyWellness } from "./dailyWellness";

export const wellnessAIR = pgTable("wellnessAIR", {
    id: uuid("id").defaultRandom().primaryKey(),
    daily_wellness_Id: uuid("daily_wellness_Id")
        .notNull()
        .references(() => dailyWellness.id, { onDelete: "cascade" }),
    report: varchar("report"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});
