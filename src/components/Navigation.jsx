import { BiSolidUser } from 'react-icons/bi';
import { BiSolidSearch } from 'react-icons/bi';
import { BiSolidLike } from 'react-icons/bi';

function Navigation({page="search"}) {
    return (
        <div className="flex w-full sticky top-0 z-10 bg-white">
            <h1 className='text-4xl p-2 font-["League_Spartan"] absolute invisible sm:visible'>ListenSphere</h1>
            <div className='flex justify-center items-center gap-4 w-full p-2'>
                <BiSolidSearch className={`${page === "search" ? "text-nav-yellow" : "text-white"} bg-black p-2 rounded-full text-4xl`}/>
                <BiSolidLike className={`${page === "likes" ? "text-nav-yellow" : "text-white"} bg-black p-2 rounded-full text-4xl`}/>
                <BiSolidUser className={`${page === "profile" ? "text-nav-yellow" : "text-white"} bg-black p-2 rounded-full text-4xl`}/>
            </div>
        </div>
    )
}
  
export default Navigation