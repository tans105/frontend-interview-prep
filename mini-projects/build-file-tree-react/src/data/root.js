const explorer = {
  name: "/",
  children: [
    {
      name: "src",
      children: [
        { name: "script.js" },
        { name: "stylesheets.css" },
        { name: "index.html" },
      ],
    },
    { name: "package.json" },
    { name: "package-lock.json" },
    { name: "README.md" },
    { name: "node_modules", children: [] },
  ],
};

export default explorer;
