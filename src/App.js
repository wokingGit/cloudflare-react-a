import { Routes, Route } from "react-router-dom";

import Posts from "./components/posts";
import Post from "./components/post";

function App() {
  let url = "https://cloudflare-worker-a.woking.workers.dev/";
  fetch(url)
    .then((response) => {
      console.log("******",response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) =>
      console.error("There was a problem with the fetch operation:", error)
    );

  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/posts/:id" element={<Post />} />
    </Routes>
  );
}

export default App;
