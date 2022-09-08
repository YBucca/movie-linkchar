import { BsSearch } from "react-icons/bs";
const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					LinkChar
				</a>
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
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#"
							>
								Movies
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled">TV shows</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled">Animations</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled">Plans</a>
						</li>
					</ul>
					<form className="d-flex" role="search">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button
							className="btn btn-outline-success"
							type="submit"
						>
							<BsSearch/>
						</button>
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
