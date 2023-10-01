import Navigation from "../components/Navigation"
import ProfileCard from "../components/ProfileCard"
import SongCard from "../components/SongCard"


let songs = [
  {
    id: 1,
    title: "Look Who's Inside Again",
    artist: "Bo Burnham",
    album: "Inside",
  },
  {
      id: 2,
      title: "Goodbye",
      artist: "Bo Burnham",
      album: "Inside",
  },
  {
      id: 3,
      title: "Welcome to the Internet",
      artist: "Bo Burnham",
      album: "Inside",
  },
  {
    id: 4,
    title: "Look Who's Inside Again",
    artist: "Bo Burnham",
    album: "Inside",
  }
]

function Profile() {
    return (
        <div className="w-full flex flex-col items-center p-4 pt-0">
            <Navigation page="profile"></Navigation>
            <ProfileCard tab="userProfile"></ProfileCard>
            <div className="w-[90vw] sm:max-w-[38rem]">
                <div className="w-fit border-b-2 border-black font-bold">
                    Top Tracks
                </div>
                <div>

                  {
                    songs.map((song, index) => {
                      return (
                        <SongCard index={index+1} song={song.title} artists={song.artist} key={song.id}/>
                      )
                    })
                  }
                </div>
            </div>
        </div>
    )
}
  
export default Profile