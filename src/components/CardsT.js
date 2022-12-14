import { useState, useEffect } from "react";
import "../App.css"
const CardsT = ({value}) => {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/upcoming?api_key=457fa7dd417d06a0e15d7fe61f662df1`
		)
			.then((res) => res.json())
			.then((data) => {
				const limit = 2;
				setMovie(data.results.slice(0, limit));
			});
	}, []);
	return (
		<>
			{movie.map((elem) => (
				<div
					className={`card d-flex flex-row col-${value} rounded-5 align-items-end w-card`}
					style={{
						backgroundImage: `url("https://image.tmdb.org/t/p/w500/${elem.poster_path}")`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
					}}
					key={elem.id}
				>
					<div className="card-body bg-dark p-2 text-dark bg-opacity-50 animate__animated animate__fadeInUp cards-b">
						<h2 className="card-title">
							{elem.title ? elem.title : "title not found"}
						</h2>
						<p className="card-text text-light">
							{elem.overview}
						</p>
					</div>
				</div>
			))}
		</>
	);
};
export default CardsT;
