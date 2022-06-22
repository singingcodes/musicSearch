
import { useState, useEffect } from "react";
import { ListGroup, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {Track } from "../types/Track";
import Song from "./Song";



const Album = () => {
   const params = useParams();
    const [musicTrack, setMusicTracks] = useState<Track | null>(null);
    
    const fetchData = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/track/${params.id}`);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                console.log(data.artist);
                setMusicTracks(data.artist);
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
        <Container>
            <Row className="text-center">
                <h1>{musicTrack?.name}</h1>
            </Row>
            <Row className="text-center">
      <ListGroup>
        {musicTrack && (
            <Song track={musicTrack} />
        )}
      </ListGroup>
    </Row>
       
      </Container>

       
    )
}
export default Album