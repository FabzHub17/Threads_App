const Header = () => {
  return (
    <>
      <header className="header">
        <div className="info_container">
          <div className="info_container-user">
            <h1>username</h1>
            <p>
              handle <span className="info_threads">threads.net</span>
            </p>
          </div>
          <div className="img_container">
            <img src="" alt="profile avatar" />
          </div>
        </div>
        <p>bio</p>
        <div className="info_container-sub">
          <p className="sub-text">
            X followers • <a href="#">link</a>
          </p>
        </div>
        <button
          className="primary"
          onClick={() => navigator.clipboard.writeText("I am a URL")} //onclick copies to the clipboard the value.
        >
          Share Profile
        </button>
        <div className="button_container">
          <button>Threads</button>
          <button>Replies</button>
        </div>
      </header>
    </>
  );
};

export default Header;
