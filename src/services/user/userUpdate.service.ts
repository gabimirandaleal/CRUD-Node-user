import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";

const userUpdateService = async (
  id: string,
  password: string,
  name: string,
  email: string,
  age: number
) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const account = users.find((user) => user.id === id);
  const date = new Date();
  let newPassword = "";

  if (password) {
    if (bcrypt.compareSync(password, account!.password)) {
      throw new Error("Inform a different password");
    }

    newPassword = bcrypt.hashSync(password, 10);
  }

  const update = {
    password: newPassword !== "" ? newPassword : account?.password,
    name: name ? name : account?.name,
    email: email ? email : account?.email,
    age: age ? age : account?.age,
    updated_at: date,
  };

  await userRepository.update(account!.id, update);

  return { ...{ id: account?.id, created_at: account?.created_at }, ...update };
};

export default userUpdateService;
