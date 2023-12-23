import React, { useEffect, useState } from "react";
import ProfileComponent from "../Components/ProfileComponent";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { API } from "../API";
import { toast } from "react-hot-toast";

const Profile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.user.currentUser);
  const [enquiries, setEnquiries] = useState();
  const [call, setCall] = useState(false);
  window.scrollTo(0, 0);

  if (!token || !user) {
    navigate("/");
  }

  const postEnquiry = (data) => {
    console.log(data);

    axios
      .post(`${process.env.REACT_APP_API_URL}/enquiry`, data)
      .then((res) => {
        console.log(res.data);
        setCall(!call);

        toast.remove();
        toast.success("Enquiry Submitted");
        
      })
      .catch((e) => {
        console.log(e);
        toast.remove();
        toast.error("Error,Try again");
      });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/get-my-enquiries/${user?._id}`)
      .then((res) => {
        console.log(res.data);
        setEnquiries(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [call]);

  return (
    <div>
      <ProfileComponent
        enquiries={enquiries}
        sendMessage={postEnquiry}
        user={user}
      />
    </div>
  );
};

export default Profile;
