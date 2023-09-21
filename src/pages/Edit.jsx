import { BiSolidUser } from 'react-icons/bi';
import Avatar from '@mui/material/Avatar';

function Form() {
  return (
    <div className="my-2"> 
      <Avatar alt="Remy Sharp" src="/src/assets/avatar (1).png" className='my-2 w-28 h-28 border-4 border-black'/>

      <card>

      </card>
    </div>
  )
}

function Edit() {
    return (
      <div className='max-w-screen-xl h-screen flex flex-col items-center'>
        <h1 className='text-4xl py-2 font-["League_Spartan"]'>ListenSphere</h1>
        <circle className='my-2 bg-black rounded-full w-8 h-8 flex justify-center items-center border-2 border-black'>
          <BiSolidUser className='text-nav-yellow'/>
        </circle>
        <Form />
      </div>
    )
}
  
export default Edit;