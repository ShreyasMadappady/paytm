import { User } from "../model/db";

export const bulk = async (req, res) => {
 const users =  await User.find({});
 res.status(200).json()

};
