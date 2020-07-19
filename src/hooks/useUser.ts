import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";

export default () => {
  const [user, setUser] = useState(null);

  const _getUserData = async () => {
    const user = await Auth.currentAuthenticatedUser();
    // setUser(user);
  };
  useEffect(() => {
    if (!user) _getUserData();
  }, []);

  return user;
};
