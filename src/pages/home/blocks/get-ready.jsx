import React from 'react'

import { Link } from 'react-router-dom'

export default function GetReady () {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-semibold text-2xl text-gray-900 mb-2 text-center">Get ready for more opportunities!</h2>
        <p className="text-gray-700 text-lg text-center">You are minutes away from the right job.</p>
        {/* center button */}
        <div className="flex justify-center mt-4">
          <Link to="/register" className="bg-blue-600 text-white py-2.5 px-8 text-lg">Join now</Link>
        </div>
      </div>
    </section>
  )
}