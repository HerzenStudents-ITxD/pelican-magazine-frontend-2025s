import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Article_preview from '../components/article_prev';
import Top_users from '../components/top_users';
import { FaSearch } from 'react-icons/fa';

const Homereg = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [likedArticles, setLikedArticles] = useState([]);
  
  const topics = ['искусство', 'наука', 'ргпу', 'история', 'литература', 'технологии'];

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem('likedArticles')) || [];
    setLikedArticles(savedLikes);
  }, []);

  const toggleTopic = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const allArticles = [
    { id: 1, title: "Яблоки: польза и вред для здоровья", author: "Автор Авторович", image: "apples.jpg", topics: ["наука", "ргпу"] },
    { id: 2, title: "Бананы в кулинарии: неожиданные рецепты", author: "Любитель Статей", image: "bananas.jpg", topics: ["литература", "искусство"] },
    { id: 3, title: "Лимоны в народной медицине", author: "Павел Костин", image: "lemons.jpg", topics: ["наука", "история"] },
    { id: 4, title: "История апельсинов в Европе", author: "Писательница Статейская", image: "oranges.jpg", topics: ["история", "литература"] },
    { id: 5, title: "Груши: сорта и их особенности", author: "Фруктовый Эксперт", image: "pears.jpg", topics: ["наука", "технологии"] },
    { id: 6, title: "Ананасы и их выращивание", author: "Тропический Садовод", image: "pineapples.jpg", topics: ["технологии", "ргпу"] },
    { id: 7, title: "Киви: витаминная бомба", author: "ЗОЖ Блогер", image: "kiwis.jpg", topics: ["наука", "ргпу"] },
    { id: 8, title: "Виноград: от выращивания до виноделия", author: "Винный Консультант", image: "grapes.jpg", topics: ["искусство", "история"] },
    { id: 9, title: "Клубника: лучшие сорта для вашего сада", author: "Садовод Профи", image: "strawberries.jpg", topics: ["технологии", "наука"] },
    { id: 10, title: "Манго: как выбрать и правильно есть", author: "Экзотик Фуд", image: "mangoes.jpg", topics: ["литература", "искусство"] },
    { id: 11, title: "Персики и их полезные свойства", author: "Фруктовый Гурман", image: "peaches.jpg", topics: ["наука", "ргпу"] },
    { id: 12, title: "Арбузы: как отличить спелый от незрелого", author: "Летний Обозреватель", image: "watermelons.jpg", topics: ["технологии", "история"] }
  ];

  const handleLikeToggle = (article) => {
    const isLiked = likedArticles.some(a => a.id === article.id);
    let updatedLikes;

    if (isLiked) {
      updatedLikes = likedArticles.filter(a => a.id !== article.id);
    } else {
      updatedLikes = [...likedArticles, article];
    }

    setLikedArticles(updatedLikes);
    localStorage.setItem('likedArticles', JSON.stringify(updatedLikes));
  };

  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTopics = selectedTopics.length === 0 || 
      article.topics.some(topic => selectedTopics.includes(topic));
    return matchesSearch && matchesTopics;
  });

  return (
    <div style={{ backgroundColor: '#f7f9fc', minHeight: '100vh' }}>
      <div className="mt-4">
        <Top_users />
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
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              minHeight: '400px'
            }}>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 style={{ 
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#333',
                  margin: 0
                }}>Статьи</h4>
                <button 
                  type="button" 
                  className="btn btn-outline-primary"
                  onClick={() => navigate("/likedarts")}
                  style={{ 
                    borderRadius: '20px',
                    fontSize: '14px',
                    padding: '6px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <img 
                    src="/pelican-magazine/hearth.jpg" 
                    alt="Избранное" 
                    style={{ width: '16px', height: '16px' }} 
                  />
                  Избранное ({likedArticles.length})
                </button>
              </div>

              <div className="row" style={{ margin: '-8px', minHeight: '300px' }}>
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((article) => (
                    <div key={article.id} className="col-md-4" style={{ padding: '8px' }}>
                      <Article_preview 
                        title={article.title}
                        author={article.author}
                        image={article.image}
                        isLiked={likedArticles.some(a => a.id === article.id)}
                        onLikeToggle={() => handleLikeToggle(article)}
                      />
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center py-4" style={{ minHeight: '200px' }}>
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

export default Homereg;