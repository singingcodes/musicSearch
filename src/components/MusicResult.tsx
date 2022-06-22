import { Music } from "../types/Music";
import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

interface MusicResultProps {
    song: Music;
}

const MusicResult = ({song}: MusicResultProps) => {
    return (
        <Col sm={3} className="mb-2">
        <Card >
  <Card.Img variant="top" src={song.album.cover_medium} />
  <Card.Body>
    <Card.Title>{song.title}</Card.Title>
    <Link to={`/music/${song.id}`}>
    <Card.Text>{song.artist.name}</Card.Text>
    </Link>
   
    
  </Card.Body>
</Card>
        </Col>
    );
    }

    export default MusicResult;