import { useState, Fragment } from "react";

function Folder({ structures: explorer }) {
  const [expand, setExpand] = useState(false);

  const showChildren = (children) => {
    const str = [];

    if (children) {
      children.forEach((child) => {
        if (child.children) {
          str.push(<Folder structures={child}></Folder>);
        } else {
          str.push(<div className="item">{child.name}</div>);
        }
      });
    }

    return str;
  };

  return (
    <Fragment>
      <div className="item" onClick={() => setExpand(!expand)}>
        {explorer.name}{" "}
      </div>
      <div style={{ display: expand ? "block" : "none" }}>
        {showChildren(explorer.children)}
      </div>
    </Fragment>
  );
}

export default Folder;
