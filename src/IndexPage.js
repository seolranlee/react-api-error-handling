import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const breeds = ['husky', 'akita', 'pitbull']
const IndexPage = () => {
  return (
    <div>
      <h1>View some nice pictures of a dog breed</h1>
      <ul>
        {breeds.map((breed) => (
          <li key={breed}>
            <Link to={`/dogs/${breed}/`}>{breed}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IndexPage