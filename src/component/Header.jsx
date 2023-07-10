import React from 'react'
import { useLocation , useNavigate} from 'react-router'


export default function Header() {
    const location=useLocation();
    const navigate=useNavigate()
   
    function pathMathRoute(route){
        if(route===location.pathname){
            return true
        }
    }
  return (
    <div className='bg-black border-b shadow-sm sticky top-0 z-50 text-white '>
    <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
    <div>
      <img src="./logo.png" alt="logo" className='h-11 cursor-pointer' onClick={()=>navigate("/")}/>
    </div>
    <div >
        <ul className='flex space-x-10'>
            <li className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] border-b-transparent ${pathMathRoute("/") && "text-white border-b-white-500"}`} onClick={()=>navigate("/")}>Home</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] border-b-transparent ${pathMathRoute("/offers") && "text-white border-b-white-500"}`} onClick={()=>navigate("/offers")}>Offers</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] border-b-transparent ${pathMathRoute("/sign-in") && "text-white border-b-white-500"}`} onClick={()=>navigate("/sign-in")}>Sign in</li>
       
        </ul>
    </div>
    </header>
    </div>
  )
}
