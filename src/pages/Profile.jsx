import Navigation from "../components/Navigation"
import ProfileCard from "../components/ProfileCard"
import SongCard from "../components/SongCard"

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
                    <SongCard index="20"></SongCard>
                    <SongCard></SongCard>
                    <SongCard></SongCard>
                    <SongCard></SongCard>
                    <SongCard></SongCard>
                    <SongCard></SongCard>
                    <SongCard></SongCard>
                    <SongCard></SongCard>
                    <SongCard></SongCard>
                    <SongCard></SongCard>
                    <SongCard></SongCard>
                    <SongCard></SongCard>
                </div>
            </div>
        </div>
    )
}
  
export default Profile