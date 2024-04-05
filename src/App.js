import logo from "./logo.svg";
import "./App.css";

function App() {
  async function onRequestGet(context) {
    return context.env.SERVICE.fetch(context.request);
  }

  const learnlick = async () => {
    let res = await onRequestGet();
    console.log("🍌", res);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div onClick={learnlick}>Learn React</div>
      </header>
    </div>
  );
}

export default App;
