import React, { useContext } from "react";
import { useState } from "react";

const ModalStateContext = React.createContext(false);
const ModalDispatchContext = React.createContext(() => {});

const ModalProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <ModalStateContext.Provider value={show}>
      <ModalDispatchContext.Provider value={setShow}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};

const Modal = () => {
  const show = useContext(ModalStateContext);
  console.log("2. Modal render");
  return show && <div>모달 열었지롱</div>;
};

const ModalBtn = () => {
  const setShow = useContext(ModalDispatchContext);
  console.log("2. ModalBtn render");
  return <button onClick={() => setShow((state) => !state)}>모달2 토글</button>;
};

export default function ContextRefactor() {
  return (
    <ModalProvider>
      <ModalBtn />
      <Modal />
    </ModalProvider>
  );
}
