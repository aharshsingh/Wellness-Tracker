import { NextFunction, Request, Response } from "express";
import { validateBody } from "../utils/validator";
import { dailyWellnessSchema } from "../validators";
import dailyWellnessService from "../services/wellnessService";
import { sendResponse } from "../utils/response";
import CustomErrorHandler from "../services/customErrorHandler";
import { db } from "../config/db";
import { dailyWellness } from "../db/schema";
import { eq } from "drizzle-orm";

const dailyWellnessController = {
    async dailyWellness(req: Request, res: Response, next: NextFunction) {
        try {
            const wellnessBody = validateBody(dailyWellnessSchema, req.body);
            if (!wellnessBody.success) {
                return next(wellnessBody.error);
            }
            const dailyWellness = await dailyWellnessService.createDailyWellness({
                profileId: wellnessBody.data.profileId,
                steps: wellnessBody.data.steps,
                exerciseDuration: wellnessBody.data.exerciseDuration,
                exerciseType: wellnessBody.data.exerciseType,
                sleepQuality: wellnessBody.data.sleepQuality,
                sleepDuration: wellnessBody.data.sleepDuration,
                mood: wellnessBody.data.mood,
                stressLevel: wellnessBody.data.stressLevel,
                energy: wellnessBody.data.energy,
                waterIntake: wellnessBody.data.waterIntake,
                caffeine: wellnessBody.data.caffeine,
                meals: wellnessBody.data.meals,
                screenTime: wellnessBody.data.screenTime,
                meditation: wellnessBody.data.meditation,
                alcohol: wellnessBody.data.alcohol,
                weight: wellnessBody.data.weight,
                bp: wellnessBody.data.bp,
                heartRate: wellnessBody.data.heartRate,
                bloodSugar: wellnessBody.data.bloodSugar,
                notes: wellnessBody.data.notes,
                date: new Date(wellnessBody.data.date),
            });
            sendResponse(res, "dailyWellness saved successfully", dailyWellness, "CREATED");
        } catch (error) {
            console.log(error);
            return next(error);
        }
    },

    async getDailyWellness(req: Request, res: Response, next: NextFunction) {
        try {
            const { date, startDate, endDate, month, year } = req.query as {
                date?: string;
                startDate?: string;
                endDate?: string;
                month?: string;
                year?: string;
            };
            let wellnessReport
            if (date) {
                wellnessReport = await dailyWellnessService.getDailyWellness(date);
            }
            if (startDate && endDate) {
                wellnessReport = await dailyWellnessService.getWeeklyWellness(startDate, endDate)
            }
            if (month && year) {
                wellnessReport = await dailyWellnessService.getMonthlyWellness(
                    parseInt(month),
                    parseInt(year)
                );
            }
            sendResponse(res, wellnessReport, "SUCCESS");
        } catch (error) {
            console.log(error);
            return next(error);
        }
    },

    async updateDailyWellness(req: Request, res: Response, next: NextFunction) {
        try {
            const wellnessBody = req.body;
            const { dailyWellnessId } = req.query as { dailyWellnessId: string }
            if (!dailyWellnessId) {
                return next(CustomErrorHandler.badRequest("dailyWellnessId is required"));
            }
            const upadatedWellness = await dailyWellnessService.updateDailyWellness(wellnessBody, dailyWellnessId);
            sendResponse(res, "dailyWellness updated successfully", upadatedWellness, "UPDATED");
        } catch (error) {
            console.log(error);
            return next(error);
        }
    },

    async deleteDailyWellness(req: Request, res: Response, next: NextFunction) {
        try {
            const { dailyWellnessId } = req.query as { dailyWellnessId: string }
            if (!dailyWellnessId) {
                return next(CustomErrorHandler.badRequest("dailyWellnessId is required"));
            }

            const deleted = await db
                .delete(dailyWellness)
                .where(eq(dailyWellness.id, dailyWellnessId))
                .returning();

            if (!deleted.length) {
                return next(CustomErrorHandler.notFound("Daily wellness record not found"));
            }
        } catch (error) {
            console.log(error);
            return next(error);
        }
    }
}

export default dailyWellnessController;