import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from '../components/avatar';
import Top_users from '../components/top_users';

const Readart = () => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [section1, setSection1] = useState("");
  const [section2, setSection2] = useState("");

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return ( 
    <div className="container-fluid px-4">
      <div className="mt-4">
        <Top_users />
      </div>

      <div className="row">
        {/* Левая колонка с аватаром и информацией */}
        <div className="col-md-3 text-center mb-4">
          <Avatar />
          <h5>Автор статьи</h5>
          <div className="my-3">
            <p style={{ fontWeight: "bold" }}>Темы этой статьи</p>
            <button className="btn btn-outline-primary btn-sm m-1">Искусство</button>
            <button className="btn btn-outline-primary btn-sm m-1">Наука</button>
            <button className="btn btn-outline-primary btn-sm m-1">РГПУ</button>
          </div>
          <p style={{ fontWeight: "bold" }}>Возрастное ограничение</p>
          <div className="d-flex flex-wrap justify-content-center">
            <button className="btn btn-outline-primary btn-sm m-1">18+</button>
          </div>
          
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

        {/* Центральная часть с содержанием статьи */}
        <div className="col-md-9">
          {/* Заголовок статьи */}
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

          {/* Краткое содержание */}
          <div className="mb-4">
            <h4>Пересказ статьи за 1 минуту</h4>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
              Здесь находится краткое содержание статьи, которое можно прочитать за одну минуту. 
              Этот текст должен дать читателю общее представление о содержании статьи. 
              Обычно включает основные тезисы и выводы.
            </p>
          </div>

          {/* Раздел 1 */}
          <div className="mb-4">
            <h4>Название раздела 1</h4>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
              Это текст первого раздела статьи. Он содержит основную информацию по теме. 
              Здесь может быть 5-6 строк текста, раскрывающих суть раздела. 
              Текст должен быть легко читаемым и информативным.
              Раздел может содержать ключевые моменты и аргументы.
            </p>
          </div>

          {/* Раздел 2 */}
          <div className="mb-4">
            <h4>Название раздела 2</h4>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
              Это текст второго раздела статьи. Он продолжает раскрывать тему. 
              В этом разделе могут быть приведены дополнительные аргументы или примеры. 
              Текст должен логически продолжать первый раздел.
              Здесь также может быть заключение или выводы по статье.
            </p>
          </div>

          {/* Кнопка лайка - добавлена под последним разделом */}
          <div className="d-flex justify-content-end mb-4">
            <button 
              onClick={handleLikeClick}
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                padding: 0,
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img 
                src={isLiked ? "/hearth2.jpg" : "/hearth.jpg"} 
                alt="Лайк"
                style={{
                  width: '32px',
                  height: '32px',
                  display: 'block'
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Readart;