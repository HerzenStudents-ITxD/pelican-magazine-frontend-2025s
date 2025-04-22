import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Forgot_password = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid vh-20 p-0">
      <div className="row g-0 h-100">

        {/* Левая часть с фото */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img 
            src="/bg_registration.jpg" 
            alt="password recovery background" 
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
                color: "#007bff", 
                fontFamily: "Montserrat, sans-serif", 
                fontWeight: 600, 
                textTransform: "uppercase"
              }}
            >
              Восстановление пароля
            </h2>

            <form>
              <div className="mb-4">
                <input 
                  type="email" 
                  className="form-control form-control-lg" 
                  placeholder="Введите ваш email" 
                />
              </div>
              <button 
                type="button" 
                className="btn btn-primary w-100 py-2 mb-3"
                onClick={() => navigate("/newpass")}
              >
                Сбросить пароль
              </button>
              <div className="text-center">
                <button 
                  type="button" 
                  className="btn btn-link p-0"
                  onClick={() => navigate("/register")}
                  style={{ fontSize: "0.9rem" }}
                >
                  Зарегистрироваться
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot_password;