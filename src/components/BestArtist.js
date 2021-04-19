import React, { useEffect, useState } from "react";
import "../assets/style/style.css";
import { useHistory } from "react-router-dom";

export default function BestArtist({users}) {
  const history = useHistory()
  const [artists, setArtist] = useState([])
  useEffect(() => {
    if(users) {
      const dataUsers = [...users]
      dataUsers.sort(function (a, b) {
        return b.arts.length - a.arts.length
      })
      setArtist(dataUsers)
    }
  }, [users])
  return (
    <div className="mt-content">
      <h3 className="font-weight-bold">The Best Artist</h3>
      <div className="row mt-5 justify-content-between">
        {
          artists.map((artist, index) => {
            return (
              index < 4 ? 
              <div key={artist._id} className="col-3 px-0">
                <div className="mx-auto d-flex justify-content-center">
                  <img
                    onClick={() => history.push('/profile/' + artist._id)}
                    src="https://images.pexels.com/photos/1441151/pexels-photo-1441151.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    className="rounded-circle img-artist "
                    alt=""
                  />
                </div>
                <h5 className="text-center mt-4">{artist.username}</h5>
              </div>:''
            )
          })
        }        
      </div>
    </div>
  );
}
