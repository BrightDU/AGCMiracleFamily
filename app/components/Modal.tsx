// Updated Modal component

import { useEffect, useState } from "react";

// Define the prop types for the Modal component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [heartColor, setHeartColor] = useState("#003871");

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartColor((prevColor) =>
        prevColor === "#003871" ? "#DDF3FF" : "#003871"
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 overflow-auto">
      {/* Modal Background */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white p-4 sm:p-8 rounded-lg shadow-lg max-w-full sm:max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="lg:w-1/3 p-4 sm:p-6 flex flex-col items-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#003871] text-center">
              GOD LOVES A CHEERFUL GIVER.
            </h2>
            <div className="flex justify-center mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                fill={heartColor}
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-2/3 p-4 sm:p-6">
            <form className="space-y-6">
              {/* Choose Gift Type */}
              <div>
                <label className="text-lg font-bold font-roboto text-[#003871]">
                  BRING YE ALL THE TITHES
                </label>
                <div className="mt-2 flex gap-2 sm:gap-4 flex-wrap">
                  <button
                    type="button"
                    className="bg-[#003871] text-white px-4 sm:px-6 py-2 rounded-md hover:bg-[#002b56] transition-all w-full sm:w-auto"
                  >
                    TITHES
                  </button>
                  <button
                    type="button"
                    className="bg-[#003871] text-white px-4 sm:px-6 py-2 rounded-md hover:bg-[#002b56] transition-all w-full sm:w-auto"
                  >
                    DONATION
                  </button>
                </div>
              </div>

             

              {/* Replaced Billing Address Section */}
              <div className="space-y-2 text-[#003871] font-semibold text-lg mt-6">
                <p>Account Number: <span className="font-bold">3345657645</span></p>
                <p>Bank Name: <span className="font-bold">First Bank</span></p>
                <p>Account Name Name: <span className="font-bold">First Bank</span></p>
                <p className="text-center mt-6 text-[30px] font-bold text-[#003871] animate-bounce">
  God bless you
</p>

              </div>

              {/* Submit Button */}
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
