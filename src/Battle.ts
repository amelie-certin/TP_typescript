import { Pokemon } from "./Pokemon"

class Battle {
    constructor(private pokemon: Pokemon, private opponent: Pokemon) {
        this.pokemon = pokemon;
        this.opponent = opponent;
    }

    attackOrder() : Pokemon[] {
        return [this.opponent, this.pokemon].sort((a, b) => {
            return b.speed() - a.speed();
        });
    }

    run() : Pokemon {
        let pokemons = this.attackOrder();
        do {
            const damage = pokemons[0].attack(pokemons[1].defense());
            pokemons[1].take(damage);
            console.log(`${pokemons[0].name} deals ${damage} to ${pokemons[1].name}`);
            pokemons.reverse();
        } while (pokemons[0].hp > 0 || pokemons[1].hp > 0);
        console.log(`Winner: ${pokemons[1].name}`);
        return pokemons[1];
    }

    // runAsync() {
    //     let pokemons = this.attackOrder();
    // }
    //
    // attack() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve()
    //             if (pokemons[0].hp <= 0) {
    //               reject(`Winner: ${pokemons[1].name}`);
    //             }
    //             if (pokemons[1].hp <= 0) {
    //               reject(`Winner: ${pokemons[0].name}`);
    //             }
    //         }, 1000);
    //     });
    // }
}

export { Battle };
