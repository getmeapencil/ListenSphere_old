import { Link } from "react-router-dom";

function Home() {
    return (
        <div className='h-screen flex flex-col justify-center items-center overflow-y-hidden p-0'>
            <hero className='flex flex-col justify-center items-center flex-grow'>
                <h1 className='text-7xl font-["League_Spartan"]'>ListenSphere</h1>
                <p className='text-2xl'>Connect with people who listen like you</p>
                <Link to="/edit-profile" className='w-56 my-4 text-center bg-button-green hover:bg-button-green-dark font-bold py-3 px-6 rounded-3xl border-4 border-black'>LOGIN WITH SPOTIFY</Link>
            </hero>
            <img src=".\src\assets\linesphere_main.jpg" alt="people listening music" className='object-cover min-h-[50vh]' />
        </div>
    )
}
  
export default Home