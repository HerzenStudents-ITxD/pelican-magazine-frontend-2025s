import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Article_preview from '../components/article_prev';
import Top_users from '../components/top_users';
import Top_guests from '../components/top_guests';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <div className="mt-4">
        <Top_guests />
      </div>

      {/* Основное содержимое страницы */}
      <div className="mt-4">
        <Article_preview />
      </div>
    </div>
  );
};

export default Home;