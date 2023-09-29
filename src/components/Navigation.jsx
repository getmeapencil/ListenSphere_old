import { Link } from "react-router-dom";
import { BiSolidUser } from 'react-icons/bi';
import { BiSolidSearch } from 'react-icons/bi';
import { BiSolidLike } from 'react-icons/bi';

function Navigation({page}) {
    return (
        <div className="flex w-[100vw] sticky top-0 z-10 bg-white">
            <h1 className='text-4xl py-4 font-["League_Spartan"] absolute left-6 invisible sm:visible'>ListenSphere</h1>
            <div className='flex justify-center items-center gap-4 w-full py-4'>
                <Link to="/profile"><BiSolidUser className={`${page === "profile" ? "text-nav-yellow" : "text-white"} bg-black p-2 rounded-full text-4xl`}/></Link> 
                <Link to="/search"><BiSolidSearch className={`${page === "search" ? "text-nav-yellow" : "text-white"} bg-black p-2 rounded-full text-4xl`}/></Link>
                <Link to="/likes"><BiSolidLike className={`${page === "likes" ? "text-nav-yellow" : "text-white"} bg-black p-2 rounded-full text-4xl`}/></Link>               
            </div>
        </div>
    )
}
  
export default Navigation