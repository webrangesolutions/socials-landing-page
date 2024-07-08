import React, { useState, useEffect } from 'react';
import CaptchaTest from './Capcha';

const EmailForm = ({ onClose }) => {
  const [captcha, setCaptcha] = useState(false);

  useEffect(() => {
    // Load AWeber form script
    const script = document.createElement('script');
    script.src = "//forms.aweber.com/form/55/907931455.js";
    script.id = "aweber-wjs-g7ve8s4fn";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="m-8">
        <div className="relative flex flex-col justify-center border border-white rounded-lg bg-[#1B1B1B] text-white">
          
        
          <div className="AW-Form-907931455"></div>
        </div>
      </div>
    </div>
  );
}

export default EmailForm;
