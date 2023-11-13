import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import { Navbar } from "./Components/MUIComponents/Navbar";
import AboutCountry from "./Pages/AboutCountry";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/about-country/:name' element={<AboutCountry/>} />

        </Routes>


        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
