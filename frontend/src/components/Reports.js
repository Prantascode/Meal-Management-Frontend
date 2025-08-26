import React, { useState } from 'react';

const Reports = ({ reports, refreshData }) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleGenerateReport = () => {
    // In a real app, you would call your API here
    console.log('Generating report for:', selectedMonth, selectedYear);
    refreshData();
  };

  return (
    <div>
      <div className="header bg-white rounded-lg shadow-sm p-4 mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-primary">Monthly Reports</h2>
        <div className="flex items-center space-x-2">
          <select 
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select 
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
          <button 
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={handleGenerateReport}
          >
            <i className="fas fa-download mr-2"></i> Generate Report
          </button>
        </div>
      </div>
      
      <div className="content-section p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Meals</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Deposits</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Expense</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Per Meal Cost</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reports.map(report => (
                <tr key={report.memberId}>
                  <td className="px-4 py-4 whitespace-nowrap">{report.memberName}</td>
                  <td className="px-4 py-4 whitespace-nowrap">{report.month}/{report.year}</td>
                  <td className="px-4 py-4 whitespace-nowrap">{report.totalMeals}</td>
                  <td className="px-4 py-4 whitespace-nowrap">₹{report.totalDeposits.toFixed(2)}</td>
                  <td className="px-4 py-4 whitespace-nowrap">₹{report.totalExpense.toFixed(2)}</td>
                  <td className={`px-4 py-4 whitespace-nowrap ${report.balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ₹{Math.abs(report.balance).toFixed(2)} {report.balance >= 0 ? '(Credit)' : '(Debit)'}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">₹{report.perMealCost.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            {reports.length === 0 && (
              <tbody>
                <tr>
                  <td colSpan="7" className="px-4 py-4 text-center text-gray-500">
                    No reports found. Generate a report to see data.
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

export default Reports;