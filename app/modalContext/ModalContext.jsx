"use client"
import { createContext, useContext, useEffect, useState } from "react";
import Modal from "../components/ModalForm";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3000 && !hasScrolled) {
        setHasScrolled(true); // Ensures it only triggers once
        openModal();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
