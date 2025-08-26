import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Members from './components/Members';
import Meals from './components/Meals';
import Expenses from './components/Expenses';
import Deposits from './components/Deposits';
import Reports from './components/Reports';
import { getMembers, getMeals, getExpenses, getDeposits, getReports } from './service/api';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [members, setMembers] = useState([]);
  const [meals, setMeals] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [deposits, setDeposits] = useState([]);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [membersData, mealsData, expensesData, depositsData, reportsData] = await Promise.all([
        getMembers(),
        getMeals(),
        getExpenses(),
        getDeposits(),
        getReports()
      ]);
      
      setMembers(membersData);
      setMeals(mealsData);
      setExpenses(expensesData);
      setDeposits(depositsData);
      setReports(reportsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      );
    }

    switch(activeTab) {
      case 'dashboard': 
        return <Dashboard members={members} meals={meals} expenses={expenses} deposits={deposits} />;
      case 'members': 
        return <Members members={members} refreshData={fetchData} />;
      case 'meals': 
        return <Meals meals={meals} members={members} refreshData={fetchData} />;
      case 'expenses': 
        return <Expenses expenses={expenses} members={members} refreshData={fetchData} />;
      case 'deposits': 
        return <Deposits deposits={deposits} members={members} refreshData={fetchData} />;
      case 'reports': 
        return <Reports reports={reports} refreshData={fetchData} />;
      default: 
        return <Dashboard members={members} meals={meals} expenses={expenses} deposits={deposits} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 p-6 ml-64">
          {renderContent()}
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;