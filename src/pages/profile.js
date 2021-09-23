import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getUserByUsername } from "../services/firebase";
import * as ROUTES from "../constants/routes";
import Header from "../components/header";
import UserProfile from "../components/profile";

export default function Profile() {
  const { username } = useParams();
  const [profileUser, setProfileUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    async function checkUserExists() {
      const profileUser = await getUserByUsername(username);
      if (profileUser.length > 0) {
        setProfileUser(profileUser[0]);
      } else {
        history.push(ROUTES.NOT_FOUND);
      }
    }

    checkUserExists();
  }, [username, history]);

  return profileUser ? (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <UserProfile profileUser={profileUser} />
      </div>
    </div>
  ) : null;
}
