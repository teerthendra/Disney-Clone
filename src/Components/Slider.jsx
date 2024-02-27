import React, { useEffect, useRef, useState} from 'react'
import GlobalApi from '../Services/GlobalApi'
import  { HiChevronLeft,HiChevronRight } from "react-icons/hi2"
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"

const screenWidth=window.innerWidth


function Slider() {
const [movieList,setMovieList]=useState([])
const elementRef=useRef();

  useEffect(()=>{
    getTrendingMovies();

},[])

  const getTrendingMovies=()=>{
    GlobalApi.getTrendingVideos.then(resp=>{
      console.log(resp.data.results)
      setMovieList(resp.data.results)
    })
  }

  const sliderRight=(element)=>{
    element.scrollLeft+=screenWidth-110
  }
  const sliderLeft=(element)=>{
    element.scrollLeft-=screenWidth-110
  }


  return (
   <div >
    <HiChevronLeft className="text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer left-0 bg-transparent hide-on-mobile" onClick={()=>sliderLeft(elementRef.current)}/>
    <HiChevronRight className="text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0 bg-transparent overflow-y-scroll hide-on-mobile" onClick={()=>sliderRight(elementRef.current)}/>
   
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef} >
      {movieList.map((item,index)=>(
        
        <img src={IMAGE_BASE_URL+item.backdrop_path} className='w-full md:h-[310px] object-contain mr-5 rounded-md hover:border-[3px] border-#F4F6F7 transition-all duration-100 ease-in-out' />
      
        ))}



    </div>
    </div>
  )
}

export default Slider
