import ModalContextExample from '@/components/modal/ModalContextExample';
import { ModalContext } from '@/composite-module/modal/modal.context';
import { useModal } from '@/composite-module/modal/use-modal';
import React from 'react';

interface indexProps {}

const Index = ({}: indexProps) => {
  const Modal = useModal();
  return (
    <div>
      <ModalContext.Provider value={Modal}>
        <ModalContextExample />
        <Modal.Container />
      </ModalContext.Provider>
    </div>
  );
};

export default Index;
