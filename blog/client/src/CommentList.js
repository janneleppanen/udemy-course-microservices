import React from "react";
import axios from "axios";
import { render } from "react-dom";

const CommentList = ({ postId }) => {
  const [comments, setComments] = React.useState([]);

  const fetchComments = async () => {
    const res = await axios(`http://localhost:4001/posts/${postId}/comments`);
    setComments(res.data);
  };

  React.useEffect(() => {
    fetchComments();
  }, []);

  const renderedComments = comments.map((comment) => (
    <li key={comment.id}>{comment.content}</li>
  ));

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
