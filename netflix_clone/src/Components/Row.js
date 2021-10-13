import { useState, useEffect } from 'react';


const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([])
    const image = "https://image.tmdb.org/t/p/w500/"

    useEffect(() => {
        async function fetchedData(){
            const request = await fetch(`https://api.themoviedb.org/3${fetchUrl}`)
            .then( response => {
                return response.json()
            }).then( data => {
                console.log(data)
                setMovies(data.results)
            })
        }
        fetchedData()
    }, [fetchUrl])

    return ( 
        <div>
            <h1>{ title }</h1>

            <div className="row-image no-scrollbar">
                {
                    movies.map( movie => (
                        <img src = {`${image}${movie.poster_path}`} alt={movie.name} className = "image-fetched" key = { movie.id }/>   
                    ))
                }
            </div>
        </div>
     );
}
 
export default Row;