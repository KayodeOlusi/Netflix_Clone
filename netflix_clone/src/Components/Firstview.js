import { useState, useEffect } from 'react'
import requests from '../requests'

const Firstview = () => {
    const [random, setRandom] = useState([])
    const baseUrl = "https://api.themoviedb.org/3"
    const image = "https://image.tmdb.org/t/p/w500/"
    const randomFonts = ["Open Sans", "PT Mono", "Noto Sans Display", "Josefin Sans", "Akronim","Montserrat"]
    const selectRandomFont = randomFonts[Math.floor(Math.random() * randomFonts.length - 1)]
    
    useEffect(() => {
             fetch(`${baseUrl}${requests.fetchRandom}`)
            .then( response => {
                return response.json()
            })
            .then( data => {
                const fetched = data.results[Math.floor(Math.random() * data.results.length - 1)]
                setRandom(fetched)
            })
    }, [])

    return ( 
        <div style = {{
            backgroundImage : `linear-gradient(
                rgba(0,0,0,0.55),
                rgba(0,0,0,0.55)
              ), url(${ image }${ random?.backdrop_path })`,
            backgroundPosition : "center center",
            backgroundRepeat : "no-repeat",
            backgroundSize : "cover"
        }} className = "poster">
            <div className = "inner-details text-left">
                    <div className = "contents">
                        <div>
                            <h1 className = "title" style = {{
                                fontFamily : `${selectRandomFont}`,
                                fontWeight : "bolder"
                            }}>
                                    { random?.title  || random?.name || random?.original_title }
                            </h1>
                        </div>

                            <div className = "buttons">
                                <button className = "btn play mx-3" >Play</button>
                                <button className = "btn more-info">More Info</button>
                            </div>

                            <div className = "overview">
                                <p>{ random?.overview }</p>
                            </div>
                    </div>   
            </div>

        </div>
     );
}
 
export default Firstview;