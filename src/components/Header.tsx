import React, { useState } from 'react'
import { Ship, Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Ship className="h-8 w-auto sm:h-10 text-gray-300" />
            <span className="ml-2 text-xl font-bold text-gray-100">Shipyard</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-base font-medium text-gray-400 hover:text-gray-200 transition duration-300">
              Features
            </a>
            <a href="#" className="text-base font-medium text-gray-400 hover:text-gray-200 transition duration-300">
              About Us
            </a>
            <a href="#" className="text-base font-medium text-gray-400 hover:text-gray-200 transition duration-300">
              Contact
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-base font-medium text-gray-400 hover:text-gray-200 transition duration-300">
              Sign in
            </a>
            <a href="#" className="btn-primary">
              Request a Demo
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-gray-200">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <a href="#" className="block py-2 text-base font-medium text-gray-400 hover:text-gray-200">Features</a>
            <a href="#" className="block py-2 text-base font-medium text-gray-400 hover:text-gray-200">About Us</a>
            <a href="#" className="block py-2 text-base font-medium text-gray-400 hover:text-gray-200">Contact</a>
            <a href="#" className="block py-2 text-base font-medium text-gray-400 hover:text-gray-200">Sign in</a>
            <a href="#" className="block py-2 btn-primary mt-4">Request a Demo</a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header