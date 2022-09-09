import CardsT from "./CardsT";
const ContainerContinue = ()=>{
  return (
		<div className="container d-flex p-5 flex-column ">
			<h3 className="text-light">Continue Watching</h3>
			<div className="d-flex justify-content-center">
				<CardsT value={5} />
			</div>
		</div>
  );
}
export default ContainerContinue;