import Profile from '../img/Profile.png'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if (window.scrollY > 100) {
                setShow(true)
            } else {
                setShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll")    
        }
    }, [])


    return ( 
        <div className = {`nav ${show && "nav_black"}`} >
                <div className = "logo_links">
                    <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="" className = "logo" />
                    <ul className = "links">
                        <li><a href = "https://github.com/KayodeOlusi">Home</a></li>
                        <li><a href = "https://github.com/KayodeOlusi">Tv Show</a></li>
                        <li><a href = "https://github.com/KayodeOlusi">Movies</a></li>
                        <li><a href = "https://github.com/KayodeOlusi">New &amp; Popular</a></li>
                        <li><a href = "https://github.com/KayodeOlusi">My List</a></li>
                    </ul>
                </div>    
                <img src={Profile} alt="" className = "profile"/>
        </div>
     );
}
 
export default Navbar;