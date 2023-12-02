import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const [data, setData] = useState(null)

  const fetchData = () => {
    Promise.all([
      axios.get(urlPeople),
      axios.get(urlPlanets)
    ]).then(res => {
      const [{ data: people }, { data: planets }] = res
      setData(people.map(person => ({
        id: person.id,
        name: person.name,
        planet: (planets.find(planet => planet.id === person.homeworld)).name
      })))
    }).catch(err => console.error(err))
  }

  useEffect(fetchData, [])

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {data && data.map(character => (
        <Character
          key={character.id} 
          name={character.name} 
          planet={character.planet}>
        </Character>
      ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
