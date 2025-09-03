import { and, asc, eq, gte, lte } from "drizzle-orm";
import { db } from "../config/db";
import { dailyWellness } from "../db/schema/dailyWellness";
type DailyWellness = typeof dailyWellness.$inferInsert;

const dailyWellnessService = {
    async createDailyWellness(dailyWellnessInfo: DailyWellness) {
        const newDailyWellness = await db.insert(dailyWellness).values(dailyWellnessInfo).returning({
            id: dailyWellness.id,
            profileId: dailyWellness.profileId,
            steps: dailyWellness.steps,
            exerciseDuration: dailyWellness.exerciseDuration,
            exerciseType: dailyWellness.exerciseType,
            sleepQuality: dailyWellness.sleepQuality,
            sleepDuration: dailyWellness.sleepDuration,
            mood: dailyWellness.mood,
            stressLevel: dailyWellness.stressLevel,
            energy: dailyWellness.energy,
            waterIntake: dailyWellness.waterIntake,
            caffeine: dailyWellness.caffeine,
            meals: dailyWellness.meals,
            screenTime: dailyWellness.screenTime,
            meditation: dailyWellness.meditation,
            alcohol: dailyWellness.alcohol,
            weight: dailyWellness.weight,
            bp: dailyWellness.bp,
            heartRate: dailyWellness.heartRate,
            bloodSugar: dailyWellness.bloodSugar,
            notes: dailyWellness.notes,
            date: dailyWellness.date,
            createdAt: dailyWellness.createdAt,
            updatedAt: dailyWellness.updatedAt,
        });
        return newDailyWellness[0];
    },

    async getDailyWellness(date: string) {
        const dailyWellnessReport = await db.query.dailyWellness.findFirst({
            where: eq(dailyWellness.date, new Date(date)),
        });
        return !!dailyWellnessReport;
    },

    async getWeeklyWellness(startDate: string, endDate: string) {
        const weeklyWellnessReport = await db.query.dailyWellness.findMany({
            where: and(
                gte(dailyWellness.date, new Date(startDate)),
                lte(dailyWellness.date, new Date(endDate))
            ),
            orderBy: [asc(dailyWellness.date)],
        });
        return weeklyWellnessReport;
    },

    async getMonthlyWellness(month: number, year: number) {
        const start = new Date(year, month - 1, 1);
        const end = new Date(year, month, 0, 23, 59, 59, 999);

        const monthlyWellnessReport = await db.query.dailyWellness.findMany({
            where: and(
                gte(dailyWellness.date, start),
                lte(dailyWellness.date, end)
            ),
            orderBy: [asc(dailyWellness.date)],
        });

        return monthlyWellnessReport;
    },

    async updateDailyWellness(wellnessParams: any, dailyWellnessId: string) {
        const result = await db
            .update(dailyWellness)
            .set({
                ...wellnessParams,
                updatedAt: new Date(),
            })
            .where(eq(dailyWellness.id, dailyWellnessId))
            .returning();

        return result[0] || null;
    }

}

export default dailyWellnessService;
