import Card from "./Card";

const ContainerPopular = () => {
	return (
		<div className="container d-flex p-5 flex-column">
    <h3 className="text-light">Popular movies 2022</h3>
			<div className="d-flex">
				<Card />
			</div>
		</div>
	);
};
export default ContainerPopular;
