
import React from 'react';
import Layout from '../components/Layout';
import './library.css';
  
const Library = () => {
  return (
    <Layout>
      <h1 className="Title">This is a list of games I have played <em>IN PROGRESS</em></h1>
        <h2 id="nintendo-switch">Nintendo Switch</h2>
          <ul>
            <li><a href="https://www.nintendo.com/store/products/overcooked-2-switch/" target="_blank" rel="noreferrer">
              Overcooked! 2
            </a></li>
            <li><a href="https://www.nintendo.com/store/products/pokemon-legends-arceus-switch/" target="_blank" rel="noreferrer">
              Pokémon Legends: Arceus
            </a></li>
            <li><a href="https://www.nintendo.com/store/products/pokemon-shining-pearl-switch/" target="_blank" rel="noreferrer">
              Pokémon Shining Pearl
            </a></li>
            <li><a href="https://www.nintendo.com/store/products/hyrule-warriors-age-of-calamity-switch/" target="_blank" rel="noreferrer">
              Hyrule Warriors: Age of Calamity
            </a></li>
            <li><a href="https://www.nintendo.com/store/products/paper-mario-the-origami-king-switch/" target="_blank" rel="noreferrer">
              Paper Mario: The Origami King
            </a></li>
            <li><a href="https://www.nintendo.com/store/products/animal-crossing-new-horizons-switch/" target="_blank" rel="noreferrer">
              Animal Crossing: New Horizon
            </a></li>
            <li><a href="https://www.nintendo.com/store/products/pokemon-mystery-dungeon-rescue-team-dx-switch/" target="_blank" rel="noreferrer">
              Pokémon Mystery Dungeon: Rescue Team DX
            </a></li>
            <li><a href="https://www.nintendo.com/store/products/pokemon-shield-switch/" target="_blank" rel="noreferrer">
              Pokémon Shield
            </a></li>
            <li><a href="https://www.nintendo.com/store/products/luigis-mansion-3-switch/" target="_blank" rel="noreferrer">
              Luigi's Mansion 3
            </a></li>
            <li><a href="https://www.nintendo.com/store/products/new-super-mario-bros-u-deluxe-switch/" target="_blank" rel="noreferrer">
              New Super Mario Bros. U Deluxe
            </a></li>
            <li><a href="https://www.nintendo.com/store/products/super-smash-bros-ultimate-switch/" target="_blank" rel="noreferrer">
              Super Smash Bros. Ultimate
            </a></li>
            <li><a href="https://www.nintendo.com/store/products/super-mario-party-switch/" target="_blank" rel="noreferrer">
              Super Mario Party
            </a></li>
            <li><a href="https://www.nintendo.com/store/products/pokemon-quest-switch/" target="_blank" rel="noreferrer">
              Pokémon Quest
            </a></li>
            <li><a href="https://www.nintendo.com/store/products/super-mario-odyssey-switch/" target="_blank" rel="noreferrer">
              Super Mario Odyssey
            </a></li>
            <li><a href="https://www.nintendo.com/store/products/mario-kart-8-deluxe-switch/" target="_blank" rel="noreferrer">
              Mario Kart 8 Deluxe
            </a></li>
            <li><a href="https://www.nintendo.com/store/products/the-legend-of-zelda-breath-of-the-wild-switch/" target="_blank" rel="noreferrer">
              The Legend of Zelda: Breath of the Wild
            </a></li>
          </ul>
        <h2 id="tabletop-games">Tabletop Games</h2>
          <ul>
            <li><a href="https://dnd.wizards.com/products/starter-set" target="_blank" rel="noreferrer">
              Dungeons &amp; Dragons 5<sup>th</sup> edition
            </a></li>
            <li><a href="https://munchkin.game/" target="_blank" rel="noreferrer">
              Munchkin
            </a></li>
          </ul>
      </Layout>
  );
};
  
export default Library;