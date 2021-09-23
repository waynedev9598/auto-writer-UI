import { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./header";
import { getUserPhotosByUser } from "../../services/firebase";
import Photos from "./photos";

export default function UserProfile({ profileUser }) {
  const reducer = (state, newState) => ({ ...state, ...newState });
  const initialState = {
    profile: {},
    photosCollection: [],
    followerCount: 0,
  };

  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const photos = await getUserPhotosByUser(profileUser);

      dispatch({
        profile: profileUser,
        photosCollection: photos,
        followerCount: profileUser.followers.length,
      });
    }
    if (profileUser) {
      getProfileInfoAndPhotos();
    }
  }, [profileUser]);

  return (
    <>
      <Header
        photosCount={photosCollection ? photosCollection.length : 0}
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={dispatch}
      />
      <Photos photos={photosCollection} />
    </>
  );
}

UserProfile.propTypes = {
  profileUser: PropTypes.shape({
    dateCreated: PropTypes.number.isRequired,
    emailAddress: PropTypes.string.isRequired,
    followers: PropTypes.array.isRequired,
    following: PropTypes.array.isRequired,
    fullName: PropTypes.string.isRequired,
    emailAddress: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
};
