import ImageMapper from 'react-img-mapper'
import HighlightBlurb from './CustomMarker'
import aiWatercolorImage from '../assets/ai-watercolor.png'
import areas from '../assets/areas.json'
import { useState } from 'react'

const Mapper = (props)=>{
    const [showBlurb, setShowBlurb] = useState(false);
    const [blurbPosition, setBlurbPosition] = useState({ x: 0, y: 0 });
    const [currentArea, setCurrentArea] = useState(null);
  
    
    const MAP = {
        name: "my-map",
        areas: areas,
    }
    const handleMouseEnter = (area, _, evt) => {
        console.log(evt)
        setShowBlurb(true);
        setBlurbPosition({ x: evt.pageX, y: evt.pageY });
        setCurrentArea(area);
      };
    
      const handleMouseLeave = () => {
        setShowBlurb(false);
        setCurrentArea(null);
      };

    return(
        <div style={{ position: 'relative' }}>
        <ImageMapper
        src={aiWatercolorImage}
        map={MAP}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        />
         {showBlurb && currentArea && (
        <HighlightBlurb name={currentArea.name} x={blurbPosition.x} y={blurbPosition.y} />
      )}
        </div>
    )
}

export default Mapper