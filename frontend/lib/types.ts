export type UserProfile = {
  id: string;                // UUID primary key
  userId: string;            // UUID referencing users.id
  email: string;             // User email
  isEmailVerified: boolean;  // Email verification status
  age: number;               // Age
  gender: string;            // Gender
  location: string;          // Location
  themePreference: "light" | "dark"; // Theme preference
  language: string;          // Language code, e.g., "en"
  subscribed: boolean;       // Subscription status
  dob?: string | Date;       // Date of birth (optional)
  bloodGroup?: string;       // Blood group (optional)
  goal?: string;             // Goal description (optional)
};

export interface AuthContextType {
  profile: UserProfile | null;
  loading: boolean;
}

export type WellnessEntry = {
  steps: number;
  exercise: {
    duration: number; // in minutes
    type: string;
  };
  sleep: {
    duration: number; // in hours
    quality: string;
  };
  mood: string;
  stress: string;
  energy: string;
  hydration: number; // glasses of water
  caffeine: number; // cups of coffee
  meals: string;
  screenTime: number; // in hours
  meditation: number; // in minutes
  alcohol: string;
  weight: number; // in kg
  bp: string; // blood pressure, e.g., "120/80"
  heartRate: number; // bpm
  bloodSugar: number; // mg/dL
  notes: string;
  date: string; // YYYY-MM-DD
};

export type WellnessDay = {
  day: string;       // e.g., "Mon", "Tue"
  steps: number;     // number of steps
  sleep: number;     // hours of sleep
  stress: number;    // stress level (e.g., 1-10)
  energy: number;    // energy level (e.g., 1-10)
  weight: number;    // weight in kg
};

export type NumericWellnessKeys = "steps" | "sleep" | "stress" | "energy" | "weight";

export interface SignupResponse {
  id: string;
  username: string;
  email: string;
}