import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import { Navbar } from "./Components/MUIComponents/Navbar";
import AboutCountry from "./Pages/AboutCountry";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { Toaster } from "react-hot-toast";
import Profile from "./Pages/Profile";

function App() {
  window.scrollTo(0, 1);
  return (
    <div className="App ">
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 2000,
          style: {
            // background: "#363636",
            // color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 2000,
            // theme: {
            //   primary: "green",
            //   secondary: "black",
            // },
          },
        }}
      />
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about-country/:name" element={<AboutCountry />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
