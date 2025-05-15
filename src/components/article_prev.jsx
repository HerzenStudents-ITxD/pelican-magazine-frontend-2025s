import React from "react";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import apiClient from '../api/client';

const Article_preview = () => {
  const navigate = useNavigate(); // Добавлен хук useNavigate

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
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="/pelican-magazine/lemons.jpg" />
      <Card.Body>
        <Button
          className="btn btn-link p-0"
          onClick={(e) => {
            e.preventDefault();
            navigate("/readart");
          }}
          style={{ 
            fontWeight: 500,
            color: 'black'
          }}
        >
          Лимоны чето там
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Article_preview;