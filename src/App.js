import './App.css';
import ContainerPopular from './components/ContainerPopular';
import NavBar from './components/NavBar';
import ContainerContinue from './components/ContainerContinue';
import Banner from './components/Banner';

function App() {
  return (
		<div className="App">
			<NavBar />
			<Banner/>
			<ContainerContinue />
			<ContainerPopular />
		</div>
  );
}

export default App;
