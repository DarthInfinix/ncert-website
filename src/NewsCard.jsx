import React from 'react'

const NewsCard = (props) => {
    let {title, body, date} = props;
  return (
    <div className='news-blurb'>

        <h3>{title}</h3>
        <p>{body}</p>
        <p>{date}</p>
    </div>
  )
}

export default NewsCard