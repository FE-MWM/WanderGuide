import React from "react";
import "./App.css";
import Home from "./page/Home";
import { ModalProvider } from "./context/ModalContext";
import Modal from "./components/common/Modal";
import { TabProvider } from "./context/TabContext";

function App() {
  return (
    <TabProvider>
      <ModalProvider>
        <Home />
        <Modal />
      </ModalProvider>
    </TabProvider>
  );
}

export default App;
