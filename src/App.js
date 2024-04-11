// import { Routes, Route } from "react-router-dom";

// import Posts from "./components/posts";
// import Post from "./components/post";

function App() {
  const cleckme = () => {
    // const formData = {
    //   job: "程序员",
    //   color: "pink",
    // };
    // fetch("/api", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json", // 如果发送JSON数据
    //     // 或者如果是表单数据：
    //     // 'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((data) => {
    //     console.log(data);
    //     return data.text();
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });

    fetch("/api/getData")
      .then((data) => {
        return data.text();
      })
      .then((res) => {
        console.log("res", res);
      });
  };

  const baseApi = "https://cloudflare-worker-a.woking.workers.dev";

  const clickGetData = () => {
    fetch(baseApi + "/getData")
      .then((data) => {
        return data.text();
      })
      .then((res) => {
        console.log(res);
      });
  };
  const clickEditData = () => {
    const formData = { name: "订单流交易", type: "book" };
    fetch(baseApi + "/editData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // 如果发送JSON数据
        // 或者如果是表单数据：
        // 'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(formData),
    })
      .then((data) => {
        return data.text();
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <button onClick={cleckme}>点我..</button>
      <button onClick={clickGetData}>获取data</button>
      <button onClick={clickEditData}>编辑data</button>
    </div>
    // <Routes>
    //   <Route path="/" element={<Posts />} />
    //   <Route path="/posts/:id" element={<Post />} />
    // </Routes>
  );
}

export default App;
