import { Pokemon } from "../Pokemon";
import { Stats } from "../Stats";

describe("Pokemon", () => {
    describe("speed", () => {
        it("returns speed", () => {
            const stats = new Stats(1, 1, 20, 1, 18);
            const pokemon = new Pokemon("Evoli", stats);

            expect(pokemon.speed()).toEqual(18);
        });
    });

    describe("attack", () => {
        it("returns attack", () => {
            const stats = new Stats(1, 1, 20, 1, 18);
            const pokemon = new Pokemon("Evoli", stats);

            expect(pokemon.attack()).toEqual(50);
        });
    });
});
