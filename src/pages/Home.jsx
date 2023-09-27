import { Link } from "react-router-dom";

function Home() {
    return (
        <div className='h-screen flex flex-col justify-center items-center overflow-y-hidden p-0'>
            <div className='flex flex-col justify-center items-center flex-grow'>
                <h1 className='text-5xl sm:text-7xl font-["League_Spartan"]'>ListenSphere</h1>
                <p className='text-md sm:text-2xl'>Connect with people who listen like you</p>
                <Link to="/edit-profile" className='my-4 text-center bg-button-green hover:bg-button-green-dark font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-2xl sm:rounded-3xl border-4 border-black'>LOGIN WITH SPOTIFY</Link>
                <Link to="/search" className='my-1 text-center bg-button-green hover:bg-button-green-dark font-bold py-3 px-6 rounded-3xl border-4 border-black'>Show Search Page</Link>
                <Link to="/song-card" className='my-1 text-center bg-button-green hover:bg-button-green-dark font-bold py-3 px-6 rounded-3xl border-4 border-black'>Show SongCard component</Link>
                <Link to="/navigation" className='my-1 text-center bg-button-green hover:bg-button-green-dark font-bold py-3 px-6 rounded-3xl border-4 border-black'>Show Navigation component</Link>
            </div>
            <img src=".\src\assets\linesphere_main.jpg" alt="people listening music" className='object-cover min-h-[50vh]' />
        </div>
    )
}
  
export default Home