import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    setIsLoading(true);
    
    try {
      // Здесь будет запрос к API для регистрации
      // await registerUser(formData);
      navigate('/email-confirmation', { 
        state: { 
          email: formData.email,
          name: formData.name 
        } 
      });
    } catch (err) {
      setError(err.message || 'Ошибка при регистрации');
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
            alt="registration background" 
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
              Регистрация
            </h2>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control form-control-lg" 
                  placeholder="ФИО" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input 
                  type="email" 
                  className="form-control form-control-lg" 
                  placeholder="Email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input 
                  type="tel" 
                  className="form-control form-control-lg" 
                  placeholder="+7 (___) ___-__-__" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input 
                  type="password" 
                  className="form-control form-control-lg" 
                  placeholder="Пароль" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <input 
                  type="password" 
                  className="form-control form-control-lg" 
                  placeholder="Повторите пароль" 
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-primary w-100 py-2 mb-3"
                disabled={isLoading}
                style={{ backgroundColor: "#003896", borderColor: "#003896" }}
              >
                {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
              </button>
              <div className="text-center">
                <button 
                  type="button" 
                  className="btn btn-link p-0"
                  onClick={() => navigate("/signin")}
                  style={{ fontSize: "0.9rem", color: "#003896" }}
                >
                  Уже есть аккаунт
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;