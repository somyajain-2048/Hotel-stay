import express from "express";
import {
  CheckAvailabilityAPI,
  createBooking,
  getHotelBookings,
  getUserBookings,
} from "../controllers/BookingController.js";
import { protect } from "../middleware/authmiddleware.js";

const bookingRouter = express.Router();

bookingRouter.post("/check-availability", CheckAvailabilityAPI);
bookingRouter.post("/book", protect, createBooking);
bookingRouter.get("/user", protect, getUserBookings);
bookingRouter.get("/hotel", protect, getHotelBookings);

export default bookingRouter;
