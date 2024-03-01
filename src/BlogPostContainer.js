import React from "react";
import BlogPost from "./BlogPost";

function BlogPostContainer({ blogList, search}) {

  const searchResults = blogList.filter((blog) => {
    return blog.title.toLowerCase().includes(search.toLowerCase()) || blog.author.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="blog-container">
      {/* {RENDER THE BLOGPOST CARDS HERE} */}

      {searchResults.map(blog => <BlogPost key={blog.id} blog={blog}/> )}
    </div>
  );
}

export default BlogPostContainer;
