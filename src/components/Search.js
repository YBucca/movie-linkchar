import { useEffect, useState } from "react";
import { useSearchParams} from "react-router-dom";
import { BsSearch, BsStarFill} from "react-icons/bs";
import "./Search.css";
const Search = () => {
	const [valorDelInput, setValorDelInput] = useState("");
	const [peliculas, setPeliculas] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams({ query: "" });

	useEffect(() => {
		if (searchParams.get("query")) {
			fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=457fa7dd417d06a0e15d7fe61f662df1&language=en&query=${searchParams.get(
					"query"
				)}&page=1`
			)
				.then((res) => res.json())
				.then((data) => {
					setPeliculas(data.results);
          console.log(data.results)
				});
		}
	}, [searchParams]);

	const handleChangeInput = (e) => {
		setValorDelInput(e.target.value);
	};
	const handleClick = (e) => {
		setSearchParams({
			query: valorDelInput,
		});
	};
	return (
		<>
			<input
				className="form-control me-2 "
				type="search"
				placeholder="Search"
				aria-label="Search"
				onChange={handleChangeInput}
				value={valorDelInput}
			/>

			<button
				className="btn btn-outline-success"
				type="submit"
				onClick={handleClick}
			>
				<BsSearch />
			</button>

			<div className="container-fluid bg-primary d-flex searchMovie ">
				{peliculas.map((elem) => (
					<div
						className="card d-flex flex-row rounded-4"
						style={{
							backgroundImage: `url("https://image.tmdb.org/t/p/w500/${elem.poster_path}")`,
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
						}}
						key={elem.id}
					>
						<div className="card-body">
							<h2 className="card-title text-light">
								{elem.title ? elem.title : "title not found"}
							</h2>
							<p className="card-text text-light">
								<BsStarFill /> {elem.vote_average}
							</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Search;
