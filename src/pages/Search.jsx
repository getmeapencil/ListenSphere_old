import Navigation from "../components/Navigation";
import ProfileCard from "../components/ProfileCard";

function Search({ data }) {
  return (
    <div className="w-full flex flex-col items-center p-4 pt-0">
      <Navigation page="search"></Navigation>
      {!data ? (
        <p className="text-2xl">No Results</p>
      ) : (
        <>
          <ProfileCard tab="search"></ProfileCard>
          <ProfileCard tab="search"></ProfileCard>
          <ProfileCard tab="search"></ProfileCard>
          <ProfileCard tab="search"></ProfileCard>
          <ProfileCard tab="search"></ProfileCard>
          <ProfileCard tab="search"></ProfileCard>
        </>
      )}
    </div>
  );
}

export default Search;
