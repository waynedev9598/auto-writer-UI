import { useEffect } from "react";
import Header from "../components/header";
import Timeline from "../components/timeline";
import Sidebar from "../components/sidebar";
import useUser from "../hooks/use-users";
import PropTypes from "prop-types";
import LoggedInUserContext from "../context/logged-in-user";

export default function Dashboard({ user: loggeInUser }) {
  const { user } = useUser(loggeInUser.uid);
  useEffect(() => {
    document.title = "Book App";
  }, []);

  return (
    <LoggedInUserContext.Provider value={{ user }}>
      <div className="bg-gray-background">
        <Header />
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
          <Timeline />
          <Sidebar />
        </div>
      </div>
    </LoggedInUserContext.Provider>
  );
}

Dashboard.protoTypes = {
  user: PropTypes.object.isRequired,
};
