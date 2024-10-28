import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Feed from "./components/Feed";
import PopUp from "./components/PopUp";
import WriteIcon from "./components/WriteIcon";

const App = () => {
  const [user, setUser] = useState(null);
  const [threads, setThreads] = useState(null);
  const [viewThreadsFeed, setViewThreadsFeed] = useState(true); // just a flag to toggle between threads and replies feed
  const [filteredThreads, setFilteredThreads] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const userId = "feda3a38-17ec-40a0-a9d1-05073088fba0";

  const getUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users?user_uuid=${userId}`);
      const data = await response.json();
      setUser(data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const getThreads = async () => {
    try {
      const response = await fetch(`http://localhost:3000/threads?thread_from=${userId}`);
      const data = await response.json();
      setThreads(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getThreadsFeed = () => {
    try {
      if (viewThreadsFeed) {
        // when in threads feed, only see threads that are not replies
        const standAloneThreads = threads.filter((thread) => thread.reply_to == null);
        setFilteredThreads(standAloneThreads);
      }
      if (!viewThreadsFeed) {
        // when in replies feed, only see threads that are replies
        const repliesThreads = threads.filter((thread) => thread.reply_to !== null);
        setFilteredThreads(repliesThreads);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
    getThreads();
  }, []);

  useEffect(() => {
    getThreadsFeed();
  }, [user, threads, viewThreadsFeed]);

  console.log(filteredThreads);

  return (
    <>
      {user && (
        <div className="app">
          <Nav url={user.instagram_url} />
          <Header
            user={user}
            viewThreadsFeed={viewThreadsFeed}
            setViewThreadsFeed={setViewThreadsFeed}
          />
          <Feed
            user={user}
            filteredThreads={filteredThreads}
            setOpenPopup={setOpenPopup}
          />
          {openPopup && <PopUp user={user} setOpenPopup={setOpenPopup} />}
          <div onClick={() => setOpenPopup(true)}>
            <WriteIcon />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
