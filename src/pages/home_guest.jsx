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

  return (
    <div>
      <div className="mt-4">
        <Top_guests />
      </div>

      <div className="row mt-4">
        {/* Левая колонка с поиском и темами */}
        <div className="col-md-3">
          {/* Поисковая строка */}
          <div className="search-container mb-4">
            <div className="input-group" style={{ borderRadius: '25px', border: '1px solid #e0e0e0' }}>
              <span className="input-group-text bg-white border-0">
                <FaSearch className="text-muted" />
              </span>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Найти статью"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
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
          <h4 className="mb-3">Статьи</h4>
          <Article_preview />
        </div>
      </div>
    </div>
  );
};

export default Home;