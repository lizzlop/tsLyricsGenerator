import "../../styles/index.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAlbums, getSongs } from "../../store/actions";
import { Header2 } from "../Header2";
import { Footer } from "../Footer";
import { Modal } from "../Modal";
import { Lyrics } from "../Lyrics";
import { Image } from "../Image";
import { Form } from "../collections/Form";

const TsPage = () => {
  const dispatch = useDispatch();
  const [idSong, setIdSong] = useState(""); //Debo enviarlo?
  const [isValidInput, setIsValidInput] = useState(false);

  const { errors } = useSelector((state) => state.reducer);

  useEffect(() => {
    dispatch(getAlbums());
    dispatch(getSongs());
    setIsValidInput(true);
  }, []);

  return (
    <>
      <Header2 setIdSong={setIdSong} />
      <div className="card">
        <Form />
        <Image />
      </div>
      <Lyrics />
      {errors && <Modal errors={errors} />}
      <Footer />
    </>
  );
};

export default TsPage;
