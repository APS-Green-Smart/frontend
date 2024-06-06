import { useState } from 'react';
import { jwtDecode, JwtPayload } from 'jwt-decode';

interface DecodedToken {
    sub: string;
    cnpj: string;
    exp: number;
  }
  
  const useAuth = () => {
    const isAuthenticated = () => {
      const token = localStorage.getItem('token');
      if (!token) return false;
      try {
        const decodedToken: DecodedToken = jwtDecode(token);
        return decodedToken.exp > Date.now() / 1000;
      } catch (error) {
        console.error('Failed to decode token:', error);
        return false;
      }
    };
  
    const login = async (email: string, password: string) => {
      try {
        const response = await fetch('http://127.0.0.1:8080/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) throw new Error('Login failed');
  
        const data = await response.json();
        localStorage.setItem('token', data.token);
  
        return true;
      } catch (error) {
        console.error('Login error:', error);
        return false;
      }
    };
  
    const getUserInfo = () => {
      const token = localStorage.getItem('token');
      if (!token) return null;
      try {
        const decodedToken: DecodedToken = jwtDecode(token);
        return { email: decodedToken.sub, cnpj: decodedToken.cnpj };
      } catch (error) {
        console.error('Failed to decode token:', error);
        return null;
      }
    };
  
    const logout = () => {
      localStorage.removeItem('token');
    };
  
    return { isAuthenticated, login, getUserInfo, logout };
  };
  
  export default useAuth;
