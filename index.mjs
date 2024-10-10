import { getIngredients, getPlayers } from './service.mjs';
import { Ingredients } from './ingredients.mjs';
import { Cauldron } from './cauldron.mjs';
import { PotionBag } from './PotionBag.mjs';

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
        
        showIngredients(ingredients)

        const cauldron = new Cauldron(ingredients)
        

        const potionBag = PotionBag.create(playerIngredients, cauldron)

        console.log('POTION BAG: ', potionBag);
        
    } catch (error) {
        console.log(error.message);
    }
}

function showIngredients(ingredients) {
    console.log('LIST OF ALL INGREDIENTS WITH THEIR EFFECTS');
    console.log('--------------------------------------------');
    console.log();
    ingredients.ingredients.forEach(ingredient => {
        console.log(`Ingredient: ${ingredient.name}, Effects: ${ingredient.effects.map(e => e.name).join(', ')}`);
    });
}

function showPotion(potion) {
    console.log()
    console.log(potion.name);
    console.log(`Value:  ${potion.value}`)
    console.log(`Weight: ${potion.weight}`)
    console.log(`Time:   ${potion.time}`)
    console.log()
    console.log(`-------------------------------`)
}

execute();
