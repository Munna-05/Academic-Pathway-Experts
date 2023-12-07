import React from "react";
import { Navbar } from "./MUIComponents/Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../API";
import { setUser } from "../Redux/userSlice";

const Layout = ({ children }) => {
  const user = useSelector((state) => state.user.currentUser);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  if (token && !user) {
    axios
      .get(`${API}/user/${localStorage.getItem("id")}`)
      .then((res) => {
        console.log(res.data.user);
        dispatch(setUser(res?.data?.user));
      })
      .catch((e) => console.log(e));
  }
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
