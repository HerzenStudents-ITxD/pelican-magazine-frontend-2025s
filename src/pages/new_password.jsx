import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const New_password = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid vh-20 p-0">
      <div className="row g-0 h-100">
        {/* Левая часть с фото */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img 
            src="/pelican-magazine/bg_registration.jpg" 
            alt="new password background" 
            className="w-100 h-100" 
            style={{ 
              objectFit: "cover",
              objectPosition: "left center"
            }}
          />
        </div>

        {/* Правая часть с формой */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="w-100 px-5" style={{ maxWidth: "500px" }}>
            <h2 
              className="mb-4 text-center" 
              style={{
                color: "#003896", // Изменено на #003896
                fontFamily: "Montserrat, sans-serif", 
                fontWeight: 600, 
                textTransform: "uppercase"
              }}
            >
              Новый пароль
            </h2>

            <form>
              <div className="mb-3">
                <input 
                  type="password" 
                  className="form-control form-control-lg" 
                  placeholder="Новый пароль" 
                />
              </div>
              <div className="mb-4">
                <input 
                  type="password" 
                  className="form-control form-control-lg" 
                  placeholder="Повторите новый пароль" 
                />
              </div>
              <button 
                type="button" 
                className="btn btn-primary w-100 py-2 mb-3"
                onClick={() => navigate("/signin")}
                style={{ backgroundColor: "#003896", borderColor: "#003896" }} // Изменено на #003896
              >
                Сохранить пароль
              </button>
              <div className="text-center">
                <button 
                  type="button" 
                  className="btn btn-link p-0"
                  onClick={() => navigate("/register")}
                  style={{ fontSize: "0.9rem", color: "#003896" }} // Изменено на #003896
                >
                  Создать аккаунт
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New_password;