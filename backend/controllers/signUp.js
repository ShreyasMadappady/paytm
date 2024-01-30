import jwt from "jsonwebtoken";
import zod from "zod";
import { User } from "../model/db.js";

const userSchema = zod.object({
  username: zod.string().email(),
  lastName: zod.string(),
  password: zod.string(),
  firstName: zod.string(),
});

const JWT_SECRET = "Shreyas";

export const signUp = async (req, res) => {
  const { username, firstName, lastName, password } = await req.body;

  const success = userSchema.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({ username });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const user = new User({ username, firstName, lastName, password });
  user.save();

  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });

  const userId = user._id;

  const token = jwt.sign({ userId }, JWT_SECRET);

  res.status(200).json({
    message: "User created successfully",
    token: token,
  });
};
