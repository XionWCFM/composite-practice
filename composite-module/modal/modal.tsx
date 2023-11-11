import { ModalContainerProps } from './modal.type';

export const ModalContainer = ({ option, context }: ModalContainerProps) => {
  const { onClose, state } = context;
  const [modal] = state;
  return modal.open ? (
    <div className="">
      <div
        className=" fixed top-0 left-0 bg-black bg-opacity-60 blur-sm w-screen h-screen"
        onClick={onClose}
      ></div>
      <div className=" fixed top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%]">
        <div className=" relative">{modal.content}</div>
      </div>
    </div>
  ) : null;
};
