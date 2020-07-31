import { createContext } from "react";
import { User } from "../utils/types";

const defaultUserValue: User = {
  phoneNumber: "",
  displayName: "",
  firstName: "",
  lastName: "",
  aadharCardLink: "",
  documentLink: "",
  owner:"",
};
const UserContext = createContext<User>(defaultUserValue);

export default UserContext;
