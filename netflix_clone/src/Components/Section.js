import { useState, useEffect } from 'react';

const Section = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([])
    const image = "https://image.tmdb.org/t/p/w500/"
    const baseUrl = "https://api.themoviedb.org/3"

    useEffect(() => {
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
        <div>
            <h1>{ title }</h1>
            <div className={`row-image no-scrollbar`}>
                {
                    movies.map( movie => (
                        <img 
                            src = {`${image}${movie.backdrop_path}`} 
                            alt={movie.name} className = "image-fetched"
                            key = { movie.id }
                         />   
                    ))
                }
            </div>
        </div>
     );
}
 
export default Section;