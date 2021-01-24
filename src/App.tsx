import React from 'react';
import axios from 'axios';

interface Thumbnail {
    path: string;
    extension: string;
}

interface Character {
    id: string;
    name: string;
    thumbnail: Thumbnail;
}

interface MarvelResponseData {
  results: Character[];
};

interface MarvelResponse {
  data: MarvelResponseData
}

const defaultCharacters: Character[] = [];

const App: React.FC = () => {

    const [characters, setCharacters]: [Character[], (characters: Character[]) => void] = React.useState(defaultCharacters)

    React.useEffect(() => {

        axios.get<MarvelResponse>('https://gateway.marvel.com:443/v1/public/characters?apikey=', {
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 5000,
        })
        .then((response) => {
          setCharacters(response.data.data.results)
        })
        .catch((ex) =>{
            console.log('error: ', ex)
        })

    }, [])

    console.log(characters)

    return (
        <>
          <ul>
              {characters.map((character) =>(
                  <li key={character.id}>
                      <h3>{character.name}</h3>
                  </li>
              ))}
          </ul>
        </>
    )

}

export default App;