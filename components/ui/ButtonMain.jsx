import React from "react";

const ButtonMain = ({ text, icon, styles }) => {
  return (
    <button className={`px-10 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-orange-600 transition-all active:scale-95 flex items-center gap-3 shadow-lg shadow-black/10 group cursor-pointer ${styles}`}>
      {text}
      {icon && icon}
    </button>
  );
};

export default ButtonMain;
