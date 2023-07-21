// import { useState } from "react";
// const MyCustomMarker = ({ marker, markerStyle }) => {
//     const [showHover, setShowHover] = useState(false);
  
//     return (
//       <div
//         style={markerStyle}
//         className="marker-custom"
//         onMouseLeave={() => setShowHover(false)}
//         onMouseEnter={() => setShowHover(true)}
//       >
//         <div className="marker-information"
//           style={{
//             display: showHover ? "block" : "none",
//           }}
//         >
//           <h2>{marker.name}</h2>
//           {marker.url && <a href={marker.url} target="_blank">{marker.name}</a>}
//         </div>
//       </div>
//     );
//   };
  
//   export default MyCustomMarker;



const HighlightBlurb = ({ name, x, y }) => {
    return (
        <div style={{ position: 'absolute', top: y, left: x, backgroundColor: 'white', color:'black', padding: '8px' }}>
        <p>{name}</p>
      </div>
    );
  };

  export default HighlightBlurb