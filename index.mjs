import { getIngredients, getPlayers } from './service.mjs';
import { Ingredients } from './ingredients.mjs';
import { Cauldron } from './cauldron.mjs';
import { PotionBag } from './PotionBag.mjs';

const execute = async () => {
    try {
        const data = await getIngredients();
        const players = await getPlayers()
        const ingredients = Ingredients.load(data);

        //USE ANY POUCH YOU WANT BY COMMENTING THE OTHERS
        const playerIngredients = data.players.pouch_red
        // const playerIngredients = data.players.pouch_green
        // const playerIngredients = data.players.pouch_yellow
        // const playerIngredients = data.players.pouch_aged
        
        showIngredients(ingredients)

        const cauldron = new Cauldron(ingredients)

        const potion1 = cauldron.createPotion('Bear Claws', 'Bee')
        showPotion(potion1)

        const potion2 = cauldron.createPotion("Chicken's Egg", 'Chaurus Eggs')
        showPotion(potion2)

        const potion3 = cauldron.createPotion('Chaurus Eggs', 'Bleeding Crown')
        showPotion(potion3)

        const potion4 = cauldron.createPotion('Nightshade', 'Ectoplasm')
        showPotion(potion4)

        
        const potionBag = PotionBag.create(ingredients, cauldron)
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
