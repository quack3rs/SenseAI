import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const SWOTAnalysisView: React.FC = () => {
  // Mock data for KPI metrics
  const conversionData = [
    { month: 'Jan', rate: 2.4, purchases: 245 },
    { month: 'Feb', rate: 2.8, purchases: 287 },
    { month: 'Mar', rate: 3.2, purchases: 324 },
    { month: 'Apr', rate: 2.9, purchases: 295 },
    { month: 'May', rate: 3.6, purchases: 362 },
    { month: 'Jun', rate: 4.1, purchases: 418 },
  ];

  const kpiMetrics = {
    conversionRate: 4.1,
    totalPurchases: 1931,
    avgOrderValue: 127.50,
    customerSatisfaction: 87.3,
    revenue: 246202,
    monthlyGrowth: 12.5
  };

  const futureGoals = [
    { goal: 'Increase Conversion Rate', current: 4.1, target: 6.0, progress: 68 },
    { goal: 'Monthly Sales Volume', current: 418, target: 600, progress: 70 },
    { goal: 'Customer Satisfaction', current: 87.3, target: 95.0, progress: 92 },
    { goal: 'Average Order Value', current: 127.50, target: 150.00, progress: 85 }
  ];

  const productCategories = [
    { name: 'Electronics', value: 35, color: '#3B82F6' },
    { name: 'Clothing', value: 28, color: '#10B981' },
    { name: 'Home & Garden', value: 22, color: '#F59E0B' },
    { name: 'Books', value: 15, color: '#EF4444' }
  ];

  const swotData = {
    strengths: [
      'Strong brand reputation and customer loyalty',
      'Advanced AI-powered sentiment analysis',
      'Real-time customer feedback integration',
      'High customer satisfaction scores (87.3%)',
      'Growing conversion rates (+12.5% monthly)'
    ],
    weaknesses: [
      'Limited mobile app presence',
      'High customer acquisition costs',
      'Seasonal revenue fluctuations',
      'Limited international market penetration'
    ],
    opportunities: [
      'Expand to mobile commerce platform',
      'Implement personalized recommendation engine',
      'Enter emerging international markets',
      'Develop subscription-based services',
      'Partner with influencers and content creators'
    ],
    threats: [
      'Increased competition from major e-commerce platforms',
      'Economic downturn affecting consumer spending',
      'Supply chain disruptions',
      'Data privacy regulation changes',
      'Rising digital advertising costs'
    ]
  };

  const formatCurrency = (value: number) => `$${value.toLocaleString()}`;
  const formatPercentage = (value: number) => `${value}%`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Business Intelligence Dashboard
        </h1>

        {/* KPI Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Conversion Rate</h3>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{formatPercentage(kpiMetrics.conversionRate)}</p>
            <p className="text-green-600 dark:text-green-400 text-sm">+{formatPercentage(kpiMetrics.monthlyGrowth)} from last month</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Total Purchases</h3>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">{kpiMetrics.totalPurchases.toLocaleString()}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Last 6 months</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Revenue</h3>
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{formatCurrency(kpiMetrics.revenue)}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">YTD</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Avg Order Value</h3>
            <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">{formatCurrency(kpiMetrics.avgOrderValue)}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Per transaction</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Customer Satisfaction</h3>
            <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{formatPercentage(kpiMetrics.customerSatisfaction)}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Based on sentiment analysis</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Monthly Growth</h3>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">+{formatPercentage(kpiMetrics.monthlyGrowth)}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Conversion rate trend</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Conversion Rate Trend */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Conversion Rate Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={conversionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }} 
                />
                <Line type="monotone" dataKey="rate" stroke="#3B82F6" strokeWidth={3} dot={{ fill: '#3B82F6', strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Product Category Distribution */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Sales by Category</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={productCategories}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {productCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Future Goals Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Future Goals & Targets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureGoals.map((goal, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{goal.goal}</h4>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <span>Current: {typeof goal.current === 'number' && goal.current > 100 ? goal.current.toLocaleString() : goal.current}</span>
                  <span>Target: {typeof goal.target === 'number' && goal.target > 100 ? goal.target.toLocaleString() : goal.target}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{goal.progress}% complete</p>
              </div>
            ))}
          </div>
        </div>

        {/* SWOT Analysis Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Strengths */}
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h2 className="text-xl font-bold text-green-800 dark:text-green-300 mb-4">💪 Strengths</h2>
            <ul className="space-y-2">
              {swotData.strengths.map((item, index) => (
                <li key={index} className="text-green-700 dark:text-green-200 flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Weaknesses */}
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
            <h2 className="text-xl font-bold text-red-800 dark:text-red-300 mb-4">⚠️ Weaknesses</h2>
            <ul className="space-y-2">
              {swotData.weaknesses.map((item, index) => (
                <li key={index} className="text-red-700 dark:text-red-200 flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-2">−</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Opportunities */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4">🚀 Opportunities</h2>
            <ul className="space-y-2">
              {swotData.opportunities.map((item, index) => (
                <li key={index} className="text-blue-700 dark:text-blue-200 flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Threats */}
          <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
            <h2 className="text-xl font-bold text-orange-800 dark:text-orange-300 mb-4">⚡ Threats</h2>
            <ul className="space-y-2">
              {swotData.threats.map((item, index) => (
                <li key={index} className="text-orange-700 dark:text-orange-200 flex items-start">
                  <span className="text-orange-600 dark:text-orange-400 mr-2">!</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Strategic Recommendations */}
        <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
          <h2 className="text-2xl font-bold text-purple-800 dark:text-purple-300 mb-4">📈 Strategic Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Short-term (0-6 months)</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Optimize mobile experience</li>
                <li>• Implement A/B testing for conversion</li>
                <li>• Enhance customer support</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Medium-term (6-18 months)</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Launch mobile app</li>
                <li>• Expand product categories</li>
                <li>• Implement subscription model</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Long-term (18+ months)</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• International expansion</li>
                <li>• AI-powered personalization</li>
                <li>• Strategic partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SWOTAnalysisView;