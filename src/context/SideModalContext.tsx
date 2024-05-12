import { ReactNode, createContext, useContext, useState } from "react";

type SideModalContextData = {
  isOpen: boolean;
  title: string;
  content: ReactNode | null;
  openModal: (title: string, content: ReactNode) => void;
  closeModal: () => void;
};

type SideModalProviderProps = {
  children: ReactNode;
};

const defaultState = {
  isOpen: false,
  title: "",
  content: null,
  openModal: () => {},
  closeModal: () => {}
};

export const SideModalContext =
  createContext<SideModalContextData>(defaultState);

export const SideModalProvider = ({ children }: SideModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<ReactNode | null>(null);
  const [title, setTitle] = useState<string>("");

  const openModal = (title: string, content: ReactNode) => {
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
    <SideModalContext.Provider
      value={{ isOpen, content, title, openModal, closeModal }}
    >
      {children}
    </SideModalContext.Provider>
  );
};

export const useSideModal = () => useContext(SideModalContext);
