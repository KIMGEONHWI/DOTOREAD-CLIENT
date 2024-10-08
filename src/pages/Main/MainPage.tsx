import Btn from '@/components/common/Button/Btn';
import SortBtn from '@/components/common/Button/SortBtn';

function MainPage() {
	return (
		<div>
			<SortBtn />
			<Btn id="aiClassify" />
			<Btn id="chooseAll" />
			<Btn id="cancelClassify" />
			<Btn id="no" />
			<Btn id="finishClassify" />
			<Btn id="ok" />
			<Btn id="delete" />
			<Btn id="cancel" />
		</div>
	);
}

export default MainPage;
