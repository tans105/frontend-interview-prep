window.onload = async () => {
  console.log("Page loaded");
  const node = document.getElementById("file-structure");

  const parseFolder = (folder, parentDiv, level) => {
    if (folder == null) return;

    for (const [key, value] of Object.entries(folder)) {
      const ele = document.createElement("div");
      ele.innerHTML = `${folder.name}`;
      ele.style.marginLeft = `${level + 5}px`;
      parentDiv.append(ele);

      if (folder.children && folder.children.length > 0) {
        console.log(folder);
        folder.children.forEach((child) => {
          parseFolder(child, ele, level + 1);
        });
      }
    }
  };

  const structure = await fetch("./root.json").then((res) => res.json());
  parseFolder(structure, node, 0);
};
