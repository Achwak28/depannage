import React from "react";

interface ReviewProps {
  title: string;
  content: string;
  picture: string;
  name: string;
  role: string;
}

const Review: React.FC<ReviewProps> = ({ title, content, picture, name, role }) => {
  return (
    <div className="review__container">
      <div className="review__container-content">
        <p className="review__title">{title}</p>
        <p className="review__content">{content}</p>
      </div>
      <div className="review__user-info">
        <img src={picture} alt="user photo" />
        <p className="review__user-name">{name}</p>
        <p className="review__user-position">{role}</p>
      </div>
    </div>
  );
};

export default Review;
