import React, { useEffect } from 'react';

const EmailForm = ({ onClose }) => {
  useEffect(() => {
    // Load AWeber form script
    const script = document.createElement('script');
    script.src = "//forms.aweber.com/form/55/907931455.js";
    script.id = "aweber-wjs-0nlomx44u";
    document.body.appendChild(script);

    // Handler for form submission
    const handleSubmit = (event) => {
      if (event.target.tagName === 'FORM') {
        event.preventDefault(); // Prevent default form submission behavior
        
        // Get the form action URL
        const actionUrl = event.target.action;

        // Open the action URL in a new window
        window.open(actionUrl, '_blank');

        // Close the form
        onClose();
      }
    };

    // Add submit event listener to the document body
    document.body.addEventListener('submit', handleSubmit);

    // Cleanup script and event listener when component unmounts
    return () => {
      document.body.removeChild(script);
      document.body.removeEventListener('submit', handleSubmit);
    };
  }, [onClose]);

  // useEffect(() => {
  //   // Load AWeber form script
  //   const script = document.createElement('script');
  //   script.src = "//forms.aweber.com/form/55/907931455.js";
  //   script.id = "aweber-wjs-snz94ybot";
  //   document.body.appendChild(script);

  //   // Cleanup the script when component unmounts
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="m-8">
        <div className="relative flex flex-col justify-center border border-white rounded-lg bg-[#1B1B1B] text-white">
          <div className='flex justify-end p-2 bg-white '>
            <p className="text-black bg-white cursor-pointer" 
            onClick={() => onClose()}>X</p>
          </div>
          
          <div className="AW-Form-907931455"></div>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
