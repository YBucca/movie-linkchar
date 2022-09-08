import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg border-bottom ">
			<div className="container-fluid">
				<Link
					to="/"
					style={{
						textDecoration: "none",
						color: "hotPink",
					}}
				>
					LinkChar
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<Link
							to="/"
							style={{
								textDecoration: "none",
							}}
						>
							<li className="nav-item ">
								<a
									className="nav-link active text-light"
									aria-current="page"
									href="#"
								>
									Movies
								</a>
							</li>
						</Link>
						<li className="nav-item ">
							<a className="nav-link disabled text-secondary ">
								TV shows
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled text-secondary ">
								Animations
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled text-secondary ">
								Plans
							</a>
						</li>
					</ul>
					<form className="d-flex" role="search">
						<Link to="/Search">
							<button
								className="btn "
								type="submit"
							>
								<BsSearch className="text-light" />
							</button>
						</Link>
					</form>
					<a
						className="nav-link dropdown-toggle d-flex align-items-center mx-3"
						href="#"
						id="navbarDropdownMenuLink"
						role="button"
						data-mdb-toggle="dropdown"
						aria-expanded="false"
					>
						<img
							src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
							className="rounded-circle"
							height="22"
							alt="Avatar"
							loading="lazy"
						/>
					</a>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
