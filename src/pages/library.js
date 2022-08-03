
import React from 'react';
import './library.css';
  
const Library = () => {
  return (
    <div>
      <h1 className="Title">This is a list of games I have played <em>IN PROGRESS</em></h1>
        <h2 id="nintendo-switch">Nintendo Switch</h2>
          <ul>
            <li><a href="https://www.nintendo.com/store/products/overcooked-2-switch/">Overcooked! 2</a></li>
            <li><a href="https://www.nintendo.com/store/products/pokemon-legends-arceus-switch/">Pokémon Legends: Arceus</a></li>
            <li><a href="https://www.nintendo.com/store/products/pokemon-shining-pearl-switch/">Pokémon Shining Pearl</a></li>
            <li><a href="https://www.nintendo.com/store/products/hyrule-warriors-age-of-calamity-switch/">Hyrule Warriors: Age of Calamity</a></li>
            <li><a href="https://www.nintendo.com/store/products/paper-mario-the-origami-king-switch/">Paper Mario: The Origami King</a></li>
            <li><a href="https://www.nintendo.com/store/products/animal-crossing-new-horizons-switch/">Animal Crossing: New Horizon</a></li>
            <li><a href="https://www.nintendo.com/store/products/pokemon-mystery-dungeon-rescue-team-dx-switch/">Pokémon Mystery Dungeon: Rescue Team DX</a></li>
            <li><a href="https://www.nintendo.com/store/products/pokemon-shield-switch/">Pokémon Shield</a></li>
            <li><a href="https://www.nintendo.com/store/products/luigis-mansion-3-switch/">Luigi&#39;s Mansion 3</a></li>
            <li><a href="https://www.nintendo.com/store/products/new-super-mario-bros-u-deluxe-switch/">New Super Mario Bros. U Deluxe</a></li>
            <li><a href="https://www.nintendo.com/store/products/super-smash-bros-ultimate-switch/">Super Smash Bros. Ultimate</a></li>
            <li><a href="https://www.nintendo.com/store/products/super-mario-party-switch/">Super Mario Party</a></li>
            <li><a href="https://www.nintendo.com/store/products/pokemon-quest-switch/">Pokémon Quest</a></li>
            <li><a href="https://www.nintendo.com/store/products/super-mario-odyssey-switch/">Super Mario Odyssey</a></li>
            <li><a href="https://www.nintendo.com/store/products/mario-kart-8-deluxe-switch/">Mario Kart 8 Deluxe</a></li>
            <li><a href="https://www.nintendo.com/store/products/the-legend-of-zelda-breath-of-the-wild-switch/">The Legend of Zelda: Breath of the Wild</a></li>
          </ul>
        <h2 id="tabletop-games">Tabletop Games</h2>
          <ul>
            <li><a href="https://dnd.wizards.com/products/starter-set">Dungeons &amp; Dragons 5<sup>th</sup> edition</a></li>
            <li><a href="https://munchkin.game/">Munchkin</a></li>
          </ul>
      </div>
  );
};
  
export default Library;