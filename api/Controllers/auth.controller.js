import userModel from "../Models/User.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || email.length === 0 || username.length === 0 || password.length === 0) {
        next(errorHandler(400, "fields shouldnot be empty"))
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

export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password || email.length === 0 || password.length === 0) {
        return next(errorHandler(400, "Fields should not be empty"));
    }

    try {
        const validuser = await userModel.findOne({ email });
        if (!validuser) {
            return next(errorHandler(404, 'User not found'));
        }

        const validpassword = bcryptjs.compareSync(password, validuser.password);
        if (!validpassword) {
            return next(errorHandler(401, 'Invalid password'));
        }

        const token = jwt.sign(
            { id: validuser._id },
            process.env.JWT_SECRET
        );

        const { password: pass, ...rest } = validuser._doc;
        res.status(200).cookie(
            "access_token", token,
            { httpOnly: true }
        ).json(rest);
    } catch (error) {
        next(error);
    }
}


