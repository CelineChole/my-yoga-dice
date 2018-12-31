describe('roll the dice function', () => {
    let die = new MyYogaDice();

    it('returns the correct number of poses asked for', () => {
        let poses = die.rollTheDice(1);
        expect(poses.length).toBe(1);

        poses = die.rollTheDice(7);
        expect(poses.length).toBe(7);
    });
});