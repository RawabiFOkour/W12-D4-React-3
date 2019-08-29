import React from "react";

const Practice2 = () => {
  /*
    1. Create post object with an id and title
  */
  const post = {
    id:1,
    title:"Rawabi Okour"
  };
  return (
    <div className="practice">
      {/* 
        2. Call the Post component below
        3. Pass in the post object as a prop
      */}
      <Post id={post.id} title={post.title}/>
    </div>
  );
};

/*
  4. Make the Post component accept props
  5. Have Post component rendr the post title and ID to the page
*/
const Post = (props) => {
  return <p>{`Render post title:       ${props.title}   and id here :     ${props.id}`}</p>;
};

export default Practice2;
