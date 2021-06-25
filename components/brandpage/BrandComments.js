import React from "react";
import classes from "./BrandComments.module.css";
import { CornerDownLeft } from "react-feather";
import { useState } from "react";

//This component takes in an array of objects of {name:'',comment''}
const CommentsDisplay = ({ commentObject }) => {
  return (
    <div className={classes.comment}>
      {commentObject.map(function (Comment, index) {
        return (
          <p key={index}>
            <span className={`paragraph-semibold`}>{Comment.name}: </span>
            <span className={`paragraph-regular`}>{Comment.comment}</span>
          </p>
        );
      })}
    </div>
  );
};

const CommentInput = (props) => {
  const [CommentValue, setCommentValue] = useState("");
  //Handler for the submit comment event which calls the parent's AppendComment function
  const Submit = () =>
    props.onSubmit({ name: "Chiayu", comment: CommentValue });
  const ChangeCommentValue = (e) => setCommentValue(e.target.value);
  return (
    <div className={classes.FormBox}>
      <input
        type="text"
        placeholder="   Enter a Comment..."
        className={classes.CommentBox}
        onChange={ChangeCommentValue}
        value={CommentValue}
      />
      <button className={classes.IconContainer} onClick={Submit}>
        <CornerDownLeft />
      </button>
    </div>
  );
};

const Comments = ({ comments, id }) => {
  const [commentList, setCommentList] = useState(comments);

  const AppendComment = (Comment_obj) => {
    const body = {
      id: id,
      name: Comment_obj.name,
      comment: Comment_obj.comment,
    };
    fetch("/api/update_comment", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data.message));
    setCommentList([...commentList, Comment_obj]);
  };
  return (
    <div className={classes.CommentContainer}>
      <CommentsDisplay commentObject={commentList} />
      <CommentInput onSubmit={AppendComment} />
    </div>
  );
};
export default Comments;
