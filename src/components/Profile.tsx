import { FunctionComponent, useEffect, useState } from "react";
import { getUser } from "../services/userService";
import Navbar from "./Navbar";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const [userProfile, setUserProfile] = useState<any>({
    id: "",
    name: "",
    email: "",
    biz: false,
  });
  useEffect(() => {
    getUser()
      .then((result) => {
        setUserProfile(result.data);
      })
      .catch((err) => {
        alert("Something Went Wrong...");
      });
  }, []);
  return (
    <>
      <Navbar />
      <h1 className="text-center mt-5 mb-4">
        <i className="fa-solid fa-user mb-4"></i> Profile
      </h1>
      <div className="user-card">
        <div className="containerDiv">
          <img
            src="banner.jpg"
            alt="cookies"
            className="hero-image img-fluid"
          />

          <div className="information">
            <img src="avatar.png" alt="avatar" className="avatar" />
            <span className="mb-4">Currently Signed in As:</span>
            <div className="name mb-3 ">{userProfile.name}</div>
            <hr />
            <div className="mb-2">
              <strong>Email: </strong>
              {userProfile.email}
            </div>
            <div className="mb-2">
              <strong>Account Type: </strong>
              {userProfile.biz ? (
                <span style={{ color: "green" }}>Business Account </span>
              ) : (
                <span>Not Business Account </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;