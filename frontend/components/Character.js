import React, { useState } from 'react'

function Character({ name, planet }) {
  const [showPlanet, setShowPlanet] = useState(false)
  const togglePlanet = () => setShowPlanet(!showPlanet)
  return (
    <div className='character-card' onClick={togglePlanet}>
      <h3 className='character-name'>{name}</h3>
      {/* Use the same markup with the same attributes as in the mock */}
      {showPlanet && (
        <p>Planet: <span className='character-planet'>{planet}</span></p>
      )}
    </div>
  )
}

export default Character