import { useContext, useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import ProfileCard from "../components/ProfileCard";
import SongCard from "../components/SongCard";
import AuthContext from "../components/authContext";
import { useNavigate } from "react-router";
import axios from "axios";

function Profile() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [tracks, setTracks] = useState([]);
  const [userData, setUserData] = useState({}); 
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      try {
        console.log(token);

        goGet5TopTracks(token).then((data) => {
          if (data?.message === "error") {
            console.log(data?.error);
          } else {
            setTracks(data?.data);
          }
          setLoading(false);
        });
        Promise.all([goGet5TopTracks(token),goGetUserDetail(token)]).then((data) => {
          if (data[0]?.message === "error") {
            console.log(data[0]?.error);
          } 
          else {
            setTracks(data[0]?.data);
          }
          if (data[1]?.message === "error") {
            console.log(data[1]?.error);
          }
          else {
            setUserData(data[1]?.data);

          }
          setLoading(false);
        });


      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  }, [token]);


  return (
    <div className="w-full flex flex-col items-center p-4 pt-0">
      {tracks.length === 0 ? (
        <>
          {loading ? (
            <div className="flex items-center justify-center h-96">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : (
            <div className="w-[90vw] sm:max-w-[38rem]">
              <div className="w-fit border-b-2 border-black font-bold">
                Top Tracks
              </div>
              <div>
                <p className="text-center">No tracks found</p>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <Navigation page="profile"></Navigation>
          <ProfileCard tab="userProfile"  data={userData}></ProfileCard>
          <div className="w-[90vw] sm:max-w-[38rem]">
            <div className="w-fit border-b-2 border-black font-bold">
              Top Tracks
            </div>
            <div>
              {tracks.map((track, index) => {
                return (
                  <SongCard key={index} index={index} track={track}></SongCard>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;

async function goGet5TopTracks(token) {
  let config = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  // use axios to get top tracks
  let response = await axios.get(
    "http://localhost:8888/user/topTracks",
    config
  );
  return response.data;
}


async function goGetUserDetail(token) {
  let config = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  // use axios to get top tracks
  let response = await axios.get(
    "http://localhost:8888/user",
    config
  );
  return response.data;
}
