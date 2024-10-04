// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/D.png'; // Ensure the path to your logo is correct

const Home = () => {
  // State for the counts
  const [studentsAppearing, setStudentsAppearing] = useState(0);
  const [studentsCleared, setStudentsCleared] = useState(0);

  useEffect(() => {
    const appearingInterval = setInterval(() => {
      setStudentsAppearing((prev) => {
        if (prev < 1415100) {
          return prev + 1000; 
        }
        clearInterval(appearingInterval);
        return prev;
      });
    }, 10);

    const clearedInterval = setInterval(() => {
      setStudentsCleared((prev) => {
        if (prev < 49164) {
          return prev + 100; 
        }
        clearInterval(clearedInterval);
        return prev;
      });
    }, 20);

    return () => {
      clearInterval(appearingInterval);
      clearInterval(clearedInterval);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      {/* Navigation Bar */}
      <nav style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          backgroundColor: '#F8F8F8', 
          padding: '10px 20px', 
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
        }}>
        {/* Adjusted logo size */}
        <img src={logo} alt="Website Logo" style={{ height: '40px', width: 'auto' }} />

        {/* Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* All Courses Button with only border blue */}
          <Link to="/courses" style={{
              display: 'inline-block',
              border: '2px solid blue',
              backgroundColor: 'transparent', // Make background transparent
              color: 'blue', // Text color blue
              padding: '10px 20px',
              borderRadius: '5px',
              textDecoration: 'none',
              fontSize: '18px',
              marginLeft: '8px', // Reduced space to approximately 2cm
              fontWeight: 'bold',
              transition: 'background-color 0.3s',
            }}>
            All Courses
          </Link>

          {/* Quizzes Button */}
          <Link to="/quizzes" style={{
              display: 'inline-block',
              color: 'black',
              padding: '10px 20px',
              textDecoration: 'none',
              fontSize: '18px',
              marginLeft: '20px', // Space between buttons
              fontWeight: 'bold',
            }}>
            Quizzes
          </Link>

          {/* WD Store (Books) Button */}
          <Link to="/store" style={{
              display: 'inline-block',
              color: 'black',
              padding: '10px 20px',
              textDecoration: 'none',
              fontSize: '18px',
              marginLeft: '20px', // Space between buttons
              fontWeight: 'bold',
            }}>
            WD Store (Books)
          </Link>

          {/* Login button on the left */}
          <Link to="/login" style={{
            backgroundColor: '#4F46E5', 
            color: 'white', 
            padding: '10px 20px', 
            borderRadius: '5px', 
            textDecoration: 'none', 
            marginLeft: '15px',
          }}>
            Login
          </Link>
        </div>
      </nav>

      <h1 style={{ fontSize: '48px', margin: '20px 0', fontWeight: 'bold' }}>
        Welcome to Web DailiGo
      </h1>
      <p style={{ fontSize: '24px', margin: '20px 0', color: '#333' }}>
        Your one-stop platform for managing your learning experience.
        <br />
        Whether you're a new student or a returning learner, we have something for you!
      </p>

      {/* Statistics Section */}
      <div style={{ marginTop: '50px' }}>
        <h2 style={{ fontSize: '36px', color: '#333' }}>Statistics</h2>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <div style={{
              backgroundColor: '#f0f0f0',
              color: '#333',
              padding: '20px',
              borderRadius: '5px',
              margin: '0 20px',
              fontSize: '24px',
              width: '250px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
            <h3>Students Appearing for JEE:</h3>
            <p style={{ fontSize: '48px', fontWeight: 'bold' }}>{studentsAppearing}</p>
          </div>
          <div style={{
              backgroundColor: '#f0f0f0',
              color: '#333',
              padding: '20px',
              borderRadius: '5px',
              margin: '0 20px',
              fontSize: '24px',
              width: '250px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
            <h3>Students Cleared Exam:</h3>
            <p style={{ fontSize: '48px', fontWeight: 'bold' }}>{studentsCleared}</p>
          </div>
        </div>
      </div>

      <p style={{ fontSize: '20px', margin: '20px 0', color: '#333' }}>
        New here? Register now and start your journey!
      </p>
      <p style={{ 
          fontSize: '18px', 
          margin: '20px 0', 
          maxWidth: '800px', 
          marginLeft: 'auto', 
          marginRight: 'auto',
          color: '#555' 
        }}>
        We’re dedicated to guiding JEE aspirants toward their goals with a structured, organized approach. 
        Let us turn your confusion into a clear, step-by-step plan for exam success. Join us today and unlock your true potential!
      </p>

      {/* Register button centered in the middle */}
      <Link to="/register" style={{
          display: 'inline-block',
          backgroundColor: '#4F46E5', 
          color: 'white', 
          padding: '15px 30px', 
          borderRadius: '5px', 
          textDecoration: 'none',
          marginTop: '30px',
          fontSize: '18px',
        }}>
        Register
      </Link>

      {/* Footer Section */}
      <footer style={{
          backgroundColor: '#333',
          color: 'white',
          padding: '20px 0',
          position: 'relative',
          marginTop: '40px',
          textAlign: 'center',
        }}>
        <p>&copy; {new Date().getFullYear()} Web DailiGo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
