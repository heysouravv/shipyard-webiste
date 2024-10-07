import React from 'react'

const PersonalizedOffers: React.FC = () => {
  return (
    <section className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-gray-400 font-semibold tracking-wide uppercase">Personalization</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Tailor Your Offers for Each Customer
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Offer personalized discounts and recommendations based on each customer's profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">Customer A: High-value shopper</h3>
            <p className="text-gray-400 text-lg mb-6">Receives a 10% discount on premium goods</p>
            <a href="#" className="text-gray-300 hover:text-gray-100 transition duration-300 text-lg">
              Learn more about high-value customer strategies
            </a>
          </div>
          <div className="bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">Customer B: Budget-conscious shopper</h3>
            <p className="text-gray-400 text-lg mb-6">Gets a buy-one-get-one-free deal on selected items</p>
            <a href="#" className="text-gray-300 hover:text-gray-100 transition duration-300 text-lg">
              Explore budget-friendly marketing tactics
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalizedOffers