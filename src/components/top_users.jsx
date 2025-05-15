import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


const Top_users = () => {
  const navigate = useNavigate();
  
  return (
      <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
        <img 
          src="/pelican-magazine/logo_black.jpg" 
          alt="pelikan logo" 
          className="me-5"
          style={{ 
            width: '120px',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
        
        <div className="d-flex align-items-center" style={{ gap: '2rem' }}>
          <button 
            type="button" 
            className="btn btn-link p-0"
            onClick={() => navigate("/mainreg")}
            style={{ 
              fontWeight: 500,
              color: '#003896'
            }}
          >
            Статьи
          </button>
          <button 
            type="button" 
            className="btn btn-link p-0"
            style={{ 
              fontWeight: 500,
              color: '#003896'
            }}
          >
            Авторы
          </button>
          <button 
            type="button" 
            className="btn btn-link p-0 me-4"
            style={{ 
              fontWeight: 500,
              color: '#003896'
            }}
          >
            Конспекты
          </button>
          <button 
            type="button" 
            className="btn btn-link p-0 me-4" // Добавлен правый отступ
            onClick={() => navigate("/moderator")}
            style={{ 
              fontWeight: 500,
              color: '#003896' // Темно-синий цвет
              
            }}
          >
            Модераторы
          </button>
        </div>
        
        {/* Кнопки авторизации с отступами */}
        <div className="d-flex align-items-center ms-auto" style={{ gap: '1rem' }}>
          <button 
            type="button" 
            className="btn btn-outline-primary px-4 py-1"
            onClick={() => navigate("/profile")}
            style={{ 
              borderRadius: '20px',
              borderColor: '#003896', // Темно-синяя обводка
              color: '#003896' // Темно-синий текст
            }}
          >
            Профиль
          </button>
          <button 
            type="button" 
            className="btn btn-primary px-4 py-1"
            onClick={() => navigate("/main")}
            style={{ 
              borderRadius: '20px',
              backgroundColor: '#003896', // Темно-синий фон
              color: 'white', // Белый текст
              border: 'none'
            }}
          >
            Выйти
          </button>
        </div>
      </div>
  );
};

export default Top_users;