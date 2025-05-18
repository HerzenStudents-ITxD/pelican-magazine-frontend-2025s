import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Article_preview from '../components/article_prev';
import Top_guests from '../components/top_guests';
import { FaSearch } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopics, setSelectedTopics] = useState([]);
  
  const topics = ['Искусство', 'Наука', 'РГПУ', 'История', 'Литература', 'Технологии'];

  const toggleTopic = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const allArticles = [
    { id: 1, title: "Яблоки: польза и вред для здоровья", author: "Автор Авторович", image: "apples.jpg" },
    { id: 2, title: "Бананы в кулинарии: неожиданные рецепты", author: "Любитель Статей", image: "bananas.jpg" },
    { id: 3, title: "Лимоны в народной медицине", author: "Павел Костин", image: "lemons.jpg" },
    { id: 4, title: "История апельсинов в Европе", author: "Писательница Статейская", image: "oranges.jpg" },
    { id: 5, title: "Груши: сорта и их особенности", author: "Фруктовый Эксперт", image: "pears.jpg" },
    { id: 6, title: "Ананасы и их выращивание", author: "Тропический Садовод", image: "pineapples.jpg" },
    { id: 7, title: "Киви: витаминная бомба", author: "ЗОЖ Блогер", image: "kiwis.jpg" },
    { id: 8, title: "Виноград: от выращивания до виноделия", author: "Винный Консультант", image: "grapes.jpg" },
    { id: 9, title: "Клубника: лучшие сорта для вашего сада", author: "Садовод Профи", image: "strawberries.jpg" }
  ];

  const filteredArticles = allArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#f7f9fc', minHeight: '100vh' }}>
      <div className="mt-4">
        <Top_guests />
      </div>

      <div className="container-fluid" style={{ padding: '0 20px' }}>
        <div className="row mt-4">
          <div className="col-md-3">
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
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

              <div className="mb-4">
                <h5 style={{ 
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#333'
                }}>Темы</h5>
                <div className="d-flex flex-wrap gap-2">
                  {topics.map((topic, index) => (
                    <button
                      key={index}
                      className={`btn btn-sm ${selectedTopics.includes(topic) ? 'btn-primary' : 'btn-outline-primary'}`}
                      style={{ 
                        borderRadius: '20px',
                        fontSize: '12px',
                        padding: '4px 12px'
                      }}
                      onClick={() => toggleTopic(topic)}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <h4 style={{ 
                fontSize: '20px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '20px'
              }}>Статьи</h4>

              <div className="row" style={{ margin: '-8px' }}>
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((article) => (
                    <div key={article.id} className="col-md-4" style={{ padding: '8px' }}>
                      <Article_preview 
                        title={article.title}
                        author={article.author}
                        image={article.image}
                        isGuest={true}
                      />
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center py-4">
                    <p style={{ color: '#666' }}>Статьи не найдены</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;