import jwt from "jsonwebtoken";

/*
    Utility to generate a token
    get user id as parameter

    JWT_SECRET is an environment variable in 
    .env file

    expire in 30 days
*/
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateToken;
