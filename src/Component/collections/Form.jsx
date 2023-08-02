import Button from "../basics/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSongData, action } from "../../store/actions";

export const Form = () => {
  const dispatch = useDispatch();
  const [idSong, setIdSong] = useState("");
  const [isValidInput, setIsValidInput] = useState(false);

  const { songCounter } = useSelector((state) => state.reducer);
  const regex = /^[1-9]\d*$/;

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setIdSong(inputValue);
    inputValue < songCounter
      ? setIsValidInput(inputValue.match(regex))
      : setIsValidInput(false);
  };
  return (
    <div>
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
    </div>
  );
};
