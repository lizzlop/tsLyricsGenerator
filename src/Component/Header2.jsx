import "../styles/index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  resetCounter,
  setUpdateCounter,
  getAlbums,
  getSongs,
} from "../store/actions";
import Button from "./basics/Button";

export const Header2 = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="header">
        <h1 className="h1">Lyrics Generator</h1>
        <div style={{ display: "flex", gap: 15 }}>
          <Button
            onButtonClick={() => {
              dispatch(getAlbums());
              dispatch(getSongs());
            }}>
            Save albums
          </Button>
          <Button onButtonClick={() => dispatch(resetCounter())}>Reset</Button>
        </div>
      </div>
    </>
  );
};
