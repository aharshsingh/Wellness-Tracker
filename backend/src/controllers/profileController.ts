import { Request, Response, NextFunction } from "express";
import {
  createProfileService,
  getProfilesService,
  getProfileByIdService,
  updateProfileService,
//   deleteProfileService,
} from "../services/profileService";

// Create Profile
export const createProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newProfile = await createProfileService(req.body);
    res.status(201).json({ message: "Profile created successfully", data: newProfile });
  } catch (error) {
    next(error);
  }
};

// Get All Profiles
export const getProfiles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allProfiles = await getProfilesService();
    res.status(200).json(allProfiles);
  } catch (error) {
    next(error);
  }
};

// Get Single Profile by ID
export const getProfileById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const profile = await getProfileByIdService(id);

    if (!profile) {
      res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json(profile);
  } catch (error) {
    next(error);
  }
};

// Update Profile
export const updateProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updated = await updateProfileService(id, req.body);

    if (!updated) {
      res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json({ message: "Profile updated successfully", data: updated });
  } catch (error) {
    next(error);
  }
};

// Delete Profile
// export const deleteProfile = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { id } = req.params;
//     const deleted = await deleteProfileService(id);

//     if (!deleted) {
//       return res.status(404).json({ message: "Profile not found" });
//     }

//     res.status(200).json({ message: "Profile deleted successfully" });
//   } catch (error) {
//     next(error);
//   }
// };
