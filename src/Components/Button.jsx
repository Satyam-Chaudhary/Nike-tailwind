import React from "react";

const Button = ({ label, iconUrl }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat leading-none border bg-coral-red rounded-full text-white border-coral-red">
      {label}
      <img
        src={iconUrl}
        alt="ArrowRight"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
