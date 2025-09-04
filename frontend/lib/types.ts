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
  user: any | null;
  loading: boolean;
}
