import React from 'react'

const CustomerInsights: React.FC = () => {
  return (
    <section className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-gray-400 font-semibold tracking-wide uppercase">Insights</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Get Actionable Insights at Every Step
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Dynamic dashboards, real-time analytics, and trend reports help you understand your customers better.
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300">
          <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center mb-8">
            <p className="text-gray-400 text-lg">Interactive Dashboard Placeholder</p>
          </div>
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">Customer Behavior Trends</h3>
          <p className="text-gray-400 text-lg">
            This dashboard shows real-time data on customer behavior, purchase patterns, and engagement metrics.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CustomerInsights