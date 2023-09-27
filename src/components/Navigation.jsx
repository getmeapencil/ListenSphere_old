import { BiSolidUser } from 'react-icons/bi';
import { BiSolidSearch } from 'react-icons/bi';
import { BiSolidLike } from 'react-icons/bi';

function Navigation() {
    return (
        <div className="flex w-full relative">
            <h1 className='text-4xl p-4 pb-2 font-["League_Spartan"] absolute invisible sm:visible'>ListenSphere</h1>
            <div className='flex justify-center items-center gap-4 w-full pt-4 pb-2 sticky top-0'>
                <BiSolidSearch className='text-nav-yellow bg-black p-2 rounded-full text-4xl'/>
                <BiSolidLike className='text-nav-yellow bg-black p-2 rounded-full text-4xl'/>
                <BiSolidUser className='text-nav-yellow bg-black p-2 rounded-full text-4xl'/>
            </div>
        </div>
    )
}
  
export default Navigation