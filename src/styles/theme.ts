import { css } from 'styled-components';


const colors = {
	orange1: '#F15A25',
	orange2: 'rgba(209, 68, 7, 0.24)',
	orange3: '#FFE5D9',
	orange4: '#AA4623',
	orange5: '#CC5724',

	white1: '#FFFFFF',
	white2: '#DEDEDE',
	white3: '#FCFCFC',

	gray1: '#3B3B3B',
	gray2: '#5C5C5C',
	gray3: '#A6ABBC',

	background: '#000000',
	background_box: '#212121',

	article_box: 'rgba(217, 217, 217, 0.10)',
	article_content: 'rgba(119, 119, 119, 0.63)',

	bookmark_hover: '#343434',
	bookmark_click: '#6E4A39',
	bookmark_select: '#FFE5D9',

	thumnail: '#D9D9D9',
	transparent: 'rgba(0,0,0,0)',

	modal_background: 'rgba(217, 217, 217, 0.3)',
};

const baseFontStyle = css`
	font-family: Pretendard;
	font-style: normal;
	line-height: normal;
`;

const fonts = {
	Pretendard_Bold_88px: css`
		${baseFontStyle}
		font-size: 88px;
		font-weight: 700;
	`,
	Pretendard_Bold_70px: css`
		${baseFontStyle}
		font-size: 70px;
		font-weight: 700;
	`,
	Pretendard_Bold_68px: css`
		${baseFontStyle}
		font-size: 68px;
		font-weight: 700;
	`,

	Pretendard_Bold_20px: css`
		${baseFontStyle}
		font-size: 20px;
		font-weight: 700;
	`,

	Pretendard_Semibold_49px: css`
		${baseFontStyle}
		font-size: 49.976px;
		font-weight: 600;
	`,
	Pretendard_Semibold_45px: css`
		font-family: Pretendard;
		font-style: normal;
		line-height: 45px;
		font-size: 45px;
		font-weight: 600;
	`,
	Pretendard_Semibold_38px: css`
		${baseFontStyle}
		font-size: 38px;
		font-weight: 600;
	`,
	Pretendard_Semibold_30px: css`
		${baseFontStyle}
		font-size: 30px;
		font-weight: 600;
	`,
	Pretendard_Semibold_25px: css`
		${baseFontStyle}
		font-size: 22px;
		font-weight: 500;
	`,

	Pretendard_Semibold_22px: css`
		${baseFontStyle}
		font-size: 22px;
		font-weight: 600;
	`,
	Pretendard_Semibold_18px: css`
		${baseFontStyle}
		font-size: 18px;
		font-weight: 600;
	`,
	Pretendard_Semibold_13px: css`
		${baseFontStyle}
		font-size: 13px;
		font-weight: 600;
	`,
	Pretendard_Semibold_10px: css`
		${baseFontStyle}
		font-size: 10px;
		font-weight: 600;
	`,
	Pretendard_Medium_20px: css`
		${baseFontStyle}
		font-size: 20px;
		font-weight: 500;
	`,
	Pretendard_Medium_18px: css`
		${baseFontStyle}
		font-size: 18px;
		font-weight: 500;
	`,
	Pretendard_Medium_15px: css`
		${baseFontStyle}
		font-size: 15px;
		font-weight: 500;
	`,
	Pretendard_Medium_11px: css`
		${baseFontStyle}
		font-size: 11px;
		font-weight: 500;
	`,
	Pretendard_Regular_12px: css`
		${baseFontStyle}
		font-size: 12px;
		font-weight: 400;
	`,
	Pretendard_Regular_9px: css`
		${baseFontStyle}
		font-size: 9px;
		font-weight: 400;
	`,
	Roboto_20px: css`
		font-family: Roboto;
		font-size: 20px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	`,
};

const theme = {
	colors,
	fonts,
};

export default theme;