import { ReactNode, createContext, useContext, useState } from "react";

type SideModalContextData = {
  isOpen: boolean;
  title: string;
  content: ReactNode | null;
  fullSize?: boolean;
  openModal: (title: string, content: ReactNode, fullSize?: boolean) => void;
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
  closeModal: () => {},
  fullSize: false
};

export const SideModalContext =
  createContext<SideModalContextData>(defaultState);

export const SideModalProvider = ({ children }: SideModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<ReactNode | null>(null);
  const [title, setTitle] = useState<string>("");
  const [fullSize, setFullSize] = useState<boolean>(false);

  const openModal = (title: string, content: ReactNode, fullSize?: boolean) => {
    setIsOpen(true);
    setTitle(title);
    setContent(content);
    fullSize && setFullSize(fullSize);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTitle("");
    setContent(null);
  };

  return (
    <SideModalContext.Provider
      value={{ isOpen, content, title, openModal, closeModal, fullSize }}
    >
      {children}
    </SideModalContext.Provider>
  );
};

export const useSideModal = () => useContext(SideModalContext);
