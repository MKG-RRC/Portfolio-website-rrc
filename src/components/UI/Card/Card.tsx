import React from "react";
import "./Card.css";

interface CardProps {
  image?: string;
  title: string;
  description: string;
  tech?: string[];
  link?: string;
}

export const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  tech = [],
  link,
}) => {
  return (
    <div className="ui-card">
      {image && <img src={image} alt={title} className="ui-card-image" />}

      <div className="ui-card-body">
        <h3 className="ui-card-title">{title}</h3>
        <p className="ui-card-description">{description}</p>

        {tech.length > 0 && (
          <div className="ui-card-tags">
            {tech.map((item) => (
              <span key={item} className="ui-card-tag">
                {item}
              </span>
            ))}
          </div>
        )}

        {link && (
          <a
            href={link}
            className="ui-card-btn"
            target="_blank"
            rel="noreferrer"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
};
