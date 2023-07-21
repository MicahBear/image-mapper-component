import ImageMapper from 'react-img-mapper'
// import houseimg from './src/assets/ai-watercolor.png'
import areas from '../assets/areas.json'

const Mapper = (props)=>{
    
    const MAP = {
        name: "my-map",
        areas: areas,
    }

    return(
        <ImageMapper
        src={'./src/assets/ai-watercolor.png'}
        map={MAP}
        />
    )
}

export default Mapper