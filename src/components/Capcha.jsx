import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const CaptchaTest = ({setCaptcha}) => {
  const [verified, setVerified] = useState(false);

  const onChange = (value) => {
    if (value) {
      setCaptcha(true);
    } else {
      setCaptcha(false);
    }
  };

  useEffect(() => {
    const loadRecaptchaScript = async () => {
      const scriptTag = document.createElement('script');
      scriptTag.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      scriptTag.async = true;
      scriptTag.defer = true;
      scriptTag.onload = () => {
        // After script is loaded, initialize reCAPTCHA
        const grecaptchaObject = window.grecaptcha;
        if (grecaptchaObject) {
          // Ensure the ReCAPTCHA API is available before rendering the component
          grecaptchaObject.ready(() => {
            console.log("reCAPTCHA ready!");
          });
        }
      };
      document.body.appendChild(scriptTag);

      return () => {
        // Cleanup: remove script tag if component unmounts
        document.body.removeChild(scriptTag);
      };
    };

    loadRecaptchaScript();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="container">
   
       <ReCAPTCHA
      
        sitekey='6LepYAYqAAAAAEYBZgu-x1BJqXcQmetC6q-MFY3D'// Replace with your actual site key
        onChange={onChange}
        theme="dark"
      />
    </div>
  );
};

export default CaptchaTest;
