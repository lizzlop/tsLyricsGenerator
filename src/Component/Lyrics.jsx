import "../styles/index.css";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export const Lyrics = () => {
  const { songData } = useSelector((state) => state.reducer);

  const { lyrics } = songData;
  const lines = lyrics?.split("\n");

  return (
    <div>
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
    </div>
  );
};
