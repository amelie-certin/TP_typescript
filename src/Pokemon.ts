class Pokemon {
    constructor(private name: string, private speed: number) {
        this.name = name;
        this.speed = speed;
    }

    calculateSpeed() : number {
        return this.speed;
    }
}

export { Pokemon };
