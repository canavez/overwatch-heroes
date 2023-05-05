import './HeroeCard.css'

const HeroeCard = ({selectedHero}) => {
  if (selectedHero !== null) {
    return (
      <div className='heroe-card'>
        <img src={selectedHero.portrait} className='heroe-portrait' alt="heroe-portrait"/>
          <div>
            <h1>{selectedHero.name}</h1>
            <h4>{selectedHero.role}</h4>
          </div>
      </div>
    )
  } else {
    return (
      <div className='heroe-card'>
        <h1>Overwatch Heroes</h1>
      </div>
    )
  }
}

export default HeroeCard