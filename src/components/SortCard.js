import { useState } from 'react'
import './SortCard.css'

const SortCard = ({raffleTank, raffleDamage, raffleSupport, raffleTankDamage, raffleTankSupport, raffleDamageSupport, raffleAll}) => {

  const buttonUnselected = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: "500",
    fontSize: "1em",
    height: "2.5em",
    borderRadius: "0.5em",
    outline: "none",
    border: "none",
    textTransform: "uppercase",
    cursor: "pointer",
    backgroundColor: "#373F51",
    color: "#1B1B1E",
    textDecoration: "line-through",
  };

  const buttonSelected = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: "900",
    fontSize: "1em",
    height: "2.5em",
    borderRadius: "0.5em",
    outline: "none",
    border: "none",
    textTransform: "uppercase",
    cursor: "pointer",
    backgroundColor: "#58A4B0",
    color: "#1B1B1E",
  };

  const buttonRaffle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: "900",
    fontSize: "2em",
    height: "2.5em",
    borderRadius: "0.5em",
    outline: "none",
    border: "none",
    textTransform: "uppercase",
    cursor: "pointer",
    backgroundColor: "#D8DBE2",
    color: "#373F51",
  };

  const [tankIsSelected, setTankIsSelected] = useState(false);

  const handleSelectTank = () => {
    if (tankIsSelected) {
      setTankIsSelected(false);
    } else {
      setTankIsSelected(true);
    }
  };
  
  const [damageIsSelected, setDamageIsSelected] = useState(false);

  const handleSelectDamage = () => {
    if (damageIsSelected) {
      setDamageIsSelected(false);
    } else {
      setDamageIsSelected(true);
    }
  };

  const [supportIsSelected, setSupportIsSelected] = useState(false);

  const handleSelectSupport = () => {
    if (supportIsSelected) {
      setSupportIsSelected(false);
    } else {
      setSupportIsSelected(true);
    }
  };

  const handleRaffle = () => {
    if (tankIsSelected && !damageIsSelected && !supportIsSelected) {
      raffleTank();
    } else if (!tankIsSelected && damageIsSelected && !supportIsSelected) {
      raffleDamage();
    } else if (!tankIsSelected && !damageIsSelected && supportIsSelected) {
      raffleSupport();
    } else if (tankIsSelected && damageIsSelected && !supportIsSelected) {
      raffleTankDamage();
    } else if (tankIsSelected && !damageIsSelected && supportIsSelected) {
      raffleTankSupport();
    } else if (!tankIsSelected && damageIsSelected && supportIsSelected) {
      raffleDamageSupport();
    } else if (tankIsSelected && damageIsSelected && supportIsSelected) {
      raffleAll();
    }
  }

  return (
    <div className='sort-card'>
      <div className="text-select">
        <h2>Select roles to raffle:</h2>
      </div>
      <div className="buttons-role">
        <div className="button-select">
          <button style={tankIsSelected ? buttonSelected : buttonUnselected} onClick={handleSelectTank}>Tank</button>
        </div>
        <div className="button-select">
          <button style={damageIsSelected ? buttonSelected : buttonUnselected} onClick={handleSelectDamage}>Damage</button>
        </div>
        <div className="button-select">
          <button style={supportIsSelected ? buttonSelected : buttonUnselected} onClick={handleSelectSupport}>Support</button>
        </div>
      </div>
      <div className="button-raffle">
        <button onClick={handleRaffle}>RAFFLE</button>
      </div>
    </div>
  )
}

export default SortCard