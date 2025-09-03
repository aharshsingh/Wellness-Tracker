import { pgEnum } from "drizzle-orm/pg-core";
import { SLEEP_QUALITY_VALUES, EXERCISE_TYPES, MOOD_ENUM_VALUES, ENERGY_VALUES } from "../../constants/enums";

export const sleepQualityEnum = pgEnum("sleep_quality_enum", SLEEP_QUALITY_VALUES);

export const exerciseTypeEnum = pgEnum("exercise_type_enum", EXERCISE_TYPES);

export const moodEnum = pgEnum("mood_enum", MOOD_ENUM_VALUES);

export const energyEnum = pgEnum("energy_enum", ENERGY_VALUES);
