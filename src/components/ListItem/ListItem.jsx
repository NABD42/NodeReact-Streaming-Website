import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react"
import "./listItem.scss"

export default function Listitem({index}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="listItem" 
    style={{left: isHovered && index * 225 - 50 + index * 2.5}}
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://bolavip.com/__export/1643649694321/sites/bolavip/img/2022/01/31/peaky-blinders-mastermind-switch-hero_crop1643649682805.jpg_242310155.jpg" alt="peaky blinders saison 6 streaming entier complet film" />

      {isHovered && (
        <>

      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon"/>
          <Add className="icon"/>
          <ThumbUpAltOutlined className="icon"/>
          <ThumbDownOutlined className="icon"/>
        </div>
        <div className="itemInfoTop">
          <span>65min</span>
          <span className="limit">+16</span>
          <span>2022</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem pariatur labore ratione quos dolorum, iure earum rem officia officiis? Est.
        </div>
        <div className="genre">Drame</div>
      </div>
      </>
      )}
    </div>
  );
}
