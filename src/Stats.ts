class Stats {
    constructor(private level: number = 1, private hp: number = 60, private offensive: number = 55, private defensive: number = 50, private speed: number = 55) {
        this.level = level;
        this.hp = hp;
        this.offensive = offensive;
        this.defensive = defensive;
        this.speed = speed;
    }

    calculateDamage() {
        return this.offensive;
    }

    calculateSpeed() {
        return this.speed;
    }
}

export { Stats };
