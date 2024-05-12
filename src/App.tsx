import React from "react";
import "./App.css";
import { ModalProvider } from "./context/ModalContext";
import Home from "./page/Home";
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
