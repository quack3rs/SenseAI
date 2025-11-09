import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const SWOTAnalysisView: React.FC = () => {
  const [currentAlert, setCurrentAlert] = useState<string | null>(null);

  // Enhanced KPI data with year-over-year comparisons
  const kpiMetrics = {
    // Login metrics - last year vs current year
    loginMetrics: {
      currentYear: 45678,
      lastYear: 38942,
      growth: 17.3
    },
    // Productive calls - last year vs current year  
    productiveCalls: {
      currentYear: 12450,
      lastYear: 10890,
      growth: 14.3
    },
    conversionRate: 4.1,
    totalPurchases: 1931,
    avgOrderValue: 127.50,
    customerSatisfaction: 87.3,
    revenue: 246202,
    monthlyGrowth: 12.5,
    // Products reviewed vs ordered
    productMetrics: {
      reviewed: 8945,
      ordered: 2178,
      conversionFromReview: 24.3
    }
  };

  // Monthly segmentation data for seasonality analysis
  const seasonalityData = [
    { month: 'Jan', logins: 3820, calls: 980, sales: 145, reviews: 720, orders: 165 },
    { month: 'Feb', logins: 3654, calls: 920, sales: 132, reviews: 689, orders: 158 },
    { month: 'Mar', logins: 4125, calls: 1095, sales: 178, reviews: 834, orders: 195 },
    { month: 'Apr', logins: 3987, calls: 1050, sales: 165, reviews: 798, orders: 182 },
    { month: 'May', logins: 4456, calls: 1180, sales: 198, reviews: 912, orders: 220 },
    { month: 'Jun', logins: 4890, calls: 1290, sales: 225, reviews: 987, orders: 245 },
    { month: 'Jul', logins: 5124, calls: 1340, sales: 245, reviews: 1045, orders: 268 },
    { month: 'Aug', logins: 4798, calls: 1265, sales: 235, reviews: 978, orders: 255 },
    { month: 'Sep', logins: 4234, calls: 1120, sales: 189, reviews: 856, orders: 198 },
    { month: 'Oct', logins: 3956, calls: 1045, sales: 172, reviews: 802, orders: 185 },
    { month: 'Nov', logins: 3789, calls: 1005, sales: 168, reviews: 765, orders: 178 },
    { month: 'Dec', logins: 4568, calls: 1225, sales: 198, reviews: 924, orders: 215 }
  ];

  // Survey results data (1-5 stars)
  const surveyResults = [
    { stars: 5, count: 1892, percentage: 45.2, label: 'Excellent' },
    { stars: 4, count: 1345, percentage: 32.1, label: 'Good' },
    { stars: 3, count: 578, percentage: 13.8, label: 'Average' },
    { stars: 2, count: 234, percentage: 5.6, label: 'Poor' },
    { stars: 1, count: 138, percentage: 3.3, label: 'Very Poor' }
  ];

  // Keywords analysis data
  const keywordsData = [
    { keyword: 'easy to use', frequency: 847, sentiment: 'positive', impact: 'high' },
    { keyword: 'fast delivery', frequency: 723, sentiment: 'positive', impact: 'high' },
    { keyword: 'great support', frequency: 612, sentiment: 'positive', impact: 'medium' },
    { keyword: 'expensive', frequency: 445, sentiment: 'negative', impact: 'medium' },
    { keyword: 'confusing', frequency: 234, sentiment: 'negative', impact: 'high' },
    { keyword: 'slow response', frequency: 198, sentiment: 'negative', impact: 'high' },
    { keyword: 'love it', frequency: 567, sentiment: 'positive', impact: 'high' },
    { keyword: 'recommend', frequency: 489, sentiment: 'positive', impact: 'high' }
  ];

  // AFI (Areas for Improvement) triggers
  const afiTriggers = [
    { 
      area: 'Response Time', 
      currentScore: 3.2, 
      target: 4.5, 
      priority: 'High',
      action: 'Implement automated chat responses for common queries'
    },
    { 
      area: 'Product Discovery', 
      currentScore: 3.8, 
      target: 4.2, 
      priority: 'Medium',
      action: 'Enhance search algorithm and recommendation engine'
    },
    { 
      area: 'Checkout Process', 
      currentScore: 4.1, 
      target: 4.6, 
      priority: 'High',
      action: 'Simplify checkout flow and add guest checkout option'
    },
    { 
      area: 'Mobile Experience', 
      currentScore: 3.9, 
      target: 4.4, 
      priority: 'Medium',
      action: 'Optimize mobile app performance and UI'
    }
  ];

  // Positive trends for sustainable goals
  const positiveGoals = [
    {
      goal: 'Customer Retention Rate',
      current: 84.2,
      target: 90.0,
      trend: '+5.3% YoY',
      sustainability: 'Green Initiative: Eco-friendly packaging'
    },
    {
      goal: 'Employee Satisfaction',
      current: 87.8,
      target: 92.0,
      trend: '+8.1% YoY',
      sustainability: 'Remote work flexibility and mental health support'
    },
    {
      goal: 'Carbon Footprint Reduction',
      current: 23.4,
      target: 40.0,
      trend: '+12.8% reduction',
      sustainability: 'Renewable energy and sustainable sourcing'
    }
  ];

  // Store-wise sales data for ticker
  const storeWiseSales = [
    { store: 'Downtown', sales: 15420, growth: '+12%' },
    { store: 'Mall Plaza', sales: 18750, growth: '+8%' },
    { store: 'Online', sales: 45890, growth: '+25%' },
    { store: 'Westside', sales: 12340, growth: '+5%' }
  ];

  // Ticker alerts system
  const tickerAlerts = [
    '🎉 500th visitor milestone reached! Welcome bonus activated.',
    '💰 High-value order alert: $1,247 purchase from Premium customer!',
    '📊 Downtown store: $2,450 in last hour (+15% vs yesterday)',
    '🔥 Flash sale update: 234 items sold in past 60 minutes',
    '⭐ New 5-star review: "Outstanding customer service experience!"',
    '📈 Mall Plaza store: $3,120 hourly sales (Best performing location)',
    '🚀 Conversion rate spike: 6.2% in past hour (above target!)',
    '💳 Large order processed: $1,890 enterprise customer purchase'
  ];

  // Rotating ticker effect
  useEffect(() => {
    let alertIndex = 0;
    const interval = setInterval(() => {
      setCurrentAlert(tickerAlerts[alertIndex]);
      alertIndex = (alertIndex + 1) % tickerAlerts.length;
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const conversionData = [
    { month: 'Jan', rate: 2.4, purchases: 245 },
    { month: 'Feb', rate: 2.8, purchases: 287 },
    { month: 'Mar', rate: 3.2, purchases: 324 },
    { month: 'Apr', rate: 2.9, purchases: 295 },
    { month: 'May', rate: 3.6, purchases: 362 },
    { month: 'Jun', rate: 4.1, purchases: 418 },
  ];

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
        {/* Moving Ticker Alerts */}
        <div className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center">
            <span className="bg-white text-blue-600 px-2 py-1 rounded text-sm font-semibold mr-4">LIVE</span>
            <div className="marquee whitespace-nowrap">
              <span className="text-lg font-medium">{currentAlert}</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Business Intelligence Dashboard
        </h1>

        {/* Enhanced KPI Metrics Section with Year-over-Year */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Logins (YoY)</h3>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{kpiMetrics.loginMetrics.currentYear.toLocaleString()}</p>
            <p className="text-green-600 dark:text-green-400 text-sm">+{formatPercentage(kpiMetrics.loginMetrics.growth)} vs {kpiMetrics.loginMetrics.lastYear.toLocaleString()} last year</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Productive Calls (YoY)</h3>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">{kpiMetrics.productiveCalls.currentYear.toLocaleString()}</p>
            <p className="text-green-600 dark:text-green-400 text-sm">+{formatPercentage(kpiMetrics.productiveCalls.growth)} vs {kpiMetrics.productiveCalls.lastYear.toLocaleString()} last year</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Products Reviewed</h3>
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{kpiMetrics.productMetrics.reviewed.toLocaleString()}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{kpiMetrics.productMetrics.ordered.toLocaleString()} orders ({formatPercentage(kpiMetrics.productMetrics.conversionFromReview)} conversion)</p>
          </div>

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
        </div>

        {/* Seasonality Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Monthly Trends - Seasonality Analysis</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={seasonalityData}>
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
                <Area type="monotone" dataKey="logins" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                <Area type="monotone" dataKey="calls" stackId="2" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                <Area type="monotone" dataKey="sales" stackId="3" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Store-wise Performance</h3>
            <div className="space-y-4">
              {storeWiseSales.map((store, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{store.store}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Hourly average</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600 dark:text-green-400">{formatCurrency(store.sales)}</p>
                    <p className="text-sm text-green-600 dark:text-green-400">{store.growth}</p>
                  </div>
                </div>
              ))}
            </div>
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

        {/* Survey Results (1-5 Stars) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Customer Survey Results</h3>
            <div className="space-y-4">
              {surveyResults.map((result, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`text-lg ${i < result.stars ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">({result.label})</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2 mr-3">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${result.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white w-16 text-right">
                      {result.count} ({result.percentage}%)
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Keywords Analysis */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Keywords Analysis</h3>
            <div className="space-y-3">
              {keywordsData.map((keyword, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">{keyword.keyword}</span>
                    <div className="flex items-center mt-1">
                      <span className={`px-2 py-1 rounded text-xs ${
                        keyword.sentiment === 'positive' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                          : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                      }`}>
                        {keyword.sentiment}
                      </span>
                      <span className={`ml-2 px-2 py-1 rounded text-xs ${
                        keyword.impact === 'high' 
                          ? 'bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100'
                      }`}>
                        {keyword.impact} impact
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">{keyword.frequency}</span>
                    <p className="text-xs text-gray-500 dark:text-gray-400">mentions</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AFI Triggers and Positive Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* AFI (Areas for Improvement) Triggers */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🎯 AFI Strategy Triggers</h3>
            <div className="space-y-4">
              {afiTriggers.map((afi, index) => (
                <div key={index} className="p-4 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 rounded-r-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{afi.area}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      afi.priority === 'High' 
                        ? 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                    }`}>
                      {afi.priority} Priority
                    </span>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Current: {afi.currentScore}/5</span>
                      <span className="text-gray-600 dark:text-gray-400">Target: {afi.target}/5</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-1">
                      <div 
                        className="bg-orange-500 h-2 rounded-full" 
                        style={{ width: `${(afi.currentScore / afi.target) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{afi.action}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Positive Trends for Sustainable Goals */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🌱 Sustainable Goals Progress</h3>
            <div className="space-y-4">
              {positiveGoals.map((goal, index) => (
                <div key={index} className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 rounded-r-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{goal.goal}</h4>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Current: {goal.current}% | Target: {goal.target}%
                    </span>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">{goal.trend}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${(goal.current / goal.target) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 italic">{goal.sustainability}</p>
                </div>
              ))}
            </div>
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