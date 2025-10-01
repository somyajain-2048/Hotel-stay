import User from "../models/user.js";

export const protect = async (req, res, next) => {
  try {
    const { userId } = req.auth();
    console.log("req.auth() output:", req.auth());
    if (!userId) {
      res.json({ success: false, message: "not authenticated " });
    } else {
      const user = await User.findById(userId);
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }
      req.user = user;
      req.userId = userId;
      next();
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
