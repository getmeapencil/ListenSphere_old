import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Edit() {
    return (
      <div className='max-w-screen-xl h-screen flex flex-col items-center'>
        <h1 className='text-4xl p-2 font-["League_Spartan"]'>ListenSphere</h1>
        <circle className='bg-black rounded-full w-8 h-8 flex justify-center items-center border-2 border-black'>
        <FontAwesomeIcon icon={faUser} style={{color: "#f8a120",}} />
        </circle>
      </div>
    )
}
  
export default Edit;
  