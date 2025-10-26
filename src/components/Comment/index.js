import React, { useState } from "react";
import cn from "classnames";
import styles from "./Comment.module.sass";
import Form from "./Form";
import List from "./List";

const Comment = ({ className, parametersUser, socials, info, buttonText }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
  };

  return (
    <div className={cn(className, styles.section)}>
      <Form
        className={styles.form}
        value={comment}
        setValue={setComment}
        onSubmit={() => handleSubmit()}
      />
      <List />
    </div>
  );
};

export default Comment;
