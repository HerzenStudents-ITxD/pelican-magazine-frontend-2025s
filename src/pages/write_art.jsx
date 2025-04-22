import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Writeart = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [section1, setSection1] = useState("");
  const [section2, setSection2] = useState("");

  return (
    <div className="container-fluid p-4" style={{ backgroundColor: "#f7f9fc", minHeight: "100vh" }}>
      {/* Шапка */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 style={{ color: "#003399", fontWeight: "bold" }}>ПЕЛИКАН</h2>
        <div>
          <button className="btn btn-link" onClick={() => navigate("/mainreg")}>Статьи</button>
          <button className="btn btn-link">Авторы</button>
          <button className="btn btn-link">Конспекты</button>
          <button className="btn btn-outline-primary me-2" onClick={() => navigate("/profile")}>Профиль</button>
          <button className="btn btn-outline-primary" onClick={() => navigate("/main")}>Выйти</button>
        </div>
      </div>

      <div className="row">
        {/* Левая колонка */}
        <div className="col-md-3 text-center mb-4">
          <img src="/avatar.jpg" alt="Аватар" className="img-fluid rounded-circle mb-2" style={{ maxWidth: "150px" }} />
          <h5>Елена Иглина</h5>
          <div className="my-3">
            <p style={{ fontWeight: "bold" }}>Выберите до 3 вариантов</p>
            <button className="btn btn-outline-primary btn-sm m-1">Искусство</button>
            <button className="btn btn-outline-primary btn-sm m-1">Наука</button>
            <button className="btn btn-outline-primary btn-sm m-1">РГПУ</button>
          </div>
          <p style={{ fontWeight: "bold" }}>Выберите ограничение по возрасту</p>
          <div className="d-flex flex-wrap justify-content-center">
            {["0+", "6+", "12+", "16+", "18+"].map((age, i) => (
              <button key={i} className="btn btn-outline-primary btn-sm m-1">{age}</button>
            ))}
          </div>
        </div>

        {/* Центральная часть */}
        <div className="col-md-9">
          <div className="p-3 mb-3" style={{ background: "linear-gradient(to right, #2c3e50, #3498db)", borderRadius: "10px", color: "#fff" }}>
            <h3>Заголовок</h3>
            <input
              type="text"
              className="form-control form-control-lg mt-2"
              placeholder="Введите заголовок статьи"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <h5>Пересказ статьи за 1 минуту</h5>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Напишите краткий пересказ..."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-3">
            <h5>Историческая справка</h5>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Добавьте текст..."
              value={section1}
              onChange={(e) => setSection1(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4">
            <h5>Раздел 2</h5>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Добавьте текст..."
              value={section2}
              onChange={(e) => setSection2(e.target.value)}
            ></textarea>
          </div>

          <button className="btn btn-primary w-100 py-2" onClick={() => navigate("/mainreg")}>Опубликовать</button>
        </div>
      </div>
    </div>
  );
};

export default Writeart;