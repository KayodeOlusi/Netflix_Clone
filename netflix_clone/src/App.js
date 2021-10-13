import './App.css';
import Section from './Components/Section';
import requests from './requests';
import Firstview from './Components/Firstvew';

function App() {
  return (
    <div className="App">
      <div className="bg-black">
        <Firstview />
        <Section title = "TRENDING NOW"  fetchUrl = { requests.fetchTrending } />
        <Section title = "NETFLIX ORIGINALS"  fetchUrl = { requests.fetchNetflixOriginals } />
        <Section title = "TOP RATED"  fetchUrl = { requests.fetchTopRated } />
        <Section title = "COMEDY"  fetchUrl = { requests.fetchComedy } />
        <Section title = "ACTION"  fetchUrl = { requests.fetchActionMovies } />
        <Section title = "HORROR"  fetchUrl = { requests.fetchHorrorMovies } />
        <Section title = "DOCUMENTARIES"  fetchUrl = { requests.fetchDocumentaries } />
        <Section title = "ROMANCE"  fetchUrl = { requests.fetchRomanceMovies } />       
      </div>
    </div>
  );
}

export default App;
