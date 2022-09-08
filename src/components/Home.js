import ContainerPopular from "./ContainerPopular";
import ContainerContinue from "./ContainerContinue";
import Banner from "./Banner";
import Aside from "./Aside";
const Home = () => {
	return (
		<div>
      <Aside />
			<Banner />
			<ContainerContinue />
			<ContainerPopular />
		</div>
	);
};
export default Home;
