import { getIngredients, getPlayers } from './service.mjs';
import { Ingredients } from './ingredients.mjs';
import { Cauldron } from './cauldron.mjs';
import { PotionBag } from './PotionBag.mjs';
import { Character } from './Character.mjs';

const execute = async () => {
    try {
        //Retrieve Data from APIs
        const data = await getIngredients();
        const players = await getPlayers()
        
        const ingredients = Ingredients.load(data);

        //USE ANY POUCH YOU WANT BY COMMENTING THE OTHERS
        const playerIngredients = players.players[0].pouch_red
        // const playerIngredients = players.players[0].pouch_green
        // const playerIngredients = players.players[0].pouch_yellow
        // const playerIngredients = players.players[0].pouch_aged
        

        //SHOW ALL INGREDIENTS FROM API
        // ingredients.showIngredients()

        const cauldron = new Cauldron(ingredients)
        
        const potionBag = PotionBag.create(playerIngredients, cauldron)

        // //SHOWS ALL POTIONS INSIDE THE POTION BAG
        console.log('CREATED POTIONS FROM PLAYER BAG: ');
        potionBag.showBag()
        
        const character = Character.from(players.players[0], potionBag.potions)

        // //SHOWS CHARACTER STATS
        character.showCharacter()
        
    } catch (error) {
        console.log(error.message);
    }
}

execute();
