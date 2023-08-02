import "../styles/index.css";
import { useSelector } from "react-redux";
import { albumDictionary } from "../utils/albumDictionary";

export const Image = () => {
  const { songData } = useSelector((state) => state.reducer);

  const { title, album_id } = songData;
  const imageUrl = albumDictionary[album_id];

  return (
    <>
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
    </>
  );
};
