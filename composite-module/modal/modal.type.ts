export type ModalContainerProps = {
  option: ModalOptionsType;
  context: ModalContextType;
};

export type ModalOptionsType = {
  backgroundBlur?: boolean;
};

export type ModalType = {
  open: boolean;
  content: React.ReactNode | null;
};

export type ModalContextType = {
  state: [ModalType, React.Dispatch<React.SetStateAction<ModalType>>];
  onClose: () => void;
  onOpen: (content?: React.ReactNode) => void;
};
