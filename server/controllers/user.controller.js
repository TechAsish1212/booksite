import User from "../models/User.model.js";
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        // taking input by the user
        const { name, email, password } = req.body;

        // checking all fields are fill or not
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // user exist or not
        const exists =await User.findOne({ email });
        if (exists) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        // validation password and strong password
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Provide the valid email" });
        }
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password must be strong 8 character" });
        }

        // hash password
        const hashPassword = await bcrypt.hash(password, 10);

        // user save in database
        const newUser = new User({
            name,
            email,
            password: hashPassword
        })
        const user = await newUser.save();

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        // Optionally set cookie (if you use cookies for auth)
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.APP_ENV === "production",
            sameSite: process.env.APP_ENV === 'production' ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        // response to user
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            }
        })

    } catch (error) {
        console.error("Register Error:", error);
        return res.status(500).json({
            success: false,
            message: "Server error. Please try again later.",
        });
    }

}