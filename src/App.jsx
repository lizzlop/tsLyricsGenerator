import "./styles/index.css";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import { getAlbums, getSongs, getLyrics } from "./store/actions";
import { Button } from "./Component/basics/Button";
import { Header2 } from "./Component/Header2";
import { albumDictionary } from "./utils/albumDictionary";
import { Footer } from "./Component/Footer";

function App() {
  const dispatch = useDispatch();
  const [idSong, setIdSong] = useState("");
  const [isValidInput, setIsValidInput] = useState(false);
  const { songCounter, songData } = useSelector((state) => state.reducer);

  const { lyrics, title, album_id } = songData;
  const imageUrl = albumDictionary[album_id];
  const lines = lyrics?.split("\n");
  const regex = /^(1[0-7][0-7]?|[1-9][0-9]?)$/;

  useEffect(() => {
    dispatch(getAlbums());
    dispatch(getSongs());
    setIsValidInput(true);
  }, []);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setIdSong(inputValue);
    setIsValidInput(inputValue.match(regex));
  };

  return (
    <>
      <Header2 setIdSong={setIdSong} />
      <div className="card">
        <div>
          <p>Total of songs: {songCounter} </p>
          <p>Enter a number to get lyrics:</p>
          <input
            className="input"
            value={idSong}
            onChange={(event) => handleInputChange(event)}></input>
          {!isValidInput && idSong ? (
            <p className="error">Please enter a valid value</p>
          ) : (
            ""
          )}
          <Button
            onButtonClick={() => dispatch(getLyrics(idSong))}
            isActive={isValidInput && idSong}>
            Search
          </Button>
        </div>

        {!songData ? (
          ""
        ) : (
          <div>
            <p>You selected: {title} </p>
            <img
              alt=""
              src={imageUrl}
              style={{ width: "250px", height: "250px" }}
            />
          </div>
        )}
      </div>

      {songData ? (
        <p className="lyrics">
          {lines.map((line) => (
            <span key={uuidv4()}>
              {line}
              <br />
            </span>
          ))}
          <br />
        </p>
      ) : (
        <p className="lyrics">You haven't search for a song yet</p>
      )}
      <Footer />
    </>
  );
}

export default App;
