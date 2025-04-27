import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Article_preview from '../components/article_prev';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container-fluid px-4">
      {/* Верхняя навигационная панель */}
      <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
        {/* Логотип с правым отступом */}
        <img 
          src="/logo_black.jpg" 
          alt="pelikan logo" 
          className="me-5" // Отступ справа 3rem
          style={{ 
            width: '120px',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
        
        {/* Навигационные кнопки с отступами */}
        <div className="d-flex align-items-center" style={{ gap: '2rem' }}>
          <button 
            type="button" 
            className="btn btn-link p-0"
            onClick={() => navigate("/main")}
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
            className="btn btn-link p-0"
            style={{ 
              fontWeight: 500,
              color: '#003896'
            }}
          >
            Конспекты
          </button>

          {/* Новая кнопка модератора */}
          <button 
            type="button" 
            className="btn btn-link p-0"
            onClick={() => navigate("/moderator")}
            style={{ 
              fontWeight: 500,
              color: '#003896'
            }}
          >
            Модератор
          </button>
        </div>
        
        
        
        {/* Кнопки авторизации с отступами */}
        <div className="d-flex align-items-center ms-auto" style={{ gap: '1rem' }}>
          <button 
            type="button" 
            className="btn btn-outline-primary px-4 py-1"
            onClick={() => navigate("/register")}
            style={{ 
              borderRadius: '20px',
              borderColor: '#003896', // Темно-синяя обводка
              color: '#003896' // Темно-синий текст
            }}
          >
            Зарегистрироваться
          </button>
          <button 
            type="button" 
            className="btn btn-primary px-4 py-1"
            onClick={() => navigate("/signin")}
            style={{ 
              borderRadius: '20px',
              backgroundColor: '#003896', // Темно-синий фон
              color: 'white', // Белый текст
              border: 'none'
            }}
          >
            Войти
          </button>
        </div>
      </div>

      {/* Основное содержимое страницы */}
      <div className="mt-4">
        <Article_preview />
      </div>
    </div>
  );
};

export default Home;