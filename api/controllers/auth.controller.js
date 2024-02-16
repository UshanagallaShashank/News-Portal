// Import necessary modules and dependencies
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { errorHandler } from '../utils/error.js';

// Function to handle user signup
export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password || username === '' || email === '' || password === '') {
      return next(errorHandler(400, 'All fields are required'));
    }

    // Hash the password
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Create a new user instance
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.json('Signup successful');
  } catch (error) {
    console.error('Error during signup:', error);
    next(error);
  }
};

// Function to handle user signin
export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password || email === '' || password === '') {
      return next(errorHandler(400, 'All fields are required'));
    }

    // Find the user by email
    const validUser = await User.findOne({ email });

    // Check if the user exists
    if (!validUser) {
      return next(errorHandler(404, 'User not found'));
    }

    // Check if the password is valid
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, 'Invalid password'));
    }

    // Generate JWT token
    const token = jwt.sign({ id: validUser._id, isAdmin: validUser.isAdmin }, process.env.JWT_SECRET);

    // Omit password from the response
    const { password: pass, ...rest } = validUser._doc;

    // Set the token as a cookie and send the user data in the response
    res
      .status(200)
      .cookie('access_token', token, { httpOnly: true })
      .json(rest);
  } catch (error) {
    console.error('Error during signin:', error);
    next(error);
  }
};

// Function to handle Google authentication
export const google = async (req, res, next) => {
  try {
    const { email, name, googlePhotoUrl } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (user) {
      // If the user exists, generate a JWT token
      const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET);

      // Omit password from the response
      const { password, ...rest } = user._doc;

      // Set the token as a cookie and send the user data in the response
      res
        .status(200)
        .cookie('access_token', token, { httpOnly: true })
        .json(rest);
    } else {
      // If the user does not exist, create a new user
      const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);

      const newUser = new User({
        username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
        email,
        password: hashedPassword,
        profilePicture: googlePhotoUrl,
      });

      // Save the new user to the database
      await newUser.save();

      // Generate a JWT token for the new user
      const token = jwt.sign({ id: newUser._id, isAdmin: newUser.isAdmin }, process.env.JWT_SECRET);

      // Omit password from the response
      const { password, ...rest } = newUser._doc;

      // Set the token as a cookie and send the user data in the response
      res
        .status(200)
        .cookie('access_token', token, { httpOnly: true })
        .json(rest);
    }
  } catch (error) {
    console.error('Error during Google authentication:', error);
    next(error);
  }
};
