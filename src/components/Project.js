import React, { useState } from "react";
import data from "../data.js";
import Modal from "./Modals/Modal.js";

function Open({ id, title, des, url, modalDes, link }) {
  const [state, setState] = useState(false);
  const openModal = (e) => {
    setState(!state);
  };

  return (
    <div
      id={id}
      className="pj_img"
      style={{
        backgroundImage: "url(" + url + ")",
      }}
      onClick={openModal}
    >
      <div className="pj_des">
        <h2>{title}</h2>
        💻
        {des}
      </div>

      {state && (
        <Modal
          key={id}
          des={des}
          url={url}
          title={title}
          modalDes={modalDes}
          link={link}
        />
      )}
    </div>
  );
}

function Project() {
  return (
    <div className="project">
      <h1 className="table">PROJECT</h1>
      <div className="project_contents">
        {data.map((project) => (
          <Open
            key={project.id}
            id={project.id}
            title={project.title}
            des={project.description}
            url={project.url}
            modalDes={project.modalDes}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
