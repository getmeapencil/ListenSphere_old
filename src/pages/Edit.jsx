import { BiSolidUser } from 'react-icons/bi';

function Edit() {
    return (
      <div className='max-w-screen-xl h-screen flex flex-col items-center'>
        <h1 className='text-4xl pt-2 font-["League_Spartan"]'>ListenSphere</h1>
        <circle className='bg-black rounded-full w-8 h-8 flex justify-center items-center border-2 border-black'>
          <BiSolidUser className='text-nav-yellow'/>
        </circle>
      </div>
    )
}
  
export default Edit;