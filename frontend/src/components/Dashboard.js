import React from 'react';

const Dashboard = ({ members, meals, expenses, deposits }) => {
  const activeMembers = members.filter(m => m.active).length;
  const today = new Date().toISOString().split('T')[0];
  const todayMeals = meals.filter(m => m.date === today).length;
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const totalDeposits = deposits.reduce((sum, deposit) => sum + deposit.amount, 0);

  return (
    <div>
      <div className="header bg-white rounded-lg shadow-sm p-4 mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-primary">Dashboard</h2>
        <div className="text-gray-500">{new Date().toLocaleDateString('en-US', { 
          year: 'numeric', month: 'long', day: 'numeric' 
        })}</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="dashboard-card primary text-center p-6">
          <i className="fas fa-users text-4xl mb-3 opacity-80"></i>
          <h3 className="text-3xl font-bold">{activeMembers}</h3>
          <p>Active Members</p>
        </div>
        
        <div className="dashboard-card success text-center p-6">
          <i className="fas fa-utensils text-4xl mb-3 opacity-80"></i>
          <h3 className="text-3xl font-bold">{todayMeals}</h3>
          <p>Total Meals Today</p>
        </div>
        
        <div className="dashboard-card warning text-center p-6">
          <i className="fas fa-receipt text-4xl mb-3 opacity-80"></i>
          <h3 className="text-3xl font-bold">₹{totalExpenses.toFixed(2)}</h3>
          <p>Total Expenses</p>
        </div>
        
        <div className="dashboard-card danger text-center p-6">
          <i className="fas fa-money-bill-wave text-4xl mb-3 opacity-80"></i>
          <h3 className="text-3xl font-bold">₹{totalDeposits.toFixed(2)}</h3>
          <p>Total Deposits</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="content-section p-6">
          <h4 className="text-lg font-semibold mb-4">Recent Meals</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meal Type</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {meals.slice(0, 5).map(meal => (
                  <tr key={meal.id}>
                    <td className="px-4 py-4 whitespace-nowrap">{meal.memberName}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{meal.date}</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {meal.mealType}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="content-section p-6">
          <h4 className="text-lg font-semibold mb-4">Recent Expenses</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {expenses.slice(0, 5).map(expense => (
                  <tr key={expense.id}>
                    <td className="px-4 py-4 whitespace-nowrap">{expense.description}</td>
                    <td className="px-4 py-4 whitespace-nowrap">₹{expense.amount.toFixed(2)}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{expense.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;