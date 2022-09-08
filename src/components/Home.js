import ContainerPopular from "./ContainerPopular";
import ContainerContinue from "./ContainerContinue";
import Banner from "./Banner";
import Aside from "./Aside";
const Home = () => {
	return (
		<div className="d-flex">
			<Aside />
			<div>
				<Banner />
				<ContainerContinue />
				<ContainerPopular />
			</div>
		</div>
	);
};
export default Home;
