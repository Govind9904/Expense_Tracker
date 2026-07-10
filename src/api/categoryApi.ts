import api from './axios';

export const getCategories = () => {
  return api.post('/categories');
};

export const createCategory = (categoryName: string) => {
  return api.post('/add/category', {
    categoryName,
  });
};