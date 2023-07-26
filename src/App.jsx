import { useDispatch, useSelector } from "react-redux";
import "./styles/index.css";
import { getAlbums, getSongs, getLyrics } from "./store/actions";
import { Button } from "./Component/basics/Button";
import { useState, useEffect } from "react";
import { Header2 } from "./Component/Header2";
import { albumDictionary } from "./utils/albumDictionary";

function App() {
  const dispatch = useDispatch();
  const [idSong, setIdSong] = useState();
  const { songCounter, songData } = useSelector((state) => state.reducer);
  const { lyrics, title, album_id } = songData;
  const imageUrl = albumDictionary[album_id];

  useEffect(() => {
    dispatch(getAlbums());
    dispatch(getSongs());
  }, []);

  return (
    <>
      <Header2 />
      <div className="card">
        <div>
          <p>El total del canciones son: {songCounter} </p>
          <p>Ingresa un id para obtener la letra:</p>
          <input
            style={{ width: "20rem", height: "2rem", borderRadius: "5px" }}
            onChange={(event) => {
              setIdSong(event.target.value);
            }}></input>
          <Button
            onButtonClick={() => dispatch(getLyrics(idSong))}
            isActive={idSong}>
            Buscar
          </Button>
        </div>

        {!songData ? (
          ""
        ) : (
          <div>
            <p>Seleccionaste: {title} </p>
            <img
              alt=""
              src={imageUrl}
              style={{ width: "250px", height: "250px" }}
            />
          </div>
        )}
      </div>

      {songData ? (
        <p className="read-the-docs">{lyrics}</p>
      ) : (
        <p className="read-the-docs">Aún no has buscado una canción</p>
      )}
    </>
  );
}

export default App;
