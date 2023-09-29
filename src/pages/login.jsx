import {useEffect, useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function Login() {

    const [token, setToken] = useState("")
    const [topTracks, setTopTracks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token);

        console.log(token);

        if (!token) {
          return; // Don't make the API call without a token
        }

        // Define your Spotify API endpoint for getting top tracks
        const apiEndpoint = 'https://api.spotify.com/v1/me/top/tracks';
    
        axios.get(apiEndpoint, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then(response => {
          setTopTracks(response.data.items);
        })
        .catch(err => {
          setError(err.message);
        });
    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const renderTracks = () => {
        return (
          <div>
            <button onClick={logout}>Logout</button>
            <h2>Most Listened Tracks</h2>
            {error && <p>{error}</p>}
            <ul>
              {topTracks.map((track, index) => (
                <li key={index}>
                  {track.name} by {track.artists.map(artist => artist.name).join(', ')}
                </li>
              ))}
            </ul>
          </div>
        );
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Spotify React</h1>
                {!token ?
                    <button >
                      <Link to="/">
                        Login to Spotify
                      </Link>
                    </button>
                    : renderTracks()}
            </header>
        </div>
    );
}

export default Login;
