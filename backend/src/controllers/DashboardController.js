const Spot = require("../models/Spot");
const User = require("../models/User");

module.exports = {
  async show(request, response) {
    const { user_id } = request.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return response
        .status(400)
        .json({ error: "User not found or not exists!" });
    }

    const spots = await Spot.find({ user: user_id });

    return response.json(spots);
  }
};
