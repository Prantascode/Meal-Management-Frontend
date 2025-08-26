import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fa-tachometer-alt' },
    { id: 'members', label: 'Members', icon: 'fa-users' },
    { id: 'meals', label: 'Meals', icon: 'fa-utensils' },
    { id: 'expenses', label: 'Expenses', icon: 'fa-receipt' },
    { id: 'deposits', label: 'Deposits', icon: 'fa-money-bill-wave' },
    { id: 'reports', label: 'Reports', icon: 'fa-chart-bar' },
  ];

  return (
    <div className="sidebar w-64 text-white min-h-screen fixed left-0 top-0">
      <div className="logo text-center py-6 text-xl font-bold">
        <i className="fas fa-utensils mr-2"></i> Mess Manager
      </div>
      <nav className="mt-6">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`w-full text-left py-3 px-6 flex items-center transition-all ${
              activeTab === item.id 
                ? 'bg-white bg-opacity-10 text-white' 
                : 'text-white text-opacity-80 hover:bg-white hover:bg-opacity-5'
            }`}
            onClick={() => setActiveTab(item.id)}
          >
            <i className={`fas ${item.icon} mr-3 w-5 text-center`}></i>
            {item.label}
          </button>
        ))}
      </nav>
      <div className="user-info mt-8 pt-6 border-t border-white border-opacity-10 px-6 text-center">
        <div className="font-medium">Welcome, Admin</div>
        <small className="text-white text-opacity-70">Last login: Today</small>
      </div>
    </div>
  );
};

export default Sidebar;