import React from "react";
import "./App.css";
import Home from "./page/Home";
import { ModalProvider } from "./context/ModalContext";
import Modal from "./components/common/Modal";

function App() {
  return (
    <ModalProvider>
      <Home />
      <Modal />
    </ModalProvider>
  );
}

export default App;
