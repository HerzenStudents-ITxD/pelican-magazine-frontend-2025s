import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const EmailConfirmation = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const { email, name } = location.state || { email: 'your@email.com', name: 'Пользователь' };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Здесь будет запрос к API для проверки кода
      // await verifyEmailCode({ email, code });
      navigate('/mainreg', { state: { email, name } });
    } catch (err) {
      setError('Неверный код подтверждения');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      // await resendVerificationCode(email);
      alert('Новый код отправлен на вашу почту');
    } catch (err) {
      setError('Ошибка при отправке кода');
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
              Подтверждение Email
            </h2>

            <p className="text-center mb-4">
              Мы отправили код подтверждения на <br/><strong>{email}</strong>
            </p>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Введите 6-значный код"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                />
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-100 py-2 mb-3"
                disabled={isLoading}
                style={{ backgroundColor: "#003896", borderColor: "#003896" }}
              >
                {isLoading ? 'Проверка...' : 'Подтвердить'}
              </button>
              
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-link p-0"
                  onClick={handleResend}
                  style={{ fontSize: "0.9rem", color: "#003896" }}
                >
                  Отправить код повторно
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmation;