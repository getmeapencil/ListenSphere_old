import Navigation from "../components/Navigation"
import ProfileCard from "../components/ProfileCard"

function Search() {
    return (
        <div className="w-full flex flex-col items-center">
            <Navigation></Navigation>
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