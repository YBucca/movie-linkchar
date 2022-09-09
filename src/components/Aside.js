import { BsPlusCircleFill } from "react-icons/bs";
import "./Aside.css"
import CardsT from "./CardsT"

const Aside = () => {
	return (
		<div className="col-lg-3 d-flex flex-column d-none d-sm-block d-sm-none d-md-block p-3 border-end  ">
			<h4 className="text-light">New trailers</h4>

			<CardsT />

			<h4 className="text-light">Favourite genres</h4>
			<div className="d-flex justify-content-start genres flex-wrap">
				<button type="button" className="btn rounded-5 btn-danger ">
					Action
				</button>
				<button type="button" className="btn btn-warning rounded-5">
					Western
				</button>
				<button type="button" className="btn rounded-5 btn-danger">
					Adventures
				</button>
				<button type="button" className="btn btn-warning rounded-5">
					Drama
				</button>
				<button type="button" className="btn rounded-5 btn-info">
					Sci-Fi
				</button>
			</div>
			<div className="d-flex">
				<BsPlusCircleFill className="text-light " />
				<h6 className="d-block text-light">
					Add your favourite genres
				</h6>
			</div>

			<div className="d-flex genres ">
				<button type="button" className="btn btn-secondary rounded-5">
					Crime
				</button>
				<button type="button" className="btn btn-secondary rounded-5">
					Comedy
				</button>
				<button type="button" className="btn btn-secondary rounded-5">
					Thriller
				</button>
			</div>
		</div>
	);
};

export default Aside;
