import { User } from "../model/db.js";
import jwt from "jsonwebtoken";
import zod from "zod";

const JWT_SECRET = "Shreyas";

const userSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

export const signIn = async (req, res) => {
  const { username, password } = req.body;
  const success = userSchema.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Error while logging in",
    });
  }

  const user = await User.findOne({
    username,
    password,
  });
  if (user) {
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.status(200).json({ token });
    return;
  }
  res.status(411).json({
    message: "Error while logging in",
  });
};
