const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const fetchResource = async () => {
  try {
    const response = await fetch(`${API_URL}/api/resource`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching resource:', error);
    throw error;
  }
};