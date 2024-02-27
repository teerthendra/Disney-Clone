import logo from "../assets/Images/logo.png"
import HeaderItem from "./HeaderItem"
// import Navbar from "./Navbar"
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiPlus
} from "react-icons/hi2"
import {HiDotsVertical}  from "react-icons/hi"
import { useState } from "react"


function Header() {

  const [toggle,setToggle]=useState(false);



    const menu=[
      {
        name: "HOME",
        icon:HiHome

      },
      {
        name: "SEARCH",
        icon:HiMagnifyingGlass

      },
      {
        name: "WATCH LIST",
        icon:HiPlus

      },
      {
        name: "ORIGINAL",
        icon:HiStar

      },
      {
        name: "MOVIE",
        icon:HiPlayCircle
      },
      {
        name: "SERIES",
        icon:HiTv

      }
      

]
  return (
    <>
<div className="flex items-center  justify-between p-5">
  <div  className="flex gap-8 items-center" >
    <img src={logo} alt="logo" className="w-[200px] md:w-[115px]object-cover" />

    <div className="hidden md:flex gap-8">
    {menu.map((item)=>(
      <HeaderItem name={item.name} Icon={item.icon} />
    ))}
    </div>

    {/* Responsive menu */}

    <div className="flex md:hidden gap-5">
    {menu.map((item,index)=>index<3&&(
      <HeaderItem name={''} Icon={item.icon} />
    ))}
<div className="md:hidden" onClick={()=>setToggle(!toggle)}>

    <HeaderItem name={''} Icon={HiDotsVertical} />
    {toggle?
    <div className="absolute mt-3 rounded-sm border-[1px] border-gray-700 p-3 px-5 py-4">
    {menu.map((item,index)=>index>2&&(
      <HeaderItem name={item.name} Icon={item.icon} />
    ))}
    </div>:null}

  </div>

    </div>
    </div>
    
    
    
    
    
  <div>
      <img src="https://i.pinimg.com/564x/4d/77/e2/4d77e2ffb4b616928c6242b94f6cfefd.jpg" alt="" className="w-[40px] rounded-full"/>


    </div>
</div>
    </>
  )
}

export default Header
    