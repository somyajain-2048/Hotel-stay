import express from "express";
import { protect } from "../middleware/authmiddleware.js";
import { registerHotel } from "../controllers/HotelController.js";

const hotelRouter = express.Router();
hotelRouter.post("/", protect, registerHotel);

export default hotelRouter;
