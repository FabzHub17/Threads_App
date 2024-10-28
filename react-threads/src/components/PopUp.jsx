import PopUpThread from "./PopUpThread";
import ThreadInput from "./ThreadInput";

const PopUp = ({ user, setOpenPopup }) => {
  return (
    <>
      <div className="popup">
        <p onClick={() => setOpenPopup(false)}>X</p>
        <PopUpThread />
        <ThreadInput />
      </div>
    </>
  );
};

export default PopUp;
