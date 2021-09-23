import { useState, useEffect } from "react";
import { getSuggestedProfiles } from "../../services/firebase";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import SuggestedProfile from "./suggested-profile";

export default function Suggestions({ userId, following, loggedInUserDocId }) {
  const [suggestedProfiles, setSuggestedProfles] = useState();

  useEffect(() => {
    async function suggestedProfiles() {
      const suggestedProfiles = await getSuggestedProfiles(userId, following);
      setSuggestedProfles(suggestedProfiles);
    }

    if (userId) {
      suggestedProfiles();
    }
  }, [userId]);

  return !suggestedProfiles ? (
    <Skeleton count={10} height={150} className="mt-5" />
  ) : (
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center align-items justify-between mb-2">
        <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>
      <div className="mt-4 grid gap-5">
        {suggestedProfiles.map((profile) => (
          <SuggestedProfile
            key={profile.docId}
            profileDocId={profile.docId}
            username={profile.username}
            profileId={profile.userId}
            loggedInUserId={userId}
            loggedInUserDocId={loggedInUserDocId}
          ></SuggestedProfile>
        ))}
      </div>
    </div>
  );
}

Suggestions.propTypes = {
  userId: PropTypes.string,
  following: PropTypes.array,
  loggedInUserDocId: PropTypes.string,
};
