import { useState, useEffect } from 'react'
import requests from '../requests'

const Firstview = () => {
    const [random, setRandom] = useState([])
    const baseUrl = "https://api.themoviedb.org/3"
    const image = "https://image.tmdb.org/t/p/w500/"
    const randomFonts = ["font-sans", "font-serif", "font-mono font-noto", "font-josefin", "font-festive font-akronim"]
    const selectRandomFont = randomFonts[Math.floor(Math.random() * randomFonts.length - 1)]
    
    useEffect(() => {
        async function randomMovie(){
            const movieRequest = await fetch(`${baseUrl}${requests.fetchRandom}`)
            .then( response => {
                return response.json()
            })
            .then( data => {
                const fetched = data.results[Math.floor(Math.random() * data.results.length - 1)]
                setRandom(fetched)
            })
        }
        randomMovie()
    }, [])

    console.log(random)

    return ( 
        <div className = "" style = {{
            backgroundImage : `linear-gradient(
                rgba(0,0,0,0.55),
                rgba(0,0,0,0.55)
              ), url(${ image }${ random?.backdrop_path })`,
            height : "80vh",
            backgroundPosition : "center center",
            backgroundRepeat : "no-repeat",
            backgroundSize : "cover"
        }}>
            <div className = "inner-details text-white">

                <div style = {{
                    paddingTop : "150px"
                }} className = "grid lg:grid-cols-2"
                >
                    <div>
                        <div className = {`${selectRandomFont}`} style={{
                            fontSize : "40px"
                        }}>
                            <h1 className = "font-bold movie-name">{ random?.title  || random?.name || random?.original_title }
                            </h1>
                        </div>

                            <div className = "my-5 font-josefin">
                                <button className = "btn" >Play</button>
                                <button className = "btn">More Info</button>
                            </div>

                            <div className = "mt-5 sm:text-sm p-8 sm:p-2 font-noto movie-desc">
                                <h1>{ random?.overview }</h1>
                            </div>
                    </div> 

                </div>
            </div>

        </div>
     );
}
 
export default Firstview;