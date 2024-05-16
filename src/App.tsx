import React from "react";
import "./App.css";
import { ModalProvider } from "./context/ModalContext";
import Home from "./page/Home";
import Modal from "./components/common/Modal";
import SideModal from "./components/common/SideModal";
import { SideModalProvider } from "./context/SideModalContext";

function App() {
  return (
    <SideModalProvider>
      <ModalProvider>
        <Home />
        <Modal />
        <SideModal />
      </ModalProvider>
    </SideModalProvider>
  );
}

export default App;
