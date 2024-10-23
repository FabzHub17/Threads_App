import Nav from "./components/Nav";
import Header from "./components/Header";
import Feed from "./components/Feed";
import PopUp from "./components/PopUp";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="app">
        <Nav />
        <Header />
        <Feed />
        <PopUp />
      </div>
    </>
  );
};

export default App;
