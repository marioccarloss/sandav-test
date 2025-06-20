import ReactDOM from 'react-dom';
import Button from '../button/button';
import {
  ModalBackdrop,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from './modal.styled';

const Modal = ({ isOpen, onClose, onConfirm, title, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <h3>{title}</h3>
        </ModalHeader>
        <div>{children}</div>
        <ModalFooter>
          <Button onClick={onClose} $variant="secondary">
            Cancelar
          </Button>
          <Button onClick={onConfirm} $variant="danger">
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalBackdrop>,
    document.body
  );
};

export default Modal;
