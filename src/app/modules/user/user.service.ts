import { IUser } from "./user.interface";
import { User } from "./user.model";

const getStudents = async (): Promise<IUser[] | null> => {
  const b = 5;
  const a = 4;
  const users = await User.find();
  return users;
};

export const UserService = { getStudents };
