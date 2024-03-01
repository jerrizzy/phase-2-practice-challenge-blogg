import React, { useState } from "react";

function NewPostForm({blogList, setBlogList}) {
const [title, setTitle] = useState("")
const [author, setAuthor] = useState("")
const [article, setArticle] = useState("")

function handleSubmit(e) {
  e.preventDefault()
  let newPost = {title, author, article}
  setBlogList([...blogList, newPost])

  fetch("http://localhost:4000/blogs",{
    method: "POST",
    headers: {"content-type": "Application/json",},
    body: JSON.stringify(newPost),
  })

  .then((resp) => resp.json())
  .then((data) => setBlogList([...blogList, data]))

  setTitle("")
  setAuthor("")
  setArticle("")
}

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" value={title}></input>
        <input onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Author" value={author}></input>
        <textarea onChange={(e) => setArticle(e.target.value)} rows="10" cols="60" placeholder="Write your post" value={article}></textarea>
        <input
          className="submit-button"
          style={{ paddingBottom: "25px" }}
          type="submit"
        ></input>
      </form>
    </div>
  );
}

export default NewPostForm;
