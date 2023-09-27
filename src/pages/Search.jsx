import Navigation from "../components/Navigation"
import ProfileCard from "../components/ProfileCard"

function Search() {
    return (
        <div className="w-full flex flex-col items-center p-4 pt-0">
            <Navigation page="search"></Navigation>
            <ProfileCard tab="search"></ProfileCard>
            <ProfileCard tab="search"></ProfileCard>
            <ProfileCard tab="search"></ProfileCard>
            <ProfileCard tab="search"></ProfileCard>
            <ProfileCard tab="search"></ProfileCard>
            <ProfileCard tab="search"></ProfileCard>
        </div>
    )
}
  
export default Search