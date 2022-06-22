import { Track } from "../types/Music"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Song from "./Song";




const Album = () => {
   const params = useParams();
    const [musicTrack, setMusicTracks] = useState<Track[]>([]);
    
    const fetchData = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/track/${params.id}`);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setMusicTracks(data);
            }
               
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , [])


    
    return (
        <div className="album">
            <div className="album__tracks">
                {musicTrack.map(track => (
                    <Song key={track.id} track={track} />
                ))}
            </div>
        </div>

       
    )
}
export default Album