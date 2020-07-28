import { createContext } from "react";
import { User } from "../utils/types";

const defaultUserValue: User = {
  phoneNumber: "",
  displayName: "",
  firstName: "",
  lastName: "",
  aadharCardLink: "",
  documentLink: "",
};
const UserContext = createContext<User|null>(defaultUserValue);

export default UserContext;
