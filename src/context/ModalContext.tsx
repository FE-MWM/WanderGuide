import React, { createContext, useContext, useState, ReactNode } from "react";

type ModalContextData = {
  isOpen: boolean;
  title: string;
  content: ReactNode | null;
  openModal: (title: string, content: ReactNode, onSave: () => void) => void;
  closeModal: () => void;
  onSubmit: () => void;
};

type ModalProviderProps = {
  children: ReactNode;
};

const defaultState = {
  isOpen: false,
  title: "",
  content: null,
  openModal: () => {},
  closeModal: () => {},
  onSubmit: () => {}
};

export const ModalContext = createContext<ModalContextData>(defaultState);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<ReactNode | null>(null);
  const [title, setTitle] = useState<string>("");
  const [onSave, setOnSave] = useState<() => void>(() => {});

  const openModal = (
    title: string,
    content: ReactNode | null,
    onSaveCallback: () => void
  ) => {
    setIsOpen(true);
    setTitle(title);
    setContent(content);
    setOnSave(() => onSaveCallback);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTitle("");
    setContent(null);
    setOnSave(() => {});
  };

  const onSubmit = () => {
    onSave();
    closeModal();
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, content, title, openModal, closeModal, onSubmit }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
