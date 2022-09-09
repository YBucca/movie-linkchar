import CardsT from "./CardsT";
import "../App.css"
const ContainerContinue = ()=>{
  return (
		<div className="container d-flex p-5 flex-column ">
			<h3 className="text-light">Continue Watching</h3>
			<div className="d-flex justify-content-center container-flex">
				<CardsT value={5} />
			</div>
		</div>
  );
}
export default ContainerContinue;