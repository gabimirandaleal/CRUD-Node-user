import { Request, Response } from "express";
import userDeleteSelfService from "../../services/user/userDeleteSelf.service";

const userDeleteSelfController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userDeleteSelfService(id);
    console.log("oi", user);
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

export default userDeleteSelfController;
