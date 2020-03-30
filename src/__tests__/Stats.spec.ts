import { Stats } from "../Stats";

describe("Stats", () => {
    describe("calculateSpeed", () => {
        it("returns speed", () => {
            const stats = new Stats(1, 1, 20, 1, 18);

            expect(stats.calculateSpeed()).toEqual(18);
        });
    });

    describe("calculateDamage", () => {
        it("returns offensive", () => {
            const stats = new Stats(1, 1, 20, 1, 18);

            expect(stats.calculateDamage(60)).toEqual(50);
        });
    });
});
