import { Request, Response } from "express";
import userUpdateService from "../../services/user/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { password, name, email, age } = req.body;

    const user = await userUpdateService(id, password, name, email, age);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default userUpdateController;
