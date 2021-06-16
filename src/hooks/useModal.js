import { useState, useCallback } from "react";

export const useModal = (defaultState) => {
  const [isOpen, setIsOpen] = useState(defaultState);
  const openModal = useCallback(() => {
    console.log(`setOpen is true`);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    console.log(`setOpen is false`);
    setIsOpen(false);
  }, []);

  return [isOpen, openModal, closeModal];
};
