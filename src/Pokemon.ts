import { Stats } from "./Stats"
import { Move } from "./Move";

class Pokemon {
    private moves: Move[];
    public hp: number;

    constructor(public name: string, private stats: Stats) {
        this.name = name;
        this.stats = stats;
        this.hp = this.stats.calculateHpMax();
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

    attack(defense : number) : number {
        const move = this.moves[0];
        return this.stats.calculateDamage(move.power, defense);
    }

    defense() : number {
        return this.stats.calculateDefense();
    }

    take(damage : number) {
        this.hp -= damage;
    }
}

export { Pokemon };
