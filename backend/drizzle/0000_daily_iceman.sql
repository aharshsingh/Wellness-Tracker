CREATE TYPE "public"."energy_enum" AS ENUM('very low', 'low', 'medium', 'high', 'very high');--> statement-breakpoint
CREATE TYPE "public"."exercise_type_enum" AS ENUM('cardio', 'strength', 'yoga', 'pilates', 'cycling', 'running', 'walking', 'swimming', 'sports', 'other');--> statement-breakpoint
CREATE TYPE "public"."mood_enum" AS ENUM('happy', 'sad', 'angry', 'stressed', 'calm', 'anxious', 'excited', 'tired', 'neutral');--> statement-breakpoint
CREATE TYPE "public"."sleep_quality_enum" AS ENUM('poor', 'fair', 'good', 'excellent');--> statement-breakpoint
CREATE TABLE "daily_wellness" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"profile_id" uuid NOT NULL,
	"steps" integer,
	"exercise_duration" integer,
	"exercise_type" "exercise_type_enum",
	"sleep_quality" "sleep_quality_enum" NOT NULL,
	"sleep_duration" integer NOT NULL,
	"mood" "mood_enum" NOT NULL,
	"stress_level" integer NOT NULL,
	"energy" varchar(100) NOT NULL,
	"water_intake" integer NOT NULL,
	"caffeine" integer,
	"meals" text,
	"screen_time" integer,
	"meditation" integer,
	"alcohol" varchar(100),
	"weight" integer,
	"bp" varchar(50),
	"heart_rate" integer,
	"blood_sugar" integer,
	"notes" text,
	"date" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"role" varchar(50) DEFAULT 'user' NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "profiles" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"email" varchar(255) NOT NULL,
	"is_email_verified" boolean DEFAULT false,
	"age" integer NOT NULL,
	"gender" varchar(50) NOT NULL,
	"location" varchar(100) NOT NULL,
	"theme_preference" varchar(20) DEFAULT 'light',
	"language" varchar(50) DEFAULT 'en',
	"subscribed" boolean DEFAULT false NOT NULL,
	"dob" date,
	"blood_group" varchar(5),
	"goal" varchar(255),
	CONSTRAINT "profiles_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "wellnessAIR" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"daily_wellness_Id" uuid NOT NULL,
	"report" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "daily_wellness" ADD CONSTRAINT "daily_wellness_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "wellnessAIR" ADD CONSTRAINT "wellnessAIR_daily_wellness_Id_daily_wellness_id_fk" FOREIGN KEY ("daily_wellness_Id") REFERENCES "public"."daily_wellness"("id") ON DELETE cascade ON UPDATE no action;