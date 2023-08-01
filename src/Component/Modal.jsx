import { useDispatch } from "react-redux";
import { action } from "../store/actions";
import "../styles/modal.css";

export const Modal = ({ errors }) => {
  const dispatch = useDispatch();
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              dispatch(action("errors", null));
            }}>
            X
          </button>
        </div>

        <div className="body">
          <p>{errors.message}</p>
          <p style={{ fontSize: "0.5rem" }}>Error code: {errors.code}</p>
        </div>
        <div className="footerModal">
          <button
            onClick={() => {
              dispatch(action("errors", null));
            }}
            id="cancelBtn">
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};
