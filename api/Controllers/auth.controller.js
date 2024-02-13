import userModel from "../Models/User.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || email.length === 0 || username.length === 0 || password.length === 0) {
       next(errorHandler(400,"fields shouldnot be empty"))
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new userModel({
        username,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        res.status(200).json({ message: "Signup successful" });
    } catch (error) {
        error.statusCode = error.statusCode || 500;
        error.message = error.message || "Internal server error";
        next(error);
    }
};
