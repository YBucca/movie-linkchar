import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Search = () => {
	const navigate = useNavigate();
	const [page, setPage] = useState(1);
	const [valorDelInput, setValorDelInput] = useState("");
	const [peliculas, setPeliculas] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams({ query: "" });
	
	useEffect(() => {
		if (searchParams.get("query")) {
			fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=457fa7dd417d06a0e15d7fe61f662df1&language=en&query=${searchParams.get(
					"query"
				)}`
			)
				.then((res) => res.json())
				.then((data) => {
					if (data.results?.length) {
						setPeliculas(data.results);
					} else {
						navigate("/Error");
					}
				});
		}
	}, [searchParams, navigate]);
	
	const handleChangeInput = (e) => {
		setValorDelInput(e.target.value);
	};
	const handleClick = (e) => {
		setSearchParams({
			query: valorDelInput,
		});
	};
	return (
		<div>
			<form className="d-flex" role="search">
				<input
					className="form-control me-2"
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
			</form>
		</div>
	);
};

export default Search;
