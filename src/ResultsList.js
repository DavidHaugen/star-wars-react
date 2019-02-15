import React from 'react'

export default function ResultsList(props) {
  return (
    <ul>
      {props.results.map(result => {
        return <li>{result.name}</li>
      })}
    </ul>
  )
}