import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import { Navbar } from "./Components/MUIComponents/Navbar";
import AboutCountry from "./Pages/AboutCountry";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  window.scrollTo(0, 1);
  return (
    <div className="App ">
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/about-country/:name' element={<AboutCountry/>} />

        </Routes>


        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
