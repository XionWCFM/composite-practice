import React from 'react';
import { ModalContainer } from './modal';
import { ModalOptionsType, ModalType } from './modal.type';

const options: ModalOptionsType = {
  backgroundBlur: true,
};
export const useModal = (option = options) => {
  const [modal, setModal] = React.useState<ModalType>({
    open: false,
    content: null,
  });
  const onClose = () => {
    setModal((state) => ({
      ...state,
      open: false,
    }));
  };

  const onOpen = (content?: React.ReactNode) => {
    setModal((state) => ({
      content: content ? content : state.content,
      open: true,
    }));
  };

  const ModalComponent = React.useMemo(() => {
    // eslint-disable-next-line react/display-name
    return () => (
      <ModalContainer
        option={option}
        context={{ state: [modal, setModal] as const, onClose, onOpen }}
      />
    );
  }, [modal, option]);

  return {
    Container: ModalComponent,
    state: [modal, setModal] as const,
    onClose,
    onOpen,
  };
};
