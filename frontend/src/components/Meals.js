import React, { useState } from 'react';

const Meals = ({ meals, members, refreshData }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="header bg-white rounded-lg shadow-sm p-4 mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-primary">Meal Management</h2>
        <button 
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setShowModal(true)}
        >
          <i className="fas fa-plus mr-2"></i> Add Meal Entry
        </button>
      </div>
      
      <div className="content-section p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meal Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Count</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {meals.map(meal => (
                <tr key={meal.id}>
                  <td className="px-4 py-4 whitespace-nowrap">{meal.id}</td>
                  <td className="px-4 py-4 whitespace-nowrap">{meal.memberName}</td>
                  <td className="px-4 py-4 whitespace-nowrap">{meal.date}</td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {meal.mealType}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">{meal.mealCount}</td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <button className="text-blue-600 hover:text-blue-900 mr-2">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            {meals.length === 0 && (
              <tbody>
                <tr>
                  <td colSpan="6" className="px-4 py-4 text-center text-gray-500">
                    No meal entries found
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Meals;