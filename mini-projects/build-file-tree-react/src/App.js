import "./App.css";
import explorer from "./data/root";
import Folder from "./components/Folder";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Folder structures={explorer}></Folder>
      </div>
    </Fragment>
  );
}

export default App;
