const positive_effect_tokens = ['Fortify', 'Resist', 'Cure', 'Restore', 'Regenerate', 'Invisibility', 'Waterbreathing']

export class Effect {
    constructor(name, type) {
        this.name = name;
        this.type = type; // "beneficial" or "harmful"
    }

    static from(name) {
        return new Effect(name, positive_effect_tokens.some(token => name.includes(token)) ? 'beneficial' : 'harmful');
    }
}
