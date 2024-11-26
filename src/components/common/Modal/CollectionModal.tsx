import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}

const CollectionModal = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<Overlay>
			<ModalContainer>
				<CloseButton onClick={onClose}>×</CloseButton>
				{children}
			</ModalContainer>
		</Overlay>,
		document.getElementById('modal-root') as HTMLElement,
	);
};

export default CollectionModal;

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
	width: 76.4rem;
	height: 58.8rem;
	position: relative;
`;

const CloseButton = styled.button`
	position: absolute;
	top: 1.467rem;
	left: 72.764rem;
	color: ${({ theme }) => theme.colors.white1};
	font-size: 4rem;
	cursor: pointer;
`;
