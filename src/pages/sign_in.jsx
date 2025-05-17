import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Sign_in = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Здесь будет запрос к API для входа
      // const response = await login({ email, password });
      
      // Имитация ответа с требованием 2FA
      navigate('/twofa-verify', { state: { email } });
    } catch (err) {
      setError('Неверный email или пароль');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid vh-20 p-0">
      <div className="row g-0 h-100">
        {/* Левая часть с фото */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img 
            src="/pelican-magazine/bg_registration.jpg" 
            alt="login background" 
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
                color: "#003896", 
                fontFamily: "Montserrat, sans-serif", 
                fontWeight: 600, 
                textTransform: "uppercase"
              }}
            >
              Вход в профиль
            </h2>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input 
                  type="email" 
                  className="form-control form-control-lg" 
                  placeholder="Email или номер телефона" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input 
                  type="password" 
                  className="form-control form-control-lg" 
                  placeholder="Пароль" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 text-end">
                <button 
                  type="button" 
                  className="btn btn-link p-0"
                  onClick={() => navigate("/forgotpass")}
                  style={{ fontSize: "0.9rem", color: "#B1C4E5" }}
                >
                  Забыли пароль?
                </button>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary w-100 py-2 mb-3"
                disabled={isLoading}
                style={{ fontSize: "0.9rem", backgroundColor: "#003896" }}
              >
                {isLoading ? 'Вход...' : 'Войти в профиль'}
              </button>
              <div className="text-center">
                <button 
                  type="button" 
                  className="btn btn-link p-0"
                  onClick={() => navigate("/register")}
                  style={{ fontSize: "0.9rem", color: "#003896" }}
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

export default Sign_in;