import { useState, useEffect } from "react";
import "./Banner.css";
const Banner = () => {
	let pageRandom = Math.floor(Math.random() * 500);
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=457fa7dd417d06a0e15d7fe61f662df1&page=${pageRandom}`
		)
			.then((res) => res.json())
			.then((data) => {
				const limit = 1;
				console.log(data);
				setMovie(data.results.slice(0, limit));
			});
      
	}, []);
	return (
		<>
			{movie.map((elem) => (
				<div
					className="container rounded-4 col-lg-9 banner"
					style={{
						backgroundImage: `url("https://image.tmdb.org/t/p/original/${elem.backdrop_path}")`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
					key={elem.id}
				>
					<div className="card-body">
						<h2 className="card-title">{elem.title}</h2>
					</div>
				</div>
			))}
		</>
	);
};

export default Banner;
