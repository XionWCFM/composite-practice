import { useContext } from 'react';
import { ModalContext } from './modal.context';

export const useModalContext = () => {
  const Modal = useContext(ModalContext);
  if (Modal === null)
    throw new Error('프로바이더가 있는 환경에서만 사용해주세요');
  return Modal;
};
