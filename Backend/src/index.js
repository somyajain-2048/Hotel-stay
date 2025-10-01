// import express from "express";
// import "dotenv/config";
// import cors from "cors";
// import connectDB from "../config/db.js";
// import { clerkMiddleware } from "@clerk/express";
// import clerkWebhooks from "../controllers/ClerkWebhooks.js";
// import userRouter from "../routes/userRoutes.js";
// import hotelRouter from "../routes/HotelRoutes.js";
// import connectCloudinary from "../config/cloudinary.js";
// import roomRouter from "../routes/roomRoute.js";
// import bookingRouter from "../routes/BookingRoutes.js";
// import { requireAuth } from "@clerk/express";

// connectDB();
// connectCloudinary();

// const app = express();
// app.use(cors());

// //middleware
// app.use(express.json());
// app.use(clerkMiddleware());

// app.use("/api/clerk", clerkWebhooks);
// app.get("/", (req, res) => res.send("API is working "));

// import { requireAuth } from "@clerk/express";

// app.get("/api/user", requireAuth(), (req, res) => {
//   res.json({ success: true, role: "hotelOwner", recentSearchedCities: [] });
// });

// app.use("/api/user", userRouter);
// app.use("/api/hotels", hotelRouter);
// app.use("/api/rooms", roomRouter);
// app.use("/api/bookings", bookingRouter);

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "../config/db.js";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import clerkWebhooks from "../controllers/ClerkWebhooks.js";
import userRouter from "../routes/userRoutes.js";
import hotelRouter from "../routes/HotelRoutes.js";
import connectCloudinary from "../config/cloudinary.js";
import roomRouter from "../routes/roomRoute.js";
import bookingRouter from "../routes/BookingRoutes.js";

connectDB();
connectCloudinary();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// Clerk middleware (required for auth context)
app.use(clerkMiddleware());

// Routes
app.use("/api/clerk", clerkWebhooks);
app.get("/", (req, res) => res.send("API is working"));

app.use("/api/user", userRouter);

// other routers
app.use("/api/hotels", hotelRouter);
app.use("/api/rooms", roomRouter);
app.use("/api/bookings", bookingRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
