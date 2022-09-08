import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Search" element={< Search />} />
				</Routes>
			</BrowserRouter>
		</div>
  );
}

export default App;
