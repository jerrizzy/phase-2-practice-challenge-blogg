import logo from "./logo.svg";
import "./App.css";
import BlogPostContainer from "./BlogPostContainer";
import NewPostForm from "./NewPostForm";
import Header from "./Header";
import { useState, useEffect } from "react";

function App() {

  const [blogList, setBlogList] = useState([])
  const [isHidden, setIsHidden] = useState(true)
  const [search, setSearch] = useState("")


  useEffect(() => {
    fetch("http://localhost:4000/blogs")
    .then((resp) => resp.json())
    .then((data) => setBlogList(data))
  }, [])

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch}></Header>

      <button onClick={() => setIsHidden(!isHidden)} className="show-form">{isHidden ? "Show Form" : "Hide Form"}</button>
      {/* Condionally hide/unhide form on button click */}
      {isHidden ? null : <NewPostForm blogList={blogList} setBlogList={setBlogList}></NewPostForm>}

      <BlogPostContainer search={search} blogList={blogList}></BlogPostContainer>
    </div>
  );
}

export default App;
