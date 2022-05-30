import { Request, Response } from "express";
import userListOneService from "../../services/user/userListOne.service";

const userListOneController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(id);
    const user = await userListOneService(id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    return res.status(200).send(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default userListOneController;
