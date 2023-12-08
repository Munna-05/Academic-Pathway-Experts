import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { API } from "../API";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Redux/userSlice";
import { toast } from "react-hot-toast";

const LoginComponent = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if ((user && token) || user || token) {
      navigate("/profile");
    }
  }, []);
  const handleLogin = () => {
    toast.loading("Logging...");
    const data = {
      email: email,
      password: password,
    };
    axios
      .post(`${API}/login`, data)
      .then((res) => {
        console.log(res?.data?.user);
        dispatch(setUser(res?.data?.user));
        localStorage.setItem("token", res?.data.token);
        localStorage.setItem("id", res?.data?.user?._id);
        toast.remove();
        toast.success("Login Success");
        navigate("/profile");
      })
      .catch((e) => {
        console.log(e);
        toast.remove()
        toast.error(e?.response?.data?.message)
      });
  };
  return (
    <div className="h-screen p-10 flex justify-center ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
        className="w-1/3 mx-auto mt-48"
      >
        <div className="text-5xl font-bold my-10 text-stone-600">LOGIN</div>
        <div>
          <div>
            <input
              className="bg-stone-100 my-4 w-full text-stone-600 ring-teal-300 ring-1 p-4 outline-teal-300 hover:outline-teal-300 rounded-md"
              type="text"
              name=""
              id=""
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="bg-stone-100 my-4 w-full text-stone-600 ring-teal-300 ring-1 p-4 outline-teal-300 hover:outline-teal-300 rounded-md"
              type="text"
              name=""
              id=""
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
        </div>
        <div className="mt-10">
          <button
            onClick={handleLogin}
            className="text-sm bg-stone-800 capitalize py-3 px-12 text-stone-200 rounded-lg hover:text-teal-300 hover:scale-[102%] duration-200 hover:shadow hover:shadow-lg hover:shadow-teal-100"
          >
            Login
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginComponent;
