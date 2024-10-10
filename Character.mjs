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
}