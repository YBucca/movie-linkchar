import Card from "./Card";
import "../App.css";

const ContainerPopular = () => {
	return (
		<div className="container d-flex m-3 flex-column ">
			<h3 className="text-light">Popular movies 2022</h3>
			<div className="d-flex container-flex">
				<Card />
			</div>
		</div>
	);
};
export default ContainerPopular;
