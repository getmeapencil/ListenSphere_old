function SongCard({index=1, song="Look Who's Inside Again", artists="Bo Burnham, Bo Burnham, Bo Burnham, Bo Burnham, Bo Burnham, "}) {
    return (
        <div className="flex items-center max-w-[95vw] my-4 bg-card-grey border-4 border-black rounded-lg">
            <p className="px-4 font-bold">
                {index}
            </p>
            <img src="/src/assets/cover1.jpg" alt="Inside Cover" className="w-16 h-16 md:w-24 md:h-24 object-cover"/>
            <div className="flex flex-col m-2 md:m-4 gap-1 md:gap-3 truncate">
                <p className="font-bold truncate">{song}</p>
                <p className="text-sm truncate">{artists}</p>
            </div>
        </div>
    )
}
  
export default SongCard