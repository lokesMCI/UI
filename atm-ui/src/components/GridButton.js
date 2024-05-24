import React from "react";
import "./GridButton.css";

const GridButton = ({
  type,
  title,
  description,
  additional,
  isImage,
  children,
}) => {
  return (
    <button
      className={`grid-button ${type}`}
      onClick={() => alert(`${title || "Button"} clicked!`)}
    >
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
