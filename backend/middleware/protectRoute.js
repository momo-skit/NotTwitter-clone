import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt; // so the server.js is main entry file so it mounted first , and use cookie parser there to capture and parse cookie also it hte outer most layer then / and /get
    if (!token) {
      return res.status(401).json({ error: "Unauthorized: No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized: Invalid Token" });
    }

    const user = await User.findById(decoded.userId).select("-password"); // selec eveything wtih userID except minue password out

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;// to the getMe
    next(); // to the getMe
  } catch (err) {
    console.log("Error in protectRoute middleware", err.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
