import React from "react";

const Modal = () => {
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
            <button className="close"><i class="fa-regular fa-circle-xmark"></i></button>
        </div>
      </div>
    </>
  )
}

export default Modal