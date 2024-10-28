/* eslint-disable react/prop-types */
import Thread from "./Thread";

const Feed = ({ user, filteredThreads, setOpenPopup }) => {
  return (
    <>
      <div className="feed">
        {filteredThreads?.map((filteredThread) => (
          <Thread
            key={filteredThread.id}
            user={user}
            filteredThread={filteredThread}
            setOpenPopup={setOpenPopup}
          />
        ))}
      </div>
    </>
  );
};

export default Feed;
