import React, { createContext, useState, useContext } from 'react';

const LikedArticlesContext = createContext();

export const LikedArticlesProvider = ({ children }) => {
  const [likedArticles, setLikedArticles] = useState([]);

  const addLikedArticle = (article) => {
    setLikedArticles(prev => [...prev, article]);
  };

  const removeLikedArticle = (articleId) => {
    setLikedArticles(prev => prev.filter(item => item.id !== articleId));
  };

  const isArticleLiked = (articleId) => {
    return likedArticles.some(item => item.id === articleId);
  };

  return (
    <LikedArticlesContext.Provider 
      value={{ likedArticles, addLikedArticle, removeLikedArticle, isArticleLiked }}
    >
      {children}
    </LikedArticlesContext.Provider>
  );
};

export const useLikedArticles = () => {
  return useContext(LikedArticlesContext);
};