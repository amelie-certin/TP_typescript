import { Stats } from "./Stats"

class Pokemon {
    constructor(private name: string, private stats: Stats) {
        this.name = name;
        this.stats = stats;
    }

    speed() : number {
        return this.stats.calculateSpeed();
    }

    attack() : number {
        return this.stats.calculateDamage();
    }
}

export { Pokemon };
