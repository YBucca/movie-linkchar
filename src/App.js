import './App.css';
import ContainerPopular from './components/ContainerPopular';
import NavBar from './components/NavBar';
import ContainerContinue from './components/ContainerContinue';
import Banner from './components/Banner';
import Aside from './components/Aside';

function App() {
  return (
		<div className="App">
			<NavBar />
			<div className="d-flex">
				<Aside />
				<div className='d-flex flex-column'>
					<Banner />
					<ContainerContinue />
					<ContainerPopular />
				</div>
			</div>
		</div>
  );
}

export default App;
