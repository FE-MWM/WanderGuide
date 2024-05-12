import React, { createContext, useContext, useState, ReactNode } from "react";

type ModalContextData = {
  isOpen: boolean;
  title: string;
  content: ReactNode | null;
  openModal: (title: string, content: ReactNode) => void;
  closeModal: () => void;
};

type ModalProviderProps = {
  children: ReactNode;
};

const defaultState = {
  isOpen: false,
  title: "",
  content: null,
  openModal: () => {},
  closeModal: () => {}
};

export const ModalContext = createContext<ModalContextData>(defaultState);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<ReactNode | null>(null);
  const [title, setTitle] = useState<string>("");

  const openModal = (title: string, content: ReactNode | null) => {
    setIsOpen(true);
    setTitle(title);
    setContent(content);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTitle("");
    setContent(null);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, content, title, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
