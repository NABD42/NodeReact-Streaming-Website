import { ArrowDropDown, LaptopWindows, Notifications, Search } from "@material-ui/icons"
import { useState } from "react";
import "./navbar.scss"

const Navbar = () => {
    // Active/Desactive background color on navbar
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://cdn.worldvectorlogo.com/logos/microsoft-stream.svg" alt="streaming complet entier logo" />
                    <span>Accueil</span>
                    <span>Series</span>
                    <span>Films</span>
                    <span>Nouveautés et Populaires</span>
                    <span>Ma Liste</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>VOSTFR</span>
                    <Notifications className="icon"/>
                    <img src="https://wallpapercave.com/wp/wp4540687.jpg" alt="user_icon streaming vf vostfr entier complet" />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        
                        <div className="options">
                            <span>Paramétres</span>
                            <span>Déconnexion</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
  )
}

export default Navbar