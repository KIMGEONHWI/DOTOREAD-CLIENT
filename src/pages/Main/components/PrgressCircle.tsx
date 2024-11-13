import React from 'react';
import styled from 'styled-components';

interface CircleProgressBarProps {
	progress: number;
	size: number;
	backgroundStrokeWidth?: number;
	progressStrokeWidth?: number;
	color?: string;
	backgroundColor?: string;
	startAngle?: number;
	endAngle?: number;
}

const CircleProgressBar: React.FC<CircleProgressBarProps> = ({
	progress,
	size,
	backgroundStrokeWidth = 13,
	progressStrokeWidth = 40,
	color = '#FF4500',
	backgroundColor = '#e6e6e6',
	startAngle = -70,
	endAngle = 210,
}) => {
	const radius = (size - Math.max(backgroundStrokeWidth, progressStrokeWidth)) / 2;
	const circumference = 2 * Math.PI * radius;
	const angleRange = endAngle - startAngle;
	const progressLength = (progress / 100) * circumference * (angleRange / 360);
	const offset = circumference - progressLength;

	const endAnglePosition = polarToCartesian(size / 2, size / 2, radius, startAngle + (progress / 1000) * angleRange);

	function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
		const angleInRadians = (angleInDegrees - 90) * (Math.PI / 180.0);
		return {
			x: centerX + radius * Math.cos(angleInRadians),
			y: centerY + radius * Math.sin(angleInRadians),
		};
	}

	function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
		const start = polarToCartesian(x, y, radius, endAngle);
		const end = polarToCartesian(x, y, radius, startAngle);

		const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

		return ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ');
	}

	return (
		<Container size={size}>
			<SvgContainer size={size} startAngle={startAngle}>
				<path
					d={describeArc(size / 2, size / 2, radius, startAngle, endAngle)}
					fill="none"
					stroke={backgroundColor}
					strokeWidth={backgroundStrokeWidth}
					strokeLinecap="round"
				/>
				<path
					d={describeArc(size / 2, size / 2, radius, startAngle, startAngle + (progress / 1000) * angleRange)}
					fill="none"
					stroke={color}
					strokeWidth={progressStrokeWidth}
					strokeLinecap="round"
					strokeDasharray={circumference}
					strokeDashoffset={offset}
				/>
				<circle cx={endAnglePosition.x} cy={endAnglePosition.y} r={progressStrokeWidth / 4} fill="white" />
			</SvgContainer>

			<TextContainer>
				<ProgressValue>{progress}</ProgressValue>
				<Label>Bookmark read</Label>
			</TextContainer>
		</Container>
	);
};

export default CircleProgressBar;

const Container = styled.div<{ size: number }>`
	position: relative;
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
`;

const SvgContainer = styled.svg<{ size: number; startAngle: number }>`
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
	transform: rotate(${({ startAngle }) => startAngle}deg);
`;

const TextContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const ProgressValue = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Bold_68px};
	color: ${({ theme }) => theme.colors.orange1};
`;

const Label = styled.p`
	${({ theme }) => theme.fonts.Pretendard_Semibold_18px};
	color: ${({ theme }) => theme.colors.white1};
`;
