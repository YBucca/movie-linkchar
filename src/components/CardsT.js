import { useState, useEffect } from "react";

const CardsT = () => {
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
					className="card d-flex flex-row col-11 rounded-5"
					style={{
						backgroundImage: `url("https://image.tmdb.org/t/p/w500/${elem.poster_path}")`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
					}}
					key={elem.id}
				>
					<div className="card-body">
						<h2 className="card-title">
							{elem.title ? elem.title : "title not found"}
						</h2>
						<p className="card-text text-secondary">
							{elem.overview}
						</p>
					</div>
				</div>
			))}
		</>
	);
};
export default CardsT;