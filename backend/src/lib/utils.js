import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
     const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "3d"
     });

     res.cookie("token", token, {
        maxAge: 3 * 24 * 60 * 60 * 1000, // milliseconds
        httpOnly: true,  // prevents (XSS) cross-site scripting attacks
        sameSite: "strict", // prevents CSRF attacks
        secure: process.env.NODE_ENV !== "development" // determine if https or http
     });

     return token;
}