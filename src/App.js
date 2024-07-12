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
  const [isSubmit, setIsSubmit] = useState(true)

  // useEffect(() => {
  //   const formSubmitted = localStorage.getItem('formSubmitted');

  //   if (!formSubmitted) {
  //     setShowEmailForm(true);
  //   }

  //   const handleScroll = () => {
  //     const scrollY = window.scrollY || document.documentElement.scrollTop;
  //     if (scrollY > 500 && !formSubmitted) { // Show form only if not submitted
  //       setShowEmailForm(true);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const handleFormSubmit = () => {
    localStorage.setItem('formSubmitted', 'true');
    setShowEmailForm(false);
  };

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
      {/* {showEmailForm && isSubmit &&(
        <div id="email-form">
          <EmailForm onClose={()=> setIsSubmit(false)} />
        </div>
      )} */}
    </div>
  );
}

export default App;
