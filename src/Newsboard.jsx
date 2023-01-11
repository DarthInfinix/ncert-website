import React from 'react'
import { useEffect } from 'react'
import './App.css'
import NewsCard from './NewsCard'
import data from './newsData'
const Newsboard = () => {
    // useEffect(() => {
    //     document.querySelector('')
    // },[])
  return (
    <div className='news-wrapper' onMouseOver={(e) => {
        document.querySelector('.news-list').focus();
    }}>
        <div className="heading">
            <h1>LATEST NOTICES</h1>
        </div>
    <div className="news-list">
        {data.map((e) => {
            return (
                <NewsCard title={e.title} body={e.body} date={e.date} key={e.id} className='news-blurb'/>
            )
        })
        
        }
    </div>
    </div>
  )
}

export default Newsboard