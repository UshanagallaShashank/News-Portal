import userModel from "../Models/User.model.js";
import bcryptjs from "bcryptjs"

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || email.length === 0 || username.length === 0 || password.length === 0) {
        return res.status(400).json({ message: "Input fields cannot be empty" });
    }


    try {
        const existUser = await userModel.findOne({ $or: [{ username }, { email }] });

        if (existUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedpassword=bcryptjs.hashSync(password,10)
        const newUser = new userModel({ 
            username, 
            email, 
            password :hashedpassword});
        await newUser.save();

        res.status(200).json({ message: "Signup successful" });
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
