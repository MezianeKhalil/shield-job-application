import React from 'react'

import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <nav className="bg-opacity-80 h-16 absolute top-0 w-full">
        <div className="container mx-auto max-w-5xl flex justify-between align-middle items-center h-full">
            <Link to="/" className="text-white text-xl font-semibold">Shield</Link>
            <ul className="flex gap-3">
                <li>
                    <Link to="/login" className="rounded font-medium py-2 px-4 text-white">Login</Link>
                </li>
                <li>
                    <Link to="/register" className="bg-blue-600 text-white rounded font-medium py-2 px-4">Register</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}