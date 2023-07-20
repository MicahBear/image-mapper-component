import { useState } from 'react';
import './App.css'


function App() {

  const [isHighlighted, setHighlighted] = useState(false);

  const handleMouseOver = () => {
    setHighlighted(true);
  };

  const handleMouseOut = () => {
    setHighlighted(false);
  };

  return (
    <>
    <img src="./src/assets/ai-watercolor.png" useMap="#image_map" alt="" />
      <map name="image_map">
          <area  alt="door" className={`highlight-container ${isHighlighted ? 'highlighted' : ''}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut} title="door" href="" coords="203,278 288,279 290,380 208,337 " shape="polygon"/>
          
        <area alt="window" title="window" href="" coords="210,155 270,158 273,216 209,217 " shape="polygon"/>
      </map>
    </>
  )
}

export default App
