import Btn from '../Button/Btn';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface ModalProps {
	isOpen: boolean;
	id: string;
	onClose: () => void;
	onConfirm: () => void;
	children: ReactNode;
}

const Modal = ({ isOpen, onClose, id, onConfirm, children }: ModalProps) => {
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<Overlay>
			<ModalContainer>
				<CloseButton onClick={onClose}>×</CloseButton>
				{children}
				<Btn id={id} onClick={onConfirm} />
			</ModalContainer>
		</Overlay>,
		document.getElementById('modal-root') as HTMLElement,
	);
};

export default Modal;

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: ${({ theme }) => theme.colors.modal_background};
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;
`;

const ModalContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;

	background: ${({ theme }) => theme.colors.background};
	border-radius: 15px;
	width: 50.4rem;
	height: 29.5481rem;
	padding: 6.1rem 0 3.249rem 0;
	position: relative;
`;

const CloseButton = styled.button`
	position: absolute;
	top: 1rem;
	right: 3.5rem;
	color: ${({ theme }) => theme.colors.white1};
	font-size: 3rem;
	cursor: pointer;
`;
