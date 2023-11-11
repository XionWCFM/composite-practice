import { useModal } from '@/composite-module/modal/use-modal';
import React from 'react';

interface ModalExampleProps {}

const ModalExample = ({}: ModalExampleProps) => {
  const Modal = useModal();

  return (
    <div>
      <button onClick={() => Modal.onOpen(<div>너무 좋아요</div>)}>모달이 쉬워졌다?</button>
      <Modal.Container />
    </div>
  );
};

export default ModalExample;
