import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Article_preview from '../components/article_prev';
import Top_users from '../components/top_users';
import { FaSearch } from 'react-icons/fa';

const Homereg = () => {
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

  return (
    <div>
      <div className="mt-4">
        <Top_users />
      </div>

      <div className="row mt-4">
        {/* Левая колонка с поиском и темами */}
        <div className="col-md-3">
          {/* Поисковая строка с кнопкой сердца */}
          <div className="d-flex align-items-center mb-4">
            <div className="input-group" style={{ borderRadius: '50px', overflow: 'hidden', flex: 1 }}>
              <span className="input-group-text bg-white border-end-0">
                <FaSearch />
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
            <button 
              type="button" 
              className="btn btn-link p-0 ms-2"
              onClick={() => navigate("/likedarts")}
              style={{ padding: '5px' }}
            >
              <img src="/pelican-magazine/hearth.jpg" alt="Избранное" style={{ width: '24px', height: '24px' }} />
            </button>
          </div>

          {/* Список тем */}
          <div className="mb-4">
            <h5>Темы</h5>
            <div className="d-flex flex-wrap gap-2">
              {topics.map((topic, index) => (
                <button
                  key={index}
                  className={`btn btn-sm ${selectedTopics.includes(topic) ? 'btn-primary' : 'btn-outline-primary'}`}
                  style={{ borderRadius: '50px' }}
                  onClick={() => toggleTopic(topic)}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Правая колонка с превью статей */}
        <div className="col-md-9">
          <Article_preview />
        </div>
      </div>
    </div>
  );
};

export default Homereg;