import Cookies from 'js-cookie';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api';

const jwtToken = Cookies.get('jwt_token');


export const retrive = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/user-list`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to Load data');
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error('Failed to register');
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

