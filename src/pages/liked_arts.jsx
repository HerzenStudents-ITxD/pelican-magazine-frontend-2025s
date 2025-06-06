import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Article_preview from '../components/article_prev';
import Avatar from '../components/avatar';
import Top_users from '../components/top_users';
import { FaSearch } from 'react-icons/fa';

const Liked_arts = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [likedArticles, setLikedArticles] = useState([]);

  // Загрузка избранных статей из localStorage при монтировании
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem('likedArticles')) || [];
    setLikedArticles(savedLikes);
  }, []);

  // Фильтрация по поисковому запросу
  const filteredArticles = likedArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Обработчик снятия лайка
  const handleUnlike = (articleId) => {
    const updatedLikes = likedArticles.filter(article => article.id !== articleId);
    setLikedArticles(updatedLikes);
    localStorage.setItem('likedArticles', JSON.stringify(updatedLikes));
  };

  return (
    <div className="container-fluid px-4" style={{ backgroundColor: '#f7f9fc', minHeight: '100vh' }}>
      <div className="mt-4">
        <Top_users />
      </div>

      <div className="row mt-4">
        <div className="col-md-3">
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '15px',
            padding: '20px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            marginBottom: '20px'
          }}>
            <div className="mb-4">
              <div className="input-group" style={{ 
                borderRadius: '25px', 
                border: '1px solid #dee2e6',
                overflow: 'hidden'
              }}>
                <span className="input-group-text bg-white border-end-0">
                  <FaSearch style={{ color: '#6c757d' }} />
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Найти статью"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ borderLeft: 'none' }}
                />
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <Avatar />
              <h4 style={{ 
                fontSize: '16px',
                fontWeight: 'bold', 
                margin: '10px 0 5px'
              }}>Черепанова Мария</h4>
              <p style={{ 
                fontSize: '12px',
                color: '#666', 
                marginBottom: '15px'
              }}>Санкт-Петербург / ИТвД / 3 Курс</p>
              
              <p style={{ 
                fontSize: '12px',
                fontStyle: 'italic',
                marginBottom: '20px',
                padding: '10px',
                backgroundColor: 'rgba(0,0,0,0.03)',
                borderRadius: '8px'
              }}>
                Мур Мур Мур Мур Я Еще Не Отчислилась Ураааааааааааааа
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-md-9">
          <div style={{ 
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            minHeight: '400px'
          }}>
            <div className="d-flex align-items-center mb-4" style={{ gap: '15px' }}>
              <button 
                type="button" 
                className="btn btn-link p-0"
                onClick={() => navigate("/profile")}
                style={{ padding: '5px' }}
              >
                <img src="/pelican-magazine/back.jpg" alt="Назад" style={{ width: '20px', height: '20px' }} />
              </button>
              <h3 style={{ 
                fontSize: '18px',
                color: '#003896',
                margin: 0
              }}>Избранное</h3>
            </div>

            <div className="row" style={{ margin: '-8px', minHeight: '300px' }}>
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <div key={article.id} className="col-md-6" style={{ padding: '8px' }}>
                    <Article_preview 
                      title={article.title}
                      author={article.author}
                      image={article.image}
                      isLiked={true}
                      onLikeToggle={() => handleUnlike(article.id)}
                    />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-4" style={{ minHeight: '200px' }}>
                  <p style={{ color: '#666' }}>Нет избранных статей</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liked_arts;