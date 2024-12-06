import { IUser } from "./user.interface";
import { User } from "./user.model";

const getStudents = async (): Promise<IUser[] | null> => {
  cons b=5
  const users = await User.find();
  return users;
};

export const UserService = { getStudents };
