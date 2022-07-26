import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Application from "./pages/ApplicationForm";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // Student data
  const studentsData = [
    {
      id: 1,
      name: "John Mark",
      state: "Lagos",
      stack: "Full Stack",
      description: "I am a c# developer",
      jobTitle: "Software Engineer",
    },
    {
      id: 2,
      name: "Elon David",
      state: "Abuja",
      stack: "Full Stack",
      description: "I am a React developer",
      jobTitle: "Databse Administrator",
    },
    {
      id: 3,
      name: "Matthew Sam",
      state: "Lagos",
      stack: "Full Stack",
      description: "I am a NodeJS developer",
      jobTitle: "Data Specialist",
    },
    {
      id: 4,
      name: "Seyi Ayo",
      state: "Oyo",
      stack: "Full Stack",
      description: "I am a Java developer",
      jobTitle: "Database Instructor",
    },
    {
      id: 5,
      name: "Bayo John",
      state: "Ogun",
      stack: "Full Stack",
      description: "I am a Python developer",
      jobTitle: "Product Manager",
    },
    {
      id: 6,
      name: "Tayo Adebayo",
      state: "Ekiti",
      stack: "Full Stack",
      description: "I am a c# developer",
      jobTitle: "Data Engineer",
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application" element={<Application />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
