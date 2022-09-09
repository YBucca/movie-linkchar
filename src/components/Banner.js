import { useState, useEffect } from "react";
import { BsPlayCircle } from "react-icons/bs";
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
				setMovie(data.results.slice(0, limit));
			});
      
	}, []);
	return (
		<>
			{movie.map((elem) => (
				<div
					className="container rounded-4 col-lg-10 banner"
					style={{
						backgroundImage: `url("https://image.tmdb.org/t/p/original/${elem.backdrop_path}")`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPosition: "start",
					}}
					key={elem.id}
				>
					<div className="card-body">
						<h2 className="card-title text-light">{elem.title}</h2>
					</div>
					<button className="btn btn-warning d-flex">
						<BsPlayCircle className="m-1"/>
						<p>Watch Now</p>
					</button>
				</div>
			))}
		</>
	);
};

export default Banner;
