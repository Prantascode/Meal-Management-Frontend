import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Members API
export const getMembers = () => api.get('/members');
export const getMember = (id) => api.get(`/members/${id}`);
export const createMember = (member) => api.post('/members', member);
export const updateMember = (id, member) => api.put(`/members/${id}`, member);
export const deactivateMember = (id) => api.delete(`/members/${id}`);

// Meals API
export const getMeals = (startDate, endDate) => 
  api.get('/meals', { params: { startDate, endDate } });
export const getMeal = (id) => api.get(`/meals/${id}`);
export const createMeal = (meal) => api.post('/meals', meal);
export const updateMeal = (id, meal) => api.put(`/meals/${id}`, meal);
export const deleteMeal = (id) => api.delete(`/meals/${id}`);
export const getTotalMeals = (startDate, endDate) =>
  api.get('/meals/total', { params: { startDate, endDate } });

// Expenses API
export const getExpenses = (startDate, endDate) =>
  api.get('/expenses', { params: { startDate, endDate } });
export const getExpense = (id) => api.get(`/expenses/${id}`);
export const createExpense = (expense) => api.post('/expenses', expense);
export const updateExpense = (id, expense) => api.put(`/expenses/${id}`, expense);
export const deleteExpense = (id) => api.delete(`/expenses/${id}`);
export const getTotalExpenses = (startDate, endDate) =>
  api.get('/expenses/total', { params: { startDate, endDate } });

// Deposits API
export const getDeposits = (startDate, endDate) =>
  api.get('/deposits', { params: { startDate, endDate } });
export const createDeposit = (memberId, amount, description) =>
  api.post('/deposits', null, { params: { memberId, amount, description } });
export const getMemberDeposits = (memberId) => api.get(`/deposits/member/${memberId}`);
export const getMemberTotalDeposits = (memberId, startDate, endDate) =>
  api.get(`/deposits/member/${memberId}/total`, { params: { startDate, endDate } });

// Reports API
export const getReports = (month, year) => api.get(`/reports/${month}/${year}`);
export const generateReport = (month, year) => api.post(`/reports/generate/${month}/${year}`);

export default api;