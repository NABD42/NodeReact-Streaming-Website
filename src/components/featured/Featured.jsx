import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option >Genre</option>
                    <option value="adventure">Aventure</option>
                    <option value="comedy">Comédie</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasie</option>
                    <option value="historical">Historique</option>
                    <option value="horror">Horreur</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Anime</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentaire</option>
                </select>
            </div>
        )}
        <img src="https://wallpapercave.com/wp/wp4540687.jpg" alt="" />

        <div className="info">
            <img src="https://i.pinimg.com/originals/a6/6d/91/a66d91ab93dd769b4294d3b7e5c04678.png" alt="peaky blinders streaming vf entier complet" />
            <span className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente vitae doloremque perferendis dolor recusandae, impedit adipisci temporibus vero, nemo laborum quis voluptatum eum voluptatem eligendi. Ea dolorem nesciunt minus?
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
