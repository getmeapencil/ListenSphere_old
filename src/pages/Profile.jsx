import { useContext, useEffect, useState } from "react";
import Navigation from "../components/Navigation"
import ProfileCard from "../components/ProfileCard"
import SongCard from "../components/SongCard"
import AuthContext from "../components/authContext";
import { useNavigate } from "react-router";
import axios from "axios";

function Profile() {
    const {token}= useContext(AuthContext);
    const navigate = useNavigate();
    const [tracks,setTracks]= useState([])

    useEffect(()=>{
        if(!token){
            navigate("/")
        }
        try{
            goGet5TopTracks(token).then((data)=>{
                setTracks(data)
            })
        }catch(error){
            console.log(error)
        }
    },[])


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
                        tracks.map((track,index)=>{
                            return <SongCard key={index} track={track}></SongCard>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
  
export default Profile


async function goGet5TopTracks(token){
    let config={
        method:"GET",
        headers:{
            "Authorization":"Bearer "+token
        }
    }
    // use axios to get top tracks
    let response = await axios.get("http://localhost:8888/user/topTracks",config)
    return response.data
}