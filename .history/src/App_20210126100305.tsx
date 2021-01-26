import React from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "50%",
    textAlign: "center",
    backgroundColor: "#EC1D23",
    color: "#ffffff",
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "bolder",
    lineHeight: "16px",
  },
});

interface Character {
  id: string;
  name: string;
  thumbnail: Thumbnail;
}

interface MarvelResponseData {
  results: Character[];
}

interface MarvelResponse {
  data: MarvelResponseData;
}

const defaultCharacters: Character[] = [];

const App: React.FC = () => {
  const classes = useStyles();

  const [characters, setCharacters]: [
    Character[],
    (characters: Character[]) => void
  ] = React.useState(defaultCharacters);

  React.useEffect(() => {
    axios
      .get<MarvelResponse>(
        "https://gateway.marvel.com:443/v1/public/characters?apikey=",
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 5000,
        }
      )
      .then((response) => {
        setCharacters(response.data.data.results);
      })
      .catch((ex) => {
        console.log("error: ", ex);
      });
  }, []);

  console.log(characters);

  return (
    <>
      <Typography variant="h1">MARVEL API</Typography>
      <ul className={classes.root}>
        {characters.map((character) => (
          <li key={character.id}>
            <h3>{character.name}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
