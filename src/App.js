import React, { useState, useEffect } from "react";
import "./App.css";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Joinus from "./components/Joinus";
import Slider from './components/Slider';
import NavbarMain from "./components/NavbarMain";
import Whyus from "./components/Whyus";
import EmailForm from "./components/emailForm";

function App() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [close, setClose] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 500 && close==false) { // You can adjust this value based on your requirements
        setShowEmailForm(true);
      } else {
        setShowEmailForm(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [close]);

  return (
    <div className="">
      <NavbarMain />
      <Slider />
      <div id="about-us">
        <Aboutus />
      </div>
      <div id="features">
        <Whyus />
      </div>
      <div id="contact">
        <Joinus />
        <Contact />
      </div>
      {showEmailForm && (
        <div id="email-form">
          <EmailForm onClose={() => setClose(true)} />
        </div>
      )}
    </div>
  );
}

export default App;
