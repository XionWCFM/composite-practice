import { useModalContext } from '@/composite-module/modal/use-modal-context';
import React from 'react';

interface ModalContextExampleProps {}

const ModalContextExample = ({}: ModalContextExampleProps) => {
  const Modal = useModalContext()

  return <div>
    <button onClick={() => Modal.onOpen(<div>안녕하세요</div>)}>모달을 띄워봅시다.</button>
  </div>;
};

export default ModalContextExample;
