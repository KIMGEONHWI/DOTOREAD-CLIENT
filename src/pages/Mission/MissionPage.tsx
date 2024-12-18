import DonateIcon from '@/assets/Donates.svg?react';
import MissionIcon from '@/assets/dotorymission.svg?react';
import DonateArticle from '@/components/Mission/DonateArticle';
import MissionBox from '@/components/Mission/MissionBox';
import { DONATE_CONTENT } from '@/constants/DonateContents';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from '@/components/common/Modal/DonateModal';
import KaraIcon from '@/assets/Karas.svg?react';
import PandaIcon from '@/assets/Panda.svg?react';
import Plus from '@/assets/PlusIc.svg?react';
import Minus from '@/assets/MinusIc.svg?react'
import IconBackground from '@/assets/IconBackground.svg?react'

const BASE_URL = import.meta.env.VITE_BASE_URL;

const MissionPage = () => {
	// 모달 상태를 두 개로 분리
	const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
	const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

	// 첫 번째 모달 열기/닫기
	const openFirstModal = () => setIsFirstModalOpen(true);
	const closeFirstModal = () => setIsFirstModalOpen(false);

	// 두 번째 모달 열기/닫기
	const openSecondModal = () => setIsSecondModalOpen(true);
	const closeSecondModal = () => setIsSecondModalOpen(false);

	const [missions, setMissions] = useState([]);

	useEffect(() => {
		const fetchMissions = async () => {
			try {
				const accessToken = localStorage.getItem('access-token');
				const response = await axios.get(`${BASE_URL}/api/v1/missions`, {
					headers: { access: accessToken },
				});

				setMissions(response.data.result);
			} catch (error) {
				console.error('Error fetching missions:', error);
			}
		};

		fetchMissions();
	}, []);

	return (
		<MissionPageWrapper>
			<MissionPageTopContainer>
				<DonateTitleContainer>
					<DonateIcon />
					<DonateTitle>DONATE DOTORY</DonateTitle>
				</DonateTitleContainer>

				<DonateArticleContiner>
					{/* 첫 번째 DonateArticle */}
					<DonateArticle
						icon={DONATE_CONTENT[0].icon}
						title={DONATE_CONTENT[0].title}
						text={DONATE_CONTENT[0].text}
						onButtonClick={openFirstModal}
					/>
					{/* 두 번째 DonateArticle */}
					<DonateArticle
						icon={DONATE_CONTENT[1].icon}
						title={DONATE_CONTENT[1].title}
						text={DONATE_CONTENT[1].text}
						onButtonClick={openSecondModal}
					/>
				</DonateArticleContiner>
			</MissionPageTopContainer>
			<MissionPageBottomContainer>
				<DonateTitleContainer>
					<MissionIcon />
					<DonateTitle>DOTORY MISSION</DonateTitle>
				</DonateTitleContainer>

				<MissionBoxContainer>
					{missions.map(({ content, goal, current }, index) => (
						<MissionBox key={index} content={content} goal={goal} current={current} />
					))}
				</MissionBoxContainer>
			</MissionPageBottomContainer>
		
		{/* 첫 번째 모달 */}
			<Modal isOpen={isFirstModalOpen} onClose={closeFirstModal}>
				<ModalContent>
					<Donate>후원하기</Donate>
					<Img>
						<PandaIcon/>
					</Img>
					<DonateContentTitle>{DONATE_CONTENT[0].title}</DonateContentTitle>
						<OwnAcorn>
							<Text>보유한 도토리</Text>
							<AcornNum>1</AcornNum>
						</OwnAcorn>
						<UseAcorn>
							<Text>사용할 도토리</Text>
							<BtnLeft>
								<IconBackground/>
							</BtnLeft>
							<AcornNum>
							0
							</AcornNum>
							<BtnRight>
								<IconBackground/>
							</BtnRight>
						</UseAcorn>
					<ModalButton onClick={closeFirstModal}>후원하기</ModalButton>
				</ModalContent>
			</Modal>

			{/* 두 번째 모달 */}
			<Modal isOpen={isSecondModalOpen} onClose={closeSecondModal}>
				<ModalContent>
					<Donate>후원하기</Donate>
					<Img>
						<KaraIcon/>
					</Img>
					<DonateContentTitle>{DONATE_CONTENT[1].title}</DonateContentTitle>
						<OwnAcorn>
							<Text>보유한 도토리</Text>
							<AcornNum>1</AcornNum>
						</OwnAcorn>
						<UseAcorn>
							<Text>사용할 도토리</Text>
							<BtnLeft>
								<IconBackground/>
							</BtnLeft>
							<AcornNum>
							0
							</AcornNum>
							<BtnRight>
								<IconBackground/>
							</BtnRight>
						</UseAcorn>
					<ModalButton onClick={closeSecondModal}>후원하기</ModalButton>
				</ModalContent>
			</Modal>

		</MissionPageWrapper>
	);
};
export default MissionPage;

const MissionPageWrapper = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.background};
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	padding: 10.1rem 29.8rem;
	gap: 7.9rem;
`;

const MissionPageTopContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.7rem;
`;

const DonateTitleContainer = styled.div`
	display: flex;
	gap: 0.8rem;
`;

const DonateTitle = styled.h1`
	${({ theme }) => theme.fonts.Pretendard_Semibold_38px};
	color: ${({ theme }) => theme.colors.white1};
`;

const DonateArticleContiner = styled.div`
	display: flex;
	gap: 3.3rem;
`;

const MissionPageBottomContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.7rem;
`;

const MissionBoxContainer = styled.div`
	display: flex;
	gap: 3.1rem;
`;

const ModalContent = styled.div`
	background-color: ${({ theme }) => theme.colors.background};
	width: 100%;
	height: 100%;
	position: relative;
	color: ${({ theme }) => theme.colors.white1};
`;

const BtnLeft=styled.div`
	position :absolute;
	left: 25rem;
	cursor: pointer;
`;
const BtnRight=styled.div`
	position :absolute;
	left: 33.1rem;
	cursor: pointer;
`;

const ModalButton=styled.div`
	position :absolute;
	right: 4.8rem;
	top: 25.1rem;
	cursor: pointer;
	${({ theme }) => theme.fonts.Pretendard_Semibold_18px};
	display: flex;
	justify-content: center;
	align-items : center;
	width: 20.2rem;
	height: 4.8rem;
	border-radius: 15px;
	border: 3px solid var(--orange1, #F15A25);
	background: #CC5724;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
`

const DonateContentTitle=styled.div`
	position: absolute;
	left: 33.362rem;
	top: 5.5rem;
	color: ${({ theme }) => theme.colors.white1};
	${({ theme }) => theme.fonts.Pretendard_Semibold_30px};
`
const Donate=styled.div`
	position: absolute;
	left: 5.1rem;
	color: ${({ theme }) => theme.colors.white1};
	${({ theme }) => theme.fonts.Pretendard_Semibold_30px};
`
const Img=styled.div`
	display: flex;
	position: absolute;
	left: 5.1rem;
	top: 4.9rem;
`
const OwnAcorn=styled.div`
	width : 39.5rem;
	height : 5.1rem;
	border-radius: 10px;
	border: 3px solid #3B3B3B;
	background: #343434;
	backdrop-filter: blur(1.3951762914657593px);
	display: flex;
	padding-left: 4.5rem;
	align-items: center;
	position: absolute;
	right: 4.9rem;
	top: 11.7rem;
`
const Text=styled.div`
	color: ${({ theme }) => theme.colors.white1};
	${({ theme }) => theme.fonts.Pretendard_Semibold_22px};
	`
const UseAcorn=styled.div`
	width : 39.5rem;
	height : 5.1rem;
	border-radius: 10px;
	border: 3px solid #3B3B3B;
	background: #343434;
	backdrop-filter: blur(1.3951762914657593px);
	display: flex;
	padding-left: 4.5rem;
	align-items: center;
	position: absolute;
	right: 4.9rem;
	top: 17.9rem;
`
const AcornNum=styled.div`
	position: absolute;
	display : flex;
	gap : 1.9rem;
	left: 29.9rem;
	color: ${({ theme }) => theme.colors.white1};
	${({ theme }) => theme.fonts.Pretendard_Semibold_22px};
`
