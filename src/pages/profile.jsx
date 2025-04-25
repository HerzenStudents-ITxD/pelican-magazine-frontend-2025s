import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Article_preview from '../components/article_prev';
import Avatar from '../components/avatar';

const Profile = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container-fluid px-4" style={{ backgroundColor: 'white' }}>
      {/* Верхняя навигационная панель (оставлена без изменений) */}
      <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
        <img 
          src="/logo_black.jpg" 
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
            className="btn btn-link p-0 me-4"
            style={{ 
              fontWeight: 500,
              color: '#003896'
            }}
          >
            Конспекты
          </button>
        </div>
        
        <div className="d-flex align-items-center ms-auto" style={{ gap: '1rem' }}>
          <button 
            type="button" 
            className="btn btn-primary px-4 py-1"
            onClick={() => navigate("/main")}
            style={{ 
              borderRadius: '20px',
              backgroundColor: '#003896',
              color: 'white',
              border: 'none'
            }}
          >
            Выйти
          </button>
          <button 
              type="button" 
              className="btn btn-link p-0"
              onClick={() => navigate("/editprof")}
              style={{ padding: '5px' }}
            >
              <img src="/settings.jpg" alt="Настройки" style={{ width: '24px', height: '24px' }} />
            </button>
        </div>
      </div>

      {/* Основное содержимое профиля */}
      <div className="row mt-4">
        {/* Левая колонка с аватаром */}
        <div className="col-md-4">
          <div style={{ 
            backgroundColor: '#e6f0ff', // Синеватый фон
            borderRadius: '15px',
            padding: '20px',
            textAlign: 'center'
          }}>
            <Avatar />
            <h4 style={{ fontWeight: 'bold', marginBottom: '5px' }}>Черепанова Мария</h4>
            <p style={{ color: '#666', marginBottom: '20px' }}>Санкт-Петербург / ИТвД / 3 Курс</p>
            
            <p style={{ 
              fontStyle: 'italic',
              marginBottom: '30px',
              padding: '10px',
              backgroundColor: 'rgba(255,255,255,0.7)',
              borderRadius: '10px'
            }}>
              Мур Мур Мур Мур Я Еще Не Отчислилась Ураааааааааааааа
            </p>
            
            
          </div>
        </div>

        {/* Правая колонка с контентом */}
        <div className="col-md-8">
          {/* Панель действий */}
          <div className="d-flex align-items-center mb-4" style={{ gap: '15px' }}>
            <button 
              type="button" 
              className="btn btn-link p-0"
              onClick={() => navigate("/writeart")}
              style={{ padding: '5px' }}
            >
              <img src="/plus.jpg" alt="Добавить статью" style={{ width: '24px', height: '24px' }} />
            </button>
            <button 
              type="button" 
              className="btn btn-link p-0"
              style={{ padding: '5px' }}
            >
              <img src="/hearth.jpg" alt="Избранное" style={{ width: '24px', height: '24px' }} />
            </button>
          </div>

          {/* Превью статьи (одна статья) */}
          <div className="mb-4">
            <Article_preview />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;