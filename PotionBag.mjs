export class PotionBag {
    constructor(potions) {
        this.potions = potions //Potions array
    }

    static create(ingredients, cauldron) {
        try {
            const potions = []
            for (let i = 0; i < ingredients.length; i++) {
                const ingredient1 = ingredients[i];

                for (let j = i; j < ingredients.length; j++) {
                    const ingredient2 = ingredients[j];
                    let potion;

                    if (ingredient2 != ingredient1) potion = cauldron.createPotion(ingredient1, ingredient2)
                    if (potion != undefined) potions.push(potion)
                }
            }
            return new PotionBag(potions)
        } catch (error) {
            console.log(`Error creating The Potion Bag: `, error)
        }
    }

    showBag(){
        this.potions.forEach(potion => {
        potion.showPotion()
        });
    }
}