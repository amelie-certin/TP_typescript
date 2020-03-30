import { Pokemon } from "../Pokemon";
import { Battle } from "../Battle";

describe("Battle", () => {
    describe("attackOrder", () => {
        it("returns the fastest pokemon: Evoli", () => {
            const pokemon = new Pokemon("Evoli", 20);
            const opponent = new Pokemon("Pikachu", 15);
            const battle = new Battle(pokemon, opponent);

            expect(battle.attackOrder()).toEqual([pokemon, opponent]);
        });

        it("returns the fastest pokemon: Pikachu", () => {
            const pokemon = new Pokemon("Evoli", 20);
            const opponent = new Pokemon("Pikachu", 35);
            const battle = new Battle(pokemon, opponent);

            expect(battle.attackOrder()).toEqual([opponent, pokemon]);
        });
    });
});
