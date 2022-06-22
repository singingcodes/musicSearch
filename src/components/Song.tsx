import { Track } from "../types/Track";
import {Card, Col} from "react-bootstrap";
interface TrackProps {
    track: Track;
}
const Song = ({ track }: TrackProps) => 
(
   <Col >
    <Card>
        <Card.Img variant="top" src={track.picture_medium} />
        <Card.Body>
            <Card.Title>{track.name}</Card.Title>
            <Card.Text>{track.id}</Card.Text>
        </Card.Body>
    </Card>
    </Col>
  );
  
  export default Song;