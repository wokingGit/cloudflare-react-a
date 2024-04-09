// import { Routes, Route } from "react-router-dom";

// import Posts from "./components/posts";
// import Post from "./components/post";

function App() {
  const cleckme = () => {
    console.log(1111);
    fetch("/api")
      .then((data) => {
        console.log(data);
        return data.text();
      })
      .then((res) => {
        console.log(res);
      });
  };
  const click222 = () => {
    // https://cloudflare-worker-a.woking.workers.dev/
    const api = "https://cloudflare-worker-a.woking.workers.dev/";
    fetch(api)
      .then((data) => {
        console.log(data);
        return data.text();
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <button onClick={cleckme}>点我..</button>
      <button onClick={click222}>点我22222</button>
    </div>
    // <Routes>
    //   <Route path="/" element={<Posts />} />
    //   <Route path="/posts/:id" element={<Post />} />
    // </Routes>
  );
}

export default App;
