export class PotionBag {
    constructor(potions) {
        this.potions = potions //Potions array
    }

    static create(ingredients, cauldron) {
        
        for (let i = 0; i < ingredients.length; i++) {
            const ingredient1 = ingredients[i];
            const ingredient2 = ingredients[i+1];
            
            let potion;
            if ((i + 1) < ingredients.length) potion = cauldron.createPotion(ingredient1, ingredient2)
        
            this.potions.push(potion)
        }
    }
}