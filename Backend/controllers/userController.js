// export const getUserData = async (req, res) => {
//   try {
//     const role = req.user.role;
//     const recentSearchedCities = req.user.recentSearchedCities;
//     res.json({ success: true, role: recentSearchedCities });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

// // user recent search cities
// export const storeRecentSearchedCities = async (req, res) => {
//   try {
//     const { recentSearchedCity } = req.body;
//     const user = await req.body;

//     if (user.recentSearchedCities.length < 3) {
//       user.recentSearchedCities.push(recentSearchedCity);
//     } else {
//       user.recentSearchedCities.shift();
//       user.recentSearchedCities.push(recentSearchedCity);
//     }
//     await user.save();
//     res.json({ success: true, message: "City added" });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

// Get user data
export const getUserData = async (req, res) => {
  try {
    const role = req.user.role;
    const recentSearchedCities = req.user.recentSearchedCities;

    res.json({
      success: true,
      role,
      recentSearchedCities,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Store recent search city
export const storeRecentSearchedCities = async (req, res) => {
  try {
    const { recentSearchedCity } = req.body;
    const user = req.user; // comes from protect middleware

    if (!recentSearchedCity) {
      return res
        .status(400)
        .json({ success: false, message: "City is required" });
    }

    if (user.recentSearchedCities.length < 3) {
      user.recentSearchedCities.push(recentSearchedCity);
    } else {
      user.recentSearchedCities.shift(); // remove oldest
      user.recentSearchedCities.push(recentSearchedCity);
    }

    await user.save();

    res.json({
      success: true,
      message: "City added",
      recentSearchedCities: user.recentSearchedCities,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
