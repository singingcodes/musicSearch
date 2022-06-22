import { ChangeEvent, FormEvent, useState } from 'react'
import { Row, Container, Form } from 'react-bootstrap'
import { Music } from '../types/Music';
import MusicResult from './MusicResult';
const MainSearch = () => {
    const [search, setSearch] = useState("");
    const [songs, setSongs] = useState<Music[]>([]);

    const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const handleSubmit = async (e: FormEvent) => {
        
     try {
        e.preventDefault();
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`);
        if (response.ok) {
            const data = await response.json();
            let music = data.data
            setSongs(music);
          
        }

        
     } catch (error) {
            console.log(error);
        
     }
    }

    return (
        <Container>
            <Row className='my-3'>
        <Form onSubmit={handleSubmit}>
        <div className="main-search">
        <div className="main-search__input-wrapper">
            <Form.Control
            className="main-search__input"
            type="text"
            placeholder="Search for a song, artist, or album" 
            value={search}
            onChange={handleSearch}

            />
        </div>
        </div>
        </Form>
        </Row>
        <Row>

     
        {songs.map(song => (
            <MusicResult key={song.id} song={song} />
        ))}
        
        </Row>
        </Container>
    )


        
  
}
export default MainSearch;