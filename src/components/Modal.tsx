import React from "react";
import style from "./styles/Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  header?: React.ReactNode;
  body: React.ReactNode;
  footer?: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  header,
  body,
  footer,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className={style.backdrop} onClick={onClose}>
        <div className={style.modal} onClick={(e) => e.stopPropagation()}>
          {header && <div className={style.header}>{header}</div>}
          {header && <div className={style.body}>{body}</div>}
          {header && <div className={style.footer}>{footer}</div>}
        </div>
      </div>
    </>
  );
};

export default Modal;
