// src/components/Register.js
import React from 'react';

const Register = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2 style={{ fontSize: '36px' }}>Register</h2>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label style={{ fontSize: '18px', margin: '10px 0' }}>
          First Name:
          <input type="text" required style={{ marginLeft: '10px', padding: '10px', fontSize: '16px' }} />
        </label>
        
        <label style={{ fontSize: '18px', margin: '10px 0' }}>
          Last Name:
          <input type="text" required style={{ marginLeft: '10px', padding: '10px', fontSize: '16px' }} />
        </label>
        
        <label style={{ fontSize: '18px', margin: '10px 0' }}>
          Phone Number:
          <input type="tel" required style={{ marginLeft: '10px', padding: '10px', fontSize: '16px' }} />
        </label>
        
        <label style={{ fontSize: '18px', margin: '10px 0' }}>
          Email:
          <input type="email" required style={{ marginLeft: '10px', padding: '10px', fontSize: '16px' }} />
        </label>
        
        <label style={{ fontSize: '18px', margin: '10px 0' }}>
          Password:
          <input type="password" required style={{ marginLeft: '10px', padding: '10px', fontSize: '16px' }} />
        </label>
        
        <label style={{ fontSize: '18px', margin: '10px 0' }}>
          Confirm Password:
          <input type="password" required style={{ marginLeft: '10px', padding: '10px', fontSize: '16px' }} />
        </label>
        
        <button type="submit" style={{ 
          marginTop: '20px', 
          backgroundColor: 'blue', 
          color: 'white', 
          padding: '15px 30px', 
          fontSize: '20px', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
