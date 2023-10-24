import React from "react";

const ActiveBtn = ({ btnText, activeClass, onClick }) => {
  return (
    <button onClick={onClick} className={activeClass}>
      {btnText}
    </button>
  );
};

export default ActiveBtn;
