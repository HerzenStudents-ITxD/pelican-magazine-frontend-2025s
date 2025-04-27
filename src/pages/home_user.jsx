import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Article_preview from '../components/article_prev';
import Avatar from '../components/avatar';
import Top_users from '../components/top_users';

const Homereg = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <div className="mt-4">
        <Top_users />
      </div>

      {/* Основное содержимое страницы */}
      <div className="mt-4">
        <Article_preview />
      </div>
    </div>
  );
};

export default Homereg;