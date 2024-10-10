export class Potion {
    constructor(name, value, weight, time) {
        this.name = name;
        this.value = value;
        this.weight = weight;
        this.time = time;
    }

    static with(effect, weight, value) {
        const type = effect.type === 'beneficial' ? 'Potion' : 'Poison';
        return new Potion(`${type} of ${effect.name}`, value, weight, 10);
    }

    static failed(){
        return new FailedPotion();
    }

    static sanity(){
        return new PotionOfSanity
    }
}



class FailedPotion extends Potion {
    constructor() {
        super("Failed Potion", 0, 0, 0);
    }
}

class PotionOfSanity extends Potion {
    constructor() {
        super("Potion of Sanity", 1000, 1, 50);
    }
}
