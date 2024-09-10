import React from 'react'
import "./Card.css"

export default function Card(props) {
  return (
    <div className='con'>
      <img className='img' src={props.image}/>
      <p>{props.days} ago</p>
      <h1>Post {props.id}</h1>
      <p>{props.description}</p>
      <div className='lastCon'>
        <p className='last'>
            <span>{props.reads}</span>
            <span>Reads</span>
        </p>
        <p className='last'>
            <span>{props.views}</span>
            <span>Views</span>
        </p>
        <p className='last'>
            <span>{props.comments}</span>
            <span>Comments</span>
        </p>
      </div>
    </div>
  )
}
