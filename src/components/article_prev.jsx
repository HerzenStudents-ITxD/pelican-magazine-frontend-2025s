import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Article_preview = ({ title, author, image, isLiked: initialIsLiked = false }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(initialIsLiked);

  const handleLikeClick = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <Card 
      style={{ 
        width: "100%",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        transition: "transform 0.2s, box-shadow 0.2s",
        marginBottom: "20px",
        cursor: "pointer"
      }}
      onClick={() => navigate("/readart")}
    >
      <Card.Img 
        variant="top" 
        src={`/pelican-magazine/${image}`} 
        style={{
          height: "100px",
          objectFit: "cover",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px"
        }}
      />
      <Card.Body style={{ padding: "10px" }}>
        <div style={{
          fontSize: "13px",
          fontWeight: "500",
          marginBottom: "6px",
          color: "#333",
          height: "36px",
          overflow: "hidden",
          lineHeight: "18px", // Фиксированный межстрочный интервал
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          textOverflow: "ellipsis"
        }}>
          {title}
        </div>
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <span style={{ fontSize: "11px", color: "#666" }}>{author}</span>
          <button 
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0
            }}
            onClick={handleLikeClick}
          >
            <img 
              src={isLiked ? "/pelican-magazine/hearth2.jpg" : "/pelican-magazine/hearth.jpg"} 
              alt="Лайк" 
              style={{ width: "16px", height: "16px" }}
            />
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Article_preview;