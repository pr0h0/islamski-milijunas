import styled from "styled-components";
import iModal from "../../interfaces/iModal";
import React from "react";

const Modal = ({ show, onClick, content, buttonText = "OK" }: iModal) => {
  if (!show) return null;

  const text = Array.isArray(content)
    ? content.map((row, ix) => (
        <React.Fragment key={ix}>
          {row}
          <br />
        </React.Fragment>
      ))
    : content;

  return (
    <_ModalBg>
      <_Modal>
        <p>{text}</p>
        <button onClick={onClick}>{buttonText}</button>
      </_Modal>
    </_ModalBg>
  );
};

export default Modal;

const _ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100vw;
  height: 100vh;

  background-color: #0003;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const _Modal = styled.div`
  width: 300px;
  height: auto;
  margin-right: 64px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-evenly;

  background-color: #fffd;
  border-radius: 8px;
  padding: 12px;
  p {
    color: #000d;
    margin-bottom: 8px;
  }
  button {
    border: none;
    border-radius: 8px;
    background-color: #000d;
    color: #fffd;
    padding: 8px;
  }
`;
