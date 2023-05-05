import { useState } from 'react';
import './App.css';

import axios from 'axios';
import { useEffect } from 'react';
import MainCard from './components/MainCard';

const url = 'https://overfast-api.tekrop.fr/heroes';

function App() {

  const [heroes, setHeroes] = useState([]);

  const [selectedHero, setSelectedHero] = useState(null)

  const tankHeroes = heroes.filter((heroe) => heroe.role === "tank");
  const damageHeroes = heroes.filter((heroe) => heroe.role === "damage");
  const supportHeroes = heroes.filter((heroe) => heroe.role === "support");
  const tankDamageHeroes = heroes.filter((heroe) => heroe.role === "tank" || heroe.role === "damage");
  const tankSupportHeroes = heroes.filter((heroe) => heroe.role === "tank" || heroe.role === "support");
  const damageSupportHeroes = heroes.filter((heroe) => heroe.role === "damage" || heroe.role === "support");

  const raffleTank = () => {
    let random = Math.floor(Math.random() * tankHeroes.length);
    setSelectedHero(tankHeroes[random]);
  };

  const raffleDamage = () => {
    let random = Math.floor(Math.random() * damageHeroes.length);
    setSelectedHero(damageHeroes[random]);
  };

  const raffleSupport = () => {
    let random = Math.floor(Math.random() * supportHeroes.length);
    setSelectedHero(supportHeroes[random]);
  };

  const raffleTankDamage = () => {
    let random = Math.floor(Math.random() * tankDamageHeroes.length);
    setSelectedHero(tankDamageHeroes[random]);
  };

  const raffleTankSupport = () => {
    let random = Math.floor(Math.random() * tankSupportHeroes.length);
    setSelectedHero(tankSupportHeroes[random]);
  };

  const raffleDamageSupport = () => {
    let random = Math.floor(Math.random() * damageSupportHeroes.length);
    setSelectedHero(damageSupportHeroes[random]);
  };

  const raffleAll = () => {
    let random = Math.floor(Math.random() * heroes.length);
    setSelectedHero(heroes[random]);
  };

  const fetchHeroes = async () => {
    const response = await axios.get(url);
    const data = await response.data;
    setHeroes(data);
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  return (
    <div className="App">
      <MainCard
        raffleTank={raffleTank}
        raffleDamage={raffleDamage}
        raffleSupport={raffleSupport}
        raffleTankDamage={raffleTankDamage}
        raffleTankSupport={raffleTankSupport}
        raffleDamageSupport={raffleDamageSupport}
        raffleAll={raffleAll}
        selectedHero={selectedHero}
      />
    </div>
  );
}

export default App;
