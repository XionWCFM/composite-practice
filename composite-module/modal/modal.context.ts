import { createContext } from 'react';
import { useModal } from './use-modal';

export const ModalContext = createContext<null | ReturnType<typeof useModal>>(
  null,
);
