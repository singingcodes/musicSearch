import { Track } from "../types/Music"
interface TrackProps {
    track: Track;
}
const Song = ({ track }: TrackProps) => (
    <div className="py-3 trackHover">
      <span className="card-title trackHover px-3" style={{ color: "white" }}>
        {track.title}
      </span>
      <small className="duration" style={{ color: "white" }}>
        {track.duration}
      </small>
    </div>
  );
  
  export default Song;