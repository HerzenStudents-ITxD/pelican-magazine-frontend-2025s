import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Article_preview = ({ title, author, image, isLiked: initialIsLiked = false, isGuest = false }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLikeClick = (e) => {
    e.stopPropagation();
    
    if (isGuest) {
      setShowLoginModal(true);
    } else {
      setIsLiked(!isLiked);
    }
  };

  const handleClose = () => setShowLoginModal(false);
  const handleLogin = () => {
    handleClose();
    navigate("/signin");
  };

  return (
    <>
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
            lineHeight: "18px",
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

      {/* Модальное окно для гостей */}
      <Modal show={showLoginModal} onHide={handleClose} centered>
        <Modal.Header closeButton style={{ borderBottom: 'none' }}>
          <Modal.Title style={{ color: '#003896' }}>Требуется вход</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ color: '#333' }}>Чтобы поставить лайк, пожалуйста, войдите в систему.</p>
        </Modal.Body>
        <Modal.Footer style={{ borderTop: 'none' }}>
          <Button 
            variant="outline-secondary" 
            onClick={handleClose}
            style={{ borderRadius: '20px' }}
          >
            Отмена
          </Button>
          <Button 
            variant="primary" 
            onClick={handleLogin}
            style={{ 
              borderRadius: '20px',
              backgroundColor: '#003896',
              borderColor: '#003896'
            }}
          >
            Войти
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Article_preview;