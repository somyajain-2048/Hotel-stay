import User from "../models/user.js";
import Hotel from "../models/Hotel.js";

export const registerHotel = async (req, res) => {
  try {
    const { name, address, city, contact } = req.body;
    // const owner = req.user_id;
    const owner = req.userId;

    // check if hotel is already registered
    const hotel = await Hotel.findOne({ owner });
    if (hotel) {
      return res.json({ success: false, message: "Hotel Already Registerd" });
    }
    await Hotel.create({ name, address, contact, city, owner });

    await User.findByIdAndUpdate(owner, { role: "hotelOwner" });

    res.json({ success: true, message: "Hotel Registered successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
