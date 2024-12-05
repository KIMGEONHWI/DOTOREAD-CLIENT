import theme from '@/styles/theme';

export type ButtonProps = {
	id?: string;
	text: string;
	color: keyof typeof theme.colors;
	bordercolor: keyof typeof theme.colors;
	backgroundcolor: keyof typeof theme.colors;
	isClicked?: boolean;
	onClick?: () => void;
};

export const Buttons: ButtonProps[] = [
	{ id: 'start', text: '시작하기', color: 'white1', bordercolor: 'orange1', backgroundcolor: 'orange1' },
	{ id: 'aiClassify', text: 'AI 분류하기', color: 'orange1', bordercolor: 'orange1', backgroundcolor: 'transparent' },
	{ id: 'chooseAll', text: '전체 선택', color: 'white1', bordercolor: 'gray2', backgroundcolor: 'gray1' },
	{ id: 'cancelClassify', text: '분류 취소하기', color: 'white1', bordercolor: 'gray2', backgroundcolor: 'gray1' },
	{ id: 'no', text: '아니요', color: 'white1', bordercolor: 'gray2', backgroundcolor: 'gray1' },
	{ id: 'delete', text: '삭제하기', color: 'white1', bordercolor: 'orange1', backgroundcolor: 'orange2' },
	{ id: 'ok', text: '확인', color: 'white1', bordercolor: 'orange1', backgroundcolor: 'orange2' },
	{ id: 'finishClassify', text: '분류 완료하기', color: 'white1', bordercolor: 'orange1', backgroundcolor: 'orange2' },
	{ id: 'create', text: '생성하기', color: 'white1', bordercolor: 'orange1', backgroundcolor: 'orange2' },
	{ id: 'cancel', text: '취소하기', color: 'white1', bordercolor: 'orange1', backgroundcolor: 'orange2' },
	{ id: 'plus', text: '추가하기', color: 'white1', bordercolor: 'orange1', backgroundcolor: 'orange2' },
	{ id: 'newArticle', text: '+ 새 글 작성', color: 'white1', bordercolor: 'orange1', backgroundcolor: 'orange5' },
	{ id: 'submit', text: '작성 완료', color: 'white1', bordercolor: 'orange1', backgroundcolor: 'orange5' },
	
];
