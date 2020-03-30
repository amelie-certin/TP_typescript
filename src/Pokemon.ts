import { Stats } from "./Stats"
import { Move } from "./Move";

class Pokemon {
    private moves: Move[];

    constructor(private name: string, private stats: Stats) {
        this.name = name;
        this.stats = stats;
        this.moves = this.initDefaultMoves();
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
        const move = this.moves[0];
        return this.stats.calculateDamage(move.power);
    }
}

export { Pokemon };
