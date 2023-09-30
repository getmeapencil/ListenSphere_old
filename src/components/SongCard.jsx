function SongCard({track,index}) {
    return (
        <div className="flex items-center max-w-[95vw] my-4 bg-card-grey border-4 border-black rounded-lg">
            <p className="text-center w-10 font-bold">
                {index+1}
            </p>
            <img src={track.image} alt="Inside Cover" className="w-16 h-16 md:w-24 md:h-24 object-cover"/>
            <div className="flex flex-col m-2 md:m-4 gap-1 md:gap-3 truncate">
                <p className="font-bold truncate">{track.name}</p>
                <p className="text-sm truncate">{track.artist}</p>
            </div>
            <div className="justify-self-end">
               <audio controls className="w-24 md:w-32 ">
                    <source src={track.preview} type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    )
}
  
export default SongCard