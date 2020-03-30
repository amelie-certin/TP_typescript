import { Pokemon } from "./Pokemon"

class Battle {
    constructor(private pokemon: Pokemon, private opponent: Pokemon) {
        this.pokemon = pokemon;
        this.opponent = opponent;
    }

    attackOrder() : Pokemon[] {
        return [this.opponent, this.pokemon].sort((a, b) => {
            return b.calculateSpeed() - a.calculateSpeed();
        });
    }
}

export { Battle };
