import "./MainCard.css"

import HeroeCard from "./HeroeCard"
import SortCard from "./SortCard"

const MainCard = ({raffleTank, raffleDamage, raffleSupport, raffleTankDamage, raffleTankSupport, raffleDamageSupport, raffleAll, selectedHero}) => {
  return (
    <div className="main-card">
            <HeroeCard selectedHero={selectedHero}/>
            <SortCard
              raffleTank={raffleTank}
              raffleDamage={raffleDamage}
              raffleSupport={raffleSupport}
              raffleTankDamage={raffleTankDamage}
              raffleTankSupport={raffleTankSupport}
              raffleDamageSupport={raffleDamageSupport}
              raffleAll={raffleAll}
            />
    </div>
  )
}

export default MainCard