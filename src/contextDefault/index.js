import React, { useContext } from "react";
import { useState } from "react";

const ModalContext = React.createContext(false);
const ModalProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <ModalContext.Provider value={[show, setShow]}>
      {children}
    </ModalContext.Provider>
  );
};

const Modal = () => {
  const [show] = useContext(ModalContext);
  console.log("Modal render");
  return show && <div>모달 열었지롱</div>;
};

const ModalBtn = () => {
  const [, setShow] = useContext(ModalContext);
  console.log("ModalBtn render");
  return <button onClick={() => setShow((state) => !state)}>모달 토글</button>;
};

export default function ContextDefault() {
  return (
    <ModalProvider>
      <ModalBtn />
      <Modal />
    </ModalProvider>
  );
}
