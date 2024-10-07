import React from 'react'

const CallToAction: React.FC = () => {
  return (
    <section className="section-padding bg-gray-900">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl mb-8">
          See Shipyard in Action
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Book a demo to experience how Shipyard can unify your customer data and transform your business.
        </p>
        <a
          href="#"
          className="btn-primary bg-gray-800 text-gray-100 hover:bg-gray-700 text-lg px-8 py-4"
        >
          Request a Demo
        </a>
      </div>
    </section>
  )
}

export default CallToAction