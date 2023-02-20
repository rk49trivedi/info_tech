import React, { useState } from 'react'
import PortfollioCards from './PortfollioCards'



function Portfollio() {

    let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })

  return (
    <div className="grid md:grid-cols-1 py-20 bg-gray-300 z-50">
        <div className="w-full max-w-6xl mx-auto px-2 py-16 sm:px-0">
        <div className='text-center sm:mb-40'>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">Portfollio</h1>
        </div>
        <div className='px-6'><PortfollioCards/></div>
        </div>
    </div>
  )
}

export default Portfollio