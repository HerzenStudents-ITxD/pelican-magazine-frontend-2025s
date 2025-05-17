import React, { useState } from 'react';
import { FaSearch, FaTimes, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ModeratorDashboard.css';

const ModeratorDashboard = () => {
  const [activeSection, setActiveSection] = useState('Новые заявки');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWords, setSelectedWords] = useState({});
  const [commentText, setCommentText] = useState('');
  const [showOverlay, setShowOverlay] = useState(null);
  const [rejectedArticles, setRejectedArticles] = useState([]);
  const [approvedArticles, setApprovedArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [sidebarSearch, setSidebarSearch] = useState('');

  // Моковые данные
  const articlesList = [
    {
      id: '000001',
      title: 'Искусство Текста',
      author: 'Иван Петров',
      date: '10 мар 2025',
      preview: 'Типография — это больше, чем просто шрифты. Это искусство передачи информации через визуальный стиль.',
      thumbnail: '/cover_sample.jpg',
      lines: [
        'Типография — это больше, чем просто шрифты.',
        'Это искусство передачи информации через визуальный стиль.',
        'Начиная с изобретения печатного станка, многое изменилось.',
        'Современная типографика охватывает цифровую эру.',
        'Шрифты стали частью брендинга и пользовательского опыта.'
      ]
    },
    {
      id: '000002',
      title: 'Современный дизайн',
      author: 'Анна Смирнова',
      date: '12 мар 2025',
      preview: 'Принципы современного дизайна и их применение в цифровую эпоху.',
      thumbnail: '/cover_sample2.jpg',
      lines: [
        'Дизайн в цифровую эпоху требует новых подходов.',
        'Минимализм и функциональность - ключевые тенденции.',
        'Адаптивность стала обязательным требованием.'
      ]
    }
  ];

  const toggleWordSelection = (word, lineNumber) => {
    const key = `${word}-${lineNumber}`;
    setSelectedWords(prev => ({
      ...prev,
      [key]: prev[key] ? null : { word, line: lineNumber }
    }));
  };

  const handleApprove = () => {
    if (selectedArticle) {
      setShowOverlay('approvedPreview');
    }
  };

  const handleReject = () => {
    if (selectedArticle) {
      setShowOverlay('rejectedPreview');
    }
  };

  const confirmRejection = () => {
    if (selectedArticle) {
      const newEntry = {
        ...selectedArticle,
        date: new Date().toLocaleDateString('ru-RU'),
        comment: commentText,
        tags: Object.values(selectedWords).filter(Boolean),
        status: 'rejected'
      };
      setRejectedArticles([...rejectedArticles, newEntry]);
      resetReview();
      setShowOverlay(null);
      setSelectedArticle(null);
    }
  };

  const confirmApproval = () => {
    if (selectedArticle) {
      const newEntry = {
        ...selectedArticle,
        date: new Date().toLocaleDateString('ru-RU'),
        status: 'approved'
      };
      setApprovedArticles([...approvedArticles, newEntry]);
      resetReview();
      setShowOverlay(null);
      setSelectedArticle(null);
    }
  };

  const resetReview = () => {
    setCommentText('');
    setSelectedWords({});
  };

  const renderLine = (line, index, highlight = true, tags = []) => {
    return line.split(/(\s+)/).map((word, i) => {
      if (!/\S/.test(word)) return word;
      
      const key = `${word}-${index}`;
      const isSelected = tags.length 
        ? tags.some(tag => tag?.word === word && tag?.line === index)
        : selectedWords[key];
      
      const isMatch = searchTerm && word.toLowerCase().includes(searchTerm.toLowerCase());

      return (
        <span
          key={i}
          onClick={() => highlight && toggleWordSelection(word, index)}
          className={`word ${isSelected ? 'selected' : ''} ${isMatch ? 'matched' : ''}`}
        >
          {word}
        </span>
      );
    });
  };

  const filteredArticles = articlesList.filter(article => 
    article.id.includes(sidebarSearch) || 
    article.title.toLowerCase().includes(sidebarSearch.toLowerCase()) ||
    article.author.toLowerCase().includes(sidebarSearch.toLowerCase())
  );

  return (
    <div className="moderator-app">
      {/* Шапка */}
      <header className="header">
        <Link to="/" className="logo-link">
          <img src="logo_black.jpg" alt="Логотип" className="logo" />
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Статьи</Link>
          <Link to="/profile" className="nav-link">Профиль</Link>
          <Link to="/notes" className="nav-link">Конспекты</Link>
        </nav>
        <button className="logout-btn">Выйти</button>
      </header>

      <div className="moderator-container">
        {/* Сайдбар */}
        <aside className="sidebar">
          <h3>Кабинет модератора</h3>
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Поиск по артикулу" 
              value={sidebarSearch}
              onChange={(e) => setSidebarSearch(e.target.value)}
            />
          </div>

          <h4>Разделы</h4>
          <button 
            className={`section-btn ${activeSection === 'Новые заявки' ? 'active' : ''}`}
            onClick={() => {
              setActiveSection('Новые заявки');
              setSelectedArticle(null);
            }}
          >
            Новые заявки
          </button>

          <h4>Публикации</h4>
          {['Оценено', 'Повторная проверка', 'Не прошли проверку', 'Одобрено'].map(section => (
            <button
              key={section}
              className={`section-btn ${activeSection === section ? 'active' : ''}`}
              onClick={() => {
                setActiveSection(section);
                setSelectedArticle(null);
              }}
            >
              {section}
            </button>
          ))}
        </aside>

        {/* Основное содержимое */}
        <main className="main-content">
          {activeSection === 'Новые заявки' && (
            <div className="articles-view">
              {!selectedArticle ? (
                <div className="articles-grid">
                  {filteredArticles.map(article => (
                    <div 
                      key={article.id} 
                      className="article-card"
                      onClick={() => setSelectedArticle(article)}
                    >
                      <div className="article-id">#{article.id}</div>
                      <div 
                        className="article-thumbnail"
                        style={{ backgroundImage: `url(${article.thumbnail})` }}
                      />
                      <div className="article-info">
                        <h4>{article.title}</h4>
                        <p className="article-preview">{article.preview}</p>
                        <div className="article-meta">
                          <span>{article.author}</span>
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="article-review">
                  <div className="search-approve-container">
                    <div className="search-container">
                      <FaSearch className="search-icon" />
                      <input
                        type="text"
                        placeholder="Поиск по статье"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                      />
                    </div>
                    <div className="action-buttons">
                      <button className="reject-btn" onClick={handleReject}>
                        <FaTimes /> Отклонить
                      </button>
                      <button className="approve-btn" onClick={handleApprove}>
                        <FaCheck /> Одобрить
                      </button>
                    </div>
                  </div>

                  <div className="article-content">
                    <div className="article-header">
                      <h3>{selectedArticle.title}</h3>
                      <div className="article-meta">
                        <span>Автор: {selectedArticle.author}</span>
                        <span>Дата: {selectedArticle.date}</span>
                      </div>
                    </div>

                    <div className="article-text">
                      {selectedArticle.lines.map((line, index) => (
                        <p key={index} className="article-line">
                          {renderLine(line, index)}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="comment-section">
                    <label>Комментарий к проверке:</label>
                    <div className="selected-tags">
                      {Object.values(selectedWords).filter(Boolean).map(({word, line}, idx) => (
                        <span key={idx} className="tag">
                          {word} ({line + 1})
                        </span>
                      ))}
                    </div>
                    <textarea
                      placeholder="Введите ваш комментарий..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {activeSection === 'Не прошли проверку' && (
            <div className="articles-list">
              <h2>Отклоненные статьи</h2>
              {rejectedArticles.length === 0 ? (
                <div className="empty-section">
                  <p>Нет отклонённых статей</p>
                </div>
              ) : (
                <div className="articles-grid">
                  {rejectedArticles.map(article => (
                    <div 
                      key={article.id} 
                      className="article-card"
                      onClick={() => setSelectedArticle(article)}
                    >
                      <div className="article-id">#{article.id}</div>
                      <div className="article-info">
                        <h4>{article.title}</h4>
                        <p className="article-preview">{article.comment || 'Без комментария'}</p>
                        <div className="article-meta">
                          <span>{article.author}</span>
                          <span>Проверено: {article.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {selectedArticle && selectedArticle.status === 'rejected' && (
                <div className="selected-article-detail">
                  <div className="article-content">
                    <div className="article-header">
                      <h3>{selectedArticle.title}</h3>
                      <div className="article-meta">
                        <span>Автор: {selectedArticle.author}</span>
                        <span>Проверено: {selectedArticle.date}</span>
                      </div>
                    </div>
                    <div className="comment-section">
                      <label>Комментарий модератора:</label>
                      <p>{selectedArticle.comment || 'Без комментария'}</p>
                      <label>Выделенные фрагменты:</label>
                      <div className="selected-tags">
                        {selectedArticle.tags && selectedArticle.tags.map(({word, line}, idx) => (
                          <span key={idx} className="tag">
                            {word} ({line + 1})
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="article-text">
                      {selectedArticle.lines.map((line, index) => (
                        <p key={index} className="article-line">
                          {renderLine(line, index, false, selectedArticle.tags)}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeSection === 'Одобрено' && (
            <div className="articles-list">
              <h2>Одобренные статьи</h2>
              {approvedArticles.length === 0 ? (
                <div className="empty-section">
                  <p>Нет одобренных статей</p>
                </div>
              ) : (
                <div className="articles-grid">
                  {approvedArticles.map(article => (
                    <div 
                      key={article.id} 
                      className="article-card"
                      onClick={() => setSelectedArticle(article)}
                    >
                      <div className="article-id">#{article.id}</div>
                      <div className="article-info">
                        <h4>{article.title}</h4>
                        <div className="article-meta">
                          <span>{article.author}</span>
                          <span>Одобрено: {article.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {selectedArticle && selectedArticle.status === 'approved' && (
                <div className="selected-article-detail">
                  <div className="article-content">
                    <div className="article-header">
                      <h3>{selectedArticle.title}</h3>
                      <div className="article-meta">
                        <span>Автор: {selectedArticle.author}</span>
                        <span>Одобрено: {selectedArticle.date}</span>
                      </div>
                    </div>
                    <div className="article-text">
                      {selectedArticle.lines.map((line, index) => (
                        <p key={index} className="article-line">
                          {renderLine(line, index, false)}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Модальное окно для отклонения */}
      {showOverlay === 'rejectedPreview' && selectedArticle && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">Подтверждение отклонения заявки</h3>
            
            <div className="comment-section">
              <label>Комментарий:</label>
              <p>{commentText || 'Без комментария'}</p>
            </div>
            
            <div className="selected-tags">
              {Object.values(selectedWords).filter(Boolean).map(({word, line}, idx) => (
                <span key={idx} className="tag">
                  {word} ({line + 1})
                </span>
              ))}
            </div>
            
            <div className="modal-article-content">
              {selectedArticle.lines.map((line, index) => (
                <p key={index} className="article-line">
                  {renderLine(line, index, false, Object.values(selectedWords))}
                </p>
              ))}
            </div>
            
            <div className="modal-actions">
              <button className="modal-btn secondary" onClick={() => setShowOverlay(null)}>
                Отмена
              </button>
              <button className="modal-btn primary" onClick={confirmRejection}>
                Отклонить заявку
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно для одобрения */}
      {showOverlay === 'approvedPreview' && selectedArticle && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">Подтверждение одобрения заявки</h3>
            
            <div className="modal-article-content">
              <h4>{selectedArticle.title}</h4>
              <p>Автор: {selectedArticle.author}</p>
              <p>Вы уверены, что хотите одобрить эту заявку?</p>
            </div>
            
            <div className="modal-actions">
              <button className="modal-btn secondary" onClick={() => setShowOverlay(null)}>
                Отмена
              </button>
              <button className="modal-btn primary" onClick={confirmApproval}>
                Одобрить заявку
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModeratorDashboard;