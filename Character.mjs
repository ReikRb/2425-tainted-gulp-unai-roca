export class Character {
    constructor(fullName, health, magick, stamina, potions) {
        this.fullName = fullName;
        this.health = health;
        this.magick = magick;
        this.stamina = stamina;
        this.potions = potions;
    }

    static from(playerData, potions){
        return new Character(`${playerData.name} the ${playerData.class}`,
                            playerData.health,
                            playerData.magick,
                            playerData.stamina,
                            potions
        )
    }

    showCharacter(){
        console.log(this.fullName)
        console.log('---------------------------------');
        console.log(`Health:       ${this.health}`)
        console.log(`Magick:       ${this.magick}`)
        console.log(`Stamina:      ${this.stamina}`)
        for (let i = 0; i < this.potions.length; i++) {
            const potion = this.potions[i];
            console.log(`Potion ${i}:     ${potion.name}`)
        }
        console.log('---------------------------------');
    }

    drinkEmAll(){
        console.log('DRINKEMALL GAME STARTING NOW');
        let isGameOver = false
        for (let i = 0; i < this.potions.length; i++) {
            const potion = this.potions[i];
            const potionName = potion.name.split(" ")
            const potionType = this.getPotionType(potionName)
            const nameFiltered = potionName.filter(word => word === 'Potion');
    
            nameFiltered[0] === 'Potion' ? isGameOver = this.drinkPotion(potion.value, potionType, potion.name) : 
                                           isGameOver = this.drinkPotion(-potion.value, potionType, potion.name)
            
            if (isGameOver) {
                this.gameOver(potion.name)
                break;
            }
        }
        // this.gameOver()
    }

    gameOver(potionName = ''){
        if (potionName === 'Potion of Sanity')      console.log(this.fullName,' has found the Potion of Sanity. His mind is healed. Well done!!')
        else if (this.health <= 0)                  console.log(this.fullName,' has died.')
        else if (this.magick <= 0)                  console.log(this.fullName,' Magick arriven to 0, leading the game to an end.')
        else if (this.stamina <= 0)                 console.log(this.fullName,' has lost all his stamina. He feels completely exhausted.')
        else                                        console.log('All potions were drinked, leading the game to an end.')
        console.log('DRINKEMALL GAME ENDS');
        console.log('---------------------------------');
    }

    getPotionType(nameArray){
        let result = '';
        nameArray.forEach(word => {
            switch (word) {
                case 'Health':
                case 'Magicka':
                case 'Stamina':
                case 'Sanity':
                case 'Failed':
                    result = word
                    break;
                default:
                    break;
            }
        });
        if (result === '') result = 'Rest'
        return result
    }

    drinkPotion(value, potionType, name){
        let gameOver = false
        const isPositive = value < 0 ? 'loses' : 'gains';
        switch (potionType) {
            case 'Health':
                this.health += value
                console.log(`${this.fullName}, drinks ${name} and ${isPositive} ${value} points of health`);
                break;
            case 'Magicka':
                this.magick += value
                console.log(`${this.fullName}, drinks ${name} and ${isPositive} ${value} points of magick`);
                break;
            case 'Stamina':
                this.stamina += value
                console.log(`${this.fullName}, drinks ${name} and ${isPositive} ${value} points of stamina`);
                break;
            case 'Sanity':
                this.health  += value
                this.magick  += value
                this.stamina += value
                console.log(`${this.fullName}, drinks ${name} and ${isPositive} ${value} points of health, magick and stamina`);

                break;
            case 'Failed':
                console.log("Failed Potion. ",this.fullName," cannot drink");
                break;
            case 'Rest':
                this.health  += 1
                this.magick  += 1
                this.stamina += 1
                console.log(`${this.fullName}, drinks ${name} and ${isPositive} ${1} points of health, magick and stamina`);
                break;
            default:
                break;
            }
            console.log(`Health:       ${this.health}`)
            console.log(`Magick:       ${this.magick}`)
            console.log(`Stamina:      ${this.stamina}`)
            console.log('---------------------------------');
            
            if (name === 'Potion of Sanity')  gameOver = true    
                else if (this.health <= 0)    gameOver = true                
                else if (this.magick <= 0)    gameOver = true                
                else if (this.stamina <= 0)   gameOver = true  
                          
            return gameOver
    }

}