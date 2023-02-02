import "./App.css";

const myDebounce = (cb, delay) => {
  let timer;
  return (args) => {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      cb(args)
    }, delay)
  }
}

const handleChangeEvent = myDebounce((event) => {
  console.log(event.target.value);
}, 1000);

function App() {
  return (
    <div className="App">
      <input type="text" onChange={handleChangeEvent}/>
    </div>
  );
}

export default App;
