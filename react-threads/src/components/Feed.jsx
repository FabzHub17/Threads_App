/* eslint-disable react/prop-types */
import Thread from "./Thread";

const Feed = ({ user, filteredThreads, setOpenPopup, getThreads }) => {
  return (
    <>
      <div className="feed">
        {filteredThreads?.map((filteredThread) => (
          <Thread
            key={filteredThread.id}
            user={user}
            filteredThread={filteredThread}
            setOpenPopup={setOpenPopup}
            getThreads={getThreads}
          />
        ))}
      </div>
    </>
  );
};

export default Feed;
