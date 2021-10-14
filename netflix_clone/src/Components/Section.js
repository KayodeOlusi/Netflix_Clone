import { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer'

const Section = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([])
    const image = "https://image.tmdb.org/t/p/w500/"
    const baseUrl = "https://api.themoviedb.org/3"
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        Aos.init({duration:2000});
        async function fetchedData(){
            const request = await fetch(`${baseUrl}${fetchUrl}`)
            .then( response => {
                return response.json()
            }).then( data => {
                setMovies(data.results)
                console.log(data.results)
            })
        }
        fetchedData()
    }, [fetchUrl])

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl("")
        }else{
            movieTrailer( movie?.name || "" )
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get("v"))
            }).catch(error => {
                console.log(error)
            })
        }
    }

    const opts = {
        height : "390",
        width : "100%",
        playerVars : {
            autoplay : 1
        }
    }

    return ( 
        <div className = "section" data-aos = "fade-up">
            <h1 className = "single_movie px-3 h4">{ title }</h1>
            <div className="row_images">
                {
                    movies.map( movie => (
                        <img 
                            src = {`${image}${movie.backdrop_path}`} 
                            alt={movie.name} className = "row_image"
                            key = { movie.id }
                            onClick = { () => handleClick(movie)}
                         />   
                    ))
                }
            </div>
            <div>
                { trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts} /> }  
            </div>
        </div>
     );
}
 
export default Section;