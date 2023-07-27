import "../styles/index.css";
import { useDispatch } from "react-redux";
import { reset, getAlbums, getSongs } from "../store/actions";
import Button from "./basics/Button";

export const Header2 = ({ setIdSong }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="header">
        <h1 className="h1">Lyrics Generator</h1>
        <div className="header-buttons">
          <Button
            onButtonClick={() => {
              dispatch(getAlbums());
              dispatch(getSongs());
            }}>
            Save albums
          </Button>
          <Button
            onButtonClick={() => {
              dispatch(reset());
              setIdSong("");
            }}>
            Reset
          </Button>
        </div>
      </div>
    </>
  );
};
