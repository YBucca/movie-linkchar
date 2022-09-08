import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
<<<<<<< HEAD
import Home from './components/Home';
=======
import ContainerContinue from './components/ContainerContinue';
import Banner from './components/Banner';
import Aside from './components/Aside';
>>>>>>> 093b849d62183deac9cecf72a0f3c8bf21779737

function App() {
  return (
		<div className="App">
<<<<<<< HEAD
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Search" element={< Search />} />
				</Routes>
			</BrowserRouter>
=======
			<NavBar />
			<div className="d-flex">
				<Aside />
				<div className='d-flex flex-column'>
					<Banner />
					<ContainerContinue />
					<ContainerPopular />
				</div>
			</div>
>>>>>>> 093b849d62183deac9cecf72a0f3c8bf21779737
		</div>
  );
}

export default App;
