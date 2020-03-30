import { Pokemon } from "../Pokemon";

describe("Pokemon", () => {
    describe("calculateSpeed", () => {
        it("returns speed ", () => {
            const pokemon = new Pokemon("Evoli", 18);

            expect(pokemon.calculateSpeed()).toEqual(18); 
        });
    });
});
