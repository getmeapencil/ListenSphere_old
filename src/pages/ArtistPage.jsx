import React, { useContext } from 'react'

function ArtistPage() {
  const { token, logout } = useContext(AuthContext);
  return (
    <div>
        <h1>Artist Page</h1>
        {
            token && (
                <button onClick={logout}>Logout</button>
            ) 
        }
    </div>
  )
}

export default ArtistPage