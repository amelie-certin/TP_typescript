import { Pokemon } from "../Pokemon";
import { Battle } from "../Battle";
import { Stats } from "../Stats";

describe("Battle", () => {
    describe("attackOrder", () => {
        it("returns the fastest pokemon: Evoli", () => {
            const pokemonStats = new Stats(1, 1, 1, 1, 18);
            const pokemon = new Pokemon("Evoli", pokemonStats);

            const opponentStats = new Stats(1, 1, 1, 1, 15);
            const opponent = new Pokemon("Pikachu", opponentStats);
            const battle = new Battle(pokemon, opponent);

            expect(battle.attackOrder()).toEqual([pokemon, opponent]);
        });

        it("returns the fastest pokemon: Pikachu", () => {
            const pokemonStats = new Stats(1, 1, 1, 1, 18);
            const pokemon = new Pokemon("Evoli", pokemonStats);

            const opponentStats = new Stats(1, 1, 1, 1, 35);
            const opponent = new Pokemon("Pikachu", opponentStats);
            const battle = new Battle(pokemon, opponent);

            expect(battle.attackOrder()).toEqual([opponent, pokemon]);
        });

        it("alters order if equal", () => {
            const pokemonStats = new Stats(1, 1, 1, 1, 35);
            const pokemon = new Pokemon("Evoli", pokemonStats);

            const opponentStats = new Stats(1, 1, 1, 1, 35);
            const opponent = new Pokemon("Pikachu", opponentStats);
            const battle = new Battle(pokemon, opponent);

            expect(battle.attackOrder()).toEqual([opponent, pokemon]);
        });
    });
});
