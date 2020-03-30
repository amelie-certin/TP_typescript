import { Stats } from "./Stats"
import { Move } from "./Move";

class Pokemon {
    constructor(private name: string, private stats: Stats, private moves?: Move[]) {
        this.name = name;
        this.stats = stats;
        this.moves = moves ? moves : this.initDefaultMoves();
    }

    initDefaultMoves() {
        return [
            new Move("Bite", 60),
            new Move("Egg Bomb", 100),
            new Move("Feint", 30),
            new Move("Fire Pubch", 100)
        ];
    }

    speed() : number {
        return this.stats.calculateSpeed();
    }

    attack() : number {
        return this.stats.calculateDamage();
    }
}

export { Pokemon };
