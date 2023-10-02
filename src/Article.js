import React from "react";
import "./Article.css";
import Image from "./Image";
const ArticleSection = () => {
  return (
    <div className="Article">
      <h2 className="Feedback">What do you want to ask or share</h2>

      <label className="A1">Title</label>
      <input
        className="Title"
        type="text"
        placeholder="Enter a descriptive title."
      />
      <Image />
      <label>Abstract</label>
      <textarea placeholder="Enter a 1-paragraph Abstract" />

      <label>Article Text</label>
      <textarea placeholder="Enter a 1-paragraph Abstract" />

      <label>Tags</label>
      <input
        className="Tags"
        type="text"
        placeholder="Please add up to three tags to describe what your article is about, e.g., Java"
      />

      <button className="post">Post</button>
    </div>
  );
};

export default ArticleSection;
