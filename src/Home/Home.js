import './Home.css'
import image1 from '../assets/home.jpg'
import image2 from '../assets/home1.jpg'
import image3 from '../assets/home2.jpg'
import arrowr from '../assets/arrow.png'
import arrowl from '../assets/arrowl.png'
import { useState } from 'react'
function Home(){
    const [index,setIndex] = useState(0)

    const handleArrow =  (dir)=>{
        if(dir === 'l'){
            setIndex(index !==0 ? index-1 :2)
        }
        if(dir === 'r'){
             setIndex(index !==2 ? index+1 :0)
        }
    }
    setInterval(() => {
        handleArrow('r')
    }, 20000)
    return(
        <div>
            <div className='bigImage' >
                <div ><img className='arrow arrowr' src={arrowr} alt='arrow' onClick={()=>handleArrow('r')}/></div>
                <div ><img className='arrow' src={arrowl} alt='arrow' onClick={()=>handleArrow('l')}/> </div>
                <div className= 'imageContainer '  >
                    <img className='images image1' id={`${index === 0 ? 'showthis' : ''}`} alt='image' key={0} src={image1}/>
                </div>
                <div className='imageContainer'>
                    <img className='images image2' id={`${index === 1 ? 'showthis' : ''}`} alt='image' key={1} src={image2}/>
                </div>
                <div className='imageContainer'>
                    <img className='images image3' id={`${index === 2 ? 'showthis' : ''}`} alt='image' key={2} src={image3}/>
                </div>

            </div>
                <div className='blurBack'>
                <h2 className='titles'>Welcome to our website</h2>
                </div>
        </div>
    )
    // style={{transform:`translateX(${-100*index}vw)`}}
}
export default Home