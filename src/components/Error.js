import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Error = () => {
  const [error, setError] = useState(null);

  const makeApiRequest = async () => {
    try {
      const response = await fetch("https://xyz.com");
      if (response.status === 200) {
        setError(null);
      } else {
        setError("Error");
        toast.error("Error: Request failed with status " + response.status);
      }
    } catch (caughtError) {
      setError(caughtError);
      toast.error("Error: " + caughtError.message);
    }
  };

  return (
    <div>
      <button onClick={makeApiRequest} className="btn">
        Send Request
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Error;
