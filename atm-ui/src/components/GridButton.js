import React from "react";
import { useNavigate } from "react-router-dom";
import "./GridButton.css";

const GridButton = ({
  type,
  title,
  description,
  additional,
  isImage,
  route,
  children,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (route) {
      navigate(route);
    } else {
      alert(`${title || "Button"} clicked!`);
    }
  };

  return (
    <button className={`grid-button ${type}`} onClick={handleClick}>
      {isImage ? (
        children
      ) : (
        <>
          {title && <p className="title">{title}</p>}
          {description && <p className="description">{description}</p>}
          {additional && (
            <p
              className="additional"
              dangerouslySetInnerHTML={{ __html: additional }}
            />
          )}
        </>
      )}
    </button>
  );
};

export default GridButton;
