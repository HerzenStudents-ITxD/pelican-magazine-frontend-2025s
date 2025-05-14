import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Article_preview from '../components/article_prev';
import Avatar from '../components/avatar';
import Top_users from '../components/top_users';


const Liked_arts = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container-fluid px-4" style={{ backgroundColor: 'white' }}>
      <div className="mt-4">
        <Top_users />
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
              onClick={() => navigate("/profile")}
              style={{ padding: '5px' }}
            >
              <img src="/back.jpg" alt="Добавить статью" style={{ width: '24px', height: '24px' }} />
            </button>
            <h3 style={{ color: '#003896' }}>Избранное</h3>
          </div>

          <div className="mb-4">
            <Article_preview />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liked_arts;