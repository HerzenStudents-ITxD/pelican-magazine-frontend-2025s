// импорт и useState — не изменялись
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';

const PRIMARY_COLOR = '#005CF6';

const ModeratorDashboard = () => {
  const [activeSection, setActiveSection] = useState('Новые заявки');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWords, setSelectedWords] = useState({});
  const [commentText, setCommentText] = useState('');
  const [showOverlay, setShowOverlay] = useState(null);
  const [rejectedArticles, setRejectedArticles] = useState([]);
  const [approvedArticles, setApprovedArticles] = useState([]);
  const [selectedRejected, setSelectedRejected] = useState(null);
  const [selectedApproved, setSelectedApproved] = useState(null);

  const articleData = {
    id: '000001',
    title: '“Искусство Текста”',
    author: 'Иван Петров',
    date: '10 мар 2025',
    lines: [
      'Типография — это больше, чем просто шрифты.',
      'Это искусство передачи информации через визуальный стиль.',
      'Начиная с изобретения печатного станка, многое изменилось.',
      'Современная типографика охватывает цифровую эру.',
      'Шрифты стали частью брендинга и пользовательского опыта.'
    ]
  };

  const toggleWordSelection = (word, lineNumber) => {
    const key = `${word}-${lineNumber}`;
    const updatedSelections = { ...selectedWords };
    updatedSelections[key] ? delete updatedSelections[key] : updatedSelections[key] = { word, line: lineNumber };
    setSelectedWords(updatedSelections);
  };

  const handleReject = () => setShowOverlay('rejectedPreview');
  const handleApprove = () => setShowOverlay('approvedPreview');

  const confirmRejection = () => {
    const newEntry = {
      id: articleData.id,
      title: articleData.title,
      date: new Date().toLocaleDateString('ru-RU'),
      comment: commentText,
      tags: Object.values(selectedWords),
      lines: articleData.lines
    };
    setRejectedArticles([...rejectedArticles, newEntry]);
    resetReview();
    setShowOverlay(null);
  };

  const confirmApproval = () => {
    const newEntry = {
      id: articleData.id,
      title: articleData.title,
      date: new Date().toLocaleDateString('ru-RU'),
      lines: articleData.lines
    };
    setApprovedArticles([...approvedArticles, newEntry]);
    resetReview();
    setShowOverlay(null);
  };

  const resetReview = () => {
    setCommentText('');
    setSelectedWords({});
  };

  const renderLine = (line, lineNumber, highlight = true, tags = []) => {
    const words = line.split(/(\s+)/);
    return words.map((word, i) => {
      const key = `${word}-${lineNumber}`;
      const isSelected = tags.length
        ? tags.find(tag => tag.word === word && tag.line === lineNumber)
        : selectedWords[key];
      const isMatch = searchTerm && word.toLowerCase().includes(searchTerm.toLowerCase());

      const backgroundColor = isSelected ? 'yellow' : isMatch ? PRIMARY_COLOR : 'transparent';
      const color = isMatch ? 'white' : 'inherit';

      return (
        /\S/.test(word) ? (
          <span
            key={i}
            onClick={() => highlight && toggleWordSelection(word, lineNumber)}
            style={{
              cursor: highlight ? 'pointer' : 'default',
              backgroundColor,
              color,
              padding: '2px 4px',
              borderRadius: '4px'
            }}
          >
            {word}
          </span>
        ) : word
      );
    });
  };

  return (
    <div className="container-fluid px-4" style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      {/* Верхняя панель */}
      <div className="d-flex justify-content-between align-items-center py-3 border-bottom bg-white">
        <img src="/logo_black.jpg" alt="pelikan logo" style={{ width: '120px' }} />
        <div className="d-flex" style={{ gap: '2rem' }}>
          {['Статьи', 'Авторы', 'Конспекты'].map((item, idx) => (
            <button key={idx} className="btn btn-link p-0" style={{ fontWeight: 500, color: PRIMARY_COLOR }}>
              {item}
            </button>
          ))}
        </div>
        <button className="btn px-4 py-1 text-white" style={{ backgroundColor: PRIMARY_COLOR, borderRadius: '50px' }}>
          Выйти
        </button>
      </div>

      {/* Контент */}
      <div className="d-flex" style={{ minHeight: '90vh' }}>
        {/* Левая панель */}
        <div className="border-end p-3 bg-white" style={{ width: '20%' }}>
          <h5>Кабинет модератора</h5>
          <div className="input-group mb-3">
            <span className="input-group-text"><FaSearch /></span>
            <input type="text" className="form-control" placeholder="Поиск по артикулу" />
          </div>
          <h6 className="mt-4">Разделы</h6>
          <button
            className="btn w-100 mb-2 text-white"
            style={{ backgroundColor: PRIMARY_COLOR, borderRadius: '50px' }}
            onClick={() => setActiveSection('Новые заявки')}
          >
            Новые заявки
          </button>
          <h6 className="mt-4">Публикации</h6>
          {['Оценено', 'Повторная проверка', 'Не прошли проверку', 'Одобрено'].map((section, idx) => (
            <button
              key={idx}
              className={`btn w-100 mb-2 ${activeSection === section ? 'text-white' : 'text-primary'}`}
              style={{
                backgroundColor: activeSection === section ? PRIMARY_COLOR : 'white',
                border: `1px solid ${PRIMARY_COLOR}`,
                borderRadius: '50px'
              }}
              onClick={() => {
                setActiveSection(section);
                setSelectedRejected(null);
                setSelectedApproved(null);
              }}
              onMouseOver={e => {
                e.currentTarget.style.backgroundColor = PRIMARY_COLOR;
                e.currentTarget.style.color = 'white';
              }}
              onMouseOut={e => {
                if (activeSection !== section) {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = PRIMARY_COLOR;
                }
              }}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Правая панель */}
        <div className="p-4" style={{ width: '80%' }}>
          {activeSection === 'Новые заявки' && (
            <>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Заявка #{articleData.id}</span>
                <div className="input-group" style={{ width: '200px' }}>
                  <span className="input-group-text"><FaSearch /></span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="поиск по статье"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="d-flex">
                  <button
                    className="btn me-2"
                    style={{ backgroundColor: 'white', border: `1px solid ${PRIMARY_COLOR}`, color: PRIMARY_COLOR, borderRadius: '50px' }}
                    onClick={handleReject}
                    onMouseOver={e => {
                      e.currentTarget.style.backgroundColor = PRIMARY_COLOR;
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.backgroundColor = 'white';
                      e.currentTarget.style.color = PRIMARY_COLOR;
                    }}
                  >
                    Не прошло
                  </button>
                  <button
                    className="btn text-white"
                    style={{ backgroundColor: PRIMARY_COLOR, borderRadius: '50px' }}
                    onClick={handleApprove}
                    onMouseOver={e => e.currentTarget.style.color = 'white'}
                    onMouseOut={e => e.currentTarget.style.color = 'white'}
                  >
                    Одобрить публикацию
                  </button>
                </div>
              </div>

              <div className="bg-light p-4 mb-3" style={{ maxWidth: '600px' }}>
                <div className="mb-3" style={{
                  height: '180px',
                  backgroundImage: 'url(/cover_sample.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }} />
                <div className="text-center mb-3">
                  <h4>{articleData.title}</h4>
                  <p>Автор: {articleData.author}</p>
                  <small className="text-muted">опубликовано {articleData.date}</small>
                </div>
                <div className="p-3 border rounded bg-white" style={{ height: '300px', overflowY: 'scroll' }}>
                  {articleData.lines.map((line, index) => (
                    <div key={index} className="mb-2">{renderLine(line, index)}</div>
                  ))}
                </div>
              </div>

              <div style={{ maxWidth: '600px' }}>
                <label className="form-label fw-bold">Комментарий к проверке:</label>
                <div className="mb-2">
                  {Object.values(selectedWords).map(({ word, line }, idx) => (
                    <span key={idx} className="badge bg-primary text-white me-2">
                      {word} ({line + 1})
                    </span>
                  ))}
                </div>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Комментарий к статье"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
              </div>
            </>
          )}

          {activeSection === 'Не прошли проверку' && (
            <div>
              <h4 className="mb-3">Не прошли проверку</h4>
              {rejectedArticles.length === 0 ? (
                <p className="text-muted">Нет отклонённых заявок</p>
              ) : (
                <ul className="list-group">
                  {rejectedArticles.map((entry, idx) => (
                    <li key={idx} className="list-group-item" style={{ cursor: 'pointer' }} onClick={() => setSelectedRejected(entry)}>
                      <strong>#{entry.id}</strong> — {entry.title}<br />
                      <small className="text-muted">Дата проверки: {entry.date}</small>
                    </li>
                  ))}
                </ul>
              )}
              {selectedRejected && (
                <div className="mt-4 border rounded p-3 bg-light">
                  <h5>{selectedRejected.title}</h5>
                  <p><strong>Комментарий:</strong> {selectedRejected.comment}</p>
                  <div>
                    {selectedRejected.tags.map(({ word, line }, idx) => (
                      <span key={idx} className="badge bg-primary text-white me-2 mb-2">
                        {word} ({line + 1})
                      </span>
                    ))}
                  </div>
                  <div className="mt-3">
                    {selectedRejected.lines.map((line, index) => (
                      <div key={index}>{renderLine(line, index, false, selectedRejected.tags)}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeSection === 'Одобрено' && (
            <div>
              <h4 className="mb-3">Одобрено</h4>
              {approvedArticles.length === 0 ? (
                <p className="text-muted">Нет одобренных заявок</p>
              ) : (
                <ul className="list-group">
                  {approvedArticles.map((entry, idx) => (
                    <li key={idx} className="list-group-item" style={{ cursor: 'pointer' }} onClick={() => setSelectedApproved(entry)}>
                      <strong>#{entry.id}</strong> — {entry.title}<br />
                      <small className="text-muted">Дата одобрения: {entry.date}</small>
                    </li>
                  ))}
                </ul>
              )}
              {selectedApproved && (
                <div className="mt-4 border rounded p-3 bg-light">
                  <h5>{selectedApproved.title}</h5>
                  <div className="mt-3">
                    {selectedApproved.lines.map((line, index) => (
                      <div key={index}>{renderLine(line, index, false)}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Модальное окно для отклонения */}
      {showOverlay === 'rejectedPreview' && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 9999 }}>
          <div className="bg-white p-4 rounded shadow" style={{ width: '600px', maxHeight: '80vh', overflowY: 'auto' }}>
            <h5 className="mb-3">Подтверждение отклонения заявки</h5>
            <p><strong>Комментарий:</strong> {commentText}</p>
            <div className="mb-2">
              {Object.values(selectedWords).map(({ word, line }, idx) => (
                <span key={idx} className="badge bg-primary text-white me-2">{word} ({line + 1})</span>
              ))}
            </div>
            <div className="border p-2 bg-light mb-3" style={{ maxHeight: '300px', overflowY: 'auto' }}>
              {articleData.lines.map((line, index) => (
                <div key={index}>{renderLine(line, index, false, Object.values(selectedWords))}</div>
              ))}
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-secondary me-2" onClick={() => setShowOverlay(null)}>Отмена</button>
              <button className="btn btn-primary" onClick={confirmRejection}>Окей</button>
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно для одобрения */}
      {showOverlay === 'approvedPreview' && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 9999 }}>
          <div className="bg-white p-4 rounded shadow" style={{ width: '500px' }}>
            <h5 className="mb-3">Одобрить публикацию</h5>
            <p>Исправлений нет,<br />Разрешаете одобрить публикацию?</p>
            <div className="d-flex justify-content-end">
              <button className="btn btn-secondary me-2" onClick={() => setShowOverlay(null)}>Отмена</button>
              <button className="btn btn-primary" onClick={confirmApproval}>Одобрить</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModeratorDashboard;








