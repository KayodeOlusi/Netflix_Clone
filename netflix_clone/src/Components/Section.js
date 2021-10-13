import { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Section = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([])
    const image = "https://image.tmdb.org/t/p/w500/"
    const baseUrl = "https://api.themoviedb.org/3"

    useEffect(() => {
        Aos.init({duration:2000});
        async function fetchedData(){
            const request = await fetch(`${baseUrl}${fetchUrl}`)
            .then( response => {
                return response.json()
            }).then( data => {
                setMovies(data.results)
            })
        }
        fetchedData()
    }, [fetchUrl])

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
                         />   
                    ))
                }
            </div>
        </div>
     );
}
 
export default Section;