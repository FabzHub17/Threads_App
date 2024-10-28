/* eslint-disable react/prop-types */
const Header = ({ user, viewThreadsFeed, setViewThreadsFeed }) => {
  return (
    <>
      <header className="header">
        <div className="info_container">
          <div className="info_container-user">
            <h1>{user.user_name}</h1>
            <p>
              {user.handle} <span className="info_threads">threads.net</span>
            </p>
          </div>
          <div className="img_container">
            <img src={user.img} alt="profile avatar" />
          </div>
        </div>
        <p>{user.bio}</p>
        <div className="info_container-sub">
          <p className="sub-text">
            {user.followers.length} followers • <a href={user.link}>{user.link}</a>
          </p>
        </div>
        <button
          className="primary"
          onClick={() => navigator.clipboard.writeText("I am a URL")} //onclick copies to the clipboard the value.
        >
          Share Profile
        </button>
        <div className="button_container">
          <button
            className={viewThreadsFeed ? "current" : null}
            onClick={() => setViewThreadsFeed(true)}
          >
            Threads
          </button>
          <button
            className={!viewThreadsFeed ? "current" : null}
            onClick={() => setViewThreadsFeed(false)}
          >
            Replies
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
