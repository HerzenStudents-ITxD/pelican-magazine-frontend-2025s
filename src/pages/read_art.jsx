import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from '../components/avatar';

const Readart = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [section1, setSection1] = useState("");
  const [section2, setSection2] = useState("");

  return ( 
    <div className="container-fluid px-4">
      {/* Верхняя навигационная панель */}
      <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
        {/* Логотип с правым отступом */}
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
        
        {/* Навигационные кнопки с отступами */}
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
        
        {/* Кнопки авторизации с отступами */}
        <div className="d-flex align-items-center ms-auto" style={{ gap: '1rem' }}>
          <button 
            type="button" 
            className="btn btn-outline-primary px-4 py-1"
            onClick={() => navigate("/profile")}
            style={{ 
              borderRadius: '20px',
              borderColor: '#003896',
              color: '#003896'
            }}
          >
            Профиль
          </button>
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
        </div>
      </div>

      <div className="row">
        {/* Левая колонка */}
        <div className="col-md-3 text-center mb-4">
          <Avatar />
          <h5>Автор</h5>
          <div className="my-3">
            <p style={{ fontWeight: "bold" }}>Темы этой статьи</p>
            <button className="btn btn-outline-primary btn-sm m-1">Искусство</button>
            <button className="btn btn-outline-primary btn-sm m-1">Наука</button>
            <button className="btn btn-outline-primary btn-sm m-1">РГПУ</button>
          </div>
          <p style={{ fontWeight: "bold" }}>Возрастное ограничение</p>
          <div className="d-flex flex-wrap justify-content-center">
            {["18+"].map((age, i) => (
              <button key={i} className="btn btn-outline-primary btn-sm m-1">{age}</button>
            ))}
          </div>
          
          {/* Добавленные кнопки */}
          <div className="mt-4 d-flex flex-column">
            <button 
              className="btn btn-outline-primary mb-2"
              onClick={() => navigate("/profile")}
            >
              К статьям автора
            </button>
            <button 
              className="btn btn-outline-secondary"
              onClick={() => navigate("/mainreg")}
            >
              Назад
            </button>
          </div>
        </div>

        {/* Центральная часть */}
        <div className="col-md-9">
          <div className="p-4 mb-4" style={{ 
            background: "linear-gradient(to right, #2c3e50, #3498db)", 
            borderRadius: "10px", 
            color: "#fff",
            minHeight: "150px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Заголовок статьи</h1>
            <p style={{ fontSize: "1.2rem", marginBottom: "0.2rem" }}>Автор Авторович</p>
            <p style={{ fontSize: "0.9rem", opacity: "0.8" }}>опубликовано 33 декабря 3021г</p>
          </div>

          <div className="mb-4">
            <h4>Пересказ статьи за 1 минуту</h4>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
              Здесь находится краткое содержание статьи, которое можно прочитать за одну минуту. 
              Этот текст должен дать читателю общее представление о содержании статьи. 
              Обычно включает основные тезисы и выводы.
            </p>
          </div>

          <div className="mb-4">
            <h4>Название раздела 1</h4>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
              Это текст первого раздела статьи. Он содержит основную информацию по теме. 
              Здесь может быть 5-6 строк текста, раскрывающих суть раздела. 
              Текст должен быть легко читаемым и информативным.
              Раздел может содержать ключевые моменты и аргументы.
            </p>
          </div>

          <div className="mb-4">
            <h4>Название раздела 2</h4>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
              Это текст второго раздела статьи. Он продолжает раскрывать тему. 
              В этом разделе могут быть приведены дополнительные аргументы или примеры. 
              Текст должен логически продолжать первый раздел.
              Здесь также может быть заключение или выводы по статье.
            </p>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Readart;