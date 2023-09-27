import { useState } from "react"
import Navigation from "../components/Navigation"
import ProfileCard from "../components/ProfileCard"

function Review() {
    return (
        <div className="w-full flex flex-col items-center p-4 pt-0">
            <ProfileCard tab="review"></ProfileCard>
            <ProfileCard tab="review"></ProfileCard>
            <ProfileCard tab="review"></ProfileCard>
            <ProfileCard tab="review"></ProfileCard>
            <ProfileCard tab="review"></ProfileCard>
            <ProfileCard tab="review"></ProfileCard>
        </div>
    )
}

function Connect() {
    return (
        <div className="w-full flex flex-col items-center p-4 pt-0">
            <ProfileCard tab="connect"></ProfileCard>
            <ProfileCard tab="connect"></ProfileCard>
            <ProfileCard tab="connect"></ProfileCard>
            <ProfileCard tab="connect"></ProfileCard>
            <ProfileCard tab="connect"></ProfileCard>
            <ProfileCard tab="connect"></ProfileCard>
        </div>
    )
}

function LikesTabs() {
    const [tab, setTab] = useState("review");

    function handleClick(newTab) {
        setTab(newTab);
    }

    return (
        <div className="w-full flex flex-col items-center p-4 pt-0">
            <div className="flex flex-col items-center sticky top-[4.25rem] z-10 bg-white mb-4">
                <hr className="w-[98vw] h-1 bg-black"/>
                <div className="flex">
                    <button onClick={() => handleClick("review")} className={`p-2 hover:bg-nav-yellow ${tab === "review" ? 'bg-nav-yellow' : ''}`}>
                        &nbsp;Review&nbsp;
                    </button>
                    <button onClick={() => handleClick("connect")} className={`p-2 hover:bg-nav-yellow ${tab === "connect" ? 'bg-nav-yellow' : ''}`}>
                        Connect
                    </button>
                </div>
            </div>
            {tab === "review" && <Review />}
            {tab === "connect" && <Connect />}
        </div>
    );
}

function Likes() {
    return (
        <div className="w-full flex flex-col items-center p-4 pt-0">
            <Navigation page="likes"></Navigation>
            <LikesTabs></LikesTabs>
        </div>
    )
}
  
export default Likes