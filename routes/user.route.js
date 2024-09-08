import express from "express";
<<<<<<< HEAD
import {getProfile, login, register, logout, followOrUnfollow} from "../controllers/user.controller.js";
=======
import { editProfile, getProfile, login, register, logout, getSuggesstions, followOrUnfollow} from "../controllers/user.controller.js";
>>>>>>> 537ae0db26330debd07d366b6c0a6c4de3ffa7c6
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../middlewares/multer.js";
const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/:id/profile').get(isAuthenticated, getProfile);
<<<<<<< HEAD
// router.route('/profile/edit').post(isAuthenticated, upload.single('profilePicture'), editProfile);
// router.route('/suggested').get(isAuthenticated, getSuggesstions);
=======
router.route('/profile/edit').post(isAuthenticated, upload.single('profilePicture'), editProfile);
router.route('/suggested').get(isAuthenticated, getSuggesstions);
>>>>>>> 537ae0db26330debd07d366b6c0a6c4de3ffa7c6
router.route('/followorunfollow/:id').post(isAuthenticated, followOrUnfollow);

export default router;