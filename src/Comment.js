import React, {Component} from 'react'
import Article from './Article'

export default function Comment(commText) {
    return (
      <div>
        <p>id:{commText.commText.id}</p>
        <p>user:{commText.commText.user}</p>
        <p>comment:{commText.commText.text}</p>
      </div>
    )
  }
