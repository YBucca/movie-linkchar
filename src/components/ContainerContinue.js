import CardsT from "./CardsT";
import "../App.css"
const ContainerContinue = ()=>{
  return (
		<div className="container d-flex m-3 flex-column ">
			<div className="d-flex">
				<h3 className="text-light">Continue Watching</h3>{" "}
				<p className="text-secondary p-2">| 4 movies</p>
			</div>
		
			<div className="d-flex justify-content-center container-flex">
				<CardsT value={5} />
			</div>
		</div>
  );
}
export default ContainerContinue;