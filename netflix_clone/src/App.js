import './App.css';
import Row from './Components/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <div className="">
        <Row title = "TRENDING NOW"  fetchUrl = { requests.fetchTrending } />
        <Row title = "NETFLIX ORIGINALS"  fetchUrl = { requests.fetchNetflixOriginals } />
      </div>
    </div>
  );
}

export default App;
