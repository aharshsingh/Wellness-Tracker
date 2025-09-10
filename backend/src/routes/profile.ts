import express from 'express'
import { createProfile, getProfileById, getProfiles, updateProfile } from '../controllers/profileController'
const router = express.Router();

router.post("/create", createProfile);
router.post("/", getProfiles);
router.post("/:id", getProfileById);
router.post("/update", updateProfile)
export default router;
