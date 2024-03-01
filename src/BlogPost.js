import React, { useState } from "react";

function BlogPost({ blog }) {

  const [isRead, setIsRead] = useState(blog.isRead)

  function handleClick(){
    fetch("http://localhost:4000/blogs/"+ blog.id, {
    method: "PATCH",
    headers: {"content-type" : "Application/json",},
    body: JSON.stringify({isRead: !isRead}),
  })

  .then((resp) => resp.json())
  .then((data) => setIsRead(data.isRead))
  }

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="head">
          <h3>{blog.title}</h3>
          <button onClick={handleClick} className="read-button">{isRead ? "Read" : "Unread"}</button>
          {/* Conditionally change the button text on click from Read to Unread and vice-versa */}
        </div>
        <p>Author: {blog.author}</p>
      </div>

      <p>
        Cat ipsum dolor sit amet, pet me pet me don't pet me jump launch to
        pounce upon little yarn mouse, bare fangs at toy run hide in litter box
        until treats are fed no, you can't close the door, i haven't decided
        whether or not i wanna go out. Fall over dead (not really but gets
        sypathy) pretend you want to go out but then don't for fall asleep on
        the washing machine yet i want to go outside let me go outside nevermind
        inside is better yet kitten is playing with dead mouse. Go crazy with
        excitement when plates are clanked together signalling the arrival of
        cat food leave fur on owners clothes. Attack curtains. Leave fur on
        owners clothes try to hold own back foot to clean it but foot
        reflexively kicks you in face, go into a rage and bite own foot, hard
        ask to go outside and ask to come inside and ask to go outside and ask
        to come inside. Weigh eight pounds but take up a full-size bed bird bird
        bird bird bird bird human why take bird out i could have eaten that, yet
        give attitude nyaa nyaa.
        {/* Replace this with the article*/}
      </p>
    </div>
  );
}

export default BlogPost;
