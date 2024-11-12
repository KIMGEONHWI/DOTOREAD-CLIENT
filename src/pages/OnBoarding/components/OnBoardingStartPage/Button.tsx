import GoogleLogo from '@/assets/Google.svg?react';
import styled from 'styled-components';

function Button() {
	return (
		<ButtonWrapper>
			<SignInBtn>
				<GoogleLogo />
				Sign In with Google
			</SignInBtn>
			<DownloadBtn>
				<GoogleLogo />
				Download Extension
			</DownloadBtn>
		</ButtonWrapper>
	);
}

export default Button;

const ButtonWrapper = styled.div`
	margin-top: 6.7rem;
	display: flex;
	flex-direction: column;
	gap: 3rem;
`;

const BaseButton = styled.button`
	padding-left: 1.5rem;
	display: flex;
	align-items: center;
	gap: 1.5rem;
	width: 34.5rem;
	height: 5.4rem;
	border-radius: 10px;
	background: ${({ theme }) => theme.colors.white1};
	box-shadow:
		0px 0px 3px 0px rgba(0, 0, 0, 0.08),
		0px 2px 3px 0px rgba(0, 0, 0, 0.17);
	color: rgba(0, 0, 0, 0.54);
	${({ theme }) => theme.fonts.Roboto_20px};
`;

const SignInBtn = styled(BaseButton)``;
const DownloadBtn = styled(BaseButton)``;
