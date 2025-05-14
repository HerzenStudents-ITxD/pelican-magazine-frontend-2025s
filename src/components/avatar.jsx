import React from "react";
import { useEffect, useState } from 'react';
import apiClient from '../api/client';

const Avatar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await apiClient.get('/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    fetchUsers();
  }, []);
  
  return (
    <div style={{ 
      position: 'relative',
      width: '150px',
      height: '150px',
    }}>
      {/* Основное фото (круглое) */}
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '3px solid white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <img 
          src="/avatar.jpg" 
          alt="Аватар" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }} 
        />
      </div>
      
      {/* Шляпа (полностью видна) */}
      <img 
        src="/hat.jpg" 
        alt="Шляпа" 
        style={{
          position: 'absolute',
          right: '0',
          bottom: '0',
          //top: '5',
          width: '45px',
          height: '45px',
          //borderRadius: '50%',
          //border: '2px solid white',
          //boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          transform: 'translate(25%, 25%)'
        }} 
      />
    </div>
  );
};

export default Avatar;