import ContainerPopular from "./ContainerPopular";
import ContainerContinue from "./ContainerContinue";
import Banner from "./Banner";
import Aside from "./Aside";
import "../App.css"

const Home = () => {
	return (
		<div className="d-flex">
			<Aside />
			<div className="container d-flex flex-column container-break">
				<Banner />
				<ContainerContinue />
				<ContainerPopular />
			</div>
		</div>
	);
};
export default Home;
