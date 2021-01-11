import React from "react";
import "./modal.scss";

function Modal({ id, title, url, des, modalDes, link, close, open }) {
  let cls = { open } ? "modal" : "hidden";

  return (
    <div className={cls} onClick={close}>
      <div className="modal_content">
        <h2>{title}</h2>
        <div className="modal_content-2">
          <div className="modal_img">
            <img src={url} alt="project-img"></img>
          </div>
          <div>{modalDes}</div>
          <p className="pj_link">link: {link}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
