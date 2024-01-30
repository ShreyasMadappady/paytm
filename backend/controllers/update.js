import zod from "zod";
import { User } from "../model/db.js";

const updateSchema = zod.object({
  username: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

export const update = async (req, res) => {
  const success = updateSchema.safeParse(req.body);
  console.log(success);
  if (!success) {
    return res.status(411).json({
      message: "Error while updating information",
    });
  }
  await User.updateOne(req.body, { _id: req.user_id });
  res.status(200).json({
    message: "Updated successfully",
  });
};
