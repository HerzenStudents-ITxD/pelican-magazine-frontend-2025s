import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Article_preview from '../components/article_prev';
import Avatar from '../components/avatar';
import Top_users from '../components/top_users';

const Profile = () => {
  const navigate = useNavigate();
  
  const userArticles = [
    { id: 1, title: "Моя статья 1", author: "Вы", image: "apples.jpg" },
    { id: 2, title: "Моя статья 2", author: "Вы", image: "bananas.jpg" },
    { id: 3, title: "Моя статья 3", author: "Вы", image: "lemons.jpg" },
    { id: 4, title: "Моя статья 4", author: "Вы", image: "oranges.jpg" },
    { id: 5, title: "Моя статья 5", author: "Вы", image: "pears.jpg" },
    { id: 6, title: "Моя статья 6", author: "Вы", image: "pineapples.jpg" },
    { id: 7, title: "Моя статья 7", author: "Вы", image: "kiwis.jpg" },
    { id: 8, title: "Моя статья 8", author: "Вы", image: "grapes.jpg" }
  ];

  return (
    <div className="container-fluid px-4" style={{ backgroundColor: 'white' }}>
      <div className="mt-4">
        <Top_users />
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <div style={{ 
            backgroundColor: '#e6f0ff',
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

        <div className="col-md-8">
          <div className="d-flex align-items-center mb-4" style={{ gap: '15px' }}>
            <button 
              type="button" 
              className="btn btn-link p-0"
              onClick={() => navigate("/writeart")}
              style={{ padding: '5px' }}
            >
              <img src="/pelican-magazine/plus.jpg" alt="Добавить статью" style={{ width: '24px', height: '24px' }} />
            </button>
            <button 
              type="button" 
              className="btn btn-link p-0"
              onClick={() => navigate("/likedarts")}
              style={{ padding: '5px' }}
            >
              <img src="/pelican-magazine/hearth.jpg" alt="Избранное" style={{ width: '24px', height: '24px' }} />
            </button>
          </div>

          <div className="row" style={{ margin: '-8px' }}>
            {userArticles.map((article) => (
              <div key={article.id} className="col-md-6" style={{ padding: '8px' }}>
                <Article_preview 
                  title={article.title}
                  author={article.author}
                  image={article.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;