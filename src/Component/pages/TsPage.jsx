import "../../styles/index.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import { getAlbums, getSongs, getSongData, action } from "../../store/actions";
import { Button } from "../basics/Button";
import { Header2 } from "../Header2";
import { albumDictionary } from "../../utils/albumDictionary";
import { Footer } from "../Footer";
import { Modal } from "../Modal";

const TsPage = () => {
  const dispatch = useDispatch();
  const [idSong, setIdSong] = useState("");
  const [isValidInput, setIsValidInput] = useState(false);

  const { songCounter, songData, errors } = useSelector(
    (state) => state.reducer
  );

  const { lyrics, title, album_id } = songData;
  const imageUrl = albumDictionary[album_id];
  const lines = lyrics?.split("\n");
  const regex = /^[1-9]\d*$/;

  useEffect(() => {
    dispatch(getAlbums());
    dispatch(getSongs());
    setIsValidInput(true);
  }, []);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setIdSong(inputValue);
    inputValue < songCounter
      ? setIsValidInput(inputValue.match(regex))
      : setIsValidInput(false);
  };

  return (
    <>
      <Header2 setIdSong={setIdSong} />
      <div className="card">
        <div>
          <p>Total of songs: {songCounter} </p>
          <p>Enter a number to get lyrics:</p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(action("errors", null));
              dispatch(getSongData(idSong));
            }}>
            <input
              className="input"
              value={idSong}
              onChange={(event) => handleInputChange(event)}></input>
            {!isValidInput && idSong ? (
              <p className="error">Please enter a valid value</p>
            ) : (
              ""
            )}
            <Button disabled={isValidInput && idSong} type="submit">
              Search
            </Button>
          </form>
        </div>

        {!songData ? (
          ""
        ) : (
          <div>
            <p>You selected: </p>
            <p>{title} </p>
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

      {errors && <Modal errors={errors} />}

      <Footer />
    </>
  );
};

export default TsPage;
