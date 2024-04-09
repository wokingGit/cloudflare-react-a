import { Routes, Route } from "react-router-dom";

import Posts from "./components/posts";
import Post from "./components/post";

function App() {
  let url = "https://cloudflare-worker-a.woking.workers.dev/";
  // fetch(url)
  //   .then((response) => {
  //     console.log("******", response);
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .then((data) => console.log(data))
  //   .catch((error) =>
  //     console.error("There was a problem with the fetch operation:", error)
  //   );

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

  return (
    <div>
      <button onClick={cleckme}>点我..</button>
    </div>
    // <Routes>
    //   <Route path="/" element={<Posts />} />
    //   <Route path="/posts/:id" element={<Post />} />
    // </Routes>
  );
}

export default App;
