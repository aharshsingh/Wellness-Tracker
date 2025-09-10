import db from "../config/db";
import { profiles } from "../db/schema";
import { eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";

export const createProfileService = async (profileData: any) => {
  const newProfile = {
    id: uuidv4(),
    ...profileData,
  };

  await db.insert(profiles).values(newProfile);
  return newProfile;
};

export const getProfilesService = async () => {
  return await db.select().from(profiles);
};

export const getProfileByIdService = async (id: string) => {
  const profile = await db.select().from(profiles).where(eq(profiles.id, id));
  return profile.length > 0 ? profile[0] : null;
};

export const updateProfileService = async (id: string, updateData: any) => {
  const updated = await db
    .update(profiles)
    .set(updateData)
    .where(eq(profiles.id, id))
    .returning();

  return updated.length > 0 ? updated[0] : null;
};

// export const deleteProfileService = async (id: string) => {
//   const deleted = await db.delete(profiles).where(eq(profiles.id, id)).returning();
//   return deleted.length > 0 ? deleted[0] : null;
// };
