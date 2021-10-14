import './App.css';
import Section from './Components/Section';
import requests from './requests';
import Firstview from './Components/Firstview';
import Navbar from './Components/Navbar'

function App() {  
  return (
    <div className="App">
      <div className="app">
        <Navbar />
        <Firstview />
        <Section title = "Trending Now"  fetchUrl = { requests.fetchTrending } />
        <Section title = "Netflix Originals"  fetchUrl = { requests.fetchNetflixOriginals } />
        <Section title = "Top-Rated"  fetchUrl = { requests.fetchTopRated } />
        <Section title = "Comedy"  fetchUrl = { requests.fetchComedy } />
        <Section title = "Action"  fetchUrl = { requests.fetchActionMovies } />
        <Section title = "Horror"  fetchUrl = { requests.fetchHorrorMovies } />
        <Section title = "Documentaries"  fetchUrl = { requests.fetchDocumentaries } />
        <Section title = "Romance"  fetchUrl = { requests.fetchRomanceMovies } />       
      </div>
    </div>
  );
}

export default App;
