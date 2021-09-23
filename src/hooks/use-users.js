import { useState, useEffect } from "react";
import { getUserByUserId } from "../services/firebase";

export default function useUser(userId) {
  const [activeUser, setActiveUser] = useState({});

  useEffect(() => {
    async function getUserObjectByUserId(userId) {
      //we need a function that we can call (firebase servcie) that gets the user data based on the id
      const [user] = await getUserByUserId(userId);
      setActiveUser(user || {});
    }

    if (userId) {
      getUserObjectByUserId(userId);
    }
  }, [userId]);

  return { user: activeUser };
}
